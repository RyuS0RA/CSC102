function StartTheCountdown()
{
    var countdown = 10;


    for (var i = 1; i <= 11; i++)
    {
        


        if (i == 11)
        {
            setTimeout(function() {
                document.getElementById("CountdownDisplay").innerHTML = "Blast Off!"
            }, 1000 * i)
        
        }
 
        else {
            setTimeout(function () {
                document.getElementById("CountdownDisplay").innerHTML = countdown + " And Counting!";
                countdown = countdown - 1;
            }, 1000 * i);
        }
    }
}
