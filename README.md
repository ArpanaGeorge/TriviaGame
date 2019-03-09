# TriviaGame

## <b>Program Logic<b>
<p>-->Stored all the questions in array queArray, answers in array answerArray and correct answer in array correctAnsArray.<br>

-->On clicking Start button, Started the Quiz by calling fuction startQuiz()<br>

-->Inside the startQuiz() function<br>
        -Initialized all the variables for the start of each Quiz Questions <br>
        -Using jQuery Got Question and answers from array and displayed it in the respective elements<br>
        -Callied function timeRemFunction() every 1secs using setInterval method inorder to keep track of 30 secs timing for each Question<br>

                -->function timeRemFunction()<br>
                        -Decremented time by 1 <br>
                        -used hover method to change colour of the answer options on hovering over it<br>
                        -used click event listener - clicking will be either clicking correct answer or clicking wrong answer<br>

                                -->Inside click event listener<br>
                                        -Stopped calling of function timeRemFunction() every 1secs <br>
                                        -if clicked on correct answer, Gave result for 3 seconds that it is correct and going to next round of Question<br>
                                                -Kept track of number of correct answers<br>
                                        -if clicked on wrong answer, Gave result for 3 seconds showing the correct answer and going to next round of Question<br>
                                                -Kept track of number of wrong answers<br>
                                                
                        -If the Question number is equal to Question array length, then that is the end of Questions, so displaying final result - number of right , wrong and unanswered ones<br>
                        -If not clicking on any answer, kept track of unanswered ones, displaying out of time and correct answer message and going to next round of Question<br>
