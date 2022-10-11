$(function () {
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

$(document).ready(function () {
  $(window).scroll(function () {
    $(".c2_left").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate({ opacity: "1", top: "0px" }, 3000);
      }
    });
    $(".c2_right").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate({ opacity: "1", top: "0px" }, 3000);
      }
    });
    $(".c3_right_top").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate({ opacity: "1", top: "0px" }, 4000);
      }
    });
    $(".c3_left_bottom").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate({ opacity: "1", top: "0px" }, 4500);
      }
    });
  });
});

$(".openMOgnb .ir_so").click(function (e) {
  e.preventDefault();
  $("header").addClass("on");
  $("header .mobile_gnb").slideDown("fast");
});
$(".closePop").click(function (e) {
  e.preventDefault();
  $("header .mobile_gnb").slideUp("fast");
  $("header").removeClass("on");
});

const btt = document.querySelector("#to_top");
let scrollAmount;
window.addEventListener("scroll", function () {
  scrollAmount = this.scrollY;
  if (scrollAmount > scrollAmount / 4) {
    btt.classList.add("visible");
  } else {
    btt.classList.remove("visible");
  }
})
btt.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(btt.getAttribute('href')).scrollIntoView({behavior:'smooth'})
})
