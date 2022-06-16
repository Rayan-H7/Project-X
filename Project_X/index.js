console.log("Hello World!");

console.log("What is your name? ")
let name = window.prompt();
console.log(typeof name);
let char_count = 0;

if (name.length > 12){
    window.alert("Please enter a name between 1 and 12");
    char_count = name.length;
} else if (name.length = 12){
    document.getElementById("p1").innerHTML = "You have met the maximum word count for your name.";
    char_count = name.length;
}else {
    document.getElementById("p2").innerHTML = "Your range is fine. You can continue.";
    char_count = name.length
}

//This is a comment
/* This comment is on two lines now
*/

do{
    console.log("What is your phone number? ");
    let phone_number = Int(window.prompt());
    let phone = phone_number - 7732064145;
}while(phone < 0 || phone <= 0)

for (let age = 15; phone <= age; phone_number * Math.random(1)){
    age = window.prompt("What is your age? ")
    if (phone <= age){
        phone_number = phone_number * Math.random(1);
        console.log("My phone number is bigger than yours. Try better next time.");
    } else {
        break;
    }
}

function getYears(){
    years_old = window.prompt("How old are you? ");
    switch(years_old){
        case years_old < 4:
            document.getElementById("british_years").innerHTML = "You are too young for school. Go home.";
        case years_old > 4 && years_old < 5:
            document.getElementById("british_years").innerHTML = "You are in nursery. Enjoy it while you can.";
        case years_old > 5 && years_old < 6:
            document.getElementById("british_years").innerHTML = "You are in Year 1. Welcome to KS1!";
        case years_old > 6 && years_old < 7:
            document.getElementById("british_years").innerHTML = "Welcome to Year 2. I hope it`s not too hard.";
        case years_old > 7 && years_old < 8:
            document.getElementById("british_years").innerHTML = "Congratulations on reaching Year 3. Welcome to KS2!";
        case years_old > 8 && years_old < 9:
            document.getElementById("british_years").innerHTML = "You are in Year 4. It is not too hard for you I hope.";
        case years_old > 9 && years_old < 10:
            document.getElementById("british_years").innerHTML = "You are in Year 5. Prepare for the grammar test!";
        case years_old > 10 && years_old < 11:
            document.getElementById("british_years").innerHTML = "One step close to KS3, Year 6.";
        case  years_old > 11 && years_old < 12:
            document.getElementById("british_years").innerHTML = "Welcome to the Games, youngling. You have alot to learn dear Year 7.";
        case years_old > 12 && years_old < 13:
            document.getElementById("british_years").innerHTML = "Year 8. Now it`ll get hard.";
        case years_old > 13 && years_old< 14:
            document.getElementById("british_years").innerHTML = "You are in too deep. You cannot escape your GCSEs.";
        case years_old > 14 && years_old < 15:
            document.getElementById("british_years").innerHTML = "You are in it for real. Year 10 is tough.";
        case years_old > 15 && years_old < 16:
            document.getElementById("british_years").innerHTML = "It is time for the tests. No time left, o Year 11.";
        case years_old > 16 && years_old < 18: 
        document.getElementById("british_years").innerHTML = "Sixth Form time. You are in for a rough ride";
        default:
            document.getElementById("british_years").innerHTML = "Please write an accurate age.";
            break;
    }

}
