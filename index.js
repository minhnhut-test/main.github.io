
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
//work and education
const containerJourney = document.getElementById("container-journey");
const journeyChoice = document.querySelectorAll('.liJourney');
function removeAll(){
    journeyChoice.forEach(element => {
        element.classList.remove("active");
    });
}
journeyChoice.forEach(element =>{
    element.addEventListener("click", ()=>{
        removeAll();
        element.classList.add("active");
       if(element.innerHTML == "Education"){
        containerJourney.classList.remove("exWork");
       }else{
        containerJourney.classList.add("exWork");
       }
    })
} )
