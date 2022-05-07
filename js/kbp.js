$(function(){
  window.addEventListener('scroll',function(){
    // console.log(window.scrollY)
    if(window.scrollY !== 0){
      $(".videoBox").css({
        width:"60%",
        height:"calc(100vw * 0.3)"
      })
    } else{
      $(".videoBox").css({
        width:"100%",
        height:"100%"
      })
    }

    if(window.scrollY >= 10){
      $(".newIn>.title").stop().animate({
        "margin-top":"-200px"
      },1000)
    } else{
      $(".newIn>.title").stop().animate({
        "margin-top":"0"
      },1000)
    }
  })

  var wWidth = $(window).outerWidth();
  var curIndex = 0;
  var slideList = $(".fabricsContent");
  var slideCount = slideList.length;
  var pdIndex = $(".productsBox").index();

  var slideWidth = $(".fabricsContent:eq(0)").width();

  //복사 & 붙이기
  var slideCopy = $(".fabricsContent:lt(3)").clone();
  $(".fabricsSlideWrap").append(slideCopy);

  var tbCopy = $(".textBoxWrap>.textBox:lt(3)").clone();
  $(".textBoxWrap").append(tbCopy);
  var pdCopy = $(".productsBox:lt(3)").clone();
  $(".productsWrap").append(pdCopy);

  // 전체슬라이드너비
  var slideTtlWidth = slideWidth * (slideCount + 3);
  $(".fabricsSlideWrap").width(slideTtlWidth);
  $(".fabricsContent").width(slideWidth);

  //slide
  let timer = setInterval(slideFabrics,5000);

  function slideFabrics(){
    $(".fabricsSlideWrap").width(slideTtlWidth);
    $(".fabricsContent").width(slideWidth);
    if(curIndex==9){
      curIndex=0;
      $(".fabricsSlideWrap").css("margin-left",0)
    }
    curIndex++;
    $(".fabricsSlideWrap").stop().animate({
      marginLeft: -curIndex * slideWidth
    },1000)

    $(".textBoxWrap>.textBox:eq(" + curIndex +")").css({
      "opacity":"1",
      "margin-left":0
    }).siblings().css({
      "opacity":0,
      "margin-left":"-300px"
    });

    $(".productsBox:eq(" + curIndex +")").addClass("active").siblings().removeClass("active");
  }

  //arrow
  $(".fabrics>.arrow>.rightBtn").on('click',function(){
    if(curIndex == slideCount){
      curIndex = 0;
      $(".fabricsSlideWrap").css("margin-left",0)
    }
    curIndex++;

    $('.fabricsSlideWrap').stop().animate({
      marginLeft: -curIndex*slideWidth
    },1000)

    $(".textBoxWrap>.textBox:eq(" + curIndex +")").css({
      "opacity":"1",
      "margin-left":0
    }).siblings().css({
      "opacity":0,
      "margin-left":"-300px"
    });

    $(".productsBox:eq(" + curIndex +")").addClass("active").siblings().removeClass("active");
  })

  $(".fabrics>.arrow>.leftBtn").on('click',function(){
    if(curIndex == 0){
      curIndex = 10;
      $(".fabricsSlideWrap").css("margin-left",-100 * curIndex + "%");
    }
    curIndex--;

    $(".fabricsSlideWrap").stop().animate({
      marginLeft: -curIndex * slideWidth
    },1000)

    $(".textBoxWrap>.textBox:eq(" + curIndex +")").css({
      "opacity":"1",
      "margin-left":0
    }).siblings().css({
      "opacity":0,
      "margin-left":"-300px"
    });

    $(".productsBox:eq(" + curIndex +")").addClass("active").siblings().removeClass("active");
    
  })

  //mouseover & out
  $(".fabricsSlideWrap").on("mouseover",function(){
    clearInterval(timer);
  })
  $(".fabricsSlideWrap").on("mouseout",function(){
    timer = setInterval(slideFabrics,3000)
  })
  $(".fabrics>.arrow").on("mouseover",function(){
    clearInterval(timer);
  })
  $(".fabrics>.arrow").on("mouseout",function(){
    timer = setInterval(slideFabrics,3000)
  })

  
  let showSlide = 0;
  let rnbWidth;
  let rnbCount = $(".rnbContent").length;
  let rnbObj = $(".rnbContent:lt(4)").clone();
  $(".rnbSlideWrap").append(rnbObj);
  let rnbCopy = $(".rnbContent").length;
  
  // 너비구하기
  $(".rnbSlideWrap").width(rnbWidth * rnbCopy);
  $(".rnbContent").outerWidth(rnbWidth);

  function init(){
    //Ribbon & button 
    //banner
    wWidth = $(window).outerWidth();
    rnbWidth = $(".rnbContent").outerWidth();
    if(wWidth > 1023) {
      $(".rnbSlideWrap").width(100 * rnbCopy / 4 + "%");
      $(".rnbContent").outerWidth(100 / rnbCopy + "%");
      $(".ribbonButton>.pager>li:gt(1)").css("display","none");
    } else if(wWidth > 767 && wWidth <= 1023) {
      $(".rnbSlideWrap").width(100 * rnbCopy / 3 + "%");
      $(".rnbContent").outerWidth(100 / rnbCopy + "%");
      $(".ribbonButton>.pager>li:gt(2)").css("display","none");
    } else {
      $(".rnbSlideWrap").width(100 * rnbCopy / 2 + "%");
      $(".rnbContent").outerWidth(100 / rnbCopy + "%");
    }
  }
  wWidth = $(window).outerWidth();
  rnbWidth = $(".rnbContent").outerWidth();
  init();

  $(window).on("resize",function(){
    wWidth = $(window).outerWidth();

    curIndex = 0;
    $(".fabricsSlideWrap").width(slideTtlWidth);
    $(".fabricsContent").width(slideWidth);
    $(".fabricsSlideWrap").css("margin-left",0);
    $(".fabricsContent").children(".textBox").removeClass('active');

    slideFabrics();

    showSlide = 0;
    rnbWidth = $(".rnbContent").outerWidth();
    $(".rnbSlideWrap").css("margin-left",0);
    $(".ribbonButton>.pager>li").eq(showSlide).addClass('active').siblings().removeClass('active');

    $(".ribbonButton>.pager>li").css("display","inline-block");

    init();
    
  })

  function moveBanner(){
    $(".rnbSlideWrap").stop().animate({
      "margin-left": -showSlide * moveX
    },500)
    $(".ribbonButton>.pager>li").eq(showSlide).addClass('active').siblings().removeClass('active');
  }
  
  $(".ribbonButton>.pager>li").on('click',function(){
    showSlide =$(this).index();
    wWidth = $(window).outerWidth();
    rnbWidth = $(".rnbContent").outerWidth();
    if(wWidth > 1023){
      moveX = rnbWidth * 4
    } else if(wWidth > 767 && wWidth <= 1023){
      moveX = rnbWidth * 3
    } else {
      moveX = rnbWidth * 2
    }
    moveBanner();
  })

  
  $(".ribbonButton>.arrow>.rightBtn").on('click',function(){
    if(wWidth>1023){
      if(showSlide<1){
        showSlide++;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
        
      } else if(showSlide==1){
        showSlide=0;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
      }
    } else if(wWidth > 767 && wWidth <=1023){
      if(showSlide<2){
        showSlide++;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
        
      } else if(showSlide==2){
        showSlide=0;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
      }
    } else {
        if(showSlide<3){
          showSlide++;
          $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
          
        } else if(showSlide==3){
          showSlide=0;
          $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
        }
      }
    })
    
  $(".ribbonButton>.arrow>.leftBtn").on('click',function(){
    if(wWidth>1023){
      if(showSlide>0){
        showSlide--;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
        
      } else{
        showSlide=1;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
      }
    } else if(wWidth > 767 && wWidth <=1023){
      if(showSlide>0){
        showSlide--;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
        
      } else if(showSlide==0){
        showSlide=2;
        $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
      }
    } else {
        if(showSlide>0){
          showSlide--;
          $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
          
        } else if(showSlide==0){
          showSlide=3;
          $(".ribbonButton>.pager>li").eq(showSlide).trigger('click');
        }
      }
  })
  

  // hoverImg
  $(".rnbContent .imgBox").on('mouseover',function(){
    $(this).children(".hoverImg").stop().animate({
      "opacity":"1"
    },500)
  })
  $(".rnbContent .imgBox").on('mouseout',function(){
    $(this).children(".hoverImg").stop().animate({
      "opacity":"0"
    },500)
  })

})