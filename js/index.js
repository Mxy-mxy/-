let content = document.querySelector('.content');
let arr = [];
let uls = document.querySelectorAll('.firstUl');
let btn10 = document.querySelector('.btn10');
let body = document.body;
let allConner = document.querySelector('#allConner');
let names = JSON.parse(localStorage.getItem("username"));
    //验证用户是否合法登录
    if(!names){ 
      alert("请先登录")
      location.href = '../login.html';
    }
body.onscroll = function(){
    if(allConner.scrollTop == 100){
        console.log(2)
    }
}
btn10.onclick = function(e){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
$.ajax({
    url:'http://rap2api.taobao.org/app/mock/269388/http://list.com',
    type: 'get',
    dataType:'json',
    data:{},
    success(data){
        if(!data.error){
            arr = data.result.data;
           
            // var num = arr.length/8;
            for(var i = 0; i < arr.length; i++){
                var item = arr[i];
                var str = `
                <a href="../html/details.html?id=${item.goods_id}">
                <li class="litterList">
                    <div class="litterList-img">
                    <img src="${item.goods_img}" alt="">
                   
                </div>
                <div class="litterList-name">
                    <p class="top-p">${item.goods_name}</p>
                    <p class="center-p">${item.goods_detail}</p>
                    <div class="button-p"><p class="bottom-p">￥${item.goods_public}</p></div>
                </div>
                </li>
                </a>
                </li>
                `
               uls[i % 5].innerHTML +=str; 
            }
            
          
           
        }
    }
    
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
