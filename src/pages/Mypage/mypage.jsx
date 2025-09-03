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

// 쿠키에서 토큰 읽는 유틸
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

export default function MyPage() {
  const { accountId } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    accountId: "",
    noticeBoardCount: 0,
    profileImg: null,
  });

  // 유저 정보 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        // localStorage 먼저, 없으면 쿠키
        const token =
          localStorage.getItem("accessToken") || getCookie("accessToken");
        console.log("MyPage에서 사용되는 토큰:", token);

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/user/${accountId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // 토큰 헤더
            },
            mode: "cors",
            credentials: "include", // 쿠키 포함
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            // 토큰 만료 시 로그아웃
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            navigate("/login");
            return;
          }
          const errorText = await response.text();
          throw new Error(errorText || "유저 정보 요청 실패");
        }

        const data = await response.json();
        console.log("MyPage API 응답 데이터:", data);

        setUserData({
          accountId: data.accountId,
          noticeBoardCount: data.noticeBoardCount,
          profileImg: data.profileImg || null,
        });
      } catch (err) {
        console.error("MyPage fetchData 에러:", err);
      }
    };

    fetchData();
  }, [accountId, navigate]);

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

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
