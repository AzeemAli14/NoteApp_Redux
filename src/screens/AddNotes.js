import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Text, IconButton, TextInput, FAB} from 'react-native-paper';
import Header from '../components/Header';

function AddNotes({navigation}) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  function onSaveNote() {
    navigation.state.params.addNote({noteTitle, noteDescription});
    navigation.goBack();
  }

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
          label="Title"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Description"
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
          icon={{uri: 'https://cdn-icons-png.flaticon.com/512/2874/2874091.png'}}
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: '#006699',
    position: 'absolute',
    right: 0,
    top: 5,
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
    backgroundColor: "grey"
  },
  text: {
    height: 300,
    fontSize: 16,
    backgroundColor: "grey"
  },
  fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 0,
    backgroundColor: '#006699',
  },
});

export default AddNotes;
