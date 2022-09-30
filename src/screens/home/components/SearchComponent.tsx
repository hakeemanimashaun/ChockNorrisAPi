import React from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: "row";
  justify-content: "spacebetween";
  padding: 10px;
  border: 0.3px;
  boder-radius: 10px;
`;
const TextInput = styled.TextInput`
  width: 100%;
  height: 60px;
  font-size: 18px;
  flex: 1;
  color: #010101;
  margin-right: 10px;
`;

type Props = { value: any; onChangeText: any; onEndEditing: any };
const Search = (props: Props) => {
  return (
    <Container>
      <TextInput
        placeholder="search keywords?"
        value={props.value}
        onChangeText={props.onChangeText}
        onEndEditing={props.onEndEditing}
      />
      <Ionicons
        name="search"
        size={20}
        style={{ position: "absolute", right: 10, top: 15 }}
      />
    </Container>
  );
};
export default Search;
