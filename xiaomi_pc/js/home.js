(function(){
    var cont=document.getElementById("container_banner");  
    var items=cont.getElementsByClassName("item"); //图片
    var points=cont.getElementsByClassName("point");//点      
    var rightbtn=cont.getElementsByClassName("right")[0];
    var leftbtn=cont.getElementsByClassName("left")[0];       
    var index=0;
    var time=0;
    function clearActiv(){
        for(var i=0;i<items.length;i++){
            items[i].classList.remove("active");
            points[i].classList.remove("active");          
        };
    }   
    function add(){
        items[index].classList.add("active");
        points[index].classList.add("active");
        time=0;
    }
    rightbtn.onclick=function(){     
        clearActiv();       
        if(index<3){           
            index++;           
        }else{
            index=0;
        }
        add();
    };
    leftbtn.onclick=function(){
        clearActiv();
        if(index==0){
            index=3;          
        }else{
            index--;           
        }
        add();
    };
    for(var point of points){
        point.onclick=function(){           
            var point=this;
            console.log(point);
            index=point.getAttribute("data-index");
            //如果这里用var申明index,会变成函数作用于index,clearActiv();add();里面没有index,会从全局里面找
            clearActiv();
            add();        
        }        
    }
    
    setInterval(function(){
        time++;
        if(time==20){
            time=0;
            rightbtn.onclick();
        }
    },150);
})();

