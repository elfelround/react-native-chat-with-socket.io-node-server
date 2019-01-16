
import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Chat"
      onPress={() => navigation.navigate('Chat')}
    />
  </View>
);
