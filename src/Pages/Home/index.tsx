import ExchangeForm from "@/components/features/ExchangeForm";
import CoinWallet from "@/components/features/WalletSummary";
import Navbar from "@/components/layout/nav";
import { ICoinRemaining } from "@/guard/interfaces";
import { coinRemaining } from "@/store/coinInfo/atom";
import React from "react";
import { useRecoilValue } from "recoil";
import * as S from "./styled";

const Home = () => {
  const coinWalletRemaining = useRecoilValue<ICoinRemaining[]>(coinRemaining);

  return (
    <>
      {/* <Navbar /> */}
      <S.HomeFrame>
        <S.PageTitle>
          <S.Title>환전하기</S.Title>
        </S.PageTitle>
        <S.ExchangeFrame>
          <CoinWallet remaining={coinWalletRemaining} />
          <S.CoinExchangeFrame>
            <ExchangeForm />
          </S.CoinExchangeFrame>
        </S.ExchangeFrame>
      </S.HomeFrame>
    </>
  );
};

export default Home;
