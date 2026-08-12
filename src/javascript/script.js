
btnSubmit = document.querySelector("button[type='submit']");

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    const numero = document.querySelector("#numero").value;
    const multiplicador = document.querySelector("#multiplicador").value;
    const multiplicationTable = document.querySelector("#multiplication-table");
    const numeroResulto = document.querySelector("#numero-resultado");

    multiplicationTable.innerHTML = "";

    numeroResulto.textContent = numero;

    for (let i = 1; i <= multiplicador; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        const operation = document.createElement("div");
        operation.classList.add("operation");
        operation.textContent = `${numero} x ${i} = ${numero * i}`;
        row.appendChild(operation);
        multiplicationTable.appendChild(row);
    }
});