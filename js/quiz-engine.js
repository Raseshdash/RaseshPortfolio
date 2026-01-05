let quiz = [];
let index = 0;
let score = 0;
let userAnswers = [];
const QUIZ_DURATION = 300; // 5 minutes
let totalTime = 300; // 5 minute
let timerInterval;

/* ---------- HELPERS ---------- */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* ---------- LOAD QUIZ TYPE ---------- */
const quizType = document.body.dataset.quiz; // java | sql | web
quiz = [...QUIZ_DATA[quizType]];

shuffleArray(quiz);

/* ---------- TIMER ---------- */
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const min = Math.floor(totalTime / 60);
    const sec = totalTime % 60;
    document.getElementById("timer").textContent =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;
    totalTime--;
    if (totalTime < 0) {
      clearInterval(timerInterval);
      alert("⏰ Time up!");
      showResult();
    }
  }, 1000);
}

/* ---------- QUIZ LOGIC ---------- */
function loadQuestion() {
if (index >= quiz.length) {
  showResult();
  return;

  const q = quiz[index];
  document.getElementById("question").textContent = q.q;
  document.getElementById("progress").textContent =
    `Question ${index + 1} / ${quiz.length}`;

  document.getElementById("options").innerHTML =
    q.options.map((opt, i) => `
      <label>
        <input type="radio" name="opt" value="${i}">
        ${opt}
      </label>
    `).join("");

  document.getElementById("nextBtn").textContent =
    index === quiz.length - 1 ? "Submit" : "Next";
}

function nextQuestion() {
  const selected = document.querySelector("input[name=opt]:checked");
  if (!selected) return alert("Select an answer");

  const ans = +selected.value;
  userAnswers.push(ans);
  if (ans === quiz[index].answer) score++;

  index++;
  index < quiz.length ? loadQuestion() : showResult();
}

function showResult() {
    sessionStorage.removeItem("quizStarted");

  clearInterval(timerInterval);
  document.getElementById("question").textContent = "🎉 Quiz Completed";
  document.getElementById("options").innerHTML = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").textContent =
    `Score: ${score}/${quiz.length}`;

}

function resetQuiz() {
  index = 0;
  score = 0;
  userAnswers = [];
  totalTime = QUIZ_DURATION;
  shuffleArray(quiz);
  startTimer();
  loadQuestion();
}

function goBack() {
  window.location.href = "../../../";
}
if (sessionStorage.getItem("quizStarted")) {
  window.addEventListener("DOMContentLoaded", () => {
    alert("⚠️ Quiz refresh detected. Submitting quiz.");
    showResult();
  });
} else {
  sessionStorage.setItem("quizStarted", "true");
}



/* ---------- INIT ---------- */
startTimer();
loadQuestion();
