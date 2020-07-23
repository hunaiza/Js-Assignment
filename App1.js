//Chp 01
//Task 1
window.alert('Hey New Customer!"Happy Shopping"');
//Task 2
window.alert('Error! Please enter a valid password');
//Task 3
alert('Welcome to JS Land...\nHappy Coding!');  
//Task 4
window.alert('Welcome to JS Land...');
window.alert('Happy Coding');
//Task 5
//Right click then click on console and write 'alert("Hello...I can run JS through my web browser's control")' then enter
//Task 6
//Check file Alert6.html which is available in folder Chp01 in my git repository
//Task 7(a)
//Check file Alert7(1).html which is available in folder Chp01 in my git repository
//Task 7(b)
//Check file Alert7(2).html which is available in folder Chp01 in my git repository
//Task 7(c)
//Check file Alert7(3).html which is available in folder Chp01 in my git repository
//Task 7(d)
//Check file Alert7(4).html which is available in folder Chp01 in my git repository

//Chp 02
//Task 1
var username = "Hunaiza";
document.write(username);
//Task 2
var myName;
myName = "Hunaiza M.Riaz";
document.write(myName);
//Task 3
var message;
message = "Hello World";
alert(message);
//Task 4
var name = "Johne Doe";
alert(name);
var age = "15 years old";
alert(age);
var Field = "Certified Mobile Application Development";
alert(Field);
//Task 5

//Task 6
var email = "hunaizamriaz@gmail.com";
alert("My email address is" + " " + email);
//Task 7
var book = "A smarter way to learn Javascript";
alert("I am trying to learn from the Book" + " " + book);
// Task 8
document.getElementById("heading").innerHTML= "Yeah i can write Html content through JS";
// Task 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


//Chp 03
//Task 1
var age = "19";
alert("My age is" + " " + age);
//Task 2
//Task 3
var birthYear = "2001";
document.write(birthYear);
//Task 4
var name = "John Doe";
var product = "5 T-shirt(s)";
var store = "on XYZ Clothing store";
document.write(name + " " + product + " " + store);


//Chp 04 
//Task 1
var click,myname,mobile;
//Task 2
//Legal
var hunaiza;
var androidMobile;
var mobile1;
var mobile2;
var _hunaiza;
//Illegal
var 0name;
var 9Hunaiza;
var %_Laptop;
var 12Name;
var &age;
//Task 3
//Check file Third.html in folder Chp04 which is available in my git repository


//Chp 05
//Task 1
var x = 3;
var y = 5;
var z= x + y;
document.write("Sum is:" + z);
//Task 2
var x = 3;
var y = 5;
var z= x - y;
document.write("Ans is:" + z);
document.write("<br>");
var x = 3;
var y = 5;
var z= x * y;
document.write("Ans is:" + z);
document.write("<br>");
var x = 3;
var y = 5;
var z= x / y;
document.write("Ans is:" + z);
document.write("<br>");
var x = 3;
var y = 5;
var z= x % y;
document.write("Ans is:" + z);
//Task 3
var value = "Value after variable declaration is: ??";
document.write(value);
document.write("<br>");
var number = 5 ;
document.write("Initial value:" + number);
document.write("<br>");
number++;
document.write("Value after increment is:" + number);
document.write("<br>");
var z = number + 7;
document.write("Value after Addition is:" + z)
document.write("<br>");
z--;
document.write("Value after decrement is:" + z);
document.write("<br>");
var a = z%3;
document.write("The remainder is:" + a);
document.write("<br>");
//Task 4
var ticket = 600;
var totalCost = 600 * 5;
document.write("Total cost to buy 5 tickets to a movie is" + " " + totalCost + "PKR");
//Task 5
var i;
for(i=1; i<=10; i++){
document.write(i*2);
document.write("<br>");
}
//Task 6
function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }
//Task 7
    var x=650;
    document.write("Price of item 1:" + x);
    document.write("<br>");
    var y=3;
    document.write("Quantity of item 1:" + y);
    document.write("<br>");
    var z=100;
    document.write("Price of item 2:" + z);
    document.write("<br>");
    var a=7;
    document.write("Quantity of item 2:" + a);
    document.write("<br>");
    var c = 100;
    document.write("Shipping Charges" + c);
    document.write("<br>");
    var b = x*3 + 100*7 + c;
    document.write("Total Cost of your order is:" + b);
    document.write("<br>");
//Task 8
    var number = 1000;
    document.write("Total marks:" + number);
    document.write("<br>");
    var obtained = 780;
    document.write("Obtained marks:" + obtained);
    document.write("<br>");
    var percentage = obtained/number *100;
    document.write(percentage + "%");
//Task 9
    var dollars = 10 * 104.80;
    var riyals = 25 * 28;
    var total = dollars + riyals;
    document.write("Total Currency in PKR:" + " " + total);
//Task 10
    var number = 5;
    document.write("Number is:" + number);
    document.write("<br>"); 
    var number1 = number + 5;
    var multiply = number1 * 10;
    var divide = multiply / 2;
    document.write("By adding:" + number1 + " " + "By multiplying:" + multiply + " " + "With division:" + divide);
//Task 11
 var year = 2020;
 var birth = 2001;
 var result = year-birth;
 document.write("Age is:" + result);
