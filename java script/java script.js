$(function(){
    let navbar = $('#header')
    let BackToTopBtn = $('.backToTopBtn') 

    $(window).scroll(function(){
        let scrTop = $(window).scrollTop();
        if(scrTop>400){
            navbar.addClass("menu_animate")
        }else{
            navbar.removeClass("menu_animate")
        }

        //BACK TO TOP BTN
            if(scrTop>600){
                BackToTopBtn.fadeIn()
            }else{
                BackToTopBtn.fadeOut()
            }
    })
/*end menu sticky js*/

   $('.banner_slider').slick({
       autoplay:true,
       autoplaySpeed:2500,
       speed:1000,
       prevArrow:'<i class="banner_slider_icon fas fa-arrow-left"></i>',
       nextArrow:'<i class="banner_slider_icon fas fa-arrow-right"></i>',
       dots:true,
        dotsClass:'banner_slider_dots',
   })

/*end banner js*/
//BACK TO TOP BTN
BackToTopBtn.click(function(){
    $("html,body").animate({
        scrollTop:0,
    },2000)
})





})