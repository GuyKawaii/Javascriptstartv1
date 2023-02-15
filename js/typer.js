// der er 7 typer primitive data typer i javascript
// number, string, boolean, null, undefined, symbol, object

function showType(list) {
    for (let obj of list) {
        console.log(obj + ' is >> ' + typeof(obj));
    }

}

const arr = [];

arr.push(1);
arr.push(4.5);
arr.push(5/0);
arr.push(-5/0);
arr.push(0/0);
arr.push([1, 2, 3]);

showType(arr);
