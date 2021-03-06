import React, {forwardRef, useState} from 'react';

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const submitLogin = () => {};

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginContainer}>
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text style={styles.passwordText}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        style={styles.button}
        onPress={submitLogin}
        title="Submit"
        color="#841584"
        accessibilityLabel="Logs you in"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordText: {},
});
