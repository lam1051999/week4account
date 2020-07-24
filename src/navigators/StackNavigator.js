import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../containers/Detail";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabStack" component={BottomTabNavigator} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
