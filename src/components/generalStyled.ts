import styled from "styled-components/native";


export const BaseView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: "center";
 
`;
export const ViewContainer = styled.View`
  background-color: #fff;
 align-items: center;
 justify-content: "center";
 padding: 10px
 

`;
export const ScrollView = styled.ScrollView`
flex: 1;
  background-color: #fff;
 



`;
export const Spacer = styled.View`
  height: ${(props: { height: number; }) => props.height || "20px"}px;

`;
export const BoldText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;
export const MediumText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
export const RegularText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;
export const ParagraphText = styled.Text`
  color: #000;
  text-align: justify;
  font-size: 16px;
`;
export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 45px;
  border-radius: 20px;
  background: #0066FF;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;
