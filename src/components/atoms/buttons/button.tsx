import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Styled Button atom using typescript

type ButtonProps = {
  title: string;
  // onPress: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    // <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
