import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { BlogList } from "./BlogList";
import { PostDetail } from "./PostDetail";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Blog"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#3B82F6",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Blog"
                component={BlogList}
                options={{
                    title: "My Blog"
                }}
            />
            <StackNavigator.Screen
                name="PostDetail"
                component={PostDetail}
                options={{
                    title: "Post Details"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);