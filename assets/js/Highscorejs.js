var SubmitScore = document.getElementById("submitscore-btn");
var inputString = document.getElementById("inputString");
var stores = Array();
var play = document.getElementById("Play");
var highscoreslist = document.getElementById("highscoreslist")
var key1 = localStorage.getItem("key");

// console.log(highscore);

SubmitScore.addEventListener("click", () => {
    var stringToSave = inputString.value;
       console.log(stringToSave);
       if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        stores.push(stringToSave);
        inputString.value = "";
        window.localStorage.setItem("Initials", JSON.stringify(stringToSave));
        document.getElementById('write').innerHTML = "Thank You";
    }
});
    // localStorage.getItem('database')
//     var Initials = JSON.parse(localStorage.getItem("stringToSave")) || [];
//     highscoreslist.textContent = highscore.map(score => {
//     return `<li class="high-score">${Initials} - ${key}</li>`;
//   });
// .join("");
// const allKeys = Object.keys(localstorage);
// return  allKeys.map(key => {localstorage.getItem(key)} );



localStorage.getItem("Initials");
let key3 = localStorage.getItem("key");


// });
// function Printhighscorelist () {
// var highscore = JSON.parse(localStorage.getItem("Initials")) || [];
// var initials = localStorage.getItem*("database") || [];
// const li = document.createElement("li");
//  li.textContent = highscore;
//  li.textContent = initials;
// }

play.addEventListener("click", () => {
    window.location.href = "./StartPage.html";

});
