var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML= player1_name +" : ";
document.getElementById("player2_name").innerHTML= player2_name +" : ";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question turn : "+ player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn : "+ player2_name;


function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in Lowercase="+ word);

    letter_1=word.charAt(1);
    console.log(letter_1);

    length_divide_2=Math.floor(word.length/2);
    letter_2=word.charAt(length_divide_2);
    console.log(letter_2);
    
     length_minus_1=word.lenght-1;
     letter_3=word.charAt(length_minus_1);
     console.log(letter_3);

     remove_letter1=word.replace(letter_1, "_");
     remove_letter2=remove_letter1.replace(letter_2,"_");
     remove_letter3=remove_letter2.replace(letter_3, "_");
     console.log(remove_letter3);

     question_word="<h4 id='word_display'>Q. "+ remove_letter3+"</h4>";
     input_box="<br>Answer : <input type='text' id='input_check_box'> ";
     check_button="<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
     document.getElementById("word").innerHTML=""; 
     row=question_word+input_box+check_button;
     document.getElementById("output").innerHTML=row;
    
}

var question_turn="player1";
var answer_turn="player2";

function check(){
    var get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lowercase ="+ answer);
    
    if(word == answer){

        if(answer_turn == "player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
 
           if(question_turn == "player1"){
            question_turn="player2";
            document.getElementById("player_question").innerHTML= "Question turn : "+ player2_name;
           }
         else{
            question_turn="player1";
            document.getElementById("player_question").innerHTML= "Question turn : "+ player1_name;
         }

         if(answer_turn == "player1"){
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML= "Answer turn : "+ player2_name;            
         }

         else{
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML= "Answer turn : "+ player1_name;
         }

         document.getElementById("output").innerHTML="";

}


