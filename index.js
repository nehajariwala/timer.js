
    // time
    const d=new Date();
    let hours=d.getHours();
    document.getElementById("hours").innerHTML=hours+":";

    let minutes=d.getMinutes();
    document.getElementById("minutes").innerHTML=minutes+":";

   let secound=d.getSeconds();
    document.getElementById("secound").innerHTML=secound;
    
    if(hours<=12){
        document.getElementById("am").innerHTML="am"
     }
     else{
        document.getElementById("am").innerHTML="pm"
     } 

    // day
    // let day=d.getDay();
    // document.getElementById("day").innerHTML=day+",";

    let day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let a=day[d.getDay()];
    document.getElementById("day").innerHTML=a+",";

    let month=["january","february","march","april","may","june","july","august","september","october","november","december"]
    let b=month[d.getMonth()];
    document.getElementById("month").innerHTML=b;
  
    let date=d.getDate();
    document.getElementById("date").innerHTML=date+",";

    let year=d.getFullYear();
    document.getElementById("year").innerHTML=year;

  

    
  








