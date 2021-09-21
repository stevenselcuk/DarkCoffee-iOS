document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("Hello World!");
    document.body.classList.add("DarkCoffee");
});
