function update(){

    let now = new Date();



    //  current date 

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day  = days[now.getDay()];

    // let month = now.toLocaleString('default',{month: 'long'});
    let month = now.toLocaleString('value',{month: 'narrow'});

    let date = now.getDate();

    let year = now.getFullYear();



    //  the current time

    let hours = now.getHours()

    let minutes = now.getMinutes();

    let second = now.getSeconds();

    let ampm = "AM";



    if(hours > 12){

        hours = hours - 12; // the hours '0' should be '12';

        ampm = 'PM';

        
    }

    // if(hours > 12 && hours < 24){

    //     ampm = "PM";

    // }else{

    //      ampm = "AM";
   
    // }
   

    hours = (hours < 10) ? "0" + hours : hours;

    minutes = (minutes < 10) ? "0" + minutes : minutes;

    second = (second < 10) ? "0" + second : second;


    document.getElementById("date").innerHTML =  day + ", " + month + " " +  date + ", " + year;

    document.getElementById("time").innerHTML =  hours + ":" + minutes + ":" + second + " " +ampm; 


}

setInterval(update,1000);

// update()