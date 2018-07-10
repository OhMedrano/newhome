import '../css/style.scss';
import HomePage from './Components/HomePage.js';
import TitleHeader from './Components/TitleHeader.js';
import MakeElement from './Tools/MakeElement.js';

var Data = require('./Data/data.js');

console.log('hello world');





function HomeScreen(){
	var body = document.querySelector('body');
  var data = Data.default;

  /* Intialize MakeElement Tool */
	var makeElem = new MakeElement;

  /* Parent Body Container */
  var bodyContainer = makeElem.createEle('div','bodyContainer',[0,12,12,12],'bodyContainer'); 
  var imageContainer = makeElem.createEle('div','imgContainer',[12,12,6,6],'imgContain');
  var contentContainer = makeElem.createEle('div','contContainer',[12,12,6,6],'contContain');
  var contentInnerContainer = makeElem.createEle('div','contInnerContainer',[12,12,12,12],'contInnerContain');
  var navigationContainer = makeElem.createEle('div','naviContainer',[12,12,12,12],'naviContain');
  var titleContainer = makeElem.createEle('div','titleContainer',[12,12,12,12],'titleContain');

  

  contentInnerContainer.append(TitleHeader(data),HomePage(data));
  contentContainer.append(contentInnerContainer,navigationContainer);


  bodyContainer.append(imageContainer,contentContainer);

  body.append(bodyContainer);
 
}

HomeScreen();