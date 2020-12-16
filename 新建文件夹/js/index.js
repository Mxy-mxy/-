;(function(){
    //定义变量当前第几页
    let currentPage = 0;
    //定义一页显示多少数据
    let dataCount = 16;
    let allData = [];
    let num = 0;
    let list = document.querySelectorAll(".list");
    let detail = document.querySelector(".details");
    let pagination  =document.querySelector(".pagination");
    let lists = document.querySelector(".lists");
    let body = document.body;
    $.ajax({
        url:'http://localhost./ajax/index.php',
        type: 'get',
        data:{},
        dataType:'json',
        success(data){
            
           if(!data.error){
             console.log(data.data)
             allData = data.data;
            
             var arr = data.data.slice(currentPage * dataCount, currentPage * dataCount + dataCount);
             renderData(arr); 
            //  计算应有多少页
            num = Math.ceil(data.data.length / 16);
            renderPagination(currentPage);
              
           }

        }
    })
    lists.onclick = function(e){
      if(e.target.id === "details"){
        location.href = './detail.html';
      }
    }
    lists.onclick = function(e){
      if(e.target.id === "shoppingInp"){
        $.ajax({
          url: '',
          data:{},
          type: 'get',
        })
      }
    }
    pagination.onclick = function(e){
        // console.log(e.target);   
        body.scrollTop = 0;
        if(e.target.className ==="leftBtn"){
            // console.log('点击的是左按钮')
            console.log(1)
            body.scrollTop = 0;
            currentPage --;
            if(currentPage < 0){
              currentPage = 0;
              return;
            }
            var arr = allData.slice(currentPage * dataCount, currentPage *dataCount +dataCount);
            renderData(arr);
            renderPagination(currentPage);
        }else if(e.target.className === "rightBtn"){
            // console.log('点击的是右按钮')
            currentPage ++;
            if(currentPage >= num){
              currentPage = num;
              return
            }
            var arr = allData.slice(currentPage * dataCount, currentPage *dataCount +dataCount);
            renderData(arr);
            renderPagination(currentPage);
        }else if(e.target.className ==="num"){
            // console.log('点击的是数字按钮')
            // window.scroll.top = 0;
            currentPage = e.target.innerHTML-1;
            var arr = allData.slice(currentPage * dataCount, currentPage *dataCount +dataCount);
            renderData(arr);
            renderPagination(currentPage);
        }
    }
    function renderData(arr){
      // for(var i = 0; i<list.length; i++){
        
      //   list[i].innerHTML = "";
      // }
      
        for(var i=0; i<arr.length;i++){
            var item = arr[i];
           
            let str = `
            <li>
            <div>
            <div class="item_name"><b>${item.cat_one_id}</b> /<b>${item.cat_two_id}</b> /<b>${item.cat_three_id}</b></div>
            <div class="img_div">
                    <img src="${item.goods_big_logo}" alt="">
                </div>
                <p class="item_names">${item.goods_name}</p>
                <p class="item_public">￥${item.goods_price}</p>
                <div class="item_btn"><button type="button" id="shoppingInp" class="btn btn-default">加入购物车</button><a href="./detail.html?id=${item.goods_id}&a=1"><button type="button" id="details" class="btn btn-default">查看详情</button></a></div>
            </div>
        </li>`
        list[i % 4].innerHTML +=str;
           }
    };
    function renderPagination(currentPage){
      var str = `<li>
      <a href="javascript:;" aria-label="Previous">
        <span class='leftBtn' aria-hidden="true">&laquo;</span>
      </a>
    </li>`;
      if(currentPage <=6){
        for(var i = 0; i < 10; i++){
           str += `<li><a class="num">${i+1}</a></li>`
          
        }
      }else {
        var end = currentPage + 4 > num? num:currentPage+4; 
        for(var i = currentPage - 6; i < end; i++){
          str += `<li><a class="num">${i+1}</a></li>`
        }
      }
      str +=` <li>
      <a href="javascript:;" aria-label="Next">
        <span class='rightBtn' aria-hidden="true">&raquo;</span>
      </a>
    </li>`;
      pagination.innerHTML = str;
    }
    
})();