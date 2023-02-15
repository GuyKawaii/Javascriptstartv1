let g = 2;

if (g) {
    console.log('hello');
} else {
    console.log('goodbye');
}

let arr = [1, 2.3, 'hello', 4 < 2, true, g, null, undefined, [1, 2, 3], {'a': 'b'}, 0/0];

arr.forEach(elm => {
    console.log(elm + ' is >>' + typeof(elm));
});