import MakeElement from './MakeElement.js';

function moveCarousel() {

}


function ImageCarousel(data) {
  let pictures = data.displayImages;
  let makeEle = new MakeElement;
  let y = 1;
  let imageContainer = makeEle.createEle('div','ImageContainer',[12,12,12,12],'imageContainer');


  pictures.forEach(function(pic,i){
    let picContain = makeEle.createEle('div','picContain'+i,[12,12,12,12],'picContain');
    let actualPic = makeEle.createEle('div','actualPic'+i,[12,12,12,12],'actualPic');


    actualPic.style.cssText = `background:url(${pic}) no-repeat;`;


    picContain.append(actualPic);
    imageContainer.append(picContain);

  })


  console.log(window.innerWidth);



ready();




  return imageContainer;

}


  function ready(callback){
      // in case the document is already rendered
      if (document.readyState!='loading') callback();
      // modern browsers
      else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
      // IE <= 8
      else document.attachEvent('onreadystatechange', function(){
          if (document.readyState=='complete') callback();
      });
    }

    ready(function(){
      let picIndex = 0;
      moveCarousel();
      function moveCarousel() {
        let getPics = document.querySelectorAll('.picContain');
        for(var x=0;x < getPics.length;x++){
          getPics[x].style.display = 'none';
        }
        if(picIndex > getPics.length) {
          picIndex = 0;
        } 
        getPics[picIndex - 1].style.display = 'block';
        setTimeout(moveCarousel(),2000);

        console.log(getPics);
      }
  });


export default ImageCarousel;