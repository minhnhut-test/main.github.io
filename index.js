
//scroll  nav bar
const navagation = document.getElementById("navagation");
const notification = document.getElementById("notification");
const home = document.getElementById("home");
const heightNotification = notification.offsetHeight;
function position(variable){
    var postion = variable.getBoundingClientRect();
    var notificationY = postion.top;
    return notificationY;
}

window.addEventListener("scroll", ()=>{
    if(position(home) < heightNotification){
        notification.classList.add("fixed");
        if(position(navagation) <= 0){
            navagation.classList.add("fixed");
            home.classList.add("fixed");
        }
    }else{
        notification.classList.remove("fixed");
        home.classList.remove("fixed");
        navagation.classList.remove("fixed");
    }
    console.log(position(home));
})