//Task 12
var radius = 30;
document.write("Radius of a circle is:" + radius);
document.write("<br>");
var circum = 2 * 3.142 * radius;
document.write("The circumference is:" + circum);
document.write("<br>");
var area = 3.142 * Math.pow(radius, 2);
document.write("Area is:" + area);
//Task 13
var snack = "Maggie";
document.write("Favourite snack:" + snack);
document.write("<br>");
var age = 19;
document.write("Current age:" + age);
document.write("<br>");
var max = 70;
document.write("Estimated maximum age:" + max);
document.write("<br>");
var amount = 2;
document.write("Amount of snacks per day:" + amount);
document.write("<br>");
var total = (max - age) * amount;
document.write("You will need" + " " + total + " " + snack + " " + "to last you until ripe old age of" + " " + max);
//chp 06-09
//Task 01
    var num = 10;
    document.write("The value of a is:" + num);
    document.write("<br><br>..................................");
    var increment = ++num;
    document.write("<br><br>The value of ++a is:" + increment);
    document.write("<br>Now the value of a is:" +increment);
    var increment1 = num++;
    document.write("<br><br><br>The value of a++ is:" + increment1);
    var a = num;
    document.write("<br>Now the value of a is:" +a);
    var decrement = --num;
    document.write("<br><br><br>The value of --a is:" + decrement);
    document.write("<br>Now the value of a is:" +decrement);
    var decrement1 = num--;
    document.write("<br><br><br>The value of a-- is:" + decrement1);
    var b = num;
    document.write("<br>Now the value of a is:" +b);
//Task 02
  var a=2,b=1;
  document.write("Value of a:" +a);
  document.write("<br>");
  document.write("Value of b:" +b);
  document.write("<br>");
  var result = --a - --b + ++b + b--;
  document.write("Result:" +result);
//Task 03
   var name = window. prompt("Enter your name: "); 
   document.write("Welcome" + " " + name  + " " + "Happy Shopping");
//Task 04
var table = prompt('Write a NUMBER that table you want:')
table = Number(table)

        
if(isNaN(table)){
    table = 5 
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 

} else {
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 
}

//Task 5
var s1 = prompt('Write name of 1st subject')
  var s2 = prompt('Write name of 2nd subject')
  var s3 = prompt('Write name of 3rd subject')
  var TMarks = 100
  var AllTmarks = TMarks*3
  var s1Marks = Number(prompt(`Write marks obtained in ${s1}`))
  var s2Marks = Number(prompt(`Write marks obtained in ${s2}`))
  var s3Marks = Number(prompt(`Write marks obtained in ${s3}`))
  var TobtMarks = s1Marks+s2Marks+s3Marks
  var s1Perc = (s1Marks/TMarks)*100
  var s2Perc = (s2Marks/TMarks)*100
  var s3Perc = (s3Marks/TMarks)*100

  document.write(`<table><tr>
    <th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>
  </tr>
  <tr>
    <td>${s1}</td><td>${TMarks}</td><td>${s1Marks}</td><td>${s1Perc}%</td>
  </tr>
  <tr>
    <td>${s2}</td><td>${TMarks}</td><td>${s2Marks}</td><td>${s2Perc}%</td>
  </tr>
  <tr>
    <td>${s3}</td><td>${TMarks}</td><td>${s3Marks}</td><td>${s3Perc}%</td>
  </tr>
  <tr>
    <th></th><th>${AllTmarks}</th><th>${TobtMarks}</th><th>${(TobtMarks/AllTmarks)*100}%</th>
  </tr>
  </table>`)


//Chp 09-11
//Task 01
//Before script tag put <p id="demo"></p>
  var city = prompt("Enter any city name of Pakistan?")
  var name;
  if (city == "Karachi") {
    name = "Welcome to the City of lights";
  } else if (city == "Islamabad"){
    name = "Capital of Pakistan";
  }
  else if (city == "Lahore"){
    name = "Welcome to the City of Gardens";
  }
  else if (city == "Faislabad"){
    name = "Welcome to the Biggest textile city of Pakistan";
  }
  else if (city == "Rawalpindi"){
    name = "Welcome to the Good hotels city of Pakistan";
  }
  else if (city == "Peshawar"){
    name = "Welcome to the Tasty Food city of Pakistan";
  }
  else if (city == "Multan"){
    name = "Welcome to the best crops are growing city of Pakistan";
  }
  else if (city == "Quetta"){
    name = "Welcome to the Fruit Basket of Pakistan";
  }
  document.getElementById("demo").innerHTML = name;
//Task 02
//Before script tag put <p id="demo"></p>
  var gender = prompt("Enter Your gender?")
  var show;
  if (gender == "Male") {
    show = "Good Morning Sir";
  } 
  else if (gender == "male"){
    show = "Good Morning Sir";
  }
  else if (gender == "Female"){
    show = "Good Morning Ma'am";
  }
  else if (gender == "female"){
    show = "Good Morning Ma'am";
  }
  document.getElementById("demo").innerHTML = show;
//Task 03
var signal = prompt("Enter signal color:");
var show;
if (signal == "red"){
  show = "Must stop";
}
else if (signal == "Red") {
  show = "Must stop";
}
else if (signal == "yellow"){
  show = "Ready to move";
}
else if (signal == "green") {
  show = "Move now";
}
else if (signal == "Yellow"){
  show = "Ready to move";
}
else if (signal == "Green") {
  show = "Move now";
}
document.write(show);
//Task 04
//Before script tag put <p id="demo"></p>
var fuel = prompt("Enter your remaining fuel?")
  var show;
  if (fuel > 0.25) {
    show = "Please refill the fuel in your car";
  } 
  else {
    show = "No need to refill the fuel";
  }
  document.getElementById("demo").innerHTML = show;
//Task 05
//a. Yes alert displayed
//b. Not displaying
//c. Yes displaying
//d. Yes displaying
//e. Yes displaying
//e. Yes displaying
//Task 06
var subject = Number(prompt("Enter Marks of Eng name:"));
var subject1 = Number(prompt("Enter Marks of Maths name:"));
var subject2 = Number(prompt("Enter Marks of Computer name:"));
var result = subject + subject1 + subject2;
document.write("Total Marks:300<br>");
document.write("Marks Obtained:" + result);
document.write("<br>");
var percentage = (result/300) *100;
document.write("Percentage:" + percentage + "%");
document.write("<br>");
  var show,remarks;
  if (percentage < 60) {
    show = "Fail"  ;
    remarks = "Sorry";
  } 
  else if (percentage >= 60){
    show = "B";
    remarks = "You need to improve";
  }
  else if (percentage >= 70){
    show = "B";
    remarks = "Good";
  }
  else if (percentage >= 80){
    show = "B";
    remarks = "Excellent";
  }
  document.write("Grade:" +show);
  document.write("<br>");
  document.write("Remarks:" + remarks);
