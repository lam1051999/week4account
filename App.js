import React, { createContext, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import Modal from "./src/containers/Modal";
import Animated, { Value, interpolate } from "react-native-reanimated";
import { AppStyles as styles } from "./src/styles/Styles";

export const ToggleModalContext = createContext();

export default function App() {
  const _isOpen = useRef(new Value(0)).current;
  const _opacity = interpolate(_isOpen, {
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });
  const _zIndex = interpolate(_isOpen, {
    inputRange: [0, 1],
    outputRange: [-1, 20],
  });

  return (
    <ToggleModalContext.Provider
      value={{
        _isOpen: _isOpen,
      }}
    >
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        <Animated.View
          style={[
            styles.fakeBackground,
            { opacity: _opacity, zIndex: _zIndex },
          ]}
        />
        <Modal />
      </SafeAreaView>
    </ToggleModalContext.Provider>
  );
}
