import React from "react";
import { View, StyleSheet } from "react-native";
import NavigationStack from "../navigations/NavigationStack";

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationStack />
    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})