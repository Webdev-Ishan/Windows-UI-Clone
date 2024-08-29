// Selecting the taskbar and start menu elements from the DOM
const taskbar = document.getElementsByClassName('task-bar')[0];
const startmenu = document.getElementsByClassName('startmenu')[0];

// Adding a click event listener to the taskbar
taskbar.addEventListener('click', () => {
    // Check the current position of the start menu
    if (startmenu.style.bottom === "50px") {
        // If the start menu is open, close it by moving it off-screen
        startmenu.style.bottom = "-650px";
    } else {
        // If the start menu is closed, open it by moving it to the visible position
        startmenu.style.bottom = "50px";
    }
});

// Selecting the Recycle Bin icon and the full Recycle Bin view from the DOM
const bin = document.getElementById('bin');
const recycle = document.getElementsByClassName('recycle')[0];

// Adding a click event listener to the Recycle Bin icon
bin.addEventListener('click', () => {
    
        // If the Recycle Bin is closed, open it by moving it to a visible position
        recycle.style.bottom = "-200px";
    
});


recycle.addEventListener('click',()=>{

    recycle.style.bottom="-1050px"
})

const clock=document.getElementById('clock');

setInterval(function() {
let date= new Date()
clock.innerHTML=date.toLocaleTimeString()

},1000)