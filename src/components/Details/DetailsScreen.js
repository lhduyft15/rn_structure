import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default function DetailsScreen({
  decrementCount,
  incrementCount,
  count,
  goToHome,
}) {
  return (
    <View styles={styles.container}>
      <View style={styles.btn}>
        <Button
          style={styles.btn}
          title="increment"
          onPress={() => incrementCount()}
        />
      </View>

      <Text style={styles.text}>{count}</Text>
      <Button title="decrement" onPress={() => decrementCount()} />
      <View style={styles.btn}>
        <Button title="Back Home" onPress={() => goToHome()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 20,
  },
});
