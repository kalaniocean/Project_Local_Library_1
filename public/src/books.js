// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find(auth => auth.id === id)
}

function findBookById(books, id) {
  return books.find( boo => boo.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  
  const getfilt = 
  [ 
    books.map(book => book.borrows.some(borrow => 
      !borrow.returned) ? book : null).filter(book => !!book),
    books.map(book => book.borrows.every(borrow => 
    borrow.returned) ? book : null).filter(book => 
      !!book), 
     
  ];
return getfilt
// get prettier

}

function getBorrowersForBook(book, accounts) {
  const userIdMap = accounts.map(account => 
    ({[account.id]:account})).reduce((a, b) => ({...a, ...b}))
  
    return book.borrows.map(book => ({...userIdMap[book.id],...book})).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
