import MakeElement from '../Tools/MakeElement.js';


function TitleHeader(data) {
  console.log(data);
  let person = data.person;
  let makeElem = new MakeElement;
  let firstName = person.name[0];
  let lastName = person.name[1];
  let fullName = firstName + " " + lastName;
  let positions = person.position;
  console.log(name);

  let titleHeaderContain = makeElem.createEle('div','titleHeaderContain',[12,12,12,12],'titleHeaderCont');
  let titlePositionContainer = makeElem.createEle('div','titleHeaderPosition',[12,12,12,12],'titlePositionCon');
  let titleNameContainer = makeElem.createEle('div','titleNameContain',[12,12,12,12],'titleNameContainer');


  positions.forEach(function(post,i){
    let position = makeElem.createEle('div','titleposition'+i,[12,12,12,12],'titleposition');
    position.innerHTML = post;
    titlePositionContainer.append(position);

  });

  titleNameContainer.innerHTML = `
                                  <div class='titleNameContainer'>
                                    <div class='titleName titleFirstName'>${firstName}</div>
                                    <div class='titleName titleLastName'>${lastName}</div>
                                  </div>
                                  `;

  /* Have to include carousel component for Position to be constantly rotating */
  titleHeaderContain.append(titleNameContainer,titlePositionContainer);

  return titleHeaderContain;


}

export default TitleHeader;