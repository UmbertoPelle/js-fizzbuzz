var list = document.getElementById("buzzList");

//scrivi un programma che stampi i numeri da 1 a 100.
for (var i = 0; i < 101; i++) {
  // Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.
  if (i % 3 == 0 && i % 5 == 0) {
    list.innerHTML += "<li>" + "FizzBuzz" + "</li>"
    console.log("FizzBuzz");
    // Per i multipli di 3 stampi “Fizz” al posto del numero.
  }else if (i % 3 == 0) {
    list.innerHTML += "<li>" + "Fizz" + "</li>"
    console.log("Fizz");
    // Per i multipli di 5 stampi "Buzz" al posto del numero.
  }else if (i % 5 == 0) {
    list.innerHTML += "<li>" + "Buzz" + "</li>"
    console.log("Buzz");
  }else {
    list.innerHTML += "<li>" + i + "</li>"
    console.log(i);
  }
}
