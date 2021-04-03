import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as todoActions from "../store/actions/todos";
class AppIntro extends Component {
  constructor(props) {
    super(props);
  }
  state = { text: null };
  addNewTodo = () => {
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> Item do todo </Text>
          {this.props.todos.map((item, key) => {
            return (
              <View key={key}>
                <Text>{item.text}</Text>
              </View>
            );
          })}
        </View>
        <TextInput
          style={{ height: 40 }}
          placeholder="nome"
          onChangeText={(text) => this.setState({ text })}
          defaultValue={this.state.text}
        />
        <Button
          onPress={this.addNewTodo}
          title="Novo Todo"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Home"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View>
          <Text> AppIntro </Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(todoActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AppIntro);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f5f5fa",
  },
});
