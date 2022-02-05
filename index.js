/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Picture from './Picture';
import Noticiation from './Noticiation';

AppRegistry.registerComponent(appName, () => Noticiation);
