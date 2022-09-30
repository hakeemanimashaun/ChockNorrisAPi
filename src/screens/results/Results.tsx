import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseView, RegularText } from "../../components/generalStyled";
import Search from "../home/components/SearchComponent";
import { useRoute } from "@react-navigation/native";
import { MainNavigationProps } from "../../navigation/Types";

const Results = () => {
  useEffect(() => {});
  return (
    <BaseView>
      <RegularText></RegularText>
    </BaseView>
  );
};

export default Results;
