import React, { Component } from 'react';
import styled from 'styled-components';
import LodingSplash from './LodingSplash';
import { auth, storage, db } from '../lib/firebase';

const Container = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: ${({ isPostModalClosed }) => (isPostModalClosed ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
`;

const Modal = styled.form`
    width: 30rem;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 0.87rem;
    line-height: 1.2rem;
    font-weight: 600;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
`;

const ImgUploadBox = styled.div`
    display: flex;
`;

const UploadFileName = styled.input`
    flex: 1;
    padding: 0.4rem 0.58rem;
    background: #f5f5f5;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
`;

const ImgInput = styled.input`
    display: none;
`;

const ImgLabel = styled.label`
    font-size: 0.87rem;
    font-weight: 600;
    line-height: 1.1rem;
    background: #3897f0;
    border: 1px solid #3897f0;
    border-radius: 4px;
    color: #fff;
    padding: 0.5rem 0.58rem;
    cursor: pointer;
`;

const PreviewImg = styled.img`
    height: 23rem;
    width: 30rem;
`;

const MessageInput = styled.input`
    height: 5rem;
    border: 1px solid #efefef;
    outline-color: #e6e6e6;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 0.5rem;
`;

const Button = styled.input`
    font-size: 0.87rem;
    font-weight: 600;
    line-height: 1.1rem;
    background: #3897f0;
    border: 1px solid #3897f0;
    border-radius: 4px;
    color: #fff;
    padding: 0.32rem 0.58rem;
    cursor: pointer;
    margin-right: 0.3rem;
`;

class PostModal extends Component {
    messageRef = React.createRef();

    state = {
        img: '파일선택',
        imgUrl: null,
        progress: 0,
        isLodingSplashClosed: false,
    }

    onChange = (e) => {
        const imgBlob = e.target.files[0];
        this.setState({ img: imgBlob, imgUrl: URL.createObjectURL(imgBlob) });
        console.log(imgBlob);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { img } = this.state;
        const { user } = this.props;
        const message = this.messageRef.current.value;
        const username = user.email.split('@')[0];

        const uploadImg = () => {
            const imageRef = storage.ref(`images/${user.uid}/${Date.now()}`);
            return new Promise((resolve, reject) => {
                imageRef.put(img).on(
                    'state_changed',
                    (snapshot) => {
                        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        this.setState({ progress });
                    },
                    err => reject(err),
                    () => imageRef.getDownloadURL().then(url => resolve(url)),
                );
            });
        }

        if (message && message.length > 0) {
            if (img === '파일선택') {
                db.ref('data').push({
                    user: {
                        name: username,
                        id: user.email,
                    },
                    text: message,
                    createdAt: Date.now(),
                });
            }
            uploadImg()
                .then((url) => {
                    db.ref('data').push({
                        user: {
                            name: username,
                            id: user.email,
                        },
                        text: message,
                        imgUrl: url,
                        createdAt: Date.now(),
                    });
                });
        }
    }

    render () {
        const { img, imgUrl, progress, isLodingSplashClosed } = this.state;
        const { isPostModalClosed, isPostModalSwitch, user } = this.props;
        return (
            <Container isPostModalClosed={isPostModalClosed}>
                <Modal onSubmit={this.handleSubmit}>
                    <Title>게시물 만들기</Title>
                    <ImgUploadBox>
                        <UploadFileName value={img.name ? img.name : img} disabled="disabled" readOnly="readonly" />
                        <ImgInput accept="image/*" type="file" id="img-file" onChange={this.onChange}/>
                        <ImgLabel htmlFor="img-file">사진 업로드</ImgLabel>
                    </ImgUploadBox>
                    {progress !== 0 ? <LodingSplash isLodingSplashClosed={isLodingSplashClosed}/> : null}
                    {imgUrl ? <PreviewImg src={imgUrl} /> : null}
                    <MessageInput placeholder="문구를 입력해주세요..." ref={this.messageRef} />
                    <ButtonBox>
                        <Button type="submit" value="확인"/>
                        <Button type="button" onClick={() => isPostModalSwitch()} value="취소"/>
                    </ButtonBox>
                </Modal>
            </Container>      
        );
    }
}

export default PostModal;
