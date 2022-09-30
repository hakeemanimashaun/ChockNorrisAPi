import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window")

export const ViewButton = styled.TouchableOpacity`
  margin-vertical: 10px;
width: ${width - 20}px;
height: 40px;
padding: 12px;
border-radius: 10px;
background - color: grey;
`;
export const ClickableWrapper = styled.TouchableOpacity`
 
width: ${width - 20}px;
padding: 0.7px;
border-width: 0.3px;
border-color: #0066FF;
border-radius: 10px;
background - color: #0066FF;
`;
