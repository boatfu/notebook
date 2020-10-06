import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NoteBlock from './NoteBlock';

interface Props {
  navigation: any;
  route: any;
}

export default class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />

        <View style={styles.noteContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Note');
            }}>
            <NoteBlock />
          </TouchableOpacity>

          <NoteBlock />
          <NoteBlock />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#eee',
  },
  noteContainer: {
    paddingBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
