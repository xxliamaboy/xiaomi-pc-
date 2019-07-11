$(function(){
    $("#login").click(
        function(){
            var uphone=$("#uphone").val();
            var upass=$("#upass").val()
            console.log(uphone)
            $.ajax({
                url:"http://127.0.0.1:3000/login",
                data:{uphone,upass},
                type:"get",
                dataType:"json",
                success:function(res){
                    if(res.code=="-1"){
                        $("#feedBack").html("*用户名或密码有误*")
                        return;
                    }else{
                        alert("登录成功")
                        location.href="http://127.0.0.1:5501/mi_homepage.html";
                    }                
                }
            })
        }
    )
})
