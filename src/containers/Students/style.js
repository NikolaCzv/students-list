import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.GRAY}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 900px;
  height: 700px;
  border-radius: 25px;
  padding: 20px;
  background-color: ${colors.WHITE};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const InputFilter = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: solid;
  border-color: ${colors.GRAY};
  border-width: 0.5px;
  margin: 15px 0px 15px 0px;
`;