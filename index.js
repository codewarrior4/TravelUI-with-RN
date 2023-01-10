import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
"Require cycle"
])
AppRegistry.registerComponent(appName, () => App);