import '../css/style.scss';
import HomePage from './Components/HomePage.js';
import WorkExp from './Components/WorkExp.js';
import ProjectPage from './Components/ProjectPage.js';
import TitleHeader from './Components/TitleHeader.js';
import ContactPage from './Components/ContactPage.js';
import MakeElement from './Tools/MakeElement.js';
import ImageCarousel from './Tools/ImageCarousel.js';

var Data = require('./Data/data.js');







function HomeScreen(){
	var body = document.querySelector('body');
  var data = Data.default;
  var navArray = ['home','experience','projects','contact'];
  /* Intialize MakeElement Tool */
	var makeElem = new MakeElement;

  /* Parent Body Container */
  var bodyContainer = makeElem.createEle('div','bodyContainer',[0,12,12,12],'bodyContainer'); 
  var imageContainer = makeElem.createEle('div','imgContainer',[12,12,7,7],'imgContain');
  var contentContainer = makeElem.createEle('div','contContainer',[12,12,5,5],'contContain');
  var contentInnerContainer = makeElem.createEle('div','contInnerContainer',[12,12,12,12],'contInnerContain');
  var navigationContainer = makeElem.createEle('div','naviContainer',[12,12,12,12],'naviContain');
  var titleContainer = makeElem.createEle('div','titleContainer',[12,12,12,12],'titleContain');

  navArray.forEach(function(naved,i){
    let nav = makeElem.createEle('div',naved+'ID',[12,12,3,3],'navMenuItem');
    nav.innerHTML = naved
    if(i==0){
      nav.classList.add('navActive');
    }
    console.log(navArray.length);
    nav.addEventListener('click',function(event){
      console.log(event.target);
      for(let x=0;x<=navArray.length;x++) {
        document.getElementById(navArray[x]+'ID').classList.remove('navActive');
        document.getElementById(navArray[x]).classList.add('notActive');
        document.getElementById(navArray[x]).classList.remove('isActive');
        if(navArray[x] == naved) {
          document.getElementById(naved+'ID').classList.add('navActive'); 
          document.getElementById(naved).classList.add('isActive');
          document.getElementById(navArray[x]).classList.remove('notActive');
        } else {}
      }
    })

    navigationContainer.append(nav);
  })
  
  imageContainer.append(ImageCarousel(data));

  contentInnerContainer.append(TitleHeader(data),HomePage(data),WorkExp(data),ProjectPage(data),ContactPage(data));
  contentContainer.append(contentInnerContainer,navigationContainer);


  bodyContainer.append(imageContainer,contentContainer);

  body.append(bodyContainer);
 
}

HomeScreen();

