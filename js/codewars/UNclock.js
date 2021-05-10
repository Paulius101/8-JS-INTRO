function past(h, m, s){
 let valandos = 0;
 let minutes = 0;
 let sekundes = 0;
 let suma = valandos + minutes + sekundes;
      
if (h > 0 ) {
   valandos = h * 3600000;
}
if (m > 0) {
    minutes = m * 60000;
}
if (s > 0) {
    sekundes = s * 1000;
} else {
    return 0;
}
return suma;
}


    console.log(past(0,1,1),61000);
    console.log(past(1,1,1),3661000);
    console.log(past(0,0,0),0);
    console.log(past(1,0,1),3601000);
    console.log(past(1,0,0),3600000);