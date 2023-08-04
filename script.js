const slides = document.querySelector("section div.slides")

let current = 0
let z = 1000000000

const images = slides.querySelectorAll("img")

images.forEach(image => {
    z = z - 1
    image.style.zIndex = z
})

slides.addEventListener("click", function() {
    z = z - 1
    
    
    images[current].style.zIndex = z

    current = current + 1
    current = current % images.length

})