$(function () {
  $(".headerPopup>.closeBtn").on("click",function(){
    $(".headerPopup").css("display","none");
  })

  $(".hamBtn").on('click',function(){
    $("nav").stop().animate({
      "left":0
    },700)
  })

  $("nav>.closeBtn").on('click',function(){
    $("nav").stop().animate({
      "left":"-100%"
    },500)
  })

  $(".langBtn").off().on('click',function(){
    $(".lang").slideToggle();
  })
  $(".m_lang").on('click',function(){
    $('.m_lang_box').css("display","block");
  })
  $(".m_lang_box").on('click',function(){
    $(".m_lang_box").slideUp();
  })

  //submenu Slide
  let wWidth = $("body").outerWidth();
  function hdinit(){
    wWidth = $("body").outerWidth();
    if(wWidth > 1023) {
      $("nav").css("left",0);
      $("#nav>li").on('mouseenter',function(){
        $(this).children(".subWrap").slideDown(500)
      })
      $("#nav>li").on('mouseleave',function(){
        $(this).children(".subWrap").slideUp(300)
      })
    } else{
      $("nav").css("left","-100%");
    }
  }
  wWidth = $("body").outerWidth();
  hdinit();

  $(window).on("resize", function(){
    wWidth = $("body").outerWidth();
    hdinit();
  })
  

  //#toTop
  $("#toTop").on('click',function(){
    $("html").stop().animate({
      scrollTop:0
    },700)
  })
})