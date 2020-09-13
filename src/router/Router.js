import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { connect } from "react-redux";
import Home from "../screens/home/Home";
import ListScreen from "../screens/home/ListScreen";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
    </Stack.Navigator>
  );
}

function Router(props) {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default Router;
