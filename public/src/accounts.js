// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let found = accounts.find((matchID) => matchID.id === id);
return found

}

function sortAccountsByLastName(accounts) {
  let sorts = accounts.sort((accA, accB) => accA.name.last > accB.name.last ? 1 : -1);
  return sorts
}

function getTotalNumberOfBorrows(account, books) {
  let filteredArray = books.filter((element) => element.borrows.some((booID) => booID.id === account.id));
  let amount = filteredArray.length
  return amount
}

function getBooksPossessedByAccount(account, books, authors) {
  const authorIdMap = authors 
  .map(author => 
  ({[author.id]: author})) 
  .reduce((a, b) => 
  ({...a, ...b})); return books 
  .map(book => 
  book.borrows.some(({ id, returned }) => 
  id === account.id && !returned) ? 
  ({ ...book, author: authorIdMap[book.authorId] }) : null ).filter(book => !!book);
    
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
