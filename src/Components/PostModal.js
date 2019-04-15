import React, { Component } from 'react';
import styled from 'styled-components';

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

const Modal = styled.div`
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
    state = {
        img: '파일선택',
        imgUrl: null,
    }

    onChange = (e) => {
        const imgBlob = e.target.files[0];
        this.setState({ img: imgBlob, imgUrl: URL.createObjectURL(imgBlob) });
        console.log(imgBlob);
    }

    render () {
        const { img, imgUrl } = this.state;
        const { isPostModalClosed, isPostModalSwitch } = this.props;
        return (
            <Container isPostModalClosed={isPostModalClosed}>
                <Modal>
                    <Title>게시물 만들기</Title>
                    <ImgUploadBox>
                        <UploadFileName value={img.name ? img.name : img} disabled="disabled" readOnly="readonly" />
                        <ImgInput accept="image/*" type="file" id="img-file" onChange={this.onChange}/>
                        <ImgLabel htmlFor="img-file">사진 업로드</ImgLabel>
                    </ImgUploadBox>
                    {imgUrl ? <PreviewImg src={imgUrl} /> : null}
                    <MessageInput placeholder="문구를 입력해주세요..."/>
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
