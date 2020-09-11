// Que2: create a webpage containing two input fields and a GamepadButton
function doSomething(){
    const paras= document.getElementsByClassName("acron");
    let text= paras[0].innerText;
    console.log(text);
}
//Que1: create a webpage containing an image and three buttons
function ChangeImage(){
    const ele=document.getElementById("image");
    console.log(ele);
     const newUrl="https://banner2.cleanpng.com/20180409/geq/kisspng-computer-icons-eye-clip-art-eye-5acb3e384aa5c4.4631413615232691763058.jpg";
     ele.src = newUrl;
}

function ChangedImage(){
    const eles=document.getElementById("eye1");
    console.log(eles);
    const newUrl="https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684";
    eles.src =newUrl;
}     
function ChangingImage(){
    const eless=document.getElementById("eye2");
    console.log(eless);
    const newUrl="https://banner2.cleanpng.com/20180409/geq/kisspng-computer-icons-eye-clip-art-eye-5acb3e384aa5c4.4631413615232691763058.jpg";
    eless.src =newUrl;
}

