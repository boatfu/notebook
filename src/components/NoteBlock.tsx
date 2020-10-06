import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NoteBlock extends React.Component<any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    minHeight: 200,
    width: 150,
    borderRadius: 20
  },
});
