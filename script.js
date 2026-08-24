const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item")

filterButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        filterButtons.forEach(btn =>{
            btn.classList.remove("active");
        });
        button.classList.add("active")

        const category = button.dataset.category;

        galleryItems.forEach(item =>{
            const itemCategory = item.dataset.category;
            if(category === "all" || category === itemCategory){
                item.style.display="block";
            }
            else{
                item.style.display="none";
            }
        });
    });
});

const lightbox = document.querySelector("#lightbox");
const lightboximg = document.querySelector("#lightbox-img");
const closebtn = document . querySelector(".close-btn");

galleryItems.forEach((item ,index )=>{
    item.addEventListener("click",()=>{
        currentIndex = index;
        const img = item.querySelector("img");
        lightboximg.src = img.src;
        lightboximg.alt = img.alt;
        lightbox.style.display = "flex"
    });
});

closebtn.addEventListener("click", ()=>{
    lightbox.style.display = "none";
});

const prevbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");

let currentIndex = 0;

nextbtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    const img = galleryItems[currentIndex].querySelector("img");

    lightboximg.src = img.src;
    lightboximg.alt = img.alt;

});

prevbtn.addEventListener("click" ,() =>{
    currentIndex--;
    if(currentIndex<0){
        currentIndex = galleryItems.length - 1;

    }
    const img = galleryItems[currentIndex].querySelector("img");
    lightboximg.src = img.src;
    lightboximg.alt = img.alt;
});

document.addEventListener("keydown",(event)=>{
    if(event.key === "ArrowRight"){
        nextbtn.click();
    }
    if(event.key === "ArrowRight"){
        nextbtn.click();
    }
    if(event.key === "Escape"){
        lightbox.style.display = "none"
    }

});