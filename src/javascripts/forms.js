




document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        const placeholderWidth = input.placeholder.length * 10;
        input.style.width = `${placeholderWidth}px`;
    });
});