window.sr = ScrollReveal();

var testReveal = {
  delay    : 200,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};


function setScroll(){
  $(window).scroll(function(e){
    $('.background').css('top', $(window).scrollTop()+'px')
  })
}






$(function(){
  sr.reveal('.test', testReveal)
  setScroll()


})
