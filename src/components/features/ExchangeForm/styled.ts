import { styled } from "styled-components";

export const ExchangeFormFrame = styled.div``;

export const TransForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CoinFromBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const TransInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 472px;
  height: 56px;
  padding: 10px 16px 10px 14px;
  gap: 8px;
  border-radius: 12px;
  background: #fafbfc;
`;

export const TransInputName = styled.span`
  font-family: "Pretendard", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #546182;
`;

export const TransInput = styled.input`
  height: 16px;
  font-family: "Poppins", sans-serif;
  border: none;
  background: inherit;
  color: #313c57;
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  &:focus {
    outline: none;
  }
`;
export const SelectCoinList = styled.div`
  width: 147px;
  height: 56px;
  background: #fafbfc;
  border-radius: 12px;
`;

export const SwapFromTo = styled.div`
  height: 42px;
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SwapIconBox = styled.div``;

export const TransSubmit = styled.input.attrs({ type: "submit", value: "환전" })`
  width: 635px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5d28f2;
  border-radius: 12px;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  line-height: 36px;
  color: #fff;
  border: none;
  margin: 40px 0 35px 0;
`;
