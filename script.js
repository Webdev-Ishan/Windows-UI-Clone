


const taskbar= document.getElementsByClassName('task-bar')[0];
const startmenu= document.getElementsByClassName('startmenu')[0];

taskbar.addEventListener('click', ()=>{

if(startmenu.style.bottom==="50px"){
startmenu.style.bottom= "-650px";
}
else{
    startmenu.style.bottom="50px";
}

})


const bin= document.getElementById('bin');
const recycle=document.getElementsByClassName('recycle')[0];

bin.addEventListener('click',()=>{

if(recycle.style.bottom==="-1050px"){
    recycle.style.bottom= "-200px";
}

else{
    recycle.style.bottom="-1050px";
}
})