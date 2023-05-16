// //First Dice
// randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1)
// element = document.getElementById("img1")
// element.src = `./images/dice${randomNumber1}.png`

// //Second Dice
// randomNumber2 = Math.floor(Math.random() * 6)+ 1;
// console.log(randomNumber1)
// element = document.getElementById("img2")
// element.src = `./images/dice${randomNumber2}.png`

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src",`./images/dice${randomNumber1}.png`)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src",`./images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Won";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}

