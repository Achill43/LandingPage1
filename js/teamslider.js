var slideWidth=0;
var countSlides=document.getElementsByClassName('slide').length;

var maxWidth=0;
if(document.documentElement.clientWidth>750){
    maxWidth=(countSlides-2)*430;
}
else{
    maxWidth=countSlides*380;
}

    function nextSlide(){
        if(document.documentElement.clientWidth>750){
            slideWidth=slideWidth-430;
        }
        else{
            slideWidth=slideWidth-380;
        }
        if(slideWidth*(-1)<maxWidth){
            var sliderWrap=document.getElementById('teamSlider');
            marginLeft=slideWidth;
            sliderWrap.style.marginLeft=marginLeft+'px';
        }
        else{
            if(document.documentElement.clientWidth>750){
                slideWidth=slideWidth+430;
            }
            else{
                slideWidth=slideWidth+380;
            }
        }
    }
    function prevSlide(){
        if(document.documentElement.clientWidth>750){
            slideWidth=slideWidth+430;
        }
        else{
        slideWidth=slideWidth+380;
        }
        if(slideWidth<=0){
            var sliderWrap=document.getElementById('teamSlider');
            sliderWrap.style.marginLeft=slideWidth+'px';
        }
        else{slideWidth=0;}
    }