//Task 07
var number = 4;
var guess = prompt("Guess the number from range 1-10?");
var show;
  if (guess == number) {
    show = "Bingo!Correct answer."
  } 
  else if (guess == number+1 || guess == number-1){
    show = "Very close";
  }
  else if (number != guess){
    show = "Wrong answer";
  }
  document.write(show);
//Task 08
var i =prompt("Enter Number:");;
if (i % 3 == 0) {
 alert("divisible by 3");
} else {
    alert("divisible not by 3");
} 
//Task 09
var i =prompt("Enter Number:");;
if (i % 2 == 0) {
 alert("No is even");
} else {
    alert("No is odd");
} 
//Task 10
var temp = prompt("Enter Temperature:");
var show;
if (temp >40){
  show = "It is too hot outside."
}
else if (temp >30){
  show = "The Weather today is Normal.”"
}
else if (temp >20){
  show = "Today's weather is cool."
}
else if (temp >10){
  show = "OMG! Today’s weather is so Cool.";
}
document.write(show);
//Task 11
var fno = Number(prompt("Enter Firstnumber:"));
var sno = Number(prompt("Enter Second number:"));
var operation = prompt("Enter Operation you want to perform?");
if ( operation == "+"){
  var result = fno + sno;
}
else if (operation == "-"){
  var result = fno - sno;
}
else if (operation == "*"){
  var result = fno * sno;
}
else if (operation == "/"){
  var result = fno / sno;
}
else if (operation == "%"){
  var result = fno % sno;
}
document.write(result);

//chp 12-13
//Task 01
//Task 02
var integer = prompt("Enter 1st integer?");
    var integer1 = prompt("Enter 2nd integer?");
    var result; 
    if (integer > integer1){
      result = "1st integer is bigger";
    }
    else if (integer <integer1){
      result = "2nd integer is bigger";
    }
    else {
      result = "Both are equal";
    }
    document.write(result);
//Task 03
var no = prompt("Enter Number?");
    var result; 
    if (no >0){
      result = "Number is positive";
    }
    else if (no <0){
      result = "Number is negative";
    }
    else {
      result = "Number is zero";
    }
    document.write(result);
//Task 04
var vowel = prompt("Enter one Alphabet:");
    var result; 
    if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" ){
      result = "True, This is vowel";
    }
    else if (vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U" ){
      result = "True, This is vowel";
    }
    else {
      result = "False, Not a vowel";
    }
    document.write(result);
//Task 05
var password = "Hunaiza123";
    var user = prompt("Enter Your Password");
    if (user == password){
      var show =  "Correct! The password you entered matches the original password.";
    }
    else if (user == ""){
      var show = "Please enter your password.";
    }
    else {
      var show = "Incorrect Password.";
    }
    document.write(show);
//Task 06
var greeting; 
    var hour = 13; 
    if (hour < 18) { 
      greeting = "Good day";
    } else {
    greeting = "Good evening"; 
  } 
  document.write(greeting);
//Task 07
var time = prompt("Enter time in format e.g.1900 between 0000 to 2359:");
    if (time >= 0000 && time < 1200){
      var show = "Good Morning";
    }
    else if (time >= 1200 && time < 1700){
      var show = "Good Afternoon";
    }
    else if (time >= 1700 && time < 2100){
      var show = "Good Evening";
    }
    else if (time >= 2100 && time <= 2359){
      var show = "Good Night";
    }
    document.write(show);

//Chp 14-16
//Task 01
var students = [];
//Task 02
var students = {};
var students1 = new studentname ();
//Task 03
var x = new Array("H","A");
//Task 04
var x = new Array(1,2);
//Task 05
var x = [];
var no = 5;
for (var i = 0; i < no; i++){
  x.push(false);
}
//Task 06
var biodata = ["Hunaiza","Solanki",19];
//Task 07
var education = ["SSC" + "<br>" +"HSC" + "<br>" + "BCS" + "<br>" + "BS" + "<br>" + "BCOM" + "<br>" + "MS" + "<br>" + "M.Phil" + "<br>" + "PhD"];
    document.write(education);
//Task 08
var student = ["Hunaiza","Ahmed","Ayesha"];
    var score = [320,480,340];
    var marks = 500;
    var percentage = (score[0]/marks) * 100;
    var percentage1 = (score[1]/marks) * 100;
    var percentage2 = (score[2]/marks) * 100;
    document.write("Score of" + " "+student[0]+ " " + "is" + " " + score[0] + "." + "Percentage:" + " " + percentage);
    document.write("<br><br>Score of" + " "+student[1]+ " " + "is" + " " + score[1] + "." + "Percentage:" + " " + percentage1);
    document.write("<br><br>Score of" + " "+student[2]+ " " + "is" + " " + score[2] + "." + "Percentage:" + " " + percentage2);
//Task 09
var colr = ['white','blue','green']
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.push(prompt('Write a color to add in end'))
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.unshift(prompt('Again write a color to add in beginning'))
        alert(colr)
        colr.shift()
        alert("1st color deleted\n"+colr)
        colr.pop()
        alert("Last color deleted\n"+colr)
        var ind = prompt(`In which index you want to add lenght 0 - ${colr.length - 1}`)
        colr[ind] = prompt('Which color?')
        alert(colr)
        ind = Number(prompt(`In which index you want to delete lenght 0 - ${colr.length - 1}`))
        ind1= Number(prompt(`How many color you want to remove from desired index`))
        colr.splice(ind,ind1)
        alert(colr)

