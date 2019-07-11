$(function(){
    var tul=document.getElementById("template");
    var tbtns=tul.querySelectorAll("li");//手机价格
    var proP=document.getElementById("pro_price");//总价前的产品价格
    var total=document.getElementById("total");//总价          
    var sum=3299;
    for(var tbtn of tbtns){
        tbtn.onclick=function(){
            var tbtn=this;
            tactive=tul.getElementsByClassName("active")[0];            
            if(tactive!=null){          
            tactive.className="";
            var tactiveP=tactive.querySelector("a>span:last-child");
            sum-=parseInt(tactiveP.innerHTML.slice(0,4));           
            }
            tbtn.className="active";
            //找#template下的价格元素
            var proS=tbtn.querySelector("a>span:last-child");            
            proP.innerHTML=proS.innerHTML.slice(0,4)+"元";
            sum+=parseInt(proS.innerHTML.slice(0,4));
            total.innerHTML="总计:"+sum+"元";
        } 
    }    
    var proG=document.getElementById("proG");//proG
    var gbtns=proG.getElementsByClassName("btn"); 
    var abprice=document.getElementById("ab_price");
    var abname=abprice.previousElementSibling;       
    for(var gbtn of gbtns){
        gbtn.onclick=function(){
            var  gbtn=this;
            var  has=gbtn.classList.contains("active");
            if(has!=true){
            var active=proG.getElementsByClassName("active")[0];
                if(active!=null){
                    var priceA=active.getElementsByClassName("price_p")[0];           
                    sum-=parseInt(priceA.innerHTML.slice(0,3));
                    active.classList.remove("active");
                    var iconfonts=active.getElementsByClassName("iconfont");
                    iconfonts[0].style.color="#fff";
                    iconfonts[1].style.color="#fff";
                }
            gbtn.classList.add("active");
            var priceB=gbtn.getElementsByClassName("price_p")[0];
            sum+=parseInt(priceB.innerHTML.slice(0,3));
            var iconfonts=gbtn.getElementsByClassName("iconfont");
            iconfonts[0].style.color="#ff6700";
            iconfonts[1].style.color="#ff6700";
            abprice.innerHTML=priceB.innerHTML.slice(0,3)+"元";
            abname.innerHTML="保障服务";
            }else{
                var priceC=gbtn.getElementsByClassName("price_p")[0]
                sum-=parseInt(priceC.innerHTML.slice(0,3));
                gbtn.classList.remove("active");
                var iconfonts=gbtn.getElementsByClassName("iconfont");				
                iconfonts[0].style.color="#fff";
                iconfonts[1].style.color="#fff";
                abprice.innerHTML="";
                abname.innerHTML="";
            }
            total.innerHTML="总计:"+sum+"元";
        }
    }
        var proE=document.getElementById("proE");  
        var ebtn=proE.getElementsByClassName("btn")[0];
        var iconfonts=ebtn.getElementsByClassName("iconfont");
        var eprice=document.getElementById("e_price");
        var ename=eprice.previousElementSibling;              
            ebtn.onclick=function(){
                var has=ebtn.classList.contains("active");               
                if(has!=true){                 
                    ebtn.classList.add("active");
                    var priceE=ebtn.getElementsByClassName("price_e")[0];
                    iconfonts[0].style.color="#ff6700";
                    iconfonts[1].style.color="#ff6700";
                    eprice.innerHTML=priceE.innerHTML.slice(0,2)+"元";                   
                    ename.innerHTML="延长保修服务";
                    sum+=99;


                }else{
                    var priceE=ebtn.getElementsByClassName("price_e")[0];                   
                    ebtn.classList.remove("active");
                    iconfonts[0].style.color="#fff";
                    iconfonts[1].style.color="#fff";
                    eprice.innerHTML="";
                    ename.innerHTML="";
                    sum-=99;
                   
                }
                total.innerHTML="总计:"+sum+"元";
            }
})
