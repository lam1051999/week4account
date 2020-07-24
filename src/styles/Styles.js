import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/Constants";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fakeBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
  },
});

export const DashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 25,
  },
  notificationContainer: {
    position: "relative",
    paddingHorizontal: 5,
  },
  notificationDot: {
    position: "absolute",
    top: -8,
    right: 5,
    zIndex: 10,
  },
  accountListText: {
    fontSize: 20,
    marginTop: 30,
  },
  accountCardContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceContainer: {
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  balanceNumber: {
    fontSize: 30,
    color: "#FF958F",
  },
  balanceText: {
    fontSize: 20,
    color: "#A6B1C0",
  },
  recordsText: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
});

export const AccountCardStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: (SCREEN_WIDTH - 20) / 3 - 10,
    paddingVertical: 20,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  number: {
    color: "white",
    fontSize: 17,
  },
});

export const CategoryCardStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20 - 30,
    position: "relative",
    flexDirection: "row",
    paddingLeft: 50,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 10,
    marginLeft: 30,
    borderRadius: 5,
    height: 90,
    padding: 10,
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    left: -30,
    borderRadius: 5,
  },
  leftDetailContainer: {
    flexGrow: 1,
  },
  leftTitle: {
    fontSize: 20,
  },
  leftTypes: {
    fontSize: 15,
    color: "#A6B1C0",
    marginVertical: 5,
  },
  rightDetailContainer: {},
  rightTime: {
    color: "#A6B1C0",
  },
  rightAmount: {
    marginVertical: 5,
  },
});

export const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const DetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    position: "relative",
  },
  headerIcon: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    left: 0,
    zIndex: 30,
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 25,
  },
  cardContainer: {
    flexDirection: "row",
    padding: 20,
    height: 110,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 10,
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  cardDetailContainer: {
    marginLeft: 10,
  },
  cardDetailDescription: {
    fontSize: 16,
    width: SCREEN_WIDTH - 120,
  },
  cardDetailTime: {
    fontSize: 14,
    color: "#A6B1C0",
    marginVertical: 8,
  },
});

export const ModalStyles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 100,
    right: 0,
    bottom: 0,
    height: SCREEN_HEIGHT - 100,
    zIndex: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  notificationText: {
    fontSize: 30,
  },
  buttonContainer: {
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#ee1b22",
    width: SCREEN_WIDTH - 150,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
