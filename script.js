function showTime(){

    var date = new Date();
    
    var h date.getHours();
    
    var date.getMinutes();
    
    var s= date.getSeconds();
    
    var session "AM";
    
    if(h=0){ h = 12; }
    
    if (h> 12)( h=h-12; session "PH"; }
    
    h= (h< 10) ? "8" + h : h; = (<10)? "8": (s< 10) ? "0" + s
    
    var time = h + ":" + + ":" + 5+ + session; document.getElementById("MyClockDisplay").innerText = time;
    
    setTimeout(showTime, 1800);
    
    }
    
    showTime();