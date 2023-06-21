// class -14.--variable.

var address = "dinajpur";
// console.log(address);

var myNameis = "shahariwar";
// console.log(myNameis, address);

var price = 20;
// console.log(price, address);

var doYouEatRice = true ;
// console.log(doYouEatRice);

var doYouEatRice = false ;
// console.log(doYouEatRice);

var sakib = 300;
var tamim =200;

var total = sakib + tamim;
// console.log(total);

var Defference = sakib - tamim;
// console.log(Defference);

var Division = sakib / tamim;
// console.log(Division);

var Division = sakib % tamim;
// console.log(Division);

var multiplication = sakib * tamim;
// console.log(multiplication);

var priceOfOrange =200;
var priceOfOrange = priceOfOrange +50;
priceOfOrange +=50;
priceOfOrange -=50;
priceOfOrange *=50;
// console.log(priceOfOrange);

var price1 = "50.52";
var price2 = "55";
//  console.log(price1 + price2);
 
var numberprice1 = parseInt(price1)
var numberprice2 = parseInt(price2)

var numberPrice1 = parseFloat(price1)
var numberPrice2 = parseInt(price2)

//  console.log(numberPrice1 + numberPrice2);
var totalNumberPrice = numberPrice1 + numberPrice2;
// console.log(totalNumberPrice.toFixed(3));
// console.log(typeof totalNumberPrice);
 
var today = new Date();
// console.log(today);
// console.log(typeof today);

// var num1 = 0.1;
// var num2 = 0.3;
// console.log(num1 + num2);

var num1 = 0.1;
var num2 = 0.2;
// console.log(parseFloat((num1 + num2).toFixed(1)));


// class -15 --Array.

var myArray = ["little", "fish", "and", "many", "more",];
// console.log(myArray);

var oddNumber = [1,3,5,7,9,];
// console.log(oddNumber);

var vowels = ["a", "e", "i", "o", "u"];
// console.log(vowels.length);
// console.log(vowels.indexOf("o"));


{var myFevBooks = ["Ami", "Himu", "Opekkha", "Tomake", "Ei Ami"];
// console.log(nameOfSomeBooks.indexOf("Himu"));
myFevBooks[1] = "Mimu";
// console.log(myFevBooks);
indexOfMimu = myFevBooks;
// console.log(indexOfMimu);
myFevBook[indexOfMimu] ="Himu";
 
console.log(myFevBook);
// not done yat------------------------<
}

//--------play list -------
    // -----Js Out put-----
alert("I am shahariwar");
document.write("I love my conuntry");
console.log("I love my conuntry")

    // -----single line comment----

document.write("Name: Shahariwar <br/>");
document.write("phone: 018-xxxxxxxx");
    // -----multiline comment-----
/*

*/
 document.write("Nihon <br>");
 document.write("018xx-xxxxx <br>");
document.write("Bangladesh <br>"); 

    // -----variables-----

var myName = "Shahariwar";
 document.write(myName);
 console.log(myName);

var num = "20";
var num2 = "20.36";
var num3 = 20.36009786;
var num4 = 20.36009786;
num = toString(num); //---- for string.
num = parseInt(num); //----for number.
num = parseFloat(num2); //---- 1.1 nm=umber

console.log(typeof(num)); //---for check type.

console.log(num3.toFixed(2)); //---- for a fixd number display. (return = string).

console.log(num4.toPrecision(4)); //---- for how much number i wont to show. (return = string).

console.log(typeof(Number("12")));

console.log(Number("     20.5"));

console.log(Number(true));

console.log(Number(false));

    // -----string concatenation-----

var firstName = "Shahariwar";
var lastName = " Nihon";

var fullName = firstName + lastName;

    document.write("My Name Is " + fullName);

var fullName = "Shahariwar Nihon";

document.write(fullName + " Is My Name")

var num1 = 30;
var num2 = 40;

document.write("Num1 =" + num1 +" and Num2 = " + num2);
var text1 ="Bangladesh";
var text= text1.slice(2,5);
document.write(text);

var text2 = " is a beautifull conuntry";
var text = text1.concat(text2);

document.write(text);



    // -----string length-----

var text ="bangladesh"

var len = text.length;

document.write("Number of charecter "+ text.length);

var text =prompt("Enter Your Name ");//----how to take info from user.

document.write("Number of charecter "+ text.length)

var text = " Bangladesh";

text.charAt(6)
document.write(text.charAt(6));

text = text.toUpperCase();
text = text.toLocaleLowerCase();
document.write(text);


// ------test------
{
    // get first name from user
    // get last name user
    // add without using library function
    // print full name
    // convart full name into uppercase
}

var firstName = prompt ("Enter Your First Name");
var lastName = prompt ("Enter Your last Name");

var fullName = firstName +  lastName;
fullName = fullName.toUpperCase();
document.write(fullName + fullName.length);

