import { ICoinInfo } from "../interfaces";

type FlagFromTo = "FROM" | "TO";

export type CoinList = {
  coinList: ICoinInfo[];
  initCoin?: string;
  flagFromTo: FlagFromTo;
};
