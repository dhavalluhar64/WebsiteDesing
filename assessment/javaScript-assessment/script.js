let NewElement = document.createElement('div');

NewElement.className = "hidden1";

NewElement.id = "timeslot";





let val = document.querySelector('#date');

val.after(NewElement);



let lable1 = document.createElement('label');

lable1.innerText = "Time:";

lable1.htmlFor = "currenttime";




let val2 = document.querySelector("#timeslot");

val2.prepend(lable1);


let input1 = document.createElement('input');

input1.type = "time";

input1.id = "currenttime";

input1.name = "currenttime";

input1.required = true;






let val3 = document.querySelector('#timeslot');

val3.append(input1);



let NewElement1 = document.createElement('div');


NewElement1.id = "mealslot";

NewElement1.className = "hidden2";






let val4 = document.querySelector('#timeslot');

val4.after(NewElement1);




let label2 = document.createElement('label');

label2.innerText = "Meal Sloat:";

label2.htmlFor = "meal";


let val5 = document.querySelector('#mealslot');

val5.append(label2);



let select1 = document.createElement('select');

select1.id = "meal";

select1.name = "meal";

select1.required = true;


let val6 = document.querySelector('#mealslot');

val6.append(select1);


let option2 = document.createElement('option');

option2.innerText = "Select";

option2.id = "option1"

option2.value = "";



let val7 = document.querySelector("#meal");

val7.append(option2);


let option3 = document.createElement('option');

option3.innerText = "Breakfast";

option3.id = "option2";

option3.value = "breakfast";


let val8 = document.querySelector("#option1")

val8.after(option3);



let option4 = document.createElement('option');

option4.innerText = "lunch";

option4.id = "option3";

option4.value = "lunch";


let val9 = document.querySelector("#option2")

val9.after(option4);



let option5 = document.createElement('option');

option5.innerText = "Dinner";

option5.id = "option4";

option5.value = "dinner";


let val01 = document.querySelector("#option3")

val01.after(option5);



// <!----------code-strat----------------------------> 


function clearform1() {


    document.getElementById("bookingChoice").value = "";
    document.getElementById("username").value = "";
    document.getElementById("mobilenumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("noOfperson").value = "";
    document.getElementById("date").value = "";


    let timeslot = document.getElementById("timeslot");
    let mealslot = document.getElementById("mealslot");
    let dateSlot = document.getElementById("dateslot");

    timeslot.classList.add('hidden1');
    mealslot.classList.add('hidden2');
    dateSlot.classList.add('hidden3');


}




let bookingchoice = document.getElementById("bookingChoice");

let timeslot = document.getElementById("timeslot");

let mealslot = document.getElementById("mealslot");

let dateSlot = document.getElementById("dateslot");




function booking() {

    timeslot.classList.add('hidden1');

    mealslot.classList.add('hidden2');

    dateSlot.classList.add('hidden3');

    switch (bookingchoice.value) {

        case 'fullday': dateSlot.classList.remove("hidden3");

            break;


        case 'halfday': dateSlot.classList.remove('hidden3');
            mealslot.classList.remove('hidden2');
            break;

        case 'hourly': dateSlot.classList.remove('hidden3');
            timeslot.classList.remove('hidden1');
            break;

        default: dateSlot.classList.add('hidden3');
            timeslot.classList.add('hidden1');
            mealslot.classList.add('hidden2');
            break;
    }

}




















