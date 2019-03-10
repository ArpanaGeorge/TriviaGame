 $(document).ready(function()
{
    //Variable declarations
    var i=-1, j=-4,t,time=30, Quenumber=0, corectAnsArrayCounter=-1,clicked=0,start=0,correctAns=0,wrongAns=0,unanswered=0;
    //Array declarations
    var queArray = ["Who was the legendary Benedictine monk who invented champagne?","Name the largest freshwater lake in the world?","Where would you find the Sea of Tranquility?",
    "What kind of weapon is a falchion?","What is the diameter of Earth?","What is another word for lexicon?"];
    
    var answerArray = ["Gregor Mendel","Martin luther","Dom Perignon","Gregori Rasputin","Lake Tahoe","Lake Superior","Lake Marion","Lake Ladoga","Australia","Asia","Antartica",
    "The Moon","sword","Spears","Bow and Arrow","Pike","10,000 miles","8000 miles","15,000 miles","12,000 miles","Computer","Digital","Dictionary","Semantics"];
    
    var correctAnsArray = ["Dom Perignon","Lake Superior","The Moon","sword","8000 miles","Dictionary"]
    
    var imagearray = ["assets/images/champagne.jfif","assets/images/superior.jfif","assets/images/moon.jfif","assets/images/sword.jfif","assets/images/earth.jfif",
    "assets/images/dictionary.jfif"]

    $(".QASection").hide();
    //Starting the Quiz by calling fuction startQuiz() on clicking Start button
    $("#start").click(function(){
        
        $(".QASection").show();
        $("#start").hide();
        i=-1, j=-4,t,time=30, corectAnsArrayCounter=-1,correctAns=0,wrongAns=0,unanswered=0;
        startQuiz();
    });
    
    //fuction startQuiz()
    function startQuiz()
    {
        //Initializing all the variables for the start of each Quiz Questions 
        clicked = 0;
        i++;
        Quenumber=i;
        j=j+4;
        corectAnsArrayCounter++;
        time = 30;
        $("#images").empty();

        //If the Question number is equal to Question array length, then that is the end of Questions, so displaying final result - number of right , wrong and
        // unanswered ones
        if(Quenumber==queArray.length )
        {
            $(".QASection").hide();
            $("#result").html("Final result"+"<br>"+"Correct Answer "+correctAns+"<br>"+"Wrong Answer "+wrongAns+"<br>"+"Unanswered "+unanswered).show();
            $("#start").show();
            $("#start").text("StartOver?");
        }

        else
        {
            $("#Time").html("Time Remaining: "+time);
            $(".QASection").show();
            $("#result").hide();
            //Getting Question and answers from array and displaying it in the respective elements
            $("#Question").html(queArray[i]);
            $("#Answer1").html(answerArray[j]);
            $("#Answer2").html(answerArray[j+1]);
            $("#Answer3").html(answerArray[j+2]);
            $("#Answer4").html(answerArray[j+3]);
            //Calling function timeRemFunction() every 1secs using setInterval method inorder to keep track of 30 secs timing for each Question
            t = setInterval(timeRemFunction, 1000);
        }
    }

    //function timeRemFunction()
    function timeRemFunction()
    {
        //Decrementing time by 1 
        $("#Time").html("Time Remaining: "+time);
        time--;
        //Hover Event
        $(".Answer").hover
            (function(){
                $(this).css({"background-color": "pink", "margin":"0px 250px", "border":"1px solid brown"});
            },
            function(){
                $(this).css({"background-color": "rgb(0, 174, 255)","border":"0px"});
            }
        );

        //click events - clicking will be either clicking correct answer or clicking wrong answer
        $(".Answer").click(function(){
            //Stopping calling of function timeRemFunction() every 1secs 
            clearInterval(t);
            $(this).css("background-color", "yellow");
       
            if(clicked===0)
            {
                //if clicked on correct answer, Giving result for 3 seconds that it is correct and going to next round of Question
                if($(this).text() == correctAnsArray[corectAnsArrayCounter])
                {        
                    $(".QASection").hide();
                    $("#result").html("That is Correct").show();
                    insertimages();
                    restartQuiz();
                    clicked=1;
                    //Keeping track of number of correct answers
                    correctAns++;
                }
                //if clicked on wrong answer, Giving result for 3 seconds showing the correct answer and going to next round of Question
                else
                {
                    $(".QASection").hide();
                    $("#result").html("That is wrong."+"<br>"+ "Correct answer is "+correctAnsArray[corectAnsArrayCounter]).show();
                    insertimages();
                    restartQuiz();
                    clicked=1;
                    //Keeping track of number of wrong answers
                    wrongAns++;
                }
            }
        });

        
        //If not clicking on any answer, keeping track of unanswered ones, displaying out of time and correct answer message and going to next round of Question
        if (time<0)
        {
            $(".QASection").hide();
            $("#result").html("<br><b>Out of time</b><br>Correct answer was "+correctAnsArray[corectAnsArrayCounter]).show();
            insertimages();
            restartQuiz();
           unanswered++;
        }
    }

    //function restartQuiz()
    function restartQuiz()
    {
        clearInterval(t);
        // start = 0;
        setTimeout(function(){ startQuiz(); }, 3000);
    }

    //
    function insertimages()
    {
        var a = $("<img>");
        a.attr("src", imagearray[corectAnsArrayCounter]);
        $("#images").append(a);
    }
});