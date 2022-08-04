export const getPageCount = (totalCount, limit) => {
     return Math.ceil(totalCount / limit);
}

export const getPagesArary = (totalPages) => {
     let pagesArray = [];

     for (let i = 0; i < totalPages; i++) {
          pagesArray.push(i + 1);
     }
     console.log(pagesArray);
     return pagesArray;
}