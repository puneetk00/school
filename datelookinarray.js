var disabled = ["2017-04-20", "2017-04-22"];
var date1 = new Date("2017-4-18");
var date2 = new Date("2017-4-25");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

var result = new Date(date1);
for(i=0; i <= diffDays; i++){
console.log(result.toJSON().slice(0,10));
var isinarray = disabled.indexOf(result.toJSON().slice(0,10))
console.log(isinarray);
result.setDate(result.getDate() + 1);


}


