const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");

const com_Arrow = document.querySelector(".company-wrapper .light-arrow");
const prod_Arrow = document.querySelector(".product-wrapper .light-arrow");
const connect_Arrow = document.querySelector(".connect-wrapper .light-arrow");

const com_dark_arrow = document.querySelector(".company-wrapper .dark-arrow");
const prod_dark_arrow = document.querySelector(".product-wrapper .dark-arrow");
const connect_dark_arrow = document.querySelector(".connect-wrapper .dark-arrow");



const productItems = document.querySelector(".product-items");
const companyItems = document.querySelector(".company-items");
const connectItems = document.querySelector(".connect-items")

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-items");


//Drop down function
const dropProduct = ()=>{
    productItems.classList.toggle("active");
    prod_Arrow.classList.toggle("rotate-arrow");
    prod_dark_arrow.classList.toggle("rotate-arrow");
}

const dropCompany = ()=>{
    companyItems.classList.toggle("active");
    com_Arrow.classList.toggle("rotate-arrow");
    com_dark_arrow.classList.toggle("rotate-arrow");
    
}

const dropConnect = ()=>{
    connectItems.classList.toggle("active");
    connect_Arrow.classList.toggle("rotate-arrow");
    connect_dark_arrow.classList.toggle("rotate-arrow");
}

//hamburger-menu display and close

const displayMenu = ()=>{ //display menu
    nav.classList.add("nav-active");
    hamburger.style.display = "none"
    close.style.display = "block";
}

const closeMenu = ()=>{    //close menu
    nav.classList.remove("nav-active");
    hamburger.style.display = "block"
    close.style.display = "none";
}


const menuConfig = ()=>{
    let width = 768;
    if(window.innerWidth > width){
        hamburger.style.display = "none"
    }else{
        hamburger.style.display = "block"
    }
}



//event listeners for clicking
product.addEventListener("click", (dropProduct))
company.addEventListener("click", (dropCompany))
connect.addEventListener("click", (dropConnect))
hamburger.addEventListener("click", (displayMenu))
close.addEventListener("click", (closeMenu))
window.addEventListener("resize", (menuConfig))