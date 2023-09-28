//N1

for(let i = 1; i <= 50; i = i + 1){
    console.log(i);
}

for(let i = 35; i >= 8; i = i - 1){
    console.log(i);
}

//N2

let i = 89;

while(i >= 11){
    document.write(i + '<br>');
    i--
}

//N3

let sum = 0;

for(let i = 0; i <= 100; i++){
    sum += i
}
console.log(sum);

//N4

for(let i = 1; i <= 5; i++){
    let sum = 0;
    for(let num = 1; num <= i; num++){
        sum = sum + num;
    }
    console.log(sum);
}

//N5

for(i = 8; i <= 56; i = i + 1){
    if(i%2 === 0){
        console.log(i);
    }
}

//N6

for(let i = 2; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}


//N7

for(let n = 1000, num = 0; n > 50; num++){
    n = n / 2
    console.log(n);
}

//N8



//N9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

//N10