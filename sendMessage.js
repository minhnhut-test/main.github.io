const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");
const buttonMessage = document.getElementById("button-message");


buttonMessage.addEventListener("click", ()=>{
    const valueInputName = inputName.value;
    const valueInputEmail = inputEmail.value;
    const valueInputMessage = inputMessage.value;
    
    if(valueInputName == "" || valueInputEmail == ""){
        console.log("Vui lòng nhập tên của bạn");
    }else{
        console.log("Thành công rồi bạn nhé");
        console.log(valueInputName);
        console.log(valueInputEmail);
        console.log(valueInputMessage);
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "tran.minh.nhut.29.12.2003@gmail.com",
            Password : "E761555088CF93EE59F88320FFF2AABB6AA7",
            To :  inputEmail.value,
            From : "tran.minh.nhut.29.12.2003@gmail.com",
            Subject : "This is the subject",
            Body : "Xin chao ban " + document.getElementById("input-name").value + " Rat han hanh duoc lam viec voi ban. Day la email tu dong. Toi se lien he voi ban ngay "
         }).then(
            message => alert(message)
        ); 
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value ="";
    }
})
