const $ = document;
let notesContainer = $.querySelector("#listed");
let inputField = $.querySelector("#input-field");
let btnAdd = $.querySelector("#btn-save");
let btnRemove = $.querySelector("#btn-delete");
let colorSelectBox = $.querySelector("#color-select");

colorSelectBox.addEventListener('click', function (colorName) {
    let backgroundName = colorName.target.style.backgroundColor;
    inputField.style.backgroundColor = backgroundName;
});

notesContainer.addEventListener('click', (event) => {
    if (event.target.tagName === "P") {
        event.target.parentElement.remove();
    }
});

function makeNewNote(valueInputField, inputColor) {
    notesContainer.insertAdjacentHTML('beforeend', `<div class="card shadow-sm rounded border-0 defult-Color" style="background-color:${inputColor}" title="Click on any note to delete it"><p class="card-text p-3 font-weight-bolder">${valueInputField}</p></div>`);
};

function inputFieldHandler(event) {
    let valueInputField = inputField.value.trim();
    let inputColor = inputField.style.backgroundColor;
    if (event.keyCode === 13 && valueInputField) {
        makeNewNote(valueInputField, inputColor);
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