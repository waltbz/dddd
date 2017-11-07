
var curIndex = 0,
    sliIndex = 0;
$(function(){
  var timer1 = setInterval("slideBanner()",5000);
  newList();
  addTitle();

  $('.slide-banner .ban').hover(function(){
    clearInterval(timer1);
  },function(){
    timerAgain();
  });
  function timerAgain(){
    timer1 = setInterval("slideBanner()",5000);
  }
  $('.btnr').on('click',function(){
    $('.slide-banner .ban .pp img').stop();
    slideBanner();
  });
  $('.btnl').on('click',function(){
    $('.slide-banner .ban .pp img').stop();
    slideBannerl();
  });
});

function slideBanner(){
    var an = $('.slide-banner .ban .pp img'),
        dotn = $('.dots-list li'),
        dotLen = dotn.length,
        bgArr = ["a-bg","b-bg","c-bg","d-bg","a-bg","b-bg"],
        imgArr = ["a","b","c","d","a","b"];
      // for(var i=0;i<dotLen;i++){
      //   if(i==sliIndex){
      //
      //     dotn.eq(sliIndex).attr('class','active');
      //   }else{
      //     dotn.eq(i).attr('class','');
      //   }
      // }
      if(sliIndex<dotLen-1){
        sliIndex++;
      }else{
        sliIndex=0;
      }
      an.hide().attr('src','img/'+imgArr[sliIndex]+".jpg").fadeIn(1500);
      $('.slide-banner').css('backgroundImage',"url(img/"+bgArr[sliIndex]+".jpg)");
      dotn.eq(sliIndex).attr('class','active').siblings().attr('class','');
          // console.log(an.attr('src'));
          // console.log(  $('.slide-banner').css('background'));
}
function slideBannerl(){
  var an = $('.slide-banner .ban .pp img'),
      dotn = $('.dots-list li'),
      dotLen = dotn.length,
      bgArr = ["a-bg.jpg","b-bg.jpg","c-bg.jpg","d-bg.jpg","a-bg.jpg","b-bg.jpg"],
      imgArr = ["a.jpg","b.jpg","c.jpg","d.jpg","a.jpg","b.jpg"];
    // for(var i=0;i<dotLen;i++){
    //   if(i==sliIndex){
    //
    //     dotn.eq(sliIndex).attr('class','active');
    //   }else{
    //     dotn.eq(i).attr('class','');
    //   }
    // }
    if(sliIndex>0){
      sliIndex--;
    }else{
      sliIndex=dotLen-1;
    }
    an.hide().attr('src','img/'+imgArr[sliIndex]).fadeIn(1500);
    $('.slide-banner').css('backgroundImage',"url(img/"+bgArr[sliIndex]+")");
    dotn.eq(sliIndex).attr('class','active').siblings().attr('class','');

}
function newList(){
  var albumLen = $('.roll-list').length;
  $('.album-link').hover(function(){
    $(this).next().show();
  },function(){
    $(this).next().hide();
  });
  $('.album-play').hover(function(){
    $(this).show();
  },function(){
    $(this).hide();
  });

  $('.album-next').on('click',function(){
    nextChange(curIndex);
    if(curIndex<albumLen-1){
      curIndex++;
    }else{
      curIndex=0;
    }

  }).delay(1000);
  $('.album-prev').on('click',function(){
    prevChange(curIndex);
    if(curIndex>0){
      curIndex--;
    }else{
      curIndex=albumLen-1;
    }
  }).delay(1000);

  function nextChange(n){
    if(n==albumLen-2){
      $('.roll-list').eq(0).css('transition','').css('left','645px');
      $('.roll-list').eq(n).css('transition','left 1s ease-out 0s').css('left','-645px');
      $('.roll-list').eq(n+1).css('transition','left 1s ease-out 0s').css('left','0px');
    }else if(n==albumLen-1){
      for(var i=0;i<albumLen;i++){
        $('.roll-list').eq(albumLen-i).css('transition','').css('left','645px');
      }
      $('.roll-list').eq(n).css('transition','left 1s ease-out 0s').css('left','-645px');
      $('.roll-list').eq(0).css('transition','left 1s ease-out 0s').css('left','0px');
    }else{
      $('.roll-list').eq(albumLen-1).css('transition','').css('left','645px');
      $('.roll-list').eq(n).css('transition','left 1s ease-out 0s').css('left','-645px');
      $('.roll-list').eq(n+1).css('transition','left 1s ease-out 0s').css('left','0px');
    }
  }
  function prevChange(n){
     if(n==0){
      $('.roll-list').eq(albumLen-2).css('transition','').css('left','-645px');
      $('.roll-list').eq(n).css('transition','left 1s ease-out 0s').css('left','645px');
      $('.roll-list').eq(albumLen-1).css('transition','left 1s ease-out 0s').css('left','0px');
    }else{
      $('.roll-list').eq(n-2).css('transition','').css('left','-645px');
      $('.roll-list').eq(n).css('transition','left 1s ease-out 0s').css('left','645px');
      $('.roll-list').eq(n-1).css('transition','left 1s ease-out 0s').css('left','0px');
    }
  }
}
function addTitle(){
  var msn = $('.music-name');
  var no = msn.prev();
  for(var i=0;i<msn.length;i++){
    msn.eq(i).attr('title',msn.eq(i).text());
    if(i<3){
      no.eq(i).addClass('no-top');
    }
  }
}
