function createBook(selector, title, author, ISBN) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, title, author, ISBN) {
            let container = $(selector);
            let bookContainer = $('<div>');
            let bookTitle = $('<p>');
            let bookAuthor = $('<p>');
            let bookISBN = $('<p>');
            let btnSelect = $('<button>');
            let btnDeselect = $('<button>');

            bookContainer.attr('id', `book${id}`);
            bookContainer.css('border', 'none');

            bookTitle.attr('class', 'title');
            bookTitle.text(title);
            bookAuthor.attr('class', 'author');
            bookAuthor.text(author);
            bookISBN.attr('class', 'isbn');
            bookISBN.text(ISBN);
            $(btnSelect).click(selectBook);
            btnSelect.text('Select');
            $(btnDeselect).click(deselectBook);
            btnDeselect.text('Deselect');

            bookTitle.appendTo(bookContainer);
            bookAuthor.appendTo(bookContainer);
            bookISBN.appendTo(bookContainer);
            btnSelect.appendTo(bookContainer);
            btnDeselect.appendTo(bookContainer);

            container.append(bookContainer);

            function selectBook() {
                bookContainer.css('border', '2px solid blue');
            }

            function deselectBook() {
                bookContainer.css('border', 'none');
            }
            id++;
        }
    }());

    bookGenerator(selector, title, author, ISBN);

}
