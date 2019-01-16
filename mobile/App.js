import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Chat from './Chat';

export default createStackNavigator(
  {
    Home,
    Chat
  },
  { initialRouteName: 'Home' }
);