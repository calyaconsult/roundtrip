data = [{
  "item": 14,
  "battery": 51,
  "charging_status": "Yes",
  "charging_time": 0,
  "country": "Germany",
  "discharging_time": 1,
  "lat": 47.9832656,
  "lon": 7.8852907,
  "rownr": 15,
  "vehicle": "S 10",
  "zip_city": "79117 Freiburg im Breisgau",
  "row": 0,
  "col": 3
},
{
    "item": 12,
    "battery": 50,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 1,
    "lat": 47.9673655,
    "lon": 7.9665289,
    "rownr": 13,
    "vehicle": "S 10",
    "zip_city": "79199 Kirchzarten",
    "row": 0,
    "col": 4
  },
  {
    "item": 10,
    "battery": 48,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 1,
    "lat": 47.9021279,
    "lon": 8.1531423,
    "rownr": 11,
    "vehicle": "S 10",
    "zip_city": "79822 Titisee-Neustadt",
    "row": 1,
    "col": 6
  },
  {
    "item": 4,
    "battery": 64,
    "charging_status": "Yes",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 2,
    "lat": 47.9393358,
    "lon": 8.5323209,
    "rownr": 4,
    "vehicle": "RE 2",
    "zip_city": "78166 Donaueschingen",
    "row": 0,
    "col": 10
  },
  {
    "item": 3,
    "battery": 58,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 1,
    "lat": 47.8561014,
    "lon": 8.7724731,
    "rownr": 3,
    "vehicle": "RE 2",
    "zip_city": "78234 Engen",
    "row": 2,
    "col": 13
  },
  {
    "item": 2,
    "battery": 56,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 1,
    "lat": 47.759024,
    "lon": 8.8409286,
    "rownr": 2,
    "vehicle": "RE 2",
    "zip_city": "78224 Singen (Hohentwiel)",
    "row": 3,
    "col": 14
  },
  {
    "item": 1,
    "battery": 51,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Switzerland",
    "discharging_time": 1,
    "lat": 47.6757113,
    "lon": 8.6127883,
    "rownr": 1,
    "vehicle": "SBB S9",
    "zip_city": "8200 Schaffhausen",
    "row": 4,
    "col": 11
  },
  {
    "item": 35,
    "battery": 54,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Switzerland",
    "discharging_time": 1,
    "lat": 47.4126971,
    "lon": 8.5294711,
    "rownr": 38,
    "vehicle": "SBB S6",
    "zip_city": "8050 Zürich",
    "row": 9,
    "col": 10
  },
  {
    "item": 31,
    "battery": 69,
    "charging_status": "Yes",
    "charging_time": 0,
    "country": "Switzerland",
    "discharging_time": 0,
    "lat": 47.4840614,
    "lon": 8.2102936,
    "rownr": 34,
    "vehicle": "SBB IR 36",
    "zip_city": "5200 Brugg",
    "row": 7,
    "col": 7
  },
  {
    "item": 25,
    "battery": 93,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 4,
    "lat": 47.5499335,
    "lon": 7.7394777,
    "rownr": 28,
    "vehicle": "RB 30",
    "zip_city": "79618 Rheinfelden (Baden)",
    "row": 6,
    "col": 2
  },
  {
    "item": 23,
    "battery": 90,
    "charging_status": "Yes",
    "charging_time": 0,
    "country": "Switzerland",
    "discharging_time": 4,
    "lat": 47.5846536,
    "lon": 7.6016715,
    "rownr": 25,
    "vehicle": "RB 27",
    "zip_city": "4057 Basel",
    "row": 6,
    "col": 0
  },
  {
    "item": 16,
    "battery": 78,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 4,
    "lat": 47.610395,
    "lon": 7.6142139,
    "rownr": 18,
    "vehicle": "RB 27",
    "zip_city": "79576 Weil am Rhein",
    "row": 1,
    "col": 1
  },
  {
    "item": 17,
    "battery": 80,
    "charging_status": "No",
    "charging_time": 0,
    "country": "Germany",
    "discharging_time": 3,
    "lat": 47.9169973,
    "lon": 7.7069087,
    "rownr": 18,
    "vehicle": "RB 27",
    "zip_city": "79189 Bad Krozingen",
    "row": 1,
    "col": 1
  },
];
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
clickedCells.forEach((item,index) =>{
  matrix[item.row][item.col] = data[index];
});
console.log(JSON.stringify(matrix,null,2));
