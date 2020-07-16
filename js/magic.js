<script>
function magicColor(mode,t){
    t=t||10;
    let elem=document.getElementsByClassName("magic-color");
    if(!elem){
        setTimeout(function(){
            magicColor(mode,t-1);
        },400);
        return;
    }
    if(window.mcHandler==undefined){
        window.mcHandler={elements:[]};
        window.mcHandler.colorIndex=0;
        window.mcHandler.run=function(mode){
            let color=mode=="random"?("rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+",1)"):["#CC0000","#9999CC","#CC3366","#669999","#FFCC00","#00CCCC","#CC00CC"][(window.mcHandler.colorIndex++)%7];
            for(var i=0,L=window.mcHandler.elements.length;i<L;i++)window.mcHandler.elements[i].style.color=color;
        }
    }
    window.mcHandler.elements=elem;
    if(window.mcHandler.timer==undefined){
        window.mcHandler.timer=setInterval(()=>{window.mcHandler.run(mode)},500);
    }
}
magicColor(random);//random为随机颜色，否则为固定颜色随机；上方“闪烁（变色）”字样为固定颜色随机
</script>