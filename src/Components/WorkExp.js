import MakeElement from '../Tools/MakeElement.js';

/*
  DOM -----


        <workExpContainer contentContainerItem>
          <workExpContInner>
            <workContainTopHalf>
              
              --- If Present --- 
                <workName>
                <workDate> xxxx - Present </workDate>
                <workPosition>

              -----------------
              --- If Ended ----
                <workName>
                <workDate> xxxx - xxxxx </workDate>
                <workPosition>
            

            </workContainTopHalf>
            <workContainBottomHalf>
                <dut>
                <dut>
                <dut>
                <dut>
            <workContainBottomHalf>
          </workExpContInner>
        </workExpContainer contentContainerItem>



*/

function WorkExp(data) {
  let workData = data.work;
  let makeElem = new MakeElement;

  let workExpContainer = makeElem.createEle('div','experience',[12,12,12,12],'contentContainerItem');
  
  workData.forEach(function(work,i){
    let workExpContainerInner = makeElem.createEle('div','workExpContainerInner',[12,12,12,12],'workExpContInner');
    let workContainTopHalf = makeElem.createEle('div','workContainTopHalf'+i,[12,12,12,12],'workContainTopHalf');
    let workContainBottomHalf = makeElem.createEle('div','workContainBtmHalf'+i,[12,12,12,12],'workContainBottomHalf')
    

    if(work.isPresent) {
      console.log('is Present');
      let workPresent = makeElem.createEle('div','workPresent'+i,[12,12,12,12],'workPresent');

      workPresent.innerHTML = `<div class='workName'>${work.name}</div>
                                <div class='workDate'>${work.startDate} - Present </div>
                                <div class='workPosition'>${work.position}</div>
                              `;

      workContainTopHalf.append(workPresent);
    } else {
      
      let workPast = makeElem.createEle('div','workPast'+i,[12,12,12,12],'workPast');
      workPast.innerHTML = `<div class='workName'>${work.name}</div>
                                <div class='workDate'>${work.startDate} - ${work.endDate} </div>
                                <div class='workPosition'>${work.position}</div>
                              `;

      workContainTopHalf.append(workPast);    
    }

    work.duties.forEach(function(duty,i){
      let dut = makeElem.createEle('div','duty'+i,[12,12,12,12],'duty');
      dut.innerHTML = `- ${duty}`;

      workContainBottomHalf.append(dut);

    })

    
    workExpContainerInner.append(workContainTopHalf,workContainBottomHalf);
     workExpContainer.append(workExpContainerInner);
  })

 


  return workExpContainer;

}

export default WorkExp;