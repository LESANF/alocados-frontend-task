import { ICoinRemaining } from "@/guard/interfaces";
import { coinRemaining } from "@/store/coinInfo/atom";
import React from "react";
import { useRecoilValue } from "recoil";
import * as S from "./styled";

type WalletRemaing = {
  remaining: ICoinRemaining[];
};

const CoinWallet = ({ remaining }: WalletRemaing) => {
  return (
    <S.CoinWalletFrame>
      {remaining.map((v, i) => {
        return (
          <div style={{ marginBottom: "30px" }}>
            <div>{v.name}</div>
            <div>{v.ea}</div>
          </div>
        );
      })}
    </S.CoinWalletFrame>
  );
};

export default CoinWallet;
