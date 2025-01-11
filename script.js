// Sticky navigation menu
let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 15){
        nav.classList.add("sticky");
    }
else{
    nav.classList.remove("sticky");
}
}

function redirect()
{
    var url = "https://www.linkedin.com/in/sharvesh-sanjay-m-862a74317/"
    window.location(url)
}