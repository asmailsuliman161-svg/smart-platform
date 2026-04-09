function goTo(page) {
    window.location.href = page;
}

// 50 سؤال
let questions = [
    {q: "10101 + 11", a: "11000"},
    {q: "10101 ÷ 11", a: "111"},
    {q: "0.1011 = ؟", a: "0.6875"},
    {q: "1101101 بالعشري", a: "109"},
    {q: "10 + 10", a: "100"},
    {q: "11 + 1", a: "100"},
    {q: "100 + 1", a: "101"},
    {q: "111 + 1", a: "1000"},
    {q: "101 × 10", a: "1010"},
    {q: "10 × 10", a: "100"},
    {q: "11 × 11", a: "1001"},
    {q: "100 ÷ 10", a: "10"},
    {q: "1000 ÷ 10", a: "100"},
    {q: "1110 بالعشري", a: "14"},
    {q: "1010 بالعشري", a: "10"},
    {q: "1001 بالعشري", a: "9"},
    {q: "111 بالعشري", a: "7"},
    {q: "101 بالعشري", a: "5"},
    {q: "10 بالعشري", a: "2"},
    {q: "1 بالعشري", a: "1"},
    {q: "0 بالعشري", a: "0"},
    {q: "15 بالثنائي", a: "1111"},
    {q: "8 بالثنائي", a: "1000"},
    {q: "6 بالثنائي", a: "110"},
    {q: "12 بالثنائي", a: "1100"},
    {q: "9 بالثنائي", a: "1001"},
    {q: "7 بالثنائي", a: "111"},
    {q: "3 بالثنائي", a: "11"},
    {q: "2 بالثنائي", a: "10"},
    {q: "1 بالثنائي", a: "1"},
    {q: "4 بالثنائي", a: "100"},
    {q: "5 بالثنائي", a: "101"},
    {q: "13 بالثنائي", a: "1101"},
    {q: "14 بالثنائي", a: "1110"},
    {q: "16 بالثنائي", a: "10000"},
    {q: "17 بالثنائي", a: "10001"},
    {q: "18 بالثنائي", a: "10010"},
    {q: "19 بالثنائي", a: "10011"},
    {q: "20 بالثنائي", a: "10100"},
    {q: "21 بالثنائي", a: "10101"},
    {q: "22 بالثنائي", a: "10110"},
    {q: "23 بالثنائي", a: "10111"},
    {q: "24 بالثنائي", a: "11000"},
    {q: "25 بالثنائي", a: "11001"},
    {q: "26 بالثنائي", a: "11010"},
    {q: "27 بالثنائي", a: "11011"},
    {q: "28 بالثنائي", a: "11100"},
    {q: "29 بالثنائي", a: "11101"},
    {q: "30 بالثنائي", a: "11110"},
    {q: "31 بالثنائي", a: "11111"}
];

let index = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].q;
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;

    if(userAnswer == questions[index].a) {
        score++;
        document.getElementById("result").innerText = "✔ صحيح";
    } else {
        document.getElementById("result").innerText = "❌ خطأ، الإجابة: " + questions[index].a;
    }

    index++;

    if(index < questions.length) {
        document.getElementById("answer").value = "";
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "انتهت الأسئلة";
        document.getElementById("score").innerText = "درجتك: " + score + " / " + questions.length;
    }
}

window.onload = loadQuestion;
