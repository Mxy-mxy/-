;(function(){
    let allInput = document.querySelector('.allInput');
    let list = document.querySelector('.list');
    // let inputItem = document.querySelectorAll('.inputs');
    let dataList = [];
    let counts = document.querySelector('.counts');
    let names = JSON.parse(localStorage.getItem("username"));
    //验证用户是否合法登录
    if(!names){ 
      alert("请先登录")
      location.href = '../login.html';
    }
    $.ajax({
        url:'http://localhost./php/goshopp.php',
        data:{},
        type:'get',
        dataType:'json',
        success(data){
            dataList = data.data;
            localStorage.setItem('goods',JSON.stringify(dataList));
             if(!data.error){
                 if(!dataList.length){
                    list.innerHTML =`
                    <li class="lis">
           
            <div class="li_info">
                    <h2>购物车空空如也</h2>
                    <button><a href="../html/index.html">快去选购商品吧</a></button>
            </div>
            </li>
                    `
                    return
                 }else{
                     render(dataList);
                 }
        }
        }
    });
   
    list.onclick = function(){ 
        let e = window.event;
        //全部选中
        if(e.target.className == "allInput"){ 
            counts.innerHTML = 0;
            
            var data = JSON.parse(localStorage.getItem('goods'));
           
            data.forEach(item=>{
                
                item.isSelected = e.target.checked;
                e.target.checked? item.isSelete =1:item.isSelete=0;
            }); 
            
            localStorage.setItem('goods',JSON.stringify(data));
            render();
            count();
        }
        //小选中
        if(e.target.className == "inputs"){ 
            
            let id = e.target.getAttribute('goods_id');
           
            let data = JSON.parse(localStorage.getItem('goods'));
            
            data.forEach(item=>{
                if(item.goods_id == id){
                  
                    item.isSelected = e.target.checked;
                    item.isSelete = e.target.checked?1:0;
                }
            })
            
            localStorage.setItem('goods',JSON.stringify(data));
            render();
            count()
        }
        //数量加
        if(e.target.innerHTML == "+"){
            var id = e.target.getAttribute("goods_id");
            
            var data = JSON.parse(localStorage.getItem('goods'));
           var product = data.find(value=>{
               
               return value.goods_id ==id;
               
           })
           product.goods_number++;
           localStorage.setItem('goods',JSON.stringify(data))
           
           render();
           count()
        }
        //数量减
        if(e.target.innerHTML == "-"){ 
            var id = e.target.getAttribute("goods_id");
            var data = JSON.parse(localStorage.getItem('goods'));
            var product = data.find(value=>{
                return value.goods_id ==id;
                
            })
            product.goods_number--;
            product.goods_number = product.goods_number<1?1:product.goods_number;
            localStorage.setItem('goods',JSON.stringify(data))
            console.log(product);
            render();
            count()
        }
        //删除
        if(e.target.className == 'five_item'){
           
            
            var id = e.target.getAttribute('goods_id');
            $.ajax({
                url:'http://localhost./php/delete.php',
                data:{
                    id
                },
                type:'get',
                dataType:'json',
                success(data){
                    
             let dataArr = JSON.parse(localStorage.getItem('goods'));
                   
             let del = dataArr.filter(item=>{
             
                return item.goods_id != id;
            });
            console.log(del)
            localStorage.setItem('goods',JSON.stringify(del));
            render();
                }
            })
            count()
            
        }
    };
    //计算总数
    function count(){
        let shoppingCart = JSON.parse(localStorage.getItem('goods'));
        var sum = shoppingCart.filter(value=>{
            return value.isSelected;
        }).reduce(function(prev,value){
            return prev + +value.goods_price * value.goods_number;
        },0);
        
        counts.innerHTML = sum;
    }
    //渲染页面
    function render(){
        list.innerHTML = '';
        var goods = JSON.parse(localStorage.getItem('goods'));  
        
        // if(!data.error){
            let allInputs = goods.every(item=>{
               
                return item.isSelete == 1;
            })
           
            var sta = `
            <li class="list-one">
            <input class="allInput" ${allInputs?'checked':''} type="checkbox">全选
            <div class="firstLi">
                <b>商品名称</b>
                <b>商品信息</b>
                <b>单价</b>
                <b>数量</b>
                <b>小计</b>
                <b>删除</b>
            </div>
        </li>
            `
            list.innerHTML +=sta;
            goods.forEach(value=>{
                var str = `
                
            <li class="lis">
            <div class="li_box">
            <div><input class="inputs" ${value.isSelete == 1?'checked':''} goods_id="${value.goods_id}"  type="checkbox"></div>
            <div class="img-box"><img src="../img/1572608311061.jpeg" alt=""></div>
            </div>
            <div class="li_info">
            <b class="one_item">${value.goods_name}</b>
            <b class="two_item">${value.goods_detail}</b>
            <b class="three_item">${value.goods_price}</b>
            <div class="btn" >
            <button goods_id="${value.goods_id}">-</button>
            <input class="priceInfo" type="text" value="${value.goods_number}">
            <button goods_id="${value.goods_id}">+</button>
            </div>
            <b class="four_item">${value.goods_price * value.goods_number}</b>
            <button class="five_item" goods_id="${value.goods_id}">删除</button>
            </div>
            </li>
            
            `
            
            list.innerHTML += str;
            
        })
           
    // }
    }
})();
