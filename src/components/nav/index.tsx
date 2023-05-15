import React from "react";
import * as S from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_TAGS } from "./constants";
import AlocadosLogo from "@/assets/svg/alocados-logo.svg";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClick = (path: string) => navigate(path);

  return (
    <S.Nav>
      <S.HomeLogo onClick={() => handleClick("/")}>
        <AlocadosLogo />
      </S.HomeLogo>
      <S.NavigateBox>
        {NAV_TAGS.map((tag, idx) => {
          return (
            <S.NavTag key={idx} onClick={() => handleClick(tag.path)} focusState={tag.path === pathname}>
              {tag.name}
            </S.NavTag>
          );
        })}
      </S.NavigateBox>
    </S.Nav>
  );
};

export default Navbar;
