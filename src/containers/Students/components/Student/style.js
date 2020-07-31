import styled from "styled-components";
import { colors } from "../../../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.GRAY};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;

export const AvatarWrapper = styled.div`
  border: 1px solid ${colors.GRAY};
  border-radius: 50%;
  padding: 10px;
  margin-right: 20px;
`;

export const Avatar = styled.img``;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const DetailsLabel = styled.span`
  color: ${colors.GRAY};
  margin-bottom: 5px;
`;

export const ExpendIcon = styled.span`
  position: absolute;
  right: 10px;
  width: 5%;
  font-size: 46px;
  color: ${colors.GRAY}
`;

export const HiddenContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin: 0px 90px;
`;

export const Grade = styled.span`
  color: ${colors.GRAY};
  margin-top: 5px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.span`
  background-color: ${colors.GRAY};
  color: ${colors.BLACK};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
`;

export const TagInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: solid;
  border-color: ${colors.GRAY};
  border-width: 0.5px;
  margin: 15px 0px 15px 0px;
`;