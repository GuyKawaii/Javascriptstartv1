const fruits = ['apple', 'banana', 'orange'];


function myFunction(item) {
    const ptag = document.getElementById('demo');
    ptag.innerHTML += item + "<br>";
    console.log(ptag.innerHTML);
}

function myFunction2(item, index) {
    const ptag = document.getElementById('demo');
    ptag.innerHTML += "<br>" + item + ":" + index;
    console.log(ptag.innerHTML);
}

fruits.forEach(myFunction2);