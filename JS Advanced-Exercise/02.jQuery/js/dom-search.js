function domSearch(selector, caseSensitive) {
    let container = $(selector);
    //container.attr('class', 'items-control');

    let divAdd = $('<div class="add-controls">');
    let labelAdd = $('<label>Enter text: </label>');
    let addInput = $('<input>');
    addInput.appendTo(labelAdd);
    let addBtn = $('<a class="button" style="display: inline-block">Add</a>');

    let divSearch = $('<div class="search-controls"></div>');
    let labelSearch = $('<label>Search:</label>');
    let searchInput = $('<input>');
    searchInput.appendTo(labelSearch);

    let divResult = $('<div class="result-controls"></div>');
    let ulResult = $('<ul class="items-list"></ul>');

    labelAdd.appendTo(divAdd);
    addBtn.appendTo(divAdd);
    labelSearch.appendTo(divSearch);
    ulResult.appendTo(divResult);

    container.append(divAdd);
    container.append(divSearch);
    container.append(divResult);

    addBtn.on('click', addItem);
    searchInput.on('change', searchItems);
    function addItem() {
        let li = $('<li class="list-item"></li>');
        let deleteBtn = $('<a class="button">X</a>');
        deleteBtn.appendTo(li);
        deleteBtn.on('click', deleteElement);
        $(`<strong>${addInput.val()}</strong>`).appendTo(li);
        addInput.val('');
        li.appendTo(ulResult);
    }

    function searchItems() {
        let searchedText = searchInput.val();
        if (searchedText.length > 0) {
            $('li.list-item').each((index, item) => {
                if (caseSensitive) {
                    if (!item.textContent.includes(searchedText)) {
                        $(item).css('display', 'none');
                    }
                } else {
                    if (!item.textContent.toLowerCase().includes(searchedText.toLowerCase())) {
                        $(item).css('display', 'none');
                    }
                }
            });
        } else {
            $('li.list-item').css('display', 'block');
        }
    }

    function deleteElement() {
        let li = $(this).parent();
        li.remove();
    }
}
