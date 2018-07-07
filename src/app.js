import '../css/style.scss';
import HomePage from './Components/HomePage.js';
import MakeElement from './Tools/MakeElement.js';

console.log('hello world');





function HomeScreen(){
	var body = document.querySelector('body');


  /* Intialize MakeElement Tool */
	var makeElem = new MakeElement;

  /* Parent Body Container */
  var bodyContainer = makeElem.createEle('div','bodyContainer',[0,12,12,12],'bodyContainer'); 

      bodyContainer.innerHTML = 'Hello stuff';

  var imageContainer = makeElem.createEle('div','imgContainer',[12,12,6,6],'imgContain');
  var contentContainer = makeElem.createEle('div','contContainer',[12,12,6,6],'contContain');

  contentContainer.append(HomePage());


  bodyContainer.append(imageContainer,contentContainer);

  body.append(bodyContainer);
}

HomeScreen();