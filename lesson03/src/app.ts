import {Item} from './item';
import { testNum } from './testNum';
import { testConsoleLog } from './console';
import { testVoid } from './testVoid';

var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript',2980);
var tNum = new testNum(10);

aBook.say(elem);
tNum.output(elem);

testConsoleLog()
testVoid('testです。')