//1.How to compare two JSON have the same properties without order !!
//Ans: It can be compared using isEqual() method 


var obj1 = { "name":"Person 1", "age":5};
var obj2 = { "age":5, "name":"Person 1"};

console.log(isEqual(obj1,obj2));