//Task 10
var Student = [380, 500, 311, 150, 250, 310];
    document.write("Score of Students:" +Student);

  Student.sort(function(a, b){return a - b});
  document.write("<br>Order Score of Students:"+Student);
//Task 11
document.write("CITIES:<br>");
    var Cities = ["Karachi" , "Lahore" ,"Islamabad" ,"Multan"];
    document.write(Cities);
    var Cities1 = Cities.slice(0,2);
    document.write("<br>Selected Citites List:" + "<br>" +Cities1);
//Task 12
var animal = ["This","is","my","Cat"];
    document.write("Array:<br>" +animal);
    var animal1 = animal.join(" ");
    document.write("<br>String:<br>" +animal1 );
//Task 13
var values = ["Keyboard", "Mouse","Printer","Monitor"];
for (var i=0;i<values.length;i++){
  document.write("out<br>"+values[i]+'<br>')
}
//Task 14
var values = ["Keyboard", "Mouse","Printer","Monitor"];
var values1 = values.reverse();
for (var i=0;i<values1.length;i++){
  document.write("out<br>"+values1[i]+'<br>');
}
//Task 15
var phone = new Array ("Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier")
        document.write("<select>")
        for (let i = 0; i < phone.length; i++) {
        document.write(`<option>${phone[i]}</option>`)
        }
        document.write("</select>")


//Chp 17-20
//Task 01
var data=new hunaiza[[],[]];
//Task 02
var hu = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0;i<hu.length;i++){
  document.write(hu[i].join(' ') + "<br>");
}
//Task 03
for (var input = 1; input <= 10; input++) {
  document.write(input + "<br>");
 }
//Task 04
var table = Number(prompt("Enter Table(2-5):"));
var length = prompt("Enter length(10-12):");
if (table == 2 && length == 10){
  for(i=1; i<=10; i++){
    document.write("2*" + i + "="+i*2);
document.write("<br>");
}
}
else if (table == 3 && length == 10){
  for(i=1; i<=10; i++){
    document.write("3*" + i + "="+i*3);
document.write("<br>");
}
}
else if (table == 4 && length == 10){
  for(i=1; i<=10; i++){
    document.write("4*" + i + "="+i*4);
document.write("<br>");
}
}
else if (table == 5 && length == 10){
  for(i=1; i<=10; i++){
    document.write("5*" + i + "="+i*5);
document.write("<br>");
}
}
else if (table == 2 && length == 11){
  for(i=1; i<=11; i++){
    document.write("2*" + i + "="+i*2);
document.write("<br>");
}
}
else if (table == 3 && length == 11){
  for(i=1; i<=11; i++){
    document.write("3*" + i + "="+i*3);
document.write("<br>");
}
}
else if (table == 4 && length == 11){
  for(i=1; i<=11; i++){
    document.write("4*" + i + "="+i*4);
document.write("<br>");
}
}
else if (table == 5 && length == 11){
  for(i=1; i<=11; i++){
document.write("5*" + i + "="+i*5);
document.write("<br>");
}
}
else if (table == 2 && length == 12){
  for(i=1; i<=12; i++){
    document.write("2*" + i + "="+i*2);
document.write("<br>");
}
}
else if (table == 3 && length == 12){
  for(i=1; i<=12; i++){
    document.write("3*" + i + "="+i*3);
document.write("<br>");
}
}
else if (table == 4 && length == 12){
  for(i=1; i<=12; i++){
    document.write("4*" + i + "="+i*4);
document.write("<br>");
}
}
else if (table == 5 && length == 12){
  for(i=1; i<=12; i++){
    document.write("5*" + i + "="+i*5);
document.write("<br>");
}
}
//Task 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]; 
document.write(fruits.join("<br>"));
document.write("<br>")
document.write("<br>Element at index[0] is" +" " + fruits[0]);
document.write("<br>Element at index[1] is" +" " + fruits[1]);
document.write("<br>Element at index[2] is" +" " + fruits[2]);
document.write("<br>Element at index[3] is" +" " + fruits[3]);
document.write("<br>Element at index[4] is" +" " + fruits[4]);
//Task 06
document.write("Counting:<br>");
for (var i=1;i<16;i++){
  document.write(i + ",");
}
document.write("<br><br>Reverse Counting:<br>");
var counting = [1,2,3,4,5,6,7,8,9,10];

for (var i = counting.length - 1; i >= 0; i--) {
	document.write(counting[i] + ",");
}
document.write("<br><br>Even Counting:<br>");
for (var i=1; i<20; i++) {
    if(i % 2==0) {
      document.write(i + " ");
    }
  }
document.write("<br><br>Odd Counting:<br>");
for (var i=1; i<20; i++) {
    if(i % 2 != 0) {
      document.write(i + " ");
    }
  }
//Task 07
var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"] ;
var customer = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
if (customer == A[0]) {
  document.write(A[0] + " "+"is available at index 0 in our bakery");
}
else if (customer == A[1]) {
  document.write(A[1] + " "+"is available at index 1 in our bakery");
}
else if (customer == A[2]) {
  document.write(A[2] + " "+"is available at index 2 in our bakery");
}
else if (customer == A[3]) {
  document.write(A[3] + " "+"is available at index 3 in our bakery");
}
else if (customer == A[4]) {
  document.write(A[4] + " "+"is available at index 4 in our bakery");
}
else {
  document.write("Your item is not available here");
}
//Task 08
var hu = Math.max(24, 53, 78, 91, 12);
document.write("Largest number is " + " " + hu);
//Task 09
var hu = Math.min(24, 53, 78, 91, 12);
document.write("Smallest number is " + " " + hu);
//Task 10
for(let i = 1; i <= 100; i++){
  if(i%5==0){
  document.writeln(i);
  }
  }


