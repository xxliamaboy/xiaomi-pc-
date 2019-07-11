$(function(){
    $("#reg").click(
        function(){
            var uphone=$("#uphone").val();
            var upass=$("#upass").val(); 
            var ptest=/^1[3-9]\d{9}$/;
            var utest=/^\d{6}$/;
            if(!ptest.test(uphone)){
                $("#feedBack").html("*注册手机格式不正确*");
                return;
            }else if(!utest.test(upass)){
                $("#feedBack").html("*密码格式不正确*");
                return;
            }
            $.ajax({
                url:"http://127.0.0.1:3000/reg",
                data:{uphone,upass},
                type:"post",
                dataType:"json",
                success:function(res){            
                    if(res.code=="-1"){
                        alert("手机已注册过")
                    }else{
                        alert("登录成功")
                        location.href="http://127.0.0.1:5501/mi_homepage.html";
                    }                
                }
            })
        }
    )
})
