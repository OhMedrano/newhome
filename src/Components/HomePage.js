import MakeElement from '../Tools/MakeElement.js';

function HomePage(data) {

  let personalInfo = data.person;
  let makeElem = new MakeElement;

  let navItems = ['Bio','Skills','Experience'];

  /* HTML Elements created */
  let homeContainer = makeElem.createEle('div','homeContainer',[12,12,12,12],'homeContain');
  let homeContent = makeElem.createEle('div','homeContentCon',[12,12,12,12],'homeContCon');
  let homeBio = makeElem.createEle('div','homeBio',[12,12,12,12],'homeContentItem');
  let homeSkills = makeElem.createEle('div','homeSkill',[12,12,12,12],'homeContentItem');

  

  homeBio.innerHTML = `<div class='homeBioContainer'>
                          <div class='homeBioText'>  
                            <p> Hey, I'm Oscar </p>
                            <p> I'm a <span class='innerContentVar'>${personalInfo.position[0]}</span>, living in <span class='innerContentVar'>${personalInfo.location[0]}</span></p>
                            <p> I enjoy playing guitar, drawing, and the frustration of programming</p>
                            <p> You may see me around the city, taking pictures and drawing in the subway</p>
                          </div>
                        </div>
                      `;

  console.log(personalInfo.skillSet);




  /*  Appending HTML */
  homeContent.append(homeBio,homeSkills);
  homeContainer.append(homeContent);

  return homeContainer;
}


export default HomePage