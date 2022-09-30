import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetailsScreenRouteProp } from "../../navigation/Types";
import {
  BaseView,
  BoldText,
  Button,
  MediumText,
  RegularText,
  ScrollView,
  Spacer,
  ViewContainer,
} from "../../components/generalStyled";
import { Image, TopView } from "./components/styles";
import axios from "axios";
import { baseUrl } from "../../utils/BaseUrl";

type data = {
  categories: [string];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item } = route.params;
  const [joke, setJoke] = useState<data>();

  const loadJoke = async () => {
    await axios({
      method: "get",
      url: `${baseUrl}jokes/random?category=${item}`,
    })
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <ScrollView>
      <BaseView>
        <Spacer height={100} />
        <ViewContainer>
          <BoldText> {item.toUpperCase()}</BoldText>
          <Spacer height={50} />
          <RegularText> {joke?.value}</RegularText>
        </ViewContainer>
        <Spacer height={50} />
        <Button onPress={loadJoke}>
          <RegularText>New Joke</RegularText>
        </Button>
      </BaseView>
    </ScrollView>
  );
};

export default Details;
