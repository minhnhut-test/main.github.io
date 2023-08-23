
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

