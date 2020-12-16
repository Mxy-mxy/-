;(function(){
    let box = document.querySelector('.box');
    let arr = location.search.slice(1).split("&");
    let id = '';
    let str = '';
    var goods_name = '';
    var goods_price = 0;
    var goods_detail = '';
    // var goods_num = 0;
    let allData = [];
    let name = localStorage.getItem("name");
    let names = JSON.parse(localStorage.getItem("username"));
    //验证用户是否合法登录
    if(!names){ 
      alert("请先登录")
      location.href = '../login.html';
    }
    arr.forEach((value)=>{
        id = value.split("=")[1];
    });
    $.ajax({
        url: 'http://rap2api.taobao.org/app/mock/269388/http://list.com',
        data:{
            id
        },
        dataType:'jsonp',
        success(data){
            data.result.data.forEach((value)=>{
                allData.push(value);
                if(id == value.goods_id){
                    console.log(value);
                     goods_name = value.goods_name;
                     goods_price = value.goods_public;
                     goods_detail = value.goods_detail;
                    //  goods_number = value.goods_number;
                    
             str = `
            <div class="img-left">
            <img src="${value.goods_img}" alt="">
        </div>
        <div class="right-box">
            <p class="goods_name">${value.goods_name}</p>
            <p class="goods_detail">${value.goods_detail}</p>
            <button class="add_shopp" data-id="${id}">加入购物车</button>
            <button class="go_shopp">去购物车</button>
        </div>
            `
                }
            })
           
            box.innerHTML +=str;
        }
    });
    $('.box').on('click','button',function(){

        if(this.className === 'add_shopp'){
           
            var goodsId = this.getAttribute("data-id");
            $.ajax({
                url:'http://localhost./php/addList.php',
                data:{
                    userId: id,
                    username: name,
                    goods_name,
                    goods_detail,
                    goods_price,
                  
                },
                type:'post',
                dataType:'json',
                success(data){
                    if(!data.error){
            
                        var goods_item = allData.find(function(value){
                            
                            return value.goods_id == goodsId;
                            
                        })
                        alert("加入成功");
                    }
                },
              
            })
           
            
        }else{
            location.href = '../html/goshopp.html';
        }
    })
})();  