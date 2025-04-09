const maxRows = 20;
const maxCols = 30;
const clickedCells = [
{"row":3,"col":8,"content": "Freiburg i.Br."},
{"row":4,"col":11,"content": "Kirchzarten"},
{"row":5,"col":16,"content": "Neustadt i.Schw."},
{"row":4,"col":22,"content": "Donaueschingen"},
{"row":7,"col":27,"content": "Engen"},
{"row":9,"col":28,"content": "Singen (Hohentwiel)"},
{"row":11,"col":24,"content": "Schaffhausen"},
{"row":20,"col":23,"content": "Zürich"},
{"row":17,"col":16,"content": "Brugg"},
{"row":15,"col":7,"content": "Rheinfelden (Baden)"},
{"row":15,"col":4,"content": "Basel Bad Bf."},
{"row":14,"col":4,"content": "Weil am Rhein"},
{"row":5,"col":6,"content": "Bad Krozingen"}
].map(x => {return {row: Number(x.row)-1, col: Number(x.col)-1, content:x.content}});
const matrix = [];
for (let r=0;r<maxRows;r++) {
  const rw = [];
  for (let r=0;r<maxCols;r++) {
    rw.push(null);
  }
  matrix.push(rw);
}
//console.log(matrix);
clickedCells.forEach(item =>{
  matrix[item.row][item.col] = `${item.content}`;
});
console.log(JSON.stringify(matrix,null,2));
