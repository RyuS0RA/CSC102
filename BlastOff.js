function StartTheCountdown()
{
    //This determines where the countdown Begins
    var countdown = 10;

    //This is the countdown 
    for (var i = 1; i <= 11; i++)
    {
        

        //This is the part that determins how the timer ends and what is displayed
        if (i == 11)
        {
            setTimeout(function() {
                document.getElementById("CountdownDisplay").innerHTML = "Blast Off!"
            }, 1000 * i)
        
        }
        //This tells the timer to keep going
        else {
            setTimeout(function () {
                document.getElementById("CountdownDisplay").innerHTML = countdown + " And Counting!";
                countdown = countdown - 1;
            }, 1000 * i);
        }
    }
}
//this is the function for the Back to the index page button
function Back()
{
    location.replace("MJDindex.html")
}
