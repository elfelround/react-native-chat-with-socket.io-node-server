/*remove me from first refractoring
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import io from "socket.io-client";

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
###removed on first refractoring*/

/* type Props = {}; */
export default class App extends Component/*<Props>*/ {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: ""
    };
  }

  componentDidMount() {
    this.socket = io("http://192.168.1.133:3000");
    //never put inside constructor anything async like this
  }

  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage)
    //emt method big deal
    this.setState({ chatMessage: "" });

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{ height: 40, borderWidth: 2}}
        autoCorrect={false}
        value={this.state.chatMessage}
        onSubmitEditing={() => this.submitChatMessage()}
        onChangeText={chatMessage => {
          this.setState({ chatMessage });
        }} ></TextInput>
      </View>
    );
  }
}
        /* es6 shortcut, just saying chatMessage
          instead of chatMessage = chatMessage because
          they have the same name*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
