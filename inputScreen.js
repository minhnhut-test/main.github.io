const body = document.querySelector('body');

function sizeOfwindow (){
    widthOfwindows = window.innerWidth;
    if(widthOfwindows  < 640){
        // includeHTML();
        body.classList.remove("active");
        console.log("Mobile phone");
    }else if( widthOfwindows >= 640 && widthOfwindows<= 1024){
        console.log("Tablet");
        // body.classList.add("active");
        // document.body.innerHTML ="<h1> Sory bạn hiện tại web đang được phát triển ở giao diện tablet và desktop . Nếu bạn dùng resize về mobile vui lòng load lại trang</h1>";
       
    }else{
        console.log("Desktop");
        body.classList.add("active");
        document.body.innerHTML = "<h1> Sorry bạn hiện tại web đang được phát triển ở giao diện tablet và desktop . Nếu bạn dùng resize về mobile vui lòng load lại trang</h1>";
    }
} 
window.addEventListener("resize", sizeOfwindow) || window.addEventListener("load",sizeOfwindow);





// function includeHTML(){
//     var i, elem, file,xhttp,includeFiles;
//      includeFiles = document.getElementsByTagName("*");

//     for(i = 0; i < includeFiles.length;i++){
//         console.log("hello")
//         elem= includeFiles[i];
//         file = elem.getAttribute("data-file");
       
//         if(file){
//             xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function(){
//                 if(this.readyState == 4){
//                     if(this.status == 200){
//                         elem.innerHTML = this.responseText;
//                     }
//                     if(this.status == 404){
//                         elem.innerHTML ="Component not found";
//                     }
//                     elem.removeAttribute("data-file");
//                     includeHTML();
//                 }
//             }
//             xhttp.open("GET",file,true);
//             xhttp.send();
//             return;
//         }
//     }
// };
 
