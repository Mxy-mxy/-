;(function(){
    //获取url
    let leftBox = document.querySelector('.leftBox');
    let rightBox = document.querySelector('.rightBox');
    var arr = location.search.slice(1).split("&");
    console.log(arr)
    var id = '';
    arr.forEach((value)=>{
        if(value.split("=")[0] ==="id"){
            id = value.split("=")[1];
            
        }
    })
   
    $.ajax({
        url:'http://localhost./ajax/details.php',
        type: 'get',
        data:{id},
        dataType:'json',
        success(data){
            if(!data.error){
                console.log(data.data)
                var str = `<div>
                
                <div class="img_div">
                        <img src="${data.data.goods_big_logo}" alt="">
                    </div>
                    
                    </div>`
                var ste = `<div class="item_name"><b>${data.data.cat_one_id}</b> /<b>${data.data.cat_two_id}</b> /<b>${data.data .cat_three_id}</b></div>
                <p class="item_names">${data.data.goods_name}</p>
                    <p class="item_public">￥${data.data.goods_price}</p>
                    <button type="button" id="shoppingInp" class="btn btn-default">加入购物车</button><button type="button" id="details" class="btn btn-default">查看详情</button>
                `
                    leftBox.innerHTML +=str;
                    rightBox.innerHTML +=ste;
            }
        },
        error(error){
            console.log('error')
        }
    })
})();