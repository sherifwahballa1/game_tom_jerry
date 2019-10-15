var u=3;
function character_page()
{
    var audio = document.getElementById("audio");
        audio.play();

        document.getElementById("main").style.display="block";
        document.getElementById("container").style.display="none";
       
}

function help_page()
{
    document.getElementById("container").style.display="none";
    document.getElementById("container1").style.display="block";
    document.getElementById("con").style.display="block";
    document.getElementById("con2").style.display="block";
}

function backStart()
{
    document.getElementById("container1").style.display="none";
    document.getElementById("container").style.display="block";
}

function backStart2()
{
    document.getElementById("main").style.display="none";
    document.getElementById("container").style.display="block";
}


