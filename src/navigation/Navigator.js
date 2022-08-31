import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';
import AddClass from '../screens/AddClass';
import ViewClass from '../screens/ViewClass';

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes,
    },
    AddNotes: {
      screen: AddNotes,
    },
    // AddClass: {
    //   screen: AddClass,
    // },
    ViewClass: {
      screen: ViewClass,
    },
  },
  {
    initialRouteName: 'ViewNotes',
    headerMode: 'none',
    mode: 'modal',
  },
);

export default createAppContainer(StackNavigator);
