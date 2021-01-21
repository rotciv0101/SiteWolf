//função para chamar o menu a partir do hamburger
//function to call the menu from the hamburger
$(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");
      $(".menu").toggleClass("active");
    });
  }); //end


  
  //funçao para fazer a transição de opacidade do background do menu
  //function to transition the opacity from the menu background
  jQuery(function () {
    jQuery(window).scroll(function () {
     if (jQuery(this).scrollTop() > 400) {
      $(".cabecalho").css('background-color', 'rgba(239, 235, 235, 1)');
      
     } else {
      $(".cabecalho").css('background-color', 'rgba(239, 235, 235, 0.6)');
     }
    });
   }); //end