
document.querySelector("#btn1").addEventListener("click", () => {
    const a = document.querySelector("#inp1").value;
    const b = document.querySelector("#inp2").value;

    if (a !== "" && b !== "") {
        const sum = Number(a) + Number(b);
        document.querySelector("#txt1").innerHTML = "Результат: " + sum;
    } else {
        document.querySelector("#txt1").innerHTML = "Будь ласка, введіть обидва числа!";
    }
});


document.querySelector("#btn2").addEventListener("click", () => {
    const a = document.querySelector("#inp3").value;
    const b = document.querySelector("#inp4").value;
    const c = document.querySelector("#inp5").value;

    if (a !== "" && b !== "" && c !== "") {
        const sum = Number(a) + Number(b) + Number(c);
        document.querySelector("#result").innerHTML = "Результат: " + sum;
    } else {
        document.querySelector("#result").innerHTML = "Будь ласка, введіть усі три числа!";
    }
});


function addCircle() {
    let newCircle = document.createElement('div'); // Створюємо новий div
    document.querySelector("#task2").appendChild(newCircle); // Додаємо його в task2
    newCircle.classList.add('circle'); // Додаємо стиль
}

document.querySelector("#btn3").addEventListener("click", addCircle);
