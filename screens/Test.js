import React, { useState, useEffect, Component } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Api from "../services/api";

export default class Test extends React.Component {
  state = {
    posts: [],
    scrollToIndex: 0,
    ref: null,
    postCords: [],
  };
  async componentDidMount() {
    try {
      const lists = await Api.callAPIPosts();
      const posts = lists.data;
      this.setState({ posts });
    } catch (error) {
      console.log("ERRO NO MOUNT: ", error.message);
    }
  }
  ItemView = (value) => {
    return value.map((item, key) => {
      return (
        <View
          key={key}
          style={styles.item}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            const newCoordsPosts = this.state.postCords;
            newCoordsPosts[key] = layout.y;
            const postCords = newCoordsPosts;
            this.setState({ postCords });
            console.log(this.state.postCords);
            console.log("height: ", layout.height);
            console.log("width: ", layout.width);
            console.log("x: ", layout.x);
            console.log("y: ", layout.y);
          }}
        >
          <Text style={styles.itemText}>
            {item.title} {item.id}
          </Text>
        </View>
      );
    });
  };
  scrollHandler = () => {
    if (this.state.postCords.length > this.state.scrollToIndex) {
      this.state.ref.scrollTo({
        x: 0,
        y: this.state.postCords[this.state.scrollToIndex],
        animated: true,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              onChangeText={(index) => {
                const scrollToIndex = parseInt(index != "" ? index : 0);
                this.setState({ scrollToIndex });
              }}
              keyboardType="numeric"
              placeholder="Pesquisar"
              style={styles.search}
              value={this.state.scrollToIndex ? this.state.scrollToIndex : 0}
            />
            <TouchableOpacity
              onPress={this.scrollHandler}
              style={styles.searchButton}
            >
              <Text style={styles.searchButtonText}>Press</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            ref={(ref) => {
              this.setState({ ref });
            }}
          >
            {this.ItemView(this.state.posts)}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 50,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f4ff3e",
    padding: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchButton: {
    backgroundColor: "#fa3c",
    padding: 10,
  },
  searchButtonText: {
    color: "#000",
  },
  itemStyle: {
    padding: 10,
  },
});
