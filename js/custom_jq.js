$(function () {
    //변수
    var firstmenu = $(".gnb_tit"),
      header = $("header"),
      headerHeight = header.height();
  
    firstmenu.mouseenter(function () {
      firstmenu.find(".gnb_depth").hide();
      $(this).find(".gnb_depth").show();
      $(".overlay").addClass("show");
      
    });
    firstmenu.mouseleave(function () {
      header.stop().animate(
        {
          height: headerHeight,
        },
        1000
      );
      $(this).find(".gnb_depth").hide();
      $(".overlay").removeClass("show");
    });
  });
    $(document).ready(function(){
      $(window).scroll(function(){
        $('.c2_left').each(function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if(bottom_of_window > bottom_of_object){
            $(this).animate({'opacity':'1','margin-top':'0px'},1000);
          }
        });
      });
    });  