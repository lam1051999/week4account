import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { DetailStyles as styles } from "../styles/Styles";
import { fommater } from "../constants/Constants";

export default function Detail({ navigation, route }) {
  const { transferData, title } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="ios-arrow-back"
          size={30}
          color="black"
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <FlatList
        data={transferData}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image
              style={styles.cardImage}
              source={{ uri: item.production_image }}
            />
            <View style={styles.cardDetailContainer}>
              <Text numberOfLines={2} style={styles.cardDetailDescription}>
                You bought {item.production_name} for{" "}
                {fommater.format(item.spend_money)}
              </Text>
              <Text style={styles.cardDetailTime}>{item.date_time}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id + "key"}
      />
    </View>
  );
}
