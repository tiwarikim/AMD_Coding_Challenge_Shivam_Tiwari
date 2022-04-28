/* Given a JSON as below, write a function that returns top 2 rank products */

const productRankings = [
  { name: "AMD_Product-A", rank: 1 },
  { name: "AMD_Product-B", rank: 10 },
  { name: "AMD_Product-C", rank: 2 },
  { name: "AMD_Product-X", rank: 4 },
];

function checkRank(productRankings) {
  /* sorted by product ranking */
  let products = productRankings.sort((a, b) =>
    a.rank < b.rank ? -1 : a > b ? 1 : 0
  );
  /* creating object array */
  let sortedProduct = {
    top2: [products[0].name, products[1].name],
  };
  return sortedProduct;
}

console.log(checkRank(productRankings));


/* Given a 2D array, implement the “transform” function to produce the desired output as below
a. Note: Bonus points if you implementation is declarative */
const d1 = [1, 2, 3];
const d2 = [4, 5, 6];
const d3 = [7, 8, 9, 11, 12, 13, 15];
const data = [d1, d2, d3];

function transform(data) {
  data[0] = data[data.length - 1].map((element, index) =>
    data[0][index] === undefined ? undefined : data[0][index]
  );

  data[0].forEach((element, index) =>
    console.log(data.map((row) => row[index]))
  );
}

console.log(transform(data));
