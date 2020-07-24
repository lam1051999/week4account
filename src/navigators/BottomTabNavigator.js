import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../containers/Profile";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Dashboard from "../containers/Dashboard";

const Tabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Dashboard") {
            let iconName = focused
              ? "view-dashboard"
              : "view-dashboard-outline";
            return (
              <MaterialCommunityIcons name={iconName} size={24} color={color} />
            );
          } else if (route.name === "Profile") {
            let iconName = focused ? "user-alt" : "user";
            return <FontAwesome5 name={iconName} size={24} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ee1b22",
        inactiveTintColor: "#989898",
        labelStyle: {
          fontSize: 15,
        },
        style: {
          marginTop: 5,
          borderTopWidth: 0,
        },
      }}
      initialRouteName="Dashboard"
    >
      <Tabs.Screen name="Dashboard" component={Dashboard} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}
