let sliderImage= document.querySelectorAll('.slide'),
    arrowLeft= document.querySelector('#arrow-left'),
    arrowRight= document.querySelector('#arrow-right'),
    current=0;

// CLEAR ALL images
    function reset() {
      for(let i=0; i<sliderImage.length; i++){
        sliderImage[i].style.display= 'none'
      }
    }
//INITIALIZE Slider
    function startSlide(){
      reset();
      sliderImage[0].style.display= 'block';
    }

//Show prev
      function slideLeft() {
        reset();
        sliderImage[current-1].style.display='block';
        current--;
      }

//Show next
      function slideRight() {
        reset();
        sliderImage[current+1].style.display='block';
        current++;
      }

//Left Arrow Click
     arrowLeft.addEventListener('click',function(){
       if (current===0) {
         current= sliderImage.length
       }
       slideLeft();
     });

//Left Arrow Click
      arrowRight.addEventListener('click',function(){
        if (current===sliderImage.length-1) {
          current= -1
        }
        slideRight();
      });

      startSlide();
