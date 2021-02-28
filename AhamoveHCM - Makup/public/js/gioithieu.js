$(document).ready(function () {
   console.log("vao");
   $(window).scroll(function(e) {
      console.log("vao trong");
      if ($(this).scrollTop() > 0)
      {
         $(".menu").addClass("menu-fixed");
      }
      else
      {
         $(".menu").removeClass("menu-fixed");  
      }
   });

});
