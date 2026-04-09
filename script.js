 function goTo(page) {
    window.location.href = page;
}

/* بنك الأسئلة (مختصر - يمكنك استخدام البنك الكامل الذي أرسلته لك) */
let allQuestions = [

{q:"10101 + 11 = ؟", a:"11000"},
{q:"10101 ÷ 11 = ؟", a:"111"},
{q:"حوّل 18 إلى ثنائي", a:"10010"},
{q:"حوّل 25 إلى ثنائي", a:"11001"},
{q:"ما وظيفة نظام التشغيل؟", a:"إدارة الموارد"},
{q:"احتمال ظهور رقم زوجي في نرد؟", a:"1/2"},
{q:"احتمال ظهور صورة في عملة؟", a:"1/2"},
{q:"111 + 1 = ؟", a:"1000"},
{q:"1000 ÷ 10 = ؟", a:"100"},
{q:"ما هي الخوارزمية؟", a:"خطوات لحل مشكلة"}

];

let questions = [];
let index = 0;
let score = 0;

/* خلط عشوائي */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

/* بدء الاختبار */
function startQuiz() {
    questions = shuffle(allQuestions).slice(0, 5); // عدد الأسئلة (يمكن تغييره)
    index = 0;
    score = 0;
    loadQuestion();
}

/* تحميل السؤال */
function loadQuestion() {
    document.getElementById("question").innerText = questions[index].q;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

/* التحقق */
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;

    if(userAnswer == questions[index].a) {
        score++;
        document.getElementById("result").innerText = "✔ صحيح";
    } else {
        document.getElementById("result").innerText = "❌ الإجابة: " + questions[index].a;
    }

    index++;

    if(index < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        showResult();
    }
}

/* عرض النتيجة */
function showResult() {
    let percent = (score / questions.length) * 100;

    document.getElementById("question").innerText = "انتهى الاختبار";
    document.getElementById("result").innerText = "";
    document.getElementById("score").innerText =
        "درجتك: " + score + " / " + questions.length +
        " (" + percent.toFixed(1) + "%)";
}

/* تشغيل تلقائي */
window.onload = startQuiz;
