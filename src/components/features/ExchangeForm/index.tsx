import React from "react";
import * as S from "./styled";
import SwapIcon from "@/assets/svg/swap-icon.svg";
import CustomSelBox from "@/components/shared/selectBox";
import { useRecoilValue } from "recoil";
import { coinInfo } from "@/store/coinInfo/atom";
import { ICoinInfo } from "@/guard/interfaces";

const ExchangeForm = () => {
  const coin = useRecoilValue<ICoinInfo[]>(coinInfo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("form event");
  };

  return (
    <S.ExchangeFormFrame>
      <S.TransForm onSubmit={handleSubmit}>
        <S.CoinFromBox>
          <S.TransInputBox>
            <S.TransInputName>전환 수량 (FROM)</S.TransInputName>
            <S.TransInput />
          </S.TransInputBox>
          <S.SelectCoinList>
            <CustomSelBox coinList={coin} initCoin="Ethereum" flagFromTo="FROM" />
          </S.SelectCoinList>
        </S.CoinFromBox>
        <S.SwapFromTo>
          <S.SwapIconBox>
            <SwapIcon />
          </S.SwapIconBox>
        </S.SwapFromTo>
        <S.CoinFromBox>
          <S.TransInputBox>
            <S.TransInputName>전환 수량 (TO)</S.TransInputName>
            <S.TransInput />
          </S.TransInputBox>
          <S.SelectCoinList>
            <CustomSelBox coinList={coin} flagFromTo="TO" />
          </S.SelectCoinList>
        </S.CoinFromBox>
        <S.TransSubmit />
      </S.TransForm>
    </S.ExchangeFormFrame>
  );
};

export default ExchangeForm;
