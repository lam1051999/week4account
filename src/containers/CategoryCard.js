import React from "react";
import { View, Text } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  CATEGORY_DATA,
  CATEGORY_TYPES,
  CATEGOTY_TYPE_NAMES,
} from "../data/FilteredData";
import { useNavigation } from "@react-navigation/native";
import { CategoryCardStyles as styles } from "../styles/Styles";
import { fommater } from "../constants/Constants";

function IconRender({ categoryKey }) {
  switch (Number(categoryKey)) {
    case 1:
      return <Entypo name="shopping-cart" size={30} color="white" />;
    case 2:
      return <FontAwesome5 name="tshirt" size={30} color="white" />;
    case 3:
      return <FontAwesome5 name="home" size={30} color="white" />;
  }
}
export default function CategoryCard({ categoryKey }) {
  const navigation = useNavigation();
  let cardTitle;
  let iconBackGround;
  let amountColor;
  let category = CATEGORY_DATA[categoryKey];
  let accountTypes = CATEGORY_TYPES(category);
  let accountTypeNames = CATEGOTY_TYPE_NAMES(accountTypes);
  let totalMoney = category.reduce(
    (accum, item) => accum + item.spend_money,
    0
  );

  switch (Number(categoryKey)) {
    case 1:
      cardTitle = "Groceries";
      iconBackGround = "#FEC180";
      amountColor = "#FF958F";
      break;
    case 2:
      cardTitle = "Clothes";
      iconBackGround = "#EFBAD3";
      amountColor = "#A254F2";
      break;
    case 3:
      cardTitle = "Rental";
      iconBackGround = "#54BAE6";
      amountColor = "#51EFDE";
      break;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Detail", {
          transferData: [...category],
          title: cardTitle,
          categoryKey: categoryKey,
        })
      }
      style={styles.container}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBackGround }]}>
        <IconRender categoryKey={categoryKey} />
      </View>
      <View style={styles.leftDetailContainer}>
        <Text style={styles.leftTitle}>{cardTitle}</Text>
        <Text style={styles.leftTypes}>{accountTypeNames.join(", ")}</Text>
      </View>
      <View style={styles.rightDetailContainer}>
        <Text style={styles.rightTime}>{category[0].date_time}</Text>
        <Text style={[styles.rightAmount, { color: amountColor }]}>
          {fommater.format(totalMoney)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
