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

//event listeners for clicking
product.addEventListener("click", (dropProduct))
company.addEventListener("click", (dropCompany))
connect.addEventListener("click", (dropConnect))