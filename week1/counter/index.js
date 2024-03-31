const numberP = document.getElementById("number");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

console.log(numberP);
console.log(increaseButton);
console.log(decreaseButton);

increaseButton.addEventListener("click", () => {
    console.log("increase 가 클릭됨");
    const current = parseInt(numberP.innerText, 10);
    numberP.innerText = current + 1;

});

decreaseButton.addEventListener("click", () => {
    console.log("decrease 가 클릭됨");
    const current = parseInt(numberP.innerText, 10);
    numberP.innerText = current - 1;
});