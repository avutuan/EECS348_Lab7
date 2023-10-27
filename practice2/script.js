document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("colored-paragraph");
    const bgColorInput = document.getElementById("bg-color-input");
    const borderColorInput = document.getElementById("border-color-input");
    const borderWidthInput = document.getElementById("border-width");
    const applyButton = document.getElementById("apply-button");

    applyButton.addEventListener("click", function () {
        const bgColor = bgColorInput.value;
        const borderColor = borderColorInput.value;
        const borderWidth = borderWidthInput.value + "px";

        paragraph.style.backgroundColor = `rgb(${bgColor})`;
        paragraph.style.borderColor = `rgb(${borderColor})`;
        paragraph.style.borderWidth = borderWidth;
    });
});
