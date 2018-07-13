import MakeElement from '../Tools/MakeElement.js';



function ContactPage(data) {
  let makeElem = new MakeElement;

  let contactData = data.person.contact;

  console.log(contactData);

  let contactContainer = makeElem.createEle('div','contact',[12,12,12,12],'contentContainerItem');
  let contactTextContainer = makeElem.createEle('div','contactText',[12,12,12,12],'contactText');
  let contactLinkContainer = makeElem.createEle('div','contactLinkCont',[12,12,12,12],'contactLinkCont');

  contactTextContainer.innerHTML = `<div class='noPadding contactInnerText'> You can reach me through: </div>`;


  contactData.forEach(function(contact,i) {
    let contactCon = makeElem.createEle('a','contactCon'+i,[12,12,12,12],'contactCon');
    let contactIcon = makeElem.createEle('div','contactIcon',[12,12,3,3],'contactIcon');
    let contactHandle = makeElem.createEle('div','contactHandle',[12,12,9,9],'contactHandle');
    


    contactIcon.innerHTML = `<div class='contactIconInner'style='background:url(${contact.icon}) no-repeat;'></div>`;
    
    contactHandle.innerHTML = contact.handle;


    contactCon.append(contactIcon,contactHandle);
    contactCon.href = contact.link;
    
    

    contactLinkContainer.append(contactCon);

  });



  contactContainer.append(contactTextContainer,contactLinkContainer);
  return contactContainer;


}

export default ContactPage;