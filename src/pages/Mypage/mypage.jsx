import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/reset.css";
import LogoutImg from "../../assets/logout.svg";
import BookImg from "../../assets/book.svg";
import PenImg from "../../assets/pen.svg";
import DefaultProfileImg from "../../assets/user.png"; // 기본 프로필 이미지
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

// 쿠키에서 토큰 읽기
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// 쿠키 삭제
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
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
        const token =
          localStorage.getItem("accessToken") || getCookie("accessToken");
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
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            // 토큰 만료 시 로그아웃 처리
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            deleteCookie("accessTokenNumber");
            navigate("/login");
            return;
          }
          const errorText = await response.text();
          throw new Error(errorText || "유저 정보 요청 실패");
        }

        const data = await response.json();

        setUserData({
          accountId: data.accountId,
          noticeBoardCount: data.noticeBoardCount,
          profileImg: data.profileImg || DefaultProfileImg,
        });
      } catch (err) {
        console.error("MyPage fetchData 에러:", err);
        alert("유저 정보를 불러올 수 없습니다.");
      }
    };

    fetchData();
  }, [accountId, navigate]);

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("accountId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    deleteCookie("accessTokenNumber");

    navigate("/login");
  };

  return (
    <Container>
      <MypageCard>
        <LeftBox>
          <ProfileCard>
            <ProfileImage src={userData.profileImg} alt="프로필 이미지" />

            <ProfileText>
              <IdText>
                아이디:{" "}
                {userData.accountId.length > 14
                  ? userData.accountId.slice(0, 14) + "..."
                  : userData.accountId}
              </IdText>
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
          <MenuItem as={Link} to={`/mypage/${accountId}/list`}>
            <MenuIcon src={BookImg} alt="책 아이콘" />
            <MenuLabel>내가 작성한 게시글</MenuLabel>
          </MenuItem>
          <MenuItem as={Link} to="/postform">
            <MenuIcon src={PenImg} alt="연필 아이콘" />
            <MenuLabel>새 게시글 작성</MenuLabel>
          </MenuItem>
        </RightBox>
      </MypageCard>
    </Container>
  );
}
