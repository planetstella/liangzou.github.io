window.onload = function(){
    changeIcon = function(icon){
        icon.classList.toggle("fa-solid");
    }
}


$(function(){

    $('.header-frame').load('../header.html');
  
    $('.footer-frame').load('../footer.html');
  
  })