import MakeElement from '../Tools/MakeElement.js';

function HomePage() {
  var personalInfo = {
                        "name":"Oscar Medrano",
                        "position":['Front End Developer','Web Programmer','UX Designer'],
                        "location":'New York, New York',
                        "contactInfo": [
                                        'email':"Oscar@TheBigOh.net",
                                        'insta':'@the_big_0h',
                                        'linkedIn':'tba',
                                        'github':['OhMedrano','http://github.com/ohmedrano'],
                                      ],

                      }


  var makeElem = new MakeElement;

  var homeContainer = makeElem.createEle('div','homeContainer',[12,12,12,12],'homeContain');

  var titleDiv = makeElem.createEle('div','titleHeader',[12,12,12,12],'titleHead');





  titleDiv.innerHTML = `<div class='titlename'>${personalInfo.name}</div>
                        <div class='titleposition'>${personalInfo.position[0]}</div>
                        `;
  homeContainer.append(titleDiv);

  return homeContainer;
}


export default HomePage