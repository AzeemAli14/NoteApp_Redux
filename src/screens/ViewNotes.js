import React, {useState} from 'react';
import {StyleSheet, View, FlatList, StatusBar} from 'react-native';
import {Text, FAB, List, Card} from 'react-native-paper';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from '../reducer/Reducer';

function ViewNotes({navigation}) {
  // const [notes, setNotes] = useState([])
  const notes = useSelector(state => state);
  const dispatch = useDispatch();

  const addNote = note => {
    console.log(note);
    dispatch(addnote(note));
  };

  const deleteNote = id => dispatch(deletenote(id));

  // const addNotes = note => {
  //     note.id = notes.length + 1
  //     setNotes([...notes, note])
  // }

  return (
    <>
      <StatusBar barStyle="default" hidden={false} backgroundColor="#006699" />
      <Header titleText="View your Notes" />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any Notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({item}) => (
              <View style={{marginBottom: 10, elevation: 20}}>
                <Card>
                  <Card.Content>
                    <Card.Title
                      title={item.note.noteTitle}
                      subtitle={item.note.noteDescription}
                      subtitleNumberOfLines={3}
                      titleStyle={styles.listTitle}
                      onPress={() => deleteNote(item.id)}
                    />
                  </Card.Content>
                </Card>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}

        <FAB
          style={styles.fab}
          small
          icon={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3524/3524388.png',
          }}
          label="Add a new Note"
          onPress={() =>
            navigation.navigate('AddNotes', {
              addNote,
            })
          }
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
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    backgroundColor: '#006699',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
    elevation: 20,
  },
});

export default ViewNotes;
