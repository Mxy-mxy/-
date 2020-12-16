;(function(){
    let url = location.search;
    let name = url.slice(1).split('=')[1];
    let username = document.querySelector('.username');
    let banner = document.querySelector('.banner');
    let lis =document.querySelectorAll('.lis');
    let bannerList = document.querySelector('.bannerList');
    let names = JSON.parse(localStorage.getItem("username"));
    //验证用户是否合法登录
    if(!names){ 
      alert("请先登录")
      location.href = '../login.html';
    }
    username.innerHTML =`
    <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              ${name}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">个人中心</a></li>
              <li><a href="../login.html">退出</a></li>
            </ul>
          </div>
    `
    banner.innerHTML = `
    <ul class="bannerList">
    <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><a href="../html/index.html"><img src="https://res4.vmallres.com/shopdcGray/shopdc/pic/cc6d442e-398f-4268-b7e5-a20db5a1e180.jpg" alt=""></a></div>
      <div class="swiper-slide"><a href="../html/index.html"><img src="https://res6.vmallres.com/shopdcGray/shopdc/pic/bacd6281-7159-4333-9f6f-d9bab84ca838.png" alt=""></a></div>
      <div class="swiper-slide"><a href="../html/index.html"><img src="https://res9.vmallres.com/shopdcGray/shopdc/pic/ff934e1c-090f-4b11-8172-9669e70b28e6.jpg" alt=""></a></div>
      <div class="swiper-slide"><a href="../html/index.html"><img src="https://res7.vmallres.com/shopdcGray/shopdc/pic/e58e155c-5051-43fc-95ec-28b9ae93c518.jpg" alt=""></a></div>
      <div class="swiper-slide"><a href="../html/index.html"><img src="https://res5.vmallres.com/shopdc/pic/8e0ba09a-3aa8-40b8-b6fd-2344ccad153d.jpg" alt=""></a></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Navigation -->

  </div>

        </ul>
    `
    var myPlugin = {
      name: 'debugger',
      params: {
        debugger: false,
      },
      on: {
        init: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('init');
        },
        click: function (swiper, e) {
          if (!swiper.params.debugger) return;
          console.log('click');
        },
        tap: function (swiper, e) {
          if (!swiper.params.debugger) return;
          console.log('tap');
        },
        doubleTap: function (swiper, e) {
          if (!swiper.params.debugger) return;
          
        },
        sliderMove: function (swiper, e) {
          if (!swiper.params.debugger) return;
          
        },
        slideChange: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('slideChange', this.previousIndex, '->', this.activeIndex);
        },
        slideChangeTransitionStart: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('slideChangeTransitionStart');
        },
        slideChangeTransitionEnd: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('slideChangeTransitionEnd');
        },
        transitionStart: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('transitionStart');
        },
        transitionEnd: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('transitionEnd');
        },
        fromEdge: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('fromEdge');
        },
        reachBeginning: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('reachBeginning');
        },
        reachEnd: function (swiper) {
          if (!swiper.params.debugger) return;
          console.log('reachEnd');
        },
      },
    };



    // Install Plugin To Swiper
    Swiper.use(myPlugin);

    // Init Swiper
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
    });
    console.log(name)
    localStorage.setItem("name",name);
})();