//Chp 21-25
//Task 01
var first = prompt("First name?");
var second = prompt("Last name?");
var fullname = first + " " + second;
alert("Welcome" + " " +fullname);
//Task 02
var model = prompt("Enter Your favourite model?");
document.write("My favourite phone is:" + " " + model);
document.write("<br>Length of string is:" + " " + model.length);
//Task 03
var country = "Pakistan";
document.write("String:" +" "+country);
document.write("<br>Index of 'n':"+ " "+country.indexOf("n"));
//Task 04
var word = "Hello World";
document.write("String:" +" "+word);
document.write("<br>Last index of 'l':"+ " "+word.lastIndexOf("l"));
//Task 05
var word = "Pakistani";
document.write("String:" +" "+word);
document.write("<br>Character at index 3:"+ " "+word.charAt(3));
//Task 06
var first = prompt("First name?");
var second = prompt("Last name?");
var fullname = first.concat(second);
alert("Welcome" + " " +fullname);
//Task 07
var country = "Hyderabad";
document.write("City:" + " "+ country);
var replace = country.replace("Hyder", "Islam");
document.write("<br>After replacement:" + " " + replace);
//Task 08
var string = "Ali and Sami are best friends. They play cricket and football together.";
document.write(string.replace(/and/g,"&"));
//Task 09
var string = "432";
document.write("Value:" + " " + string);
document.write("<br>Type:"+ " "+typeof(string));
var a = parseInt(string);
document.write("<br><br>Value:" + " " + string);
document.write("<br>Type:"+ " "+typeof(a));
//Task 10
var name = prompt("Enter anything you wish to see in uppercase?");
document.write("User input:"+ " " +name);
var change = name.toUpperCase();
document.write("<br>Upper Case:" + " " + change);
//Task 11
function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  document.write("User Input:" + " "+ string);
document.write("<br>Title Case:"+" "+sentence.join(" "));
return sentence;
}
titleCase(prompt("Enter Any String?"));
//Task 12
var num = 35.36;
document.write("Number:" + " " + num);
var n = num.toString();
document.write("<br>Result:"+ " "+ n.replace(".",""));
//Task 13
var user = prompt('Username:')
for (var i = 0; i < user.length; i++) {
    if (user[i]==String.fromCharCode(33)||user[i]==String.fromCharCode(44)||user[i]==String.fromCharCode(46)||user[i]==String.fromCharCode(64)) {
    alert("Please enter valid name")
}
//Task 14
var rest = ["cake", "apple pie", "cookie", "chips", "patties"]
    var input = prompt('Welcome to our Bakery what do you want to order?').toLowerCase()
    var score; 
    for (var i = 0; i < rest.length; i++) {
        if(input==input[i])
        {
            document.write(`${ip} is avliable at index ${i} in our bakery.`)
            score = 1;
        }
    }
    if (score!=1)
    {
        document.write(`${ip} is not avliable at our bakery.`)
    }
}
//Task 15
//Task 16
var uni = "University Of Karachi";
var a = new Array();
a=uni.split("");
for (i=0;i<a.length;i++)
{
document.write(a[i] + "<br >");
}
//Task 17
var string = "Pakistan"; 
document.write("User Input:" + " " + string);
var result = string.charAt(string.length-1); 
document.write("<br>Last Character of input:"+ " " +result);
//Task 18
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
alert("There are"+ " " +count("The quick brown fox jumps over the lazy dog", 'the')+ " " + "occurence of 'the'!");


//Chp 26-30
//Task 01
var number = prompt("Enter any positive integer?");
  if (number >0){
    document.write("Number:" + " " + number);
    document.write("<br>Round off value:" + " " +Math.round(number));
    document.write("<br>Floor value:" + " " +Math.floor(number));
    document.write("<br>Ceil value:" + " " +Math.ceil(number));
  }
  else {
     alert("Write Positive Integer");
  }
//Task 02
var number = prompt("Enter any negative integer?");
  if (number <0){
    document.write("Number:" + " " + number);
    document.write("<br>Round off value:" + " " +Math.round(number));
    document.write("<br>Floor value:" + " " +Math.floor(number));
    document.write("<br>Ceil value:" + " " +Math.ceil(number));
  }
  else {
     alert("Write Negative Integer");
  }
//Task 03
var number = prompt("Enter any number?");
document.write("<br>The Absolute value of" + " " + number + " " + "is" + " " +Math.abs(number));
//Task 04
var dice = Math.floor( Math.random() * 6 ) +1;
alert("Random dice value:" + " " + dice);
//Task 05
var rand = Math.round(Math.random());
var coin ;
if(rand==1){
    coin = 'Head';
} else {
    coin = 'Tail';
}
document.write(`${rand} <br>Random coin value ${coin}`)
//Task 06
var range = Math.floor( Math.random() * 100 ) +1;
alert("Random number between 1-100:" + " " + range);
//Task 07
var weight = prompt("Enter your weight:").toLowerCase();
weight = weight.replace('kgs','');
weight = weight.replace('kilograms','');
document.write(`The weight of the user is: ${weight} kilograms`);
//Task 08
var number = 7;
var secret = prompt("Enter any number from 1-10?");
if (secret == number){
  alert("Congratulations! You are right.")
}
else {
  alert("Try Again");
}


