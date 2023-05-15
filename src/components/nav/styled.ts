import { styled } from "styled-components";

export const Nav = styled.nav`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

export const HomeLogo = styled.div`
  font-size: 36px;
  font-weight: 700;
  cursor: pointer;
`;

export const NavigateBox = styled.ul`
  width: 201px;
  height: 56px;
  display: flex;
  gap: 24px;
`;

export const NavTag = styled.li<{ focusState: boolean }>`
  font-family: "Pretendard", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 56px;
  border-radius: 12px;
  background-color: ${(props) => (props.focusState ? "rgba(93, 40, 242, 0.12)" : "")};
  color: ${(props) => (props.focusState ? "rgba(93, 40, 242)" : "#404E71")};
  cursor: pointer;
`;
