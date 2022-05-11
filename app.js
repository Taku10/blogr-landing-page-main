const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");

const com_Arrow = document.querySelector(".company-wrapper img");
const prod_Arrow = document.querySelector(".product-wrapper img");
const connect_Arrow = document.querySelector(".connect-wrapper img");


const productItems = document.querySelector(".product-items");
const companyItems = document.querySelector(".company-items");
const connectItems = document.querySelector(".connect-items")


//Drop down function
const dropProduct = ()=>{
    productItems.classList.toggle("active");
    prod_Arrow.classList.toggle("rotate-arrow");
}

const dropCompany = ()=>{
    companyItems.classList.toggle("active");
    com_Arrow.classList.toggle("rotate-arrow");
    
}

const dropConnect = ()=>{
    connectItems.classList.toggle("active");
    connect_Arrow.classList.toggle("rotate-arrow");
}

//event listeners for clicking
product.addEventListener("click", (dropProduct))
company.addEventListener("click", (dropCompany))
connect.addEventListener("click", (dropConnect))