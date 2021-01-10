$(document).ready(function () {
    $(".site-content img").click(
        function() {
            $(".site-content img").hide(500);
            $("header h1").fadeOut(500);
            $(".site-info h1").animate({
                opacity: 0.7,
                
              }, {
                duration: 500,
                easing: "linear",
                complete: function(){
                    $(this).after("<p>See you in 2021!</p>").css("color","Orange").css("transition","0.5s");
                    $(".site-info p").css("color","Orange").css("font-size","95px").css("transition","0.5s");
                }
            }
        );
    });
});
