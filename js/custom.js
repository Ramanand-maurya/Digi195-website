//---------------slick slider js
$().ready(function(){
    $('.slider-content-js').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      infinite: true,
      fade: true,
      autoplay:true,
      autoplaySpeed:2000,
    });
  });

  
//  Menu js

$(document).ready(function(){
  $(".triggerBtn").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".times1").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".sidebar-overlay").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".mega-menu").click(function(){
    $(".sub-menu-block").slideToggle();
    $(this).toggleClass("active");
  });
});
$(document).ready(function(){
  $(".sub-menu-head").click(function(){
    $(this).parent().siblings().find(".sub-menu-lists").slideUp();
    $(this).parent().siblings().find(".sub-menu-head").removeClass("active");
    $(this).siblings(".sub-menu-lists").slideToggle();
    $(this).toggleClass("active");
  });
});


// input file upload js

const finputs = Array.from(
  document.querySelectorAll('.uploadCvFiles [type="file"]')
);

finputs.forEach((input) => {
  input.addEventListener("change", (e) => {
      const path = e.target.value;
      const filenameField = e.target.parentElement.querySelector("span");
      const filename = path.split(/\/|\\/).pop();
      if (filename) {
        filenameField.innerText = filename;
      }
  });
});

$( '.uploadCvFiles [type="file"]' ).change(function() {
  var upfilePath=$('.uploadCvFiles [type="file"]').val();
  if (upfilePath){
    $(".uploadCv .uploadCvFiles div a.cvfile").addClass("active");
  }
});

$(document).ready(function(){
  $(".uploadCv .uploadCvFiles div a.cvfile small").click(function(){
    $(".uploadCv .uploadCvFiles div a.cvfile").removeClass("active");
  });
});


///on refresh page scroll to top

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


///on re-size customize pade

$(window).bind("resize", function () {
  // console.log($(this).width())
  if ($(this).width() <= 576) {
      $('.main-drivenProcessr .main-process').removeClass('fadeInLeft').addClass('fadeInUp');
  } else {
      $('.main-drivenProcessr li:nth-child(odd) .main-process').removeClass('fadeInUp').addClass('fadeInLeft');
  }
}).trigger('resize');

//contect form active btn
$(document).ready(function(){
  $(".contactF .servicesBtn a").click(function(){
    $(this).parent().siblings().find("a").removeClass("active");
    $(this).addClass("active");
  });
});


//blog page active menu btn
$(document).ready(function(){
  $(".blog-header-menu ul li").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
});
