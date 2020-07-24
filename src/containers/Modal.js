import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ModalStyles as styles } from "../styles/Styles";
import { ToggleModalContext } from "../../App";
import Animated, {
  interpolate,
  spring,
  SpringUtils,
  Value,
} from "react-native-reanimated";
import { SCREEN_HEIGHT } from "../constants/Constants";
import { TapGestureHandler, State } from "react-native-gesture-handler";

export default function Modal() {
  const { _isOpen } = useContext(ToggleModalContext);
  const _translateY = interpolate(_isOpen, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT - 100, 0],
  });
  function _tapHandlerStateChange(evt) {
    if (evt.nativeEvent.oldState === State.ACTIVE) {
      spring(_isOpen, {
        ...SpringUtils.makeDefaultConfig(),
        overshootClamping: true,
        damping: 25,
        stiffness: 200,
        toValue: 0,
      }).start();
    }
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: _translateY,
            },
          ],
        },
      ]}
    >
      <Text style={styles.notificationText}>Notification</Text>
      <TapGestureHandler onHandlerStateChange={_tapHandlerStateChange}>
        <Animated.View style={[styles.buttonContainer, {}]}>
          <Text style={styles.buttonText}>Go back</Text>
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  );
}
