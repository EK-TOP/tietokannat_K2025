const bookArray = [
    { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
    { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
    { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" },
    { id_book: 4, name: "TBA", author: "Zelanshi", isbn: "0534613932" },
    { id_book: 5, name: "Shaping Space", author: "Speight", isbn: "0534613934" },
    { id_book: 6, name: "Art Since 1940", author: "Speight", isbn: "0131839780" },
    { id_book: 7, name: "Make it in Clay", author: "Stokstad", isbn: "0076417011" },
    { id_book: 8, name: "Art History Vol II & ala carte lab", author: "Stokstad", isbn: "205795617" },
    { id_book: 9, name: "Accounting Concepts", author: "Albrecht", isbn: "1111287856" },
    { id_book: 10, name: "Intermediate Accounting", author: "Stice", isbn: "0538479736" },
    { id_book: 11, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" },
    { id_book: 12, name: "Management", author: "Williams", isbn: "9780757524028" },
    { id_book: 13, name: "Leadership Wisdom of Jesus", author: "Manz", isbn: "9781609940041" },
    { id_book: 14, name: "Business Law Today", author: "Miller", isbn: "9780324786156" },
    { id_book: 15, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" }
];

const borrowerArray = [
    { id_borrower: 1, firstname: "Kay", lastname: "Naquin", phone: "050-555", streetaddress: "Kotkantie 2", postalcode: "90100" },
    { id_borrower: 2, firstname: "Leonard", lastname: "Rowden", phone: "050-123", streetaddress: "Uusikatu 4", postalcode: "90101" },
    { id_borrower: 3, firstname: "Terry", lastname: "Kinney", phone: "050-333", streetaddress: "Isokatu 6", postalcode: "90102" },
    { id_borrower: 4, firstname: "Carla", lastname: "Stclair", phone: "041-444", streetaddress: "Torikatu 7", postalcode: "90103" },
    { id_borrower: 5, firstname: "Delores", lastname: "Isom", phone: "041-888", streetaddress: "Tapulikuja 9", postalcode: "90104" },
    { id_borrower: 6, firstname: "Ralph", lastname: "Shane", phone: "040-999", streetaddress: "Tuulentie 33", postalcode: "90100" },
    { id_borrower: 7, firstname: "Norman", lastname: "Yarborough", phone: "040-222", streetaddress: "Kotkantie 2", postalcode: "90101" },
    { id_borrower: 8, firstname: "Todd", lastname: "Pastore", phone: "040-555", streetaddress: "Uusikatu 66", postalcode: "90102" },
    { id_borrower: 9, firstname: "Norma", lastname: "Weatherspoon", phone: "050-559", streetaddress: "Isokatu 77", postalcode: "90103" },
    { id_borrower: 10, firstname: "Janice", lastname: "Matthew", phone: "050-129", streetaddress: "Torikatu 33", postalcode: "90104" },
    { id_borrower: 11, firstname: "Thomas", lastname: "Larry", phone: "050-339", streetaddress: "Tapulikuja 12", postalcode: "90100" },
    { id_borrower: 12, firstname: "Curtis", lastname: "Fitzpatrick", phone: "041-442", streetaddress: "Tuulentie 11", postalcode: "90101" },
    { id_borrower: 13, firstname: "Lynda", lastname: "Strauss", phone: "041-880", streetaddress: "Isokatu 2", postalcode: "90102" },
    { id_borrower: 14, firstname: "Matthew", lastname: "Klug", phone: "040-993", streetaddress: "Uusikatu 33", postalcode: "90103" },
    { id_borrower: 15, firstname: "Larry", lastname: "Thoma", phone: "040-224", streetaddress: "Kotkantie 6", postalcode: "90104" },
    { id_borrower: 16, firstname: "Arthur", lastname: "Dowdy", phone: "040-557", streetaddress: "Uusikatu 4", postalcode: "90100" },
    { id_borrower: 17, firstname: "Viola", lastname: "Willis", phone: "042-111", streetaddress: "Isokatu 66", postalcode: "90101" },
    { id_borrower: 18, firstname: "Annette", lastname: "Wilks", phone: "042-222", streetaddress: "Torikatu 24", postalcode: "90102" },
    { id_borrower: 19, firstname: "Harold", lastname: "Bibb", phone: "042-333", streetaddress: "Tapulikuja 7", postalcode: "90103" },
    { id_borrower: 20, firstname: "Marvin", lastname: "Heflin", phone: "042-444", streetaddress: "Tuulentie 4", postalcode: "90104" }
];
const borrowArray = [
    { id_borrow: 1, id_book: 4,  id_borrower: 1,  borrow_date: "current_date - interval 35 day", return_date: "current_date - interval 14 day" },
    { id_borrow: 2, id_book: 6,  id_borrower: 2,  borrow_date: "current_date - interval 25 day", return_date: "current_date - interval 4 day" },
    { id_borrow: 3, id_book: 8,  id_borrower: 2,  borrow_date: "current_date - interval 15 day", return_date: "current_date + interval 6 day" },
    { id_borrow: 4, id_book: 1,  id_borrower: 6,  borrow_date: "current_date - interval 12 day", return_date: "current_date + interval 9 day" },
    { id_borrow: 5, id_book: 3,  id_borrower: 2,  borrow_date: "current_date - interval 12 day", return_date: "current_date + interval 9 day" },
    { id_borrow: 6, id_book: 10, id_borrower: 20, borrow_date: "current_date - interval 5 day",  return_date: "current_date + interval 16 day" },
    { id_borrow: 7, id_book: 12, id_borrower: 20, borrow_date: "current_date - interval 5 day",  return_date: "current_date + interval 16 day" },
    { id_borrow: 8, id_book: 14, id_borrower: 20, borrow_date: "current_date - interval 1 day",  return_date: "current_date + interval 20 day" },
    { id_borrow: 9, id_book: 15, id_borrower: 20, borrow_date: "current_date - interval 1 day",  return_date: "current_date + interval 20 day" }
];


// 2. Tulosta konsolille mikä luomasi taulun "tietotyyppi" on (käytä JavaScriptin typeof-funktiota)
console.log(typeof bookArray);

// 3. Tulosta konsolille koko bookArrayn sisältö
console.log(bookArray);

// 4. Tulosta konsolille bookArrayn ensimmäinen rivi
console.log(bookArray[0]);

// 5. Tulosta konsolille ensimmäisen kirjan nimi
console.log(bookArray[0].name);

// 6. Tulosta konsolille arrayn rivien määrä
console.log(bookArray.length);

// 7. Tulosta konsolille kaikkien kirjojen nimet
bookArray.forEach(book => console.log(book.name));