import styled from "styled-components";
import colors_dark from "../../styles/color_table";

export const MenuContainer = styled.div``;

export const MainMenu = styled.div`
  width: 300px;
  height: 711px;
  padding: 20px;

  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  background: ${colors_dark.gray[650]};
`;

export const SideMenu = styled.div``;

export const TitleBox = styled.div`
  padding-bottom: 20px;

  font-size: 40px;
  color: ${colors_dark.gray[100]};

  border-bottom: 4px solid ${colors_dark.orange[200]};
`;

export const SectionBox = styled.div``;
