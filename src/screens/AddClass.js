import {StatusBar, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {IconButton, TextInput, FAB} from 'react-native-paper';
import Header from '../components/Header';

class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: (''),
      noteDescription: (''),
    };
  }

  onSaveNote = () => {
    this.props.onSaveNote(this.state.noteTitle, this.state.noteDescription);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <>
        <StatusBar barStyle="default"></StatusBar>
        <Header titleText="Add your Note" />
        <IconButton
          icon={{uri: 'https://cdn-icons-png.flaticon.com/512/748/748122.png'}}
          size={20}
          iconColor="white"
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
        />

        <View style={styles.container}>
          <TextInput
            label="Add Note Title here"
            value={noteTitle}
            mode="outlined"
            onChangeText={setNoteTitle}
            style={styles.title}
          />
          <TextInput
            label="Add Note Description"
            value={noteDescription}
            onChangeText={setNoteDescription}
            mode="flat"
            multiline={true}
            style={styles.text}
            scrollEnabled={true}
            returnKeyLabel="done"
            blurOnSubmit={true}
          />
          <FAB
            style={styles.fab}
            small
            icon={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2874/2874091.png',
            }}
            disabled={noteTitle == '' ? true : false}
            onPress={() => onSaveNote()}
          />
        </View>
      </>
    );
  }
}

export default AddClass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: '#219653',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 0,
    backgroundColor: '#800000',
  },
});
