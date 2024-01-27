const questions = [
    {
        que: "Which of the following is a markup language",
        a: "HTML",
        b: "JS",
        c: "CSS",
        d: "PHP",
        correct: "a",
    },
    {
        que: 'What does the term "HTTP" stand for in web development?',
        a: "Hyper Text Transfer Protocol",
        b: "Hyper Transfer Text Protocol",
        c: "High-Level Text Transfer Protocol",
        d: "Hyperlink and Text Transfer Protocol",
        correct: "a",
    },
    {
        que: "Which JavaScript function is used to select an HTML element by its ID?",
        a: " getElementByTag",
        b: " selectID",
        c: "selectElementById",
        d: "getElementById",
        correct: "d",
    },
    {
        que: "Which of the following is a server-side scripting language?",
        a: "HTML",
        b: "PHP",
        c: "CSS",
        d: "JS",
        correct: "b",
    },
];


let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;

const queBox = document.getElementById("queBox");
const optInput = document.querySelectorAll(".options");

// load question function
const loadQuestion = () => {

    if(index === total){
        end();
    }else{
    reset();
    const data = questions[index];

    queBox.innerHTML = ` ${index + 1}. ${data.que}`;

    optInput[0].nextElementSibling.innerText = data.a;
    optInput[1].nextElementSibling.innerText = data.b;
    optInput[2].nextElementSibling.innerText = data.c;
    optInput[3].nextElementSibling.innerText = data.d;
    }
};




// submit function 

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAns();

    
    if (ans === data.correct) {
        
        console.log("correct");
        right++;
    } else {
        console.log("error");
        wrong++;
    }

    index++;
    loadQuestion();
};

// initial call
loadQuestion();



// take ans function

function getAns(){
    let ans = "";
     optInput.forEach((input) => {
     if(input.checked)
        ans = input.value;
    });
    return ans;
};

// reset function
function reset(){
    optInput.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}


// end function

function end(){
    document.getElementById("box").innerHTML = `<div class="final"> <p> Quiz complete your total score is : </p>
    <br>
    <span> right answer = ${right} </span><br>
    <span> wrong answer = ${wrong} </span></div>
    `
}
