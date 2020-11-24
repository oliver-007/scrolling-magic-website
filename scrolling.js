var section = document.querySelector('section');
    window.addEventListener('scroll', function(){
    var value = window.scrollY;
    section.style.clipPath = "circle("+ value +"px at center)"
})

window.addEventListener("scroll", ()=>{
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 1300);
})