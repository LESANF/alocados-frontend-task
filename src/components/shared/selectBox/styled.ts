import { styled } from "styled-components";

export const SelectBox = styled.div<{ show: string }>`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: inherit;
  height: inherit;
  padding: 8px;
  padding-right: 50px;
  border-radius: ${(props) => (props.show === "true" ? "12px 12px 0 0" : "12px")};
  background-color: #fafbfc;
  cursor: pointer;

  &:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%23404E71' fill-rule='evenodd' d='M8.793 10.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z' clip-rule='evenodd'/%3E%3Cpath fill='%23404E71' fill-rule='evenodd' d='M10.857 3h3.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C16.1 21 15.227 21 14.143 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C3.5 15.6 3.5 14.727 3.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 6.23 3.544c.592-.302 1.233-.428 1.961-.487C8.9 3 9.773 3 10.857 3ZM8.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C16.029 5.001 15.236 5 14.1 5h-3.2c-1.137 0-1.929 0-2.546.051Z' clip-rule='evenodd'/%3E%3C/svg%3E");
    position: absolute;
    top: 16px;
    right: -2px;
    font-size: 20px;
  }

  &:hover:before {
    opacity: 0.4;
  }
`;
export const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

export const OptBox = styled.div<{ preventCoin?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.preventCoin ? "0.4" : 1)};
  cursor: ${(props) => (props.preventCoin ? "not-allowed" : "pointer")};
`;

export const OptText = styled.div`
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #2a3249;
`;

export const SvgBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectOptions = styled.ul<{ show: string }>`
  position: absolute;
  list-style: none;
  top: 56px;
  left: 0;
  width: 100%;
  overflow: hidden;
  /* height: 200px; */
  max-height: ${(props) => (props.show === "true" ? "none" : "0")};
  padding: 0;
  border-radius: 0 0 12px 12px;
  color: #2a3249;
`;
export const Option = styled.li<{ preventCoin?: boolean }>`
  background-color: #fafbfc;
  display: flex;
  justify-content: flex-start;
  padding-left: 2px;
  font-size: 14px;
  padding: 6px 12px;
  transition: background-color 0.2s ease-in;
  cursor: ${(props) => (props.preventCoin ? "not-allowed" : "pointer")};
  &:hover {
    background-color: #dfe6e9;
  }
`;
