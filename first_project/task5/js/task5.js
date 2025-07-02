const img1 = document.querySelector("#img-1")
const img2 = document.querySelector("#img-2")
const img3 = document.querySelector("#img-3")
const img4 = document.querySelector("#img-4")
const img5 = document.querySelector("#img-5")
const mainImg = document.querySelector("#main-image")

img1.addEventListener("click", () => {
    mainImg.src = img1.src
})
img2.addEventListener("click", () => {
    mainImg.src = img2.src
})
img3.addEventListener("click", () => {
    mainImg.src = img3.src
})
img4.addEventListener("click", () => {
    mainImg.src = img4.src
})
img5.addEventListener("click", () => {
    mainImg.src = img5.src
})