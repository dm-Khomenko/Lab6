
let button1 = document.querySelector("#btn1");
let txt = document.querySelector("#txt1");

button1.addEventListener("click", () => {
    let a = document.querySelector("#inp1").value;
    let b = document.querySelector("#inp2").value;
    let c = Number(a) + Number(b);

    txt.innerHTML = "Результат: " + c;
});


let button2 = document.querySelector("#btn2");
let tsk2 = document.querySelector("#tsk2");
button2.addEventListener("click", addCircle);

function addCircle() {
    let newCircle = document.createElement("div");
    tsk2.appendChild(newCircle);
    newCircle.classList.add("circle");
}


let button3 = document.querySelector("#btn3");
let txt2 = document.querySelector("#txt2");

button3.addEventListener("click", () => {
    let a = document.querySelector("#inp3").value;
    let b = document.querySelector("#inp4").value;
    let c = document.querySelector("#inp5").value;

    let sum = Number(a) + Number(b) + Number(c);

    txt2.innerHTML = "Результат: " + sum;
});


let btn4 = document.querySelector("#btn4");
let tsk4 = document.querySelector("#tsk4");

btn4.addEventListener("click", addElement);

function addElement() {
    let newElement = document.createElement("div");
    tsk4.appendChild(newElement);
    newElement.classList.add("newElement"); 
}
