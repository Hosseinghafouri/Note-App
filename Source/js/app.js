const $ = document;
let notesContainer = $.querySelector("#listed");
let inputField = $.querySelector("#input-field");
let btnAdd = $.querySelector("#btn-save");
let btnRemove = $.querySelector("#btn-delete");
let boxColors = $.querySelectorAll(".color-box");
// console.log(notesContainer, inputField, btnAdd, btnRemove, boxColors);
boxColors.forEach((colorBox)=>{
    colorBox.addEventListener('click', function (colorName){
        let backgroundName = colorName.target.style.backgroundColor;
        inputField.style.backgroundColor = backgroundName;
    });
});
function makeNewNote(valueInputField, inputColor, inputColor2) {
    let divCard = $.createElement("div");
    divCard.className = "card shadow-sm rounded border-0 defult-Color";
    divCard.setAttribute("title", "Click on any note to delete it");
    divCard.style.backgroundColor = inputColor, inputColor2;
    let cardText = $.createElement("p");
    cardText.className = "card-text p-3 font-weight-bolder";
    cardText.innerHTML = valueInputField;
    divCard.append(cardText);
    notesContainer.append(divCard);
    divCard.addEventListener('click', ()=>{
        divCard.remove();
    });
};
function inputFieldHandler(event) { 
    let valueInputField = inputField.value.trim();
    let inputColor2 = inputField.style.backgroundColor;
    if (event.keyCode === 13 && valueInputField) {
        makeNewNote(valueInputField, inputColor2);
        inputField.value = "";
        inputField.style.backgroundColor = "";  
    };
    if (event.keyCode === 46) {
        inputField.value = "";
        inputField.style.backgroundColor = "";
        notesContainer.innerHTML = "";
    };
};
function btnAddHandler() {
    let valueInputField = inputField.value.trim();
    let inputColor = inputField.style.backgroundColor;
    if (valueInputField) {
        makeNewNote(valueInputField, inputColor);
        inputField.value = "";
        inputField.style.backgroundColor = "";
    };
    inputField.focus();
    btnAdd.blur();
};
function btnDeletHandler() {
    inputField.value = "";
    inputField.style.backgroundColor = "";
    notesContainer.innerHTML = "";
    btnRemove.blur();
};
inputField.addEventListener('keydown', inputFieldHandler);
btnAdd.addEventListener('click', btnAddHandler);
btnRemove.addEventListener('click', btnDeletHandler);