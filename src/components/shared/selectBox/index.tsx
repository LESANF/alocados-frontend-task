import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styled";

import DownSquare from "@/assets/svg/downSquare.svg";
import { useRecoilValue } from "recoil";
import { coinInfo, coinRemaining } from "@/store/coinInfo/atom";
import { ICoinInfo } from "@/guard/interfaces";
import { CoinList } from "@/guard/types";

const CustomSelBox = ({ coinList, initCoin = "Solana", flagFromTo }: CoinList) => {
  const { register, handleSubmit } = useForm();

  const coinEa = useRecoilValue(coinRemaining);
  const [selCoin, setSelCoin] = useState(initCoin);
  const [openOption, setOpenOption] = useState(false);

  const handleSelectCoin = (e: any, check: any) => {
    if (check) {
      setOpenOption(false);
      return;
    }
    setSelCoin(e.currentTarget.textContent);
  };

  const checkRemaining = (coinName: string) => {
    if (flagFromTo === "TO") return;
    const [target] = coinEa.filter((coin) => coin.name === coinName);
    return target.ea <= 0 ? true : false;
  };

  return (
    <S.SelectBox onClick={() => setOpenOption((prev) => !prev)} show={openOption.toString()}>
      <S.Label>
        {coinList.map((coin: ICoinInfo, idx: number) => {
          if (coin.name === selCoin) {
            return (
              <S.OptBox key={idx}>
                <S.SvgBox>{coin.icon}</S.SvgBox>
                <S.OptText>{coin.name}</S.OptText>
              </S.OptBox>
            );
          }
        })}
      </S.Label>
      <S.SelectOptions show={openOption.toString()}>
        {coinList.map((coin: ICoinInfo, idx: number) => {
          if (coin.name !== selCoin) {
            const checkEa = checkRemaining(coin.name);
            return (
              <S.Option key={idx} onClick={(e) => handleSelectCoin(e, checkEa)} preventCoin={checkEa}>
                <S.OptBox preventCoin={checkEa}>
                  <S.SvgBox>{coin.icon}</S.SvgBox>
                  <S.OptText>{coin.name}</S.OptText>
                </S.OptBox>
              </S.Option>
            );
          }
        })}
      </S.SelectOptions>
    </S.SelectBox>
  );
};

export default CustomSelBox;