//Chp 31-34
//Task 01
var d = new Date();
document.write(d);
//Task 02
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var d = new Date();
var n = month[d.getMonth()];
document.write("Current Month:"+ " "+n);
//Task 03
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()].slice(0,3);
alert("Today is:"+ " " + n);
//Task 04
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()].slice(0,3);
if (n == weekday[0] || n == weekday[6]){
  document.write("It's a fun day.");
}
else {
  document.write("Working Day.");
}
alert(n);
//Task 05
//Task 06
//Task 07
var hours = new Date().getHours();
var hours = (hours+24-2)%24; 
var mid='am';
if(hours==0){ 
hours=12;
}
else if(hours>12)
{
hours=hours%12;
mid='pm';
}
alert ("It's" + " " + mid);
//Task 08
d = new Date(); 
d.setFullYear(2020, 12, 0);
alert(d);
//Task 09
function days_passed(dt) {
var current = new Date(2020,5,12);
var previous = new Date(dt.getFullYear(), 0, 1);
return Math.ceil((current - previous + 1) / 86400000);
}
alert(days_passed(new Date(2015, 6, 18))+" "+"Days have passed since 1st Ramzan 2015");
//Task 10
//Task 11
var d = new Date();
d.setHours(d.getHours() - 48);
alert(d);
alert(d.getHours() + 5);
//Task 12
//Task 13
var user = prompt("Enter your age:");
document.write("Your age is:" + " " + user);
var year = new Date();
var n = year.getFullYear() - user;
document.write("<br>Your Birth year is:"+ " " +n);
//Task 14
var month = new Date();
var n = month.getMonth();
var name = prompt("Customer Name?");
var units = prompt("Enter number of units?");
var charges = prompt("Enter charges per units?");
var net = units * charges;
var late = 900;
var gross = net + late;
document.write("<br>Customer Name:" + " " + name);
document.write("<br>Current Month:" + " " + n)
document.write("<br>Number of units:" + " " + units);
document.write("<br>Charges per unit:" + " " + charges);
document.write("<br>Net Amount Payable (within Due Date):" + " " + net);
document.write("<br>Late Payment Surcharge:" + " " + late);
document.write("<br>Gross Amount Payable (after Due Date):" + " " + gross);


//Chp 35-38
//Task 01
function myFunction() {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.write("Date:"+ "" +date);
document.write("<br>Time:" + " " + time);
}
myFunction();
//Task 02
function myFunction() {
var name = prompt("Enter first name?");
var lname = prompt("Enter last name?");
var fullname = name + " " + lname;
alert("Welcome"+ " " + fullname);
}
myFunction();
//Task 03
function addTwoNumbers(textBox1, textBox2){
    var x=document.getElementById(textBox1).value;
    var y=document.getElementById(textBox2).value;
    var sum=0;
    sum=Number(x)+Number(y);
    alert("SUM is: " + sum);
  }
/* <body>
	<input type="text" id="textIn1" placeholder="Enter 1st number"><br><br>
	<input type="text" id="textIn2" placeholder="Enter 1st number"><br><br>
	<input type="button" id="btnSum" value="Calculate SUM" onClick="addTwoNumbers('textIn1','textIn2')"/>
</body> */
//Task 04
function subBy() 
{ 
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}
function multiplyBy()
{
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() 
{ 
num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
function addBy(){
var x=document.getElementById("firstNumber").value;
var y=document.getElementById("secondNumber").value;
var sum=0;
sum=Number(x)+Number(y);
document.getElementById("result").innerHTML = sum;
}
/* <form>
    1st Number : <input type="text" id="firstNumber" /><br><br><br>
    2nd Number: <input type="text" id="secondNumber" /><br><br><Br>
	  <input type="button" value="Add" onClick="addBy()"/>
    <input type="button" onClick="multiplyBy()" Value="Multiply" />
    <input type="button" onClick="divideBy()" Value="Divide" />
    <input type="button" onClick="subBy()" Value="Sub" />
    </form>
    <p>The Result is : <br>
    <span id = "result"></span>
    </p> */
//Task 05
var sumOfSquares = function (num) {
var i,
sum = 0;
for (i = 1; i <= num; i += 1) {
sum = i * i;
}
return sum;
}
var num = parseInt(prompt("Enter a number:"), 10); 
alert("The square of" + " " + num + " is " +
sumOfSquares(num)) ; 
//Task 06
function factorial(n){
let answer = 1;
if (n == 0 || n == 1){
return answer;
}
else{
for(var i = n; i >= 1; i--){
answer = answer * i;
}
return answer;
}  
}
let n = prompt("Enter number?");
answer = factorial(n)
alert("The factorial of " + n + " is " + answer);  
//Task 07
function sum() {
    var FirstNumber = prompt("Enter Start Number?");
    var SecondNumber = prompt("Enter End Number?");
    var result;
    for(var i = FirstNumber; i <= SecondNumber; i++) {
    document.write(i + "<br>");
}
}
sum();
//Task 08
function calculateSquare(numbr){
  return Math.pow(numbr,2);
}
function calculateHypotenuse(base, perp){
  return (calculateSquare(base) + calculateSquare(perp));

}
var Base = Number(prompt('Write base value:'));
var Perp =  Number(prompt('Write perpendicular value:')) ;
alert(`H^2 = ${calculateSquare(Base,Perp)}`);
//Task 09 
function areaRectange(width,height){
  alert(`Area of rectange: ${width*height}`);

}
//Task 10
var name=prompt("Enter string?");
var reverse=name.split("").reverse().join("");
if(name==reverse){
alert('Yes it is a palindrome!')
}
else{
alert("No it isn't a palindrome!")
}
//Task 11
function upper(str)
{
  var array_a = str.split(' ');
  var newarray_a = [];
    
  for(var x = 0; x < array_a.length; x++){
      newarray_a.push(array_a[x].charAt(0).toUpperCase()+array_a[x].slice(1));
  }
  return newarray_a.join(' ');
}
alert(upper(prompt("Enter String")));
//Task 12
function word(string)
{
  var array_a = string.match(/\w[a-z]{0,}/gi);
  var result = array_a[0];

  for(var x = 1 ; x < array_a.length ; x++)
  {
    if(result.length < array_a[x].length)
    {
    result = array_a[x];
    } 
  }
  return result;
}
alert(word(prompt("Enter a sentence?")));
//Task 13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

alert("There are"+ " " +char_count(prompt("Enter String?"), prompt("Number of occurrence of which alpabet you want to check?"))+ " " + "occurrence");
//Task 14
function calcArea(r){
  return Math.round( Math.PI*(Math.pow(r,2)));
}
var radius = Number(prompt('Radius of a circle:'));
document.write(`Circumference of a circle is: ${calcCircumference(radius)}<br>Area of a circle is: ${calcArea(radius)}`);

//Chp 38-42
//Task 01
var number = prompt("Enter Base Number?");
var number1 = prompt("Enter Power Number?");
    function exp(number,number1)
{
        var ans = 1;
        for (var i =1; i <= number1; i++)
        {
                ans = number * ans;        
        }
        return ans;
}
alert(exp(number, number1));
//Task 02
// Input Year: <input type="text" id = "year"/> 
      
//     <input type="button" id="button" onClick="isLeapYear()"
//             value="Check Leap Year"> 
      
//     <p id="Year"></p> 
function isLeapYear() { 
    var year= document.getElementById("year").value=""; 
    document.getElementById("Year").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
} 
//Task 03
var a = Number(prompt("Enter 1st value?"));
var b = Number(prompt("Enter 2nd value?"));
var c = Number(prompt("Enter 3rd value?"));
function solve(){
    var s = (a + b + c) / 2;
    var result = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.write(result);
    }
    solve();
//Task 04
var marksOne = Number(prompt('Write marks of subject 1 out of 10'))
var marksTwo = Number(prompt('Write marks of subject 2 out of 10'))
var marksThree = Number(prompt('Write marks of subject 3 out of 10'))
function percentage(a,b,c){
    return ((a+b+c)/30)*100
}
function average(a,b,c)
{
    return (a+b+c)/3
}

function mainFunction(){
alert('Percentage: '+percentage(marksOne,marksTwo,marksThree)+"\n"+'Averge: '+average(marksOne,marksTwo,marksThree))
}

mainFunction()
//Task 05
function myFunction() {
    var str = prompt("Enter any string?");
    var index = str.indexOf(prompt("Which word's index you want to find?"));
    alert(index);
  }
  myFunction();
//Or
var a ="Hunaiza";
var i;
var b= prompt("enter any character");
For (i=0; i<a.length ; i++){
if(a[i]==b){
Alert(i);
Break;
}
}
//Task 06
var string = prompt("Enter String?");
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
            }
        }
    }
}
string.character();
alert(string);
//Task 07
function Occurrences() {
    var str = prompt("Enter string to find number of occurrence?");
    var count = 0;
    let vowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (vowel) {
              count++;
              vowel = false;
            } else {
              vowel = true;
            }
            break;
          }
        default:
          vowel = false
      }
    }
  
    return count
  }
  
  alert(Occurrences());
