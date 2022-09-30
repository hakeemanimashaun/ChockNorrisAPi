import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  BaseView,
  Button,
  MediumText,
  ParagraphText,
  ScrollView,
  Spacer,
  ViewContainer,
} from "../../components/generalStyled";
import { HomeScreenNavigationProp } from "../../navigation/Types";
import Carousel from "react-native-snap-carousel";
import axios from "axios";
import { FlatList, View, Text, Keyboard } from "react-native";
import { baseUrl } from "../../utils/BaseUrl";
import { RegularText } from "../../components/generalStyled";
import { ClickableWrapper, ViewButton } from "./components/styled";
import Search from "./components/SearchComponent";

export type data = [string];

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [data, setData] = useState<data>();
  const [searchData, setSearchData] =
    useState<{ value: string; id: string }[]>();
  const [searchText, setSearchText] = useState<string>();
  const [showCartegories, setShowCartegories] = useState<boolean>(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const searchQuery = async () => {
    await axios({
      method: "get",
      url: `${baseUrl}jokes/search?query=${searchText}`,
    })
      .then((response) => {
        console.log(searchText);
        setSearchData(response.data.result);
        console.log(response, "response");
        console.log(response.data, "data");
        setIsError(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        console.log(error, "error");
        setIsError(true);
        setIsSuccess(false);
      });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}jokes/categories`,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BaseView>
      <Search
        value={searchText}
        onChangeText={(text: React.SetStateAction<string | undefined>) =>
          setSearchText(text)
        }
        onEndEditing={() => {
          searchQuery();
        }}
      />
      <Spacer height={25} />
      <Button
        onPress={() => {
          setShowCartegories(!showCartegories);
          Keyboard.dismiss();
        }}
      >
        <MediumText>
          {!showCartegories ? "Clear Search" : "Search Jokes"}
        </MediumText>
      </Button>
      <Spacer height={15} />
      {showCartegories ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ViewContainer>
            {data?.map((item, index) => {
              return (
                <ViewButton
                  onPress={() => {
                    navigation.navigate("Details", { item: item });
                    Keyboard.dismiss();
                  }}
                  key={index}
                >
                  <RegularText>{item}</RegularText>
                </ViewButton>
              );
            })}
          </ViewContainer>
        </ScrollView>
      ) : (
        <ViewContainer>
          {isError ? (
            <RegularText>invalid search</RegularText>
          ) : isSuccess ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={searchData}
              renderItem={({ item }) => (
                <ClickableWrapper>
                  <ViewContainer>
                    <ParagraphText>{item.value}</ParagraphText>
                  </ViewContainer>
                </ClickableWrapper>
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <RegularText>search is empty</RegularText>
          )}
        </ViewContainer>
      )}
    </BaseView>
  );
};

export default Home;
