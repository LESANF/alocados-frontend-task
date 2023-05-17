import React from "react";
import { atom } from "recoil";
import SolIcon from "@/assets/svg/sol.svg";
import EthIcon from "@/assets/svg/eth.svg";
import BnbIcon from "@/assets/svg/bnb.svg";
import { ICoinInfo, ICoinRemaining } from "@/guard/interfaces";

export const coinInfo = atom<ICoinInfo[]>({
  key: "coinInfo",
  default: [
    {
      name: "Solana",
      icon: <SolIcon />,
    },
    {
      name: "Ethereum",
      icon: <EthIcon />,
    },
    {
      name: "BnB",
      icon: <BnbIcon />,
    },
  ],
});

export const coinRemaining = atom<ICoinRemaining[]>({
  key: "coinRemaining",
  default: [
    {
      name: "Solana",
      ea: 0,
    },
    {
      name: "Ethereum",
      ea: 2000,
    },
    {
      name: "BnB",
      ea: 1,
    },
  ],
});
