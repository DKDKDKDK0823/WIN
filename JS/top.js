// swiper
let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  new Swiper('.swiper-container', swipeOption);
//  swiper
// textillate
$(function() {
    $('.text-left').textillate({
        selector: '.texts',	// 要素を指定
        loop: false,	// ループ繰り返し
        minDisplayTime: 3000,	// アニメーションの間隔時間
        initialDelay: 1000,	// アニメーション開始までの遅延時間
        autoStart: true,	// アニメーションの自動スタート
        inEffects: [],	// エフェクト開始時のアニメーション設定
        outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定
    
        in: {
            effect: 'fadeInLeft',	// エフェクトの指定
            delayScale: 1.5,	// 遅延時間の指数
            delay: 50,	// 文字ごとの遅延時間
            sync: false,	// アニメーションをすべての文字に同時に適用
            shuffle: false, // 文字のランダム表示
            reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
            callback: function () {}	// コールバック関数
        },
    });
});
// textillate
// Animate On Scroll Library
AOS.init();
// Animate On Scroll Library
// Scroll
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
}); 
// Scroll