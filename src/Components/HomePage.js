import MakeElement from '../Tools/MakeElement.js';

function HomePage(data) {

  let personalInfo = data.person;
  let makeElem = new MakeElement;

  let navItems = ['Bio','Skills','Experience'];
  let skills = personalInfo.skillSet; 

  /* HTML Elements created */
  let homeContainer = makeElem.createEle('div','home',[12,12,12,12],'contentContainerItem');
  let homeContent = makeElem.createEle('div','homeContentCon',[12,12,12,12],'homeContCon');
  let homeBio = makeElem.createEle('div','homeBio',[12,12,12,12],'homeContentItem');
  let homeSkills = makeElem.createEle('div','homeSkill',[12,12,12,12],'homeContentItem');
  let homeSkillsTitle = makeElem.createEle('div','homeSkillTitle',[12,12,12,12],'homeSkillsTitle');
  let homeSkillsSkillContainer = makeElem.createEle('div','homeSkillOuterContain',[12,12,12,12],'homeSkillOutCont');
  homeSkillsTitle.innerHTML = `<div><p>Skills:</p></div>`;  

  homeBio.innerHTML = `<div class='homeBioContainer'>
                          <div class='homeBioText'>  
                            <p> Hey, I'm Oscar </p>
                            <p> I'm a <span class='innerContentVar'>${personalInfo.position[0]}</span>, living in <span class='innerContentVar'>${personalInfo.location[0]}</span></p>
                            <p> I enjoy playing guitar, drawing, and the frustration of programming</p>
                            <p> You may see me around the city, taking pictures and drawing in the subway</p>
                          </div>
                        </div>
                      `;

  console.log(skills);
  homeSkills.append(homeSkillsTitle, homeSkillsSkillContainer);

  skills.forEach(function(skill,i){
    let newSkillContainer = makeElem.createEle('div','skillContainer'+i,[12,12,6,6],'skillContain');
    let skillName = makeElem.createEle('div','skillName'+i,[12,12,12,12],'skillName');
    let skillLvlContain = makeElem.createEle('div','skillLvlContain'+i,[12,12,12,12],'skillLvlCont');


    skillName.innerHTML = `<div class='skillNameText'><p>${skill.name}<p></div>`;

    for(let x=0;x<skill.level;x++) { 
      if(skill.level > x) {
        let skillFill = makeElem.createEle('div',null,[1,1,1,1],'skillFill');

        skillLvlContain.append(skillFill);
      }
    }

    newSkillContainer.append(skillName,skillLvlContain);
    homeSkillsSkillContainer.append(newSkillContainer);
    console.log(newSkillContainer, skillName);
  })



  /*  Appending HTML */
  homeContent.append(homeBio,homeSkills);
  homeContainer.append(homeContent);

  return homeContainer;
}


export default HomePage