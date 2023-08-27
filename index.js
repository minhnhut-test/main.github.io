
//scroll  nav bar
const navagation = document.getElementById("navagation");
const notification = document.getElementById("notification");
const home = document.getElementById("home");
const heightNotification = notification.offsetHeight;
const navBar = document.getElementById("nav-bar");
function position(variable){
    var postion = variable.getBoundingClientRect();
    var notificationY = postion.top;
    return notificationY;
}
document.getElementById("nav-bar").style.height = window.innerHeight +"px";
document.getElementById("nav-bar").style.top = navagation.getBoundingClientRect().bottom +"px";

window.addEventListener("scroll", ()=>{
    if(position(home) < heightNotification){
        notification.classList.add("fixed");
        if(position(navagation) <= 0){
            navagation.classList.add("fixed");
            home.classList.add("fixed");
            document.getElementById("nav-bar").style.height = window.innerHeight +"px";
            document.getElementById("nav-bar").style.top = navagation.getBoundingClientRect().bottom +"px";
        }
    }else{
        notification.classList.remove("fixed");
        home.classList.remove("fixed");
        navagation.classList.remove("fixed");
        document.getElementById("nav-bar").style.height = window.innerHeight +"px";
        document.getElementById("nav-bar").style.top = navagation.getBoundingClientRect().bottom +"px";
    }
})


//// nav-bar mobile

const buttonNavBar = document.querySelectorAll('.svg-nav');
let checkToggled = false;
const buttonChangeNav = document.getElementById('svg-nav');
buttonNavBar.forEach(element =>{
    element.addEventListener("click", ()=>{
        if(checkToggled){
            buttonChangeNav.classList.remove("active");
            navBar.classList.remove("active");
        }else{
            buttonChangeNav.classList.add("active");
            navBar.classList.add("active");
        }
        checkToggled = !checkToggled;
    })
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



//quality project
const ServicesFrontendChoice = document.querySelectorAll('.liServiceF');
const listDetailControl = document.querySelectorAll('.frontend-service');



function removeAllService(element){
    element.forEach(element => {
        element.classList.remove("onclick-service");
    });
}
function removeActiveService(element){
    element.forEach(element =>{
        element.classList.remove("active");
    })
}

function activeListService(list, content){
    for (let index = 0; index < list.length; index++) {
        list[index].addEventListener("click", ()=>{
            removeAllService(list);removeActiveService(content);
            list[index].classList.add('onclick-service');
            content[index].classList.add('active');
        })
    }
}
activeListService(ServicesFrontendChoice, listDetailControl);


const ServicesBackendChoice = document.querySelectorAll('.liServiceB');
const listDetailControlB = document.querySelectorAll('.backend-service');


activeListService(ServicesBackendChoice, listDetailControlB);


//active frontend 
const vectorActiveFrontend = document.querySelectorAll('.vector-serviceF');
const FrameServiceFrontend = document.querySelector('.frame-service.frontend');
const vectorActiveBackend = document.querySelectorAll('.vector-serviceB');
console.log(vectorActiveBackend);
const FrameserviceBackend = document.querySelector('.frame-service.backend');


function activeModeService(vector,frame){
    vector[0].addEventListener("click",()=>{
        vector[0].classList.remove("active");
        vector[1].classList.add("active");
        frame.classList.remove("active");
    })
    vector[1].addEventListener("click", () =>{
        vector[1].classList.remove("active");
        vector[0].classList.add("active");
        frame.classList.add("active");
    })
}
activeModeService(vectorActiveFrontend,FrameServiceFrontend);
activeModeService(vectorActiveBackend,FrameserviceBackend);


///

const navPortfolioActive = document.querySelectorAll('.nav-portfolio-li');
const groupProfolioActive = document.querySelectorAll('.group-contain-portfolio');

function removePortfolio(element){
    element.forEach(element =>{
        element.classList.remove("active");
    })
}
console.log(groupProfolioActive);
navPortfolioActive.forEach(element =>{
    element.addEventListener("click", ()=>{
        removePortfolio(navPortfolioActive);
        element.classList.add("active");
        if(element.innerHTML == "Personal Website"){
            removePortfolio(groupProfolioActive);
            groupProfolioActive[0].classList.add("active");
        }else{
            removePortfolio(groupProfolioActive);
            groupProfolioActive[1].classList.add("active");
        }
    })
})


