import React, { Component } from 'react';
import styled from 'styled-components';

import SettingModal from './Components/SettingModal'

const Contianer = styled.div`
    width: 935px;
    background: #fafafa;
    margin: 0 auto;
    padding-top: 8.5rem;
`;

const Header = styled.div`
    height: 9.4rem;
    display: flex;
    padding-bottom: 2.75rem;
`;

const ProfileImg = styled.div`
    flex: 0.9;
    display: flex;
    justify-content: center;
    margin-right: 2rem;
`;

const Img = styled.img`
    width: 9.4rem;
    cursor: pointer;
`;

const Imformation = styled.div`
    flex: 1.9;
`;

const SettingBox = styled.div`
    height: 2.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
`;

const ProfileName = styled.div`
    font-size: 1.75rem;
    font-weight: 300;
    margin-right: 1.25rem;
`;

const ProfileEdit = styled.input`
    height: 1.87rem;
    font-size: 0..87rem;
    font-weight: 600;
    color: #262626;
    background: transparent;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0.3rem 0.56rem;
`;

const ProfileSettingIcon = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 0.8rem;
    cursor: pointer;
`;

const Activities = styled.div`
    display: flex;
    margin-bottom: 1.25rem;
`;

const Activity = styled.div`
    width: 3.83rem;
    font-size: 0.82rem;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;
`;

const Count = styled.div`
    font-size: 0.87rem;
    font-weight: 600;
    margin-left: 0.3rem;
`;

const UserId = styled.div`
    font-size: 1rem;
    font-weight: 600;
`;

const Menu = styled.div`
    border-top: 1px solid #efefef;
    display: flex;
    justify-content: center;
`

const MenuBox = styled.div`
    height: 3.31rem;
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 600;
`;

const Element = styled.div`
    width: 3.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const ElementIcon = styled.img`
    height: 0.75rem;
    width: 0.75rem;
`;

const Main = styled.div`
    height: 23.7rem;
    display: flex;
    align-items: center;
    background: #fff;
`;

const MainImg = styled.img`
    width: 23.7rem;
`;

const SharePhotos = styled.div`
    height: 23.7rem;
    width: 38.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SharePhotosImg = styled.img`
    height: 10rem;
    width: 10.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
`;

const Description = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const Footer = styled.div`
  height: 6.5rem;
  width: 52rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 300;
`;

const Since = styled.div`
  font-size: 0.75rem;
  font-weight: 300;
  color: #999;
`;


class Profile extends Component {

    state= {
        isSettingModalClosed: true,
    }

    isSettingModalSwitch = () => {
        const { isSettingModalClosed } = this.state;
        this.setState({ isSettingModalClosed : !isSettingModalClosed });
    }
    render() {
        const { isSettingModalClosed } = this.state;

        return (
            <Contianer>
            <SettingModal isSettingModalClosed={isSettingModalClosed} isSettingModalSwitch={this.isSettingModalSwitch} />
                <Header>
                    <ProfileImg>
                        <Img src="/images/profile31.png" />
                    </ProfileImg>
                    <Imformation>
                        <SettingBox>
                            <ProfileName>Honey-bull</ProfileName>
                            <ProfileEdit type="button" value="프로필 편집" />
                            <ProfileSettingIcon src="/images/profileEditIcon.PNG" onClick={() => this.isSettingModalSwitch()} />
                        </SettingBox>
                        <Activities>
                            <Activity>게시물<Count>0</Count></Activity>
                            <Activity>팔로워<Count>0</Count></Activity>
                            <Activity>팔로우<Count>0</Count></Activity>
                        </Activities>
                        <UserId>Honey_bull@carstagram.com</UserId>
                    </Imformation>
                </Header>
                <Menu>
                    <MenuBox>
                        <Element><ElementIcon src="/images/postImg.PNG" />게시물</Element>
                        <Element><ElementIcon src="/images/igtvImg.PNG" />IGTV</Element>
                        <Element><ElementIcon src="/images/saveImg.PNG" />저장됨</Element>
                        <Element><ElementIcon src="/images/tagImg.PNG" />태그됨</Element>
                    </MenuBox>
                </Menu>
                <Main>
                    <MainImg src="/images/description.PNG" />
                    <SharePhotos>
                        <SharePhotosImg src="/images/Plus.jpg" />
                        <Description>사진 및 동영상 공유</Description>
                        <div>사진과 동영상을 공유하면 프로필에 표시됩니다.</div>
                    </SharePhotos>
                </Main>
                <Footer>CARTAGRAM 정보 <Since>2019 CARTAGRAM</Since> </Footer>
            </Contianer>
        );
    }
}

export default Profile;
