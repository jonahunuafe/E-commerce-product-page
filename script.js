"use strict";

const menuBtn = document.querySelector(".menu-btn"); //ok
const closeBtn = document.querySelector(".close-btn"); //ok
const menu = document.querySelector(".nav-links"); //ok
const overlay = document.querySelector(".overlay"); //ok
const mainThumbnail = document.querySelector(".main-thumbnail"); //ok
const mainThumbnailLightBox = document.querySelector(".lightbox-container .main-thumbnail"); //ok
const images = document.querySelectorAll(".preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const slider = document.querySelector(".mobile-thumb");
const thumbMob = document.querySelector(".thumb-mob");
const cartBtn = document.querySelector(".cart-btn"); //ok
const cart = document.querySelector(".cart-wrp");
const closeLightboxBtn = document.querySelector(".close-lightbox"); //ok
const lightbox = document.querySelector(".lightbox"); //ok
const addBtn = document.querySelector(".add-btn");
const indicator = document.querySelector(".indicator");
const wrp = document.querySelector(".cart-content");
let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";

function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

function handlePlus() {
    amountValue++;
    amount.innerText = amountValue;
}

function handleMinus() {
    if(amountValue > 0) {
        amountValue--;
    }
    amount.innerText = amountValue;
}

function nextImage() {
    if(currentImg == 4) {
        currentImg = 1;
    } else {
        currentImg++;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

function prevImage() {
    if(currentImg == 1) {
        currentImg = 4;
    } else {
        currentImg--;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`
}

function toggleCart() {
    cart.classList.toggle("invisible");
}

function openLightBox() {
    lightbox.classList.remove("invisible");
}

function closeLightBox() {
    lightbox.classList.add("invisible");
}

function addItem() {
    if(amountValue > 0) {
        const total = 125.00 * amountValue;
        wrp.classList.remove("empty");
        wrp.innerHTML = `
        <div class="product">
            <div>
                <img class="product-img" src="./images/image-product-1-thumbnail.jpg">
                <div class="product-info">
                    <p class="product-title">Fall Limited Edition Sneakers</p>
                    <p><span>$125.00</span> x <span class="number">${amountValue}</span> <b class="total">$${total}</b></p>
                </div>
                <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg"></button>
            </div>
            <button class="checkout-btn">Checkout</button>
        </div>
        `;
        indicator.style.display = "block";
        indicator.innerText = amountValue;
    }
}

function deleteItem() {
    wrp.classList.add("empty");
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}

images.forEach((image) => {
    image.addEventListener("click", () => {
        const lastImg =  document.querySelectorAll(".selected");
        if(lastImg) {
            lastImg[0].classList.remove("selected");
        }
        image.classList.add("selected");
        const selectedImg = document.querySelector(".selected");
        switch(selectedImg.getAttribute("src")) {
            case "./images/image-product-1-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-1.jpg";
                mainThumbnailLightBox.src = "./images/image-product-1.jpg";
                break;
            case "./images/image-product-2-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-2.jpg";
                mainThumbnailLightBox.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-3.jpg";
                mainThumbnailLightBox.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-4.jpg";
                mainThumbnailLightBox.src = "./images/image-product-4.jpg";
                break;


        }
    })
});


menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);  
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
nextBtn.addEventListener("click", nextImage);
previousBtn.addEventListener("click", prevImage);
cartBtn.addEventListener("click", toggleCart);
mainThumbnail.addEventListener("click", openLightBox);
closeLightboxBtn.addEventListener("click", closeLightBox);
addBtn.addEventListener("click", addItem);