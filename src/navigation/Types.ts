import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps, RouteProp } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
        item: string;

    };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Details'
>;

export type DetailsScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Details'
>;

export type BottomTabNavigatorParamList = {
    HomeStack: HomeStackNavigatorParamList;
    Results: undefined;

};
export type MainNavigationProps<
    Screen extends keyof HomeStackNavigatorParamList,
> = CompositeScreenProps<
    NativeStackScreenProps<HomeStackNavigatorParamList, Screen>,
    BottomTabScreenProps<BottomTabNavigatorParamList>
>;
