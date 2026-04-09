let allQuestions = [

{q:"10101 + 11 = ؟", a:"11000", subject:"math"},
{q:"حوّل 18 إلى ثنائي", a:"10010", subject:"cs"},
{q:"احتمال ظهور رقم زوجي في نرد؟", a:"1/2", subject:"prob"},
{q:"101 + 1 = ؟", a:"110", subject:"math"},
{q:"ما وظيفة نظام التشغيل؟", a:"إدارة الموارد", subject:"cs"},
{q:"احتمال ظهور صورة في عملة؟", a:"1/2", subject:"prob"},
{q:"110 + 10 = ؟", a:"1000", subject:"math"},
{q:"حوّل 7 إلى ثنائي", a:"111", subject:"cs"},
{q:"111 - 1 = ؟", a:"110", subject:"math"},
{q:"ما هي الخوارزمية؟", a:"خطوات لحل مشكلة", subject:"cs"}

];

let questions = [];
let index = 0;
let score = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {

    let count = document.getElementById("questionCount").value;
    let subject = document.getElementById("subject").value;

    let filtered = allQuestions;

    if(subject !== "all") {
        filtered = allQuestions.filter(q => q.subject === subject);
    }

    questions = shuffle(filtered).slice(0, count);

    index = 0;
    score = 0;

    loadQuestion();
}

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].q;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";

    document.getElementById("score").innerText =
        "السؤال " + (index + 1) + " من " + questions.length;
}

function checkAnswer() {

    let userAnswer = document.getElementById("answer").value;

    if(userAnswer == questions[index].a) {
        score++;
        document.getElementById("result").innerText = "✔ صحيح";
    } else {
        document.getElementById("result").innerText =
            "❌ الإجابة الصحيحة: " + questions[index].a;
    }

    index++;

    if(index < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        showResult();
    }
}

function showResult() {

    let percent = (score / questions.length) * 100;

    document.getElementById("question").innerText = "انتهى الاختبار";
    document.getElementById("result").innerText = "";

    document.getElementById("score").innerText =
        "درجتك: " + score + " / " + questions.length +
        " (" + percent.toFixed(1) + "%)";
}

function addQuestion() {

    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;
    let subject = document.getElementById("newSubject").value;

    if(q === "" || a === "") {
        alert("يرجى إدخال السؤال والإجابة");
        return;
    }

    allQuestions.push({
        q: q,
        a: a,
        subject: subject
    });

    alert("تمت إضافة السؤال ✅");

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
}
