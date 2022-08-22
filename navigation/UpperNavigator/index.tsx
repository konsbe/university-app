import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RootTabParamList } from "../../types";

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

interface IProps {
  components: Array<React.ComponentType<any>>;
  name: Array<keyof RootTabParamList>;
}
const MyTabs = (props: IProps) => {
  return (
    <Tab.Navigator
      initialRouteName={props.name[0]}
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}
    >
      {props.components.map((cmp, index) => {
        return (
          <Tab.Screen
            name={cmp.name as keyof RootTabParamList}
            component={cmp}
            options={{ tabBarLabel: props.name[index] }}
            key={index}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const BottomNavigator = (props: IProps) => {
  return <MyTabs components={props.components} name={props.name} />;
};

export default BottomNavigator;

const styles = StyleSheet.create({});