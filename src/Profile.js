import React, { Component } from 'react';
import styled from 'styled-components';

import SettingModal from './Components/SettingModal';
import PostModal from './Components/PostModal';
import MyCard from './Components/MyCard'
import { db } from './lib/firebase';

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

const FollowButton = styled.input`
    width: 6rem;
    height: 1.87rem;
    background: ${({ following }) => (following ? 'transparent' : '#3897f0')};
    border: 1px solid ${({ following }) => (following ? '#dbdbdb' : '#3897f0')};;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 0.87rem;
    font-weight: 600;
    padding: 0.3rem 0.56rem;
    color: ${({ following }) => (following ? '#262626' : '#fff')};
    
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #fff;
`;

const MainImg = styled.img`
    height: 23.7em;
    width: 23.7rem;
`;

const SharePhotos = styled.div`
    height: 23.7rem;
    width: 34.5rem;
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
  width: 58rem;
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

const MainBox = styled.div`
    display: flex;
`;

class Profile extends Component {

    state= {
        isSettingModalClosed: true,
        isPostModalClosed: true,
    };

    isPostModalSwitch = () => {
        const { isPostModalClosed } = this.state;
        this.setState({ isPostModalClosed : !isPostModalClosed });
    };

    isSettingModalSwitch = () => {
        const { isSettingModalClosed } = this.state;
        this.setState({ isSettingModalClosed : !isSettingModalClosed });
    };

    isFollow = () => {
        const { user, history, data } = this.props;
        const params = new URLSearchParams(history.location.search);
        const uid = params.get('uid');
        const dataEntries = data ? Object.entries(data) : null;
        const myPosts = dataEntries ? dataEntries.filter(e => e[1].user.name === uid) : null;
        const follower = myPosts ? myPosts[0][1].user.follower : null;
        const following = follower ? Object.values(follower).find(e => e === user.email) : null

        for (let i = 0; i < myPosts.length; i += 1) {
            const dataKey = Object.keys(data).find(key => data[key] === myPosts[i][1]);
            if (!follower) {
                db.ref(`/data/${dataKey}/user/follower`).push(user.email);
            } else if (following) {
                const followerData = myPosts[i][1].user.follower
                const followerKey = Object.keys(followerData).find(key => followerData[key] === user.email);
                db.ref(`/data/${dataKey}/user/follower/${followerKey}`).remove();
            } else {
                db.ref(`/data/${dataKey}/user/follower`).push(user.email);
            }
        }
    };

    render() {
        const { isSettingModalClosed, isPostModalClosed } = this.state;
        const { user, history, data } = this.props;

        const username = user ? user.email.split('@')[0] : null;
        const userEmail = user ? user.email : null;
        const params = new URLSearchParams(history.location.search);
        const uid = params.get('uid');

        const dataEntries = data ? Object.entries(data) : null;
        const myPosts = dataEntries ? dataEntries.filter(e => e[1].user.name === uid) : null;
        const myData = dataEntries ? dataEntries.find(e => e[1].user.name === uid) : null;
        const userId = dataEntries ? dataEntries.map(e => e[1].user.id).filter(e => e.split('@')[0] === uid)[0] : null;
        const myFollowerData = myPosts ? myPosts.map(e => e[1].user.follower)[0] : null;
        const followerData = dataEntries ? dataEntries.map(e => e[1].user.follower).filter(e => e !== undefined) : null;
        const followCount = followerData ? followerData.map(e => Object.values(e)).filter(e => e.includes(userId)).length : null;
        const followerCount = myFollowerData ? Object.values(myFollowerData).length : null;
        const following = myFollowerData ? Object.values(myFollowerData).find(e => e === userEmail) : null;

        if (user === null) {
            history.push('/login');
            return null;
        }
        return (
            <Contianer>
            {console.log(myPosts)}
            <SettingModal isSettingModalClosed={isSettingModalClosed} isSettingModalSwitch={this.isSettingModalSwitch} />
            <PostModal isPostModalClosed={isPostModalClosed} isPostModalSwitch={this.isPostModalSwitch} user={user} />
                <Header>
                    <ProfileImg>
                        <Img src="/images/profile.png" />
                    </ProfileImg>
                    <Imformation>
                        <SettingBox>
                            <ProfileName>{uid}</ProfileName>
                            {uid !== username ? <FollowButton following={following} type="button" value={following ? '팔로잉' : '팔로우'} onClick={() => this.isFollow()}/> : <ProfileEdit type="button" value="프로필 편집" />}
                            <ProfileSettingIcon src="/images/profileSettingIcon.PNG" onClick={() => this.isSettingModalSwitch()} />
                        </SettingBox>
                        <Activities>
                            <Activity>게시물<Count>{myPosts.length}</Count></Activity>
                            <Activity>팔로워<Count>{followerCount ? followerCount : '0'}</Count></Activity>
                            <Activity>팔로우<Count>{followCount ? followCount : '0'}</Count></Activity>
                        </Activities>
                        <UserId>{userId ? userId : userEmail}</UserId>
                    </Imformation>
                </Header>
                <Menu>
                    <MenuBox>
                        <Element><ElementIcon src="/images/profilePostImg.PNG" />게시물</Element>
                        <Element><ElementIcon src="/images/profileIgtvImg.PNG" />IGTV</Element>
                        <Element><ElementIcon src="/images/profileSaveImg.PNG" />저장됨</Element>
                        <Element><ElementIcon src="/images/profileTagImg.PNG" />태그됨</Element>
                    </MenuBox>
                </Menu>
                <Main>
                    {myData ? myPosts.map((e, i) => (
                        <MyCard key={i} data={e} />
                    )) : 
                    <MainBox>
                        <MainImg src="/images/profileMainImg.PNG" />
                        <SharePhotos>
                            <SharePhotosImg src="/images/profilePostImg.jpg" onClick={() => this.isPostModalSwitch()} />
                            <Description>사진 및 동영상 공유</Description>
                            <div>사진과 동영상을 공유하면 프로필에 표시됩니다..</div>
                        </SharePhotos>
                    </MainBox>
                    }
                </Main>
                    
                <Footer>CARTAGRAM 정보 <Since>2019 CARTAGRAM</Since> </Footer>
            </Contianer>
        );
    }
}

export default Profile;
