document.getElementById("pinGenerator").addEventListener("click",
    function()
    {
        var key = Math.random()*10000;
        var keyRounded = Math.round(key);
        if (keyRounded > 999) 
        {
            document.getElementById("generatedInput").value = keyRounded;
        }
    }
);
document.getElementById("0").addEventListener("click",
    function()
    {
        keyBoardInput(0);
    }
);
document.getElementById("1").addEventListener("click",
    function()
    {
        keyBoardInput(1);
    }
);
document.getElementById("2").addEventListener("click",
    function()
    {
        keyBoardInput(2);
    }
);
document.getElementById("3").addEventListener("click",
    function()
    {
        keyBoardInput(3);
    }
);
document.getElementById("4").addEventListener("click",
    function()
    {
        keyBoardInput(4);
    }
);
document.getElementById("5").addEventListener("click",
    function()
    {
        keyBoardInput(5);
    }
);
document.getElementById("6").addEventListener("click",
    function()
    {
        keyBoardInput(6);
    }
);
document.getElementById("7").addEventListener("click",
    function()
    {
        keyBoardInput(7);
    }
);
document.getElementById("8").addEventListener("click",
    function()
    {
        keyBoardInput(8);
    }
);
document.getElementById("9").addEventListener("click",
    function()
    {
        keyBoardInput(9);
    }
);
document.getElementById("delete").addEventListener("click",
    function()
    {        
        var input = document.getElementById("enteredInput").value + "";
        document.getElementById("enteredInput").value = input.slice(0, -1);
    }
);
document.getElementById("reset").addEventListener("click",
    function()
    {        
        document.getElementById("enteredInput").value = "";
        document.getElementById("right").style.display = "none";
    }
);
document.getElementById("submit").addEventListener("click",
    function()
    {            
        var generatedInput = document.getElementById("generatedInput").value;
        var enteredInput = document.getElementById("enteredInput").value;
        if (enteredInput == generatedInput) 
        {
            document.getElementById("right").style.display = "block"
            document.getElementById("wrong").style.display = "none"
        } 
        else 
        {
            document.getElementById("wrong").style.display = "block"
            document.getElementById("right").style.display = "none"
            var tryCount = parseInt(document.getElementById("tryCount").innerText);
            document.getElementById("tryCount").innerText = --tryCount;
            if (tryCount == 0) 
            {
                document.getElementById("kickedOut").style.display = "block";
                document.getElementById("try").style.display = "none";
                document.getElementById("wrong").style.display = "none";
            }
        }
    }
);
function keyBoardInput(value)
    {
        var enteredInput = document.getElementById("enteredInput").value + "";
        document.getElementById("enteredInput").value = enteredInput + value;
    }

