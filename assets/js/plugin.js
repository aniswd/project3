    $(function(){
 

    // Navbar
    $(window).scroll(function(){
    if($(this).scrollTop() > 10){
	   $("#primaryNav").addClass('_primary_nav_bg');
    }else{
	   $("#primaryNav").removeClass('_primary_nav_bg');
	   }
    });

     $(window).scroll(function(){
        if($(this).scrollTop() > 15){
           $("._header_msg").addClass('_popup');
        }else{
           $("._header_msg").removeClass('_popup');
           }
        });


    // Nav menu slide toggle
    $("._mob_menu_icon").click(function(){
    $("._primary_menu").slideToggle(700);
    });

     $("._mob_menu_icon").click(function(){
      $("#primaryNav").addClass('_primary_nav_bg');
    });

    // Clients
   $('._clients_slide').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    // Countet up
    $('._counts').counterUp({
            delay: 10,
            time: 1000
        });

    /* FAQ */
      var icons = {
          header: "ui-icon-circle-arrow-e",
          activeHeader: "ui-icon-circle-arrow-s"
        };
        $( "#accordion" ).accordion({
          icons: icons
        });
        $( "#toggle" ).button().on( "click", function() {
          if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
          } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
          }
        });

      // SCROLLIT         
      $.scrollIt({
          upKey: 38,
          downKey: 40,
          easing: "swing",
          scrollTime: 700,
          activeClass: "active",
          onPageChange: null,
          topOffset: -15
      });

      // WOW ANIMATE
      new WOW().init();




});
