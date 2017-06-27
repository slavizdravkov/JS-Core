function addItem() {
    let select = document.getElementById('menu');
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');

    let newOption = document.createElement("option");
    newOption.value = itemValue.value;
    newOption.text = itemText.value;

    select.appendChild(newOption);

    itemText.value = '';
    itemValue.value = '';
}
