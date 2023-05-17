import { styled } from "styled-components";

export const HomeFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

/* Title */
export const PageTitle = styled.div`
  margin-bottom: 28px;
  width: 960px;
`;

export const Title = styled.span`
  font-family: "Pretendard", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: #2a3249;
`;

/* Exchange */
export const ExchangeFrame = styled.div`
  display: flex;
  gap: 18px;
  width: 960px;
  height: 386px;
  /* background-color: peru; */
`;

export const CoinWalletFrame = styled.div`
  width: 308px;
  height: 386px;
  border-radius: 12px;
  background: #fafbfc;
  padding: 24px;
`;

export const CoinExchangeFrame = styled.div`
  /* background: red; */
  width: 634px;
  height: 386px;
  display: flex;
  flex-direction: column;
`;
