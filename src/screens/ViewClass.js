import React, {Component} from 'react';
import {StyleSheet, View, FlatList, StatusBar} from 'react-native';
import {Text, FAB, List, Card} from 'react-native-paper';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from '../reducer/Reducer';
import { connect } from 'react-redux';

class ViewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  notes = useSelector(state => state.notes);

  dispatch = useDispatch();

  mapDispatchToProps = dispatch => {
    return {
      addNote: note => {
        dispatch(addNote(note));
      },
      deleteNote: id => {
        dispatch(deleteNote(id));
      },
    };
  };

  mapStateToProps = (state) => {
    return {
      notes: state.notes,
    };
  };

  render() {
    return (
      <>
        <StatusBar
          barStyle="default"
          hidden={false}
          backgroundColor="#006699"
        />
        <Header titleText="View your Notes" />
        <View style={styles.container}>
          {notes.length === 0 ? (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>You do not have any Notes</Text>
            </View>
          ) : (
            <FlatList
              data={this.state.notes}
              renderItem={({ item }) => (
                <Card>
                  <Card.Content>
                    <List.Item
                      title={item.note.noteTitle}
                      description={item.note.noteDescription}
                      descriptionNumberOfLines={1}
                      titleStyle={styles.listTitle}
                      onPress={() => deleteNote(item.id)}
                    />
                  </Card.Content>
                </Card>
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
}

export default ViewClass

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
  },
});
