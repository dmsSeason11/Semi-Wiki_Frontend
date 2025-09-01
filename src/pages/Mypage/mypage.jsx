import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/reset.css";
import LogoutImg from "../../assets/logout.svg";
import BookImg from "../../assets/book.svg";
import PenImg from "../../assets/pen.svg";
import {
  Container,
  MypageCard,
  LeftBox,
  ProfileCard,
  ProfileImage,
  ProfileText,
  IdText,
  PostCount,
  Logout,
  RightBox,
  MenuItem,
  MenuIcon,
  MenuLabel,
} from "./mypage.styles";

export default function MyPage() {
  const { accountId } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    accountId: "",
    noticeBoardCount: 0,
    profileImg: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/user/${accountId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          const errorText = await res.text();
          console.log(errorText);
          if (res.status === 401) {
            navigate("/login");
          }
          return;
        }

        const data = await res.json();
        console.log(data);

        setUserData({
          accountId: data.accountId,
          noticeBoardCount: data.noticeBoardCount,
          profileImg: data.profileImg || null,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [accountId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <Container>
      <MypageCard>
        <LeftBox>
          <ProfileCard>
            {userData.profileImg ? (
              <ProfileImage src={userData.profileImg} alt="프로필 이미지" />
            ) : (
              <ProfileImage />
            )}

            <ProfileText>
              <IdText>아이디: {userData.accountId}</IdText>
              <PostCount>
                작성한 게시글 수 <span>{userData.noticeBoardCount}</span>
              </PostCount>
              <Logout onClick={handleLogout}>
                <img src={LogoutImg} alt="로그아웃 아이콘" />
                로그아웃
              </Logout>
            </ProfileText>
          </ProfileCard>
        </LeftBox>

        <RightBox>
          <MenuItem as={Link} to={`/mypage/${accountId}/posts`}>
            <MenuIcon src={BookImg} alt="책 아이콘" />
            <MenuLabel>내가 작성한 게시글</MenuLabel>
          </MenuItem>
          <MenuItem as={Link} to="/posts/new">
            <MenuIcon src={PenImg} alt="연필 아이콘" />
            <MenuLabel>새 게시글 작성</MenuLabel>
          </MenuItem>
        </RightBox>
      </MypageCard>
    </Container>
  );
}
