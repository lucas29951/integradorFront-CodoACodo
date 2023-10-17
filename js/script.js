
document.getElementById("resumen").addEventListener("click", function () {

    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categoria = document.querySelector("select").value;

    var precioBase = 200;
    var precioTotal = cantidad * precioBase;
    var descuento = 0;

    if (categoria === "1") {
        descuento = 0.8;
    } else if (categoria === "2") {
        descuento = 0.5;
    } else {
        var descuento = 0.15;
    }
    precioTotal = precioTotal - (precioTotal * descuento);

    var alertDiv = document.querySelector(".alert");
    alertDiv.textContent = "Total a Pagar: $" + precioTotal;
});
