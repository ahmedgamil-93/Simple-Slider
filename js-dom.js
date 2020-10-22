
var imgs=Array.from(document.querySelectorAll(".container img"));
var lightboxContainer= document.getElementById("lightbox-container");
var lightboxItem= document.getElementById("lightbox-item");
var nextBtn= document.getElementById("next");
var prevBtn= document.getElementById("prev");
var closeBtn= document.getElementById("close");
var open=false;

 var currentSlideIndex = 0;
 for(var i=0 ; i< imgs.length ; i++)
 {
     imgs[i].addEventListener("click" , openLightBox);

 }
 function openLightBox (eventInfo)
 {
     open="true";
     currentSlideIndex =imgs.indexOf(eventInfo.target);
     var imgSrc = eventInfo.target.src;     
     lightBoxContainer.style.display = "flex";
     lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
     
 }

 function nextSlide()
 {
     currentSlideIndex++;
     if(currentSlideIndex==imgs.length)
     {
         currentSlideIndex=0;
     }
     var imgSrc=imgs[currentSlideIndex].src;
     lightBoxItem.style.backgroundImage =`url(${imgSrc})`;

    
 }
 function prevSlide()
 {
     currentSlideIndex-- ;
     if(currentSlideIndex < 0)
     {
         currentSlideIndex=imgs.length-1;
     }
     var imgSrc=imgs[currentSlideIndex].src;
     lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

 }

 function closeSlide()
 {
     lightBoxContainer.style.display="none"
 }


  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  closeBtn.addEventListener("click" , closeSlide);


  document.addEventListener("keydown", function(e){
if(open=true){

    if(e.key=="ArrowRight")
    {
        nextSlide();
    }
    else if(e.key=="ArrowLeft")
    {
        prevSlide();
    }
    else if(e.key=="Escape")
    {
       closeSlide();
          
    }

}
  })

 

  