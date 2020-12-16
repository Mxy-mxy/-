let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let userName = document.getElementById('name');
let userPassword = document.getElementById('password');
let name_hint = document.querySelector('.name_hint');
let password_hint = document.querySelector('.password_hint');
let name_lock = false;
let password_lock = false;
let userInfo = document.querySelector('.userInfo');
let upf = document.querySelector('.upf') 
let hInfo = document.querySelector(".hInfo");
let btn01 = document.querySelector(".btn01");
let btn02 = document.querySelector(".btn02");
// let setCookie = '';
 userName.onblur = function(){
     var userNameInFo = this.value; 
     
     var reg = /^[a-zA-Z0-9_-]{4,16}$/;
     if(reg.test(userNameInFo)){
         name_lock =true;
         this.style.borderColor = "green";
         name_hint.innerHTML = "√";
         userInfo.innerHTML = '';
     }else{
         name_lock =false; 
         this.style.borderColor = "red";
         name_hint.innerHTML = "×";  
         userInfo.innerHTML = '请输入4-16位字符,且必须包含字母';
     }
     
 };
 password.onblur = function(){
     var userPasswordInFo = this.value;
     var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
 if(reg.test(userPasswordInFo)){
     password_lock =true;
     this.style.borderColor = "green";
     password_hint.innerHTML = "√";
     upf.innerHTML = '';

 }else{
     password_lock =false; 
     this.style.borderColor = "red";   
     password_hint.innerHTML = "×";  
     upf.innerHTML = '至少8-16个字符，至少1个大写字母，1个小写字母和1个数字';
 }
 }
 btn01.onclick = function(){
     btn01.className = 'active';
     btn02.className = '';
     btn2.style.display = 'none';
     btn1.style.display = 'block';
 }
 btn02.onclick = function(){
    btn02.className = 'active';
    btn01.className = '';
    btn1.style.display = 'none';
    btn2.style.display = 'block';
}
 btn1.onclick = function(){
     userName.onblur();
     password.onblur();
     
     if(!name_lock && !password_lock){
         return
     }else{
 
         
        $.ajax({
            url:'http://localhost./php/login.php',
            data:{
                username:userName.value,
                password:userPassword.value
            },
            type:"post",
            dataType: "json",
            success(data){
                if(!data.error){
                
                
                    var id = userName.value;
                    //设置不上cookie
                    // document.cookie = "username = id";
                    localStorage.setItem('username',JSON.stringify(id));
                    location.href = './html/home.html?name='+id;
                    alert('登陆成功');
                }else{
                    alert(data.data);
                }
            },
            error(error){
                console.log("error")
            },
            
        })
     }
     return false;
 }
 btn2.onclick = function(){
     
      if(!name_lock && !password_lock){
         return
     }else{
       
        $.ajax({
            url:'http://localhost./php/add.php',
            data: {
            username:userName.value,
            password:userPassword.value
            },
            type:'post',
            success(data){
                if(!data.error){
                    alert('注册成功');
                }else{
                    alert('data.data');
                }
            },
            error(error){
                alert(data.data);
            }
        })
     }
     userName.value = '';
     userPassword.value = '';
     return false;
 }

