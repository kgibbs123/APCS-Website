function myFunction()
{
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
    if(hours > 12)
    {
        hours = hours - 12;
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(myFunction, 1000);