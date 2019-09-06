
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys + "," + girls;

var all2 = boys.concat(girls);

console.log(all);

console.log(all2);

console.log(all2.join("-"));

//console.log(all2.push("Lone"));
all2.push("Lone","Gitte"); console.log(all2);
all2.unshift("Hans","Kurt"); console.log(all2);
all2.shift(); console.log(all2);
all2.pop(); console.log(all2);
all2.splice(3,2); console.log(all2);
all2.reverse(); console.log(all2);
all2.sort(); console.log(all2);

function toUpper(item) {
	return item.toUpperCase();
}

console.log(all2.map(toUpper));

function returniorL(arg1) {
    if (arg1[0]==="l"||arg1[0]==="L"  ){
        return arg1;
    }
}

console.log(all2.filter(returniorL));

//var toUpper = 
//
//all2.map(all2.toUpperCase); console.log(all);
