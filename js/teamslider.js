var slideWidth=0;
var countSlides=document.getElementsByClassName('slide').length;
var maxWidth=(countSlides-2)*430;

    function nextSlide(){
        slideWidth=slideWidth-430;
        if(slideWidth*(-1)<maxWidth){
            var sliderWrap=document.getElementById('teamSlider');
            marginLeft=slideWidth;
            sliderWrap.style.marginLeft=marginLeft+'px';
        }
        else{
            slideWidth=slideWidth+430;
        }
    }
    function prevSlide(){
        slideWidth=slideWidth+430;
        if(slideWidth<=0){
            var sliderWrap=document.getElementById('teamSlider');
            sliderWrap.style.marginLeft=slideWidth+'px';
        }
        else{slideWidth=0;}
    }