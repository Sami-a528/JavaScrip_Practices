let smallimg = document.getElementsByClassName("oldImg");
for(let i=0;i<smallimg.length;i++){
    // console.dir(smallimg[i].src);
    smallimg[i].src = "assets/spiderman_img.png";
    console.log(`Value of image no. ${i} is Changed`);
}

let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = "red";
}