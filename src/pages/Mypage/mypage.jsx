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
  return (
    <Container>
      <MypageCard>
        <LeftBox>
          <ProfileCard>
            <ProfileImage />
            <ProfileText>
              <IdText>아이디: wjdlfdnd</IdText>
              <PostCount>
                작성한 게시글 수 <span>12</span>
              </PostCount>
              <Logout>
                <img src={LogoutImg} alt="로그아웃 아이콘" />
                로그아웃
              </Logout>
            </ProfileText>
          </ProfileCard>
        </LeftBox>
        <RightBox>
          <MenuItem>
            <MenuIcon src={BookImg} alt="책 아이콘" />
            <MenuLabel>내가 작성한 게시글</MenuLabel>
          </MenuItem>
          <MenuItem>
            <MenuIcon src={PenImg} alt="연필 아이콘" />
            <MenuLabel>새 게시글 작성</MenuLabel>
          </MenuItem>
        </RightBox>
      </MypageCard>
    </Container>
  );
}
