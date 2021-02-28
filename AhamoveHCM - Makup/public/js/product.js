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

function initparticles() {
   bubbles();
   // hearts();
   // lines();
   // confetti();
   // fire();
   // sunbeams();
}

/*The measurements are ... whack (so to say), for more general text usage I would generate different sized particles for the size of text; consider this pen a POC*/

function bubbles() {
   $.each($(".particletext.bubbles"), function() {
      var bubblecount = $(this).width() / 50 * 10;
      for (var i = 0; i <= bubblecount; i++) {
         var size = $.rnd(40, 80) / 10;
         $(this).append(
            '<span class="particle" style="top:' +
            $.rnd(20, 80) +
            "%; left:" +
            $.rnd(0, 95) +
            "%;width:" +
            size +
            "px; height:" +
            size +
            "px;animation-delay: " +
            $.rnd(0, 30) / 10 +
            's;"></span>'
            );
      }
   });
}

$(document).ready(function () {

   jQuery.rnd = function(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
   };

   initparticles();
});
