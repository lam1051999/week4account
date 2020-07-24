import React from "react";
import { View, Text } from "react-native";
import { AccountCardStyles as styles } from "../styles/Styles";
import { fommater } from "../constants/Constants";

export default function AccountCard({ item }) {
  let cardTitle;
  let cardColor;
  switch (item.type) {
    case 1:
      cardTitle = "Bank account";
      cardColor = "#E437BC";
      break;
    case 2:
      cardTitle = "Credit card";
      cardColor = "#EFA75A";
      break;
    case 3:
      cardTitle = "Cash";
      cardColor = "#23E3D6";
      break;
  }

  return (
    <View style={[styles.container, { backgroundColor: cardColor }]}>
      <Text style={styles.text}>{cardTitle}</Text>
      <Text style={styles.number}>{fommater.format(item.total)}</Text>
    </View>
  );
}
