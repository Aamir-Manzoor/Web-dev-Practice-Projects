const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


// open modal

const openModal = () =>{
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

// close modal
const closeModal = () =>{
    console.log("Modal is closed");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

