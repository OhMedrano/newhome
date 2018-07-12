import MakeElement from '../Tools/MakeElement.js';


function ProjectPage(data,imgGal) {
  let makeElem = new MakeElement;
  let projectData = data.projects;

  let projectParentContainer = makeElem.createEle('div','projects',[12,12,12,12],'contentContainerItem');
  let projectChildContainer = makeElem.createEle('div','projectContainer',[12,12,12,12],'projectContainer');
  let projectImageViewer = makeElem.createEle('div','projectImageViewer',[12,12,12,12],'projectImageView');


  projectData.forEach(function(project,i){
    let projectInnerContainer = makeElem.createEle('div','project'+i,[12,12,12,12],'project');
    let projectInnerContainerTop = makeElem.createEle('div','projectTop'+i,[12,12,12,12],'projectTop');
    let projectInnerContainerBottom = makeElem.createEle('div','projectBottom'+i,[12,12,12,12],'projectBottom');
    
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
      for(let x=0;x<projectData.length;x++){
        projectImageViewer.classList.remove('activeImageView');
        if(projectData[x].name == project.name) {
          document.querySelector('#project'+x).classList.add('activeProject');
          
        } else {
          document.querySelector('#project'+x).classList.remove('activeProject');
        }
      }
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