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
      chatMessage: "",
      chatMessages: []
    };
  }

  componentDidMount() {
    this.socket = io("http://192.168.1.133:3000");
    //never put inside constructor anything async like this
    this.socket.on("chat message", msg => {
      this.setState({ /* array we set before, and the ... (spread operator from es6)
        stands for the array we already have plus... */
        chatMessages: [...this.state.chatMessages, msg] });
        //subrayar esto como buena forma para add cue to arrays
    })
  }

  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage)
    //emit method big deal, guess its like sending a post r
    this.setState({ chatMessage: "" });

  }
/* best practice in react to add a key for each element in an array,
being lazy and setting just the key as a chatMessage but real scenario
you sould use unique key or unique ID*/

  render() {

    const chatMessages = this.state.chatMessages.map(chatMessage => <Text   
      key={chatMessage}>{chatMessage}</Text>)
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
        {chatMessages}
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

//todo: set the key to uniqueID