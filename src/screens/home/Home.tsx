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
import axios from "axios";
import { FlatList, Keyboard } from "react-native";
import { baseUrl } from "../../utils/BaseUrl";
import { RegularText } from "../../components/generalStyled";
import { ClickableWrapper, ViewButton } from "./components/styled";
import Search from "./components/SearchComponent";

export type data = [string];

const Home: () => JSX.Element = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [data, setData] = useState<data>();
  const [searchData, setSearchData] =
    useState<{ value: string; id: string }[]>();
  const [searchText, setSearchText] = useState<string>();
  const [showCartegories, setShowCartegories] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const searchQuery = async () => {
    await axios({
      method: "get",
      url: `${baseUrl}jokes/search?query=${searchText}`,
    })
      .then((response) => {
        setSearchData(response.data.result);
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
  const clearSearch = () => {
    setShowCartegories(!showCartegories);
    setSearchText("");
  };
  const searchJokes = () => {
    setShowCartegories(!showCartegories);
    Keyboard.dismiss();
  };
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
          !showCartegories ? clearSearch() : searchJokes();
        }}
        testID="button"
      >
        <MediumText testID="button-text">
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
                  testID="cartegory"
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
