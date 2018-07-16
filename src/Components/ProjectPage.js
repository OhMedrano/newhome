'use strict'
import MakeElement from '../Tools/MakeElement.js';


function ProjectPage(data,imgGal) {
  let makeElem = new MakeElement;
  let projectData = data.projects;

  let projectParentContainer = makeElem.createEle('div','projects',[12,12,12,12],['contentContainerItem']);
  let projectChildContainer = makeElem.createEle('div','projectContainer',[12,12,12,12],'projectContainer');
  let projectImageViewer = makeElem.createEle('div','projectImageViewer',[12,12,12,12],'projectImageView');


  projectData.forEach(function(project,i){
    let projectInnerContainer = makeElem.createEle('div','project'+i,[12,12,12,12],'project');
    let projectInnerContainerTop = makeElem.createEle('div','projectTop'+i,[12,12,12,12],'projectTop');
    let projectInnerContainerBottom = makeElem.createEle('div','projectBottom'+i,[12,12,12,12],'projectBottom');
    let projectImageContainer = makeElem.createEle('div','projectImgContainer',[12,12,12,12],'projectimgcontainer');
    let projectImgTopDetail = makeElem.createEle('div','projectImgTop',[12,12,12,12],'projectimgtop');
    let projectImgBtmDetail = makeElem.createEle('div','projectImgBtm',[12,12,12,12],'projectimgbtm');
    let projectImgImageContainer = makeElem.createEle('div','projectImgImageContainer',[12,12,12,12],'projimgimgcontainer');
    let projImg = makeElem.createEle('img','projimg'+i,[12,12,12,12],'projimg');
    let projImgLink = makeElem.createEle('a','projLink',[12,12,12,12],'projLinks');


    projectInnerContainerTop.innerHTML = `
                                       <div class='projectCon'>
                                         <div class='projectName'>${project.name}</div>
                                        <div class='projectFrame'>${project.framework}</div>
                                       </div>
                                      `;

    project.purpose.forEach(function(purp, i){
      let purpo = makeElem.createEle('div','purpose'+i,[12,12,12,12],'purpose');
      purpo.innerHTML = purp;


      projectInnerContainerBottom.append(purpo);
    })

    projectInnerContainer.addEventListener('click',function(event) {
        projectImageViewer.classList.remove('activeImageView');
        projectImgTopDetail.innerHTML = '';
        projectImageViewer.innerHTML = '';

      for(var x=0;x<projectData.length;x++){

        if(projectData[x].name == project.name) {
          document.querySelector('#project'+x).classList.add('activeProject');

          projectImgTopDetail.innerHTML = `
                                          <div class='projImgName'>${project.name}</div>
                                          <div class='projFrame'>${project.framework}</div>

                                          `;

          
          projImg.src = project.projectImage;
          projImgLink.innerHTML = `<div class='projinnerLink'> click to view </div>`;
          projImgLink.href = project.url;

          projectImgImageContainer.append(projImg);
          projectImageContainer.append(projectImgImageContainer,projectImgTopDetail,projectInnerContainerBottom);
          projectImageViewer.append(projectImageContainer,projImgLink);
        } else {
          document.querySelector('#project'+x).classList.remove('activeProject');
          
        }
      }
        setTimeout(function(){
          projectImageViewer.classList.add('activeImageView');
        },700)
       /* projectImageViewer.append(projectInnerContainerTop);*/




    })

    projectInnerContainer.append(projectInnerContainerTop);    
    projectChildContainer.append(projectInnerContainer);
  })
  projectParentContainer.append(projectChildContainer,projectImageViewer);
 console.log(projectParentContainer);
 console.log(projectData);
 return projectParentContainer; 
}

export default ProjectPage;