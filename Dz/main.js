// var str = "#";
// while (str.length<=7){
//     console.log(str + "\n");
//     str+="#";
// }

// function fizzBuzz(a){
//     return a%3==0 && a % 5 == 0 ? 'FizzBuzz' : a%3 == 0 ? 'Fizz' : a%5 == 0 ? 'Buzz' : a;
// }

// function fizzBuzz(a){
//     if (a % 3 == 0 && a % 5==0)
//         return 'FizzBuzz'
//     else if( a%3 == 0)
//         return 'Fizz'
//     else if(a%5==0)
//         return 'Buzz'
//     return a
// }

// function fizzBuzz(a){
//     switch(0) {
//         case Number(!(!(a % 3)  && !(a % 5))): return 'FizzBuzz';
//         case a % 3: return 'Fizz';
//         case a % 5: return 'Buzz';
//         default: return a;   
//     }
// }
// console.log(fizzBuzz(45));

// function fizzBuzz(a) {
//     let res = '';
//     if (a % 3 === 0) {
//         res = 'Fizz';
//     }
//     if (a % 5 === 0) {
//         res += 'Buzz'
//     }
//     return res || a;
// }

// const fizzBuzz = n => (n % 3 == 0 ? "Fizz" : "") + (n % 5 == 0 ? "Buzz" : "") || n


// for (var i = '# # # #'; i.length < 17; i = i + ' ') {
//     document.write(i + '<br>');
//     console.log("["+i+"]");    
// }

// for (var i = '# # # #'; i.length < 17; i = i + ' ') {
//     document.write(i + '<br>' + ((i.length % 2 == 1) ? '&nbsp' : ''));
//   }
//   //console.log("["+i+"]");

//   var inside = "[&nbsp;&nbsp;][#][&nbsp;&nbsp;][#][&nbsp;&nbsp;][#][&nbsp;&nbsp;]";
// for (var i = 0; i < 8; i++) {
//   var head = (i % 2 != 0)? "" : "[#]";
//   var tail = (i % 2 == 0)? "" : "[#]";
//   var line = head + inside + tail;
//   document.write(line + '<br>');
//   //console.log("["+line+"]");    
// }

// let line = "";
// let size = 8;
// let letter1 = "#";
// let letter2 = " ";
// for (count = 0; count < (size * (size + 1)); count++) {
//   if (count % (size + 1) == 0) {
//     line = line + '\n';
//   } else if (count % 2 == 0) {
//     line = line + letter1;
//   } else {
//     line = line + letter2;
//   }
// }
// console.log(line);


