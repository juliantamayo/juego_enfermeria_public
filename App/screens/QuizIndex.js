import React, {Component} from 'react';
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default class menu extends Component {


  render() {
    return (
   //  <Imagebackground style={styles.container}>
    <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        this.props.navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() =>
        this.props.navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        this.props.navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
  );
  }
}

