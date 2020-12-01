import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../../data/dummy-data";
import Colors from '../../constants/Colors';
import { withOrientation } from "react-navigation";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList numColumns={2} renderItem={renderGridItem} data={CATEGORIES} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ?  Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ?  white : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
