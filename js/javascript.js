$(document).ready(function () {
    $('.menus li a').on('click', function(event){
        let target=$(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 800, function(){
            window.location.target = target;
          e.preventDefault();
    }); 
});