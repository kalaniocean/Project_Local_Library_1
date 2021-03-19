  // Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const bookie =
  
    books.map(book => book.borrows.some(borrow => 
      !borrow.returned) ? 1 : null).filter(book => !!book)
        
    
  
  return bookie.length
}

function getMostCommonGenres(books) {
  function groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {});
  }
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  const genres = groupByKey(books, 'genre');
  let results = [];
  for (const key in genres) {
    results.push({
      name: key,
      count: Object.size(genres[key]),
    })
    
  }
  const sortie = results.sort((sortA, sortB) => sortA.count < sortB.count ? 1 : -1).slice(0, 5)
  
  return sortie
}

function getMostPopularBooks(books) {
  const getTitle =  books.map(book => book.title);
  
  
  const getNum = books.map(book => book.borrows.map(borrows => 
    borrows).length);
  

  const objNum = getNum.map(el => ({count: el})).map(el2 => el2);
  const objTit = getTitle.map(el => ({name: el})).map(el2 => el2);
  let result = objTit.map((item, i) => Object.assign({}, item, objNum[i]));


  
  const sortie = result.sort((sortA, sortB) => sortA.count < sortB.count ? 1 : -1).slice(0, 5)
  
  return sortie
}


function getMostPopularAuthors(books, authors) {
  //Give matching books to author
const authId = authors.map(author => author.id)
const authBooks = books.filter((book) => authId.includes(book.authorId))

//give match author to book list
const bookId = authBooks.map(book => book.authorId)
const matchAuth = authors.filter(authMat => bookId.includes(authMat.id))

//combines first, last of auth
let fullAuthorNames = matchAuth.map(authors => 
(`${authors.name.first} ${authors.name.last}`));

// gets count of borrows of matching book
const getNum = authBooks.map
(book => book.borrows.map(borrows => 
borrows).length);
  
//creates count of borrows
const objNum = getNum.map(el => ({count: el})).map(el2 => el2);
 const objTit = fullAuthorNames.map(el => ({name: el})).map(el2 => el2);
  let result = objTit.map((item, i) => Object.assign({}, item, objNum[i]));

// sort from msot to least and reduce to top 5
const sortie = result.sort((sortA, sortB) => sortA.count < sortB.count ? 1 : -1).slice(0, 5)
  
return sortie
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
