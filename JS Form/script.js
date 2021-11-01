var tab = Array.from(document.querySelectorAll("#lettersOnly , #numbersOnly, #emailOnly, #checkBox"));
var lettersLimit = 16;
var numbersLimit = 10;
var letterRegex = /[a-zA-Z ]/;
var numberRegex = /[0-9]/;
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(tab);

for (let index = 0; index < tab.length; index++) {
    tab[index].addEventListener("input", function () {
        checkAndErase(tab[index]);
    })
}

document.querySelector("#area").addEventListener("input", function(){
    document.querySelector("#areaCal").innerHTML = WordCount(document.querySelector("#area").value) + " mot(s) / " + document.querySelector("#area").value.length + "caractère(s) / 200";
})

function WordCount(str) { 
    return str.split(" ").length;
  }
  
function checkAndErase(object) {
    if (object.id == "lettersOnly") {
        if (object.value.length > lettersLimit)
            object.value = object.value.substring(0, object.value.length - 1);

        if (!letterRegex.test(object.value.slice(-1)))
            object.value = object.value.substring(0, object.value.length - 1);

        else if (object.value.length < 2)
            object.style.border = "solid red 2px";
        else
            object.style.border = "solid green 2px";
    } else if (object.id == "numbersOnly") {
        if (object.value.length > numbersLimit)
            object.value = object.value.substring(0, object.value.length - 1);
        else if (object.value.length < numbersLimit)
            object.style.border = "solid red 2px";
        else
            object.style.border = "solid green 2px";

        if (!numberRegex.test(object.value.slice(-1)))
            object.value = object.value.substring(0, object.value.length - 1);
    } else if (object.id == "emailOnly") {
        if (emailRegex.test(object.value))
            object.style.border = "solid green 2px";
        else
            object.style.border = "solid red 2px";
    }
}

function validateMyForm() {
    var validateIndex = 0;
    for (let index = 0; index < tab.length; index++) {
        if (tab[index].id == "numbersOnly") {
            if (numberRegex.test(tab[index].value) && tab[index].value.length == numbersLimit) {
                validateIndex++;
            }
        }

        if (tab[index].id == "lettersOnly") {
            if (letterRegex.test(tab[index].value) && tab[index].value.length <= lettersLimit && tab[index].value.length >= 2) {
                validateIndex++;
            }
        }

        if (tab[index].id == "emailOnly") {
            if (emailRegex.test(tab[index].value)) {
                validateIndex++;
            }
        }

        if (tab[index].id == "checkBox") {
            console.log(tab[index].checked)
            if (tab[index].checked == true) {
                validateIndex++;
            }
        }
    }

    if (validateIndex == tab.length) {
        alert("Merci " + document.querySelector("#firstName").value +", votre message a été bien envoyé !");
        return true;
    } else {
        console.log(validateIndex);
        alert("validation throw");
        return false;
    }
}