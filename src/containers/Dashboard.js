import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import {
  FlatList,
  TapGestureHandler,
  State,
} from "react-native-gesture-handler";
import { DATA } from "../data/Data";
import { CATEGORY_KEYS } from "../data/FilteredData";
import AccountCard from "./AccountCard";
import CategoryCard from "./CategoryCard";
import { DashboardStyles as styles } from "../styles/Styles";
import { fommater } from "../constants/Constants";
import { ToggleModalContext } from "../../App";
import Animated, { spring, SpringUtils, Value } from "react-native-reanimated";

export default function Dashboard() {
  const { _isOpen } = useContext(ToggleModalContext);
  function _tapHandlerStateChange(evt) {
    if (evt.nativeEvent.oldState === State.ACTIVE) {
      spring(_isOpen, {
        ...SpringUtils.makeDefaultConfig(),
        overshootClamping: true,
        damping: 25,
        stiffness: 200,
        toValue: 1,
      }).start();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Entypo name="list" size={35} color="black" />
        <Text style={styles.headerText}>Dashboard</Text>
        <TapGestureHandler onHandlerStateChange={_tapHandlerStateChange}>
          <Animated.View style={styles.notificationContainer}>
            <Entypo
              style={styles.notificationDot}
              name="dot-single"
              size={30}
              color="#c62828"
            />
            <Ionicons
              name="ios-notifications-outline"
              size={35}
              color="black"
            />
          </Animated.View>
        </TapGestureHandler>
      </View>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.accountListText}>List of Account</Text>
            <View style={styles.accountCardContainer}>
              {DATA.account_information.accounts.map((item) => (
                <AccountCard key={item.type} item={item} />
              ))}
            </View>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceNumber}>
                {fommater.format(DATA.account_information.total)}
              </Text>
              <Text style={styles.balanceText}>Total Balance</Text>
            </View>
            <Text style={styles.recordsText}>Last Records Overview</Text>
          </>
        }
        showsVerticalScrollIndicator={false}
        data={CATEGORY_KEYS}
        renderItem={({ item }) => <CategoryCard categoryKey={item} />}
        keyExtractor={(item) => item + "key"}
      />
    </View>
  );
}
