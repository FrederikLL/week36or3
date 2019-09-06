function add (n1, n2){ 
    return n1 + n2;
}

var sub = function(n1, n2){
    return n1 -n2;
};

var cb = function(n1,n2, callback){
    return "Result from the first number:"+n1+" and "+n2+"equals"+callback(n1,n2);
};

console.log( add(1,2));
console.log( sub(4,4));
cb(1,1,add);
console.log(cb(3,3,add));
console.log(cb(4,3,sub));
//vi lavede den her øvelse i klassen


var boys = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function length3(item){
    if (item.length===3 || item.length<3){
        return item;
    }
};
console.log(boys.filter(length3));


function printFunction(item) {
  console.log(item);
}

boys.forEach(printFunction);
console.log("________");
boys.filter(length3).forEach(printFunction);

function toUpper(item) {
	return item.toUpperCase();
}

console.log(boys.map(toUpper));