//Task 08
var d = prompt("Enter 1st city distance?(in km)");
var d1 = prompt("Enter 2nd city distance?(in km)");
var result = d - d1;
    alert("Distance in km is:" + " " + result);

function meter(){
    var final = result / 1000;
    alert("Distance in meters is:"+ " " +final);
}

function feet(){
    var final1 =  result1 / 3280.84;
    alert("Distance in feets is:"+ " " +final1);
}

function inches(){
    var final2 =  result2 / 39370;
    alert("Distance in inches is:"+ " " +final2);
}

function centi(){
    var final3 =  result3 / 100000;
    alert("Distance in centimeteres is:"+ " " +final3);
}

meter();
feet();
inches();
centi();
//Task 09
//Task 10


//Chp 43-48
//Task 01
/* <a href="#" onclick="showalert()">Click here for Sign in</a>  */
function showalert(){
  alert("Sign in successful");
}
//Task 02
/* <center>
        <table style="margin-top: 150px;">
            <tr>
                <td><img src="img.jpg" height="200px" width="300px" onclick="img1()"></td>
                <td><img src="img1.jpg" height="200px" width="300px" onclick="img1()" style="margin-left: 30px;"></td>
                <td><img src="img2.jpg" height="200px" width="300px" onclick="img1()" style="margin-left: 30px;"></td>
            </tr>
        </table>
    </center> */
    function img1() {
      alert("Thankyou for purchasing this mobile");
  }
//Task 03
/* <style>
table {
counter-reset: section;
}

.count:before {
counter-increment: section;
content: counter(section);
}
</style> */
/* <center>
        <table style="margin-top: 150px;">
            <tr>
                <td>Index</td>
                <td>Name</td>
                <td>Class</td>
            </tr>
            <tr id = "row1">
                <td class="count"></td>
                <td>Hunaiza</td>
                <td>14</td>
                <td><button onclick = "row()">Delete</button></td>
            </tr>
            <tr id = "row2">
                <td class="count"></td>
                <td>Madiha</td>
                <td>9</td>
                <td><button onclick = "rows()">Delete</button></td>
            </tr>
            <tr id = "row3">
                <td class="count"></td>
                <td>Sameer</td>
                <td>7</td>
                <td><button onclick = "rowss()">Delete</button></td>
            </tr>
            <tr id = "row4">
                <td class="count"></td>
                <td>Ayesha</td>
                <td>12</td>
                <td><button onclick = "rowsss()">Delete</button></td>
            </tr>
        </table>
    </center> */
function row() { 
  document.getElementById("row1").remove(); 
} 
function rows() { 
  document.getElementById("row2").remove(); 
} 

function rowss() { 
  document.getElementById("row3").remove(); 
} 

function rowsss() { 
  document.getElementById("row4").remove(); 
} 
//Task 04
/* <center>
        <img  id= "ImageButton1" alt="image " style="margin-top: 100px;width: 400px;height: 400px;"  src="img4.jpg" onmouseover = "mouseOverImage()"  onmouseout="mouseOutImage()"/>
    </center> */
function mouseOverImage() {
  document.getElementById("ImageButton1").src = "img3.jpg";
}

function mouseOutImage() {
  document.getElementById("ImageButton1").src = "img4.jpg";
}
//Task 05
/* <center><input type="text" id="number" value="0"/><br><br>
    <input type="button" onclick="incrementValue()" value="Increment Value" />
    <input type="button" onclick="decrementValue()" value="Decrement Value" /></center> */
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}

//Chp 49-52
//Task 01
/* <center>
            <input type="text" id="textone" placeholder="Email"/><br><br>
    <input type="password" id="textTWO" placeholder="Password"/><br><br>
    
    <button onclick="testVariable()">Sign Up</button><br />
    <span id="spanResult">

    </span>
        
    </center> */
    function testVariable() {
      var strText = document.getElementById("textone").value;          
      var strText1 = document.getElementById("textTWO").value;
      var result = "Email:" + strText + '\n' + "Password:" + strText1;
      document.getElementById('spanResult').textContent = result;
       
  }
//Task 02
/* <center>
        <table>
            <tr>
                <td><img src="moon.jpg" width="300px"><br><p>The Moon is an astronomical body orbiting <br>Earth as its only natural satellite.<span id="dot"></span>
                    <span id="dots" style="display: none;">The Moon is<br> thought to have formed about 4.51 <br>billion years ago, not long after Earth. </span></p>
                    <br><button onclick="myFunction()" id="myBtn">Read more</button>
                  </td>
        </table>
    </center> */
       function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//Task 03
/* <center>
        <table>
            <tr>
             
                <th>Name</th>
                <th>Class</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
              
                <td><input type="text" value="Hunaiza" onmouseout="mouseout()" id="nameInput" disabled></td>
                <td><input type="number" value="10" id="noInput" disabled></td>
                <td><input type="button" class="edit" value="Edit"  ></td>
            
                <td><input type="button" class="delete" value="Delete"  ></td>
            </tr>
            
            <tr>
             
             <td>Hunii</td>
             <td>19</td>
             <td><input type="button" class="edit" value="Edit"  ></td>
             <td><input type="button" class="delete" value="Delete"  ></td>
         </tr>
          
        </table>
     </center> 
     */

//Chp 52-57
//Task 01
/* <center>
  <div id="v"></div>
  <div id="v1"></div>
  <div id="v2"></div>
  </center> */
var img = document.createElement("img");
        img.setAttribute("id","hunaiza");
        img.src = "img.jpg";
        var src = document.getElementById("v");
        img.style.height = "400px";
        img.style.width = "400px";
        img.style.marginLeft ="-200px"
        img.style.marginTop = "10px"
        img.style.display = "inline-block";
        img.style.position = "fixed";
        src.appendChild(img);

        var img1 = document.createElement("img")
        img.setAttribute("id","hunaiza1");
       img1.src = "img1.jpg";
       var src = document.getElementById("v1");
       img1.style.height = "400px";
       img1.style.width = "400px";
       img1.style.display = "inline";
       img1.style.marginLeft = "200px";
       img1.style.marginTop = "10px";
       img1.style.position = "fixed";
       src.appendChild(img1);

       var img2 = document.createElement("img")
       img.setAttribute("id","hunaiza2");
       img2.src = "img2.jpg";
       var src = document.getElementById("v2");
       img2.style.height = "400px";
       img2.style.width = "400px";
       img2.style.marginTop = "10px"
       img2.style.marginLeft = "-600px"
       img2.style.position = "fixed";
       img2.style.display = "inline";
       src.appendChild(img2);

       var div = document.getElementById("v");
       div.onclick = function(){
         this.style.height = "100px";
         this.style.width = "100px";
       }
       

       var div = document.getElementById("hunaiza1");
       div.onclick = function(){
         this.style.height = "100px";
         this.style.width = "100px"
       }
       
       var div = document.getElementById("hunaiza2");
       div.onclick = function(){
         this.style.height = "100px";
         this.style.width = "100px";
       }
//Task 02
{/* <p id="para">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sint atque saepe dolore doloribus possimus voluptatibus quisquam adipisci maxime iusto blanditiis voluptatum, nam dolorum provident quam? Repellat cupiditate doloribus ex!Loremlore
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, et. Repudiandae voluptas omnis sequi natus. Enim animi doloribus omnis officiis dolores. Odit ducimus laboriosam aut architecto tempora nemo nulla? Nostrum!Lorem

</p>
<button onclick= 'ZoomIn()'>+</button>
<button onclick="ZoomOut()">-</button>
<script src="app.js"></script> */}


var para = document.getElementById('para')
var size =16
function ZoomIn(){
    size += 10
    para.style.fontSize = size+'px'
}
function ZoomOut(){
    size -= 10
    para.style.fontSize = size+'px'
} 


//58-67
//Task 01(1)
var main = document.getElementById("main-content");
//Task 01(2)
var main = document.getElementById("main-content").nodeType;
//Task 01(3)
var main = document.getElementsByClassName("render");
document.getElementsByClassName("render").innerHTML = main;
console.log(main);
//Task 01(4)
var main = document.getElementById("first-name");
main.setAttribute("value","Hunaiza");
//Task 01(5)
var main = document.getElementById("last-name");
main.setAttribute("value","Solanki");
var main = document.getElementById("email");
main.setAttribute("value","Hunii@gmail.com");

//Task 02(1)
var main = document.getElementById("main-content").nodeType;
//Task 02(2)
var main = document.getElementById("last-name").nodeType;
var main1 = document.getElementById("last-name").childNodes;
//Task 02(3)
//Task 02(4)
var main = document.getElementById("main-content").firstChild;
var main = document.getElementById("main-content").lastChild;
//Task 02(5)
var main = document.getElementById("last-name").nextSibling;
var main = document.getElementById("last-name").previousSibling;
//Task 02(6)
var main = document.getElementById("email").parentNode.nodeName;
var main = document.getElementById("email").parentNode.nodeType;