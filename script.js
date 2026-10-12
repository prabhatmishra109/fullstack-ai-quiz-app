// Application State
let currentSubjectKey = null;
let currentTopicKey = null;
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let timer = null;
let timeLeft = 30;
let userBookmarks = [];

// DOM Elements
const dashboardView = document.getElementById("dashboard-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");
const subjectCardsContainer = document.getElementById("subject-cards-container");
const activeTopicTitle = document.getElementById("active-topic-title");
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");
const bookmarkBtn = document.getElementById("bookmark-btn");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const scoreText = document.getElementById("score-text");
const timeLeftDisplay = document.getElementById("time-left");

// Initialize Dashboard
function initDashboard() {
    dashboardView.classList.remove("d-none");
    quizView.classList.add("d-none");
    resultView.classList.add("d-none");
    
    subjectCardsContainer.innerHTML = "";

    Object.keys(curriculumData).forEach(subjectKey => {
        const sub = curriculumData[subjectKey];
        
        let topicsHtml = "";
        Object.keys(sub.topics).forEach(topicKey => {
            const topic = sub.topics[topicKey];
            topicsHtml += `
                <div class="topic-item" onclick="startQuiz('${subjectKey}', '${topicKey}')">
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa-solid fa-circle-chevron-right text-primary"></i>
                        <span class="fw-medium text-dark small">${topic.name}</span>
                    </div>
                    <span class="badge bg-primary-subtle text-primary rounded-pill px-2 py-1">${topic.questions.length} Qs</span>
                </div>
            `;
        });

        const colDiv = document.createElement("div");
        colDiv.className = "col-md-6 col-xl-4";
        colDiv.innerHTML = `
            <div class="subject-card h-100 d-flex flex-column justify-content-between">
                <div>
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="fs-3 ${sub.color} bg-light p-3 rounded-4 shadow-sm">
                            <i class="${sub.icon}"></i>
                        </div>
                        <h5 class="fw-bold text-navy m-0">${sub.name}</h5>
                    </div>
                    <div class="topics-list mb-3">
                        ${topicsHtml}
                    </div>
                </div>
            </div>
        `;
        subjectCardsContainer.appendChild(colDiv);
    });
}

// Start Quiz for a Topic
function startQuiz(subjectKey, topicKey) {
    currentSubjectKey = subjectKey;
    currentTopicKey = topicKey;
    
    const topicData = curriculumData[subjectKey].topics[topicKey];
    activeQuestions = [...topicData.questions]; // Clone questions
    currentQuestionIndex = 0;
    score = 0;
    
    activeTopicTitle.textContent = `${curriculumData[subjectKey].name} ➔ ${topicData.name}`;

    dashboardView.classList.add("d-none");
    quizView.classList.remove("d-none");
    resultView.classList.add("d-none");

    loadQuestion();
}

// Load Question
function loadQuestion() {
    resetQuestionState();
    
    const q = activeQuestions[currentQuestionIndex];
    questionTitle.textContent = q.question;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${activeQuestions.length}`;
    scoreText.textContent = `Score: ${score}`;
    
    const progressPercent = ((currentQuestionIndex) / activeQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    q.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.textContent = optText;
        btn.className = "btn option-btn w-100";
        btn.onclick = () => selectOption(idx, btn);
        optionsContainer.appendChild(btn);
    });

    startTimer();
}

// Reset Question State
function resetQuestionState() {
    clearInterval(timer);
    timeLeft = 30;
    timeLeftDisplay.textContent = timeLeft;
    optionsContainer.innerHTML = "";
    explanationBox.classList.add("d-none");
    nextBtn.disabled = true;
    selectedOptionIndex = null;
}

// Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            autoSubmitTimeout();
        }
    }, 1000);
}

// Select Option
function selectOption(idx, btn) {
    clearInterval(timer);
    selectedOptionIndex = idx;
    
    const q = activeQuestions[currentQuestionIndex];
    const allBtns = optionsContainer.querySelectorAll(".option-btn");
    
    allBtns.forEach(b => b.disabled = true);

    if (idx === q.answer) {
        btn.classList.add("correct");
        score += 10;
        scoreText.textContent = `Score: ${score}`;
    } else {
        btn.classList.add("incorrect");
        allBtns[q.answer].classList.add("correct");
    }

    // Show explanation
    explanationText.textContent = q.explanation;
    explanationBox.classList.remove("d-none");
    nextBtn.disabled = false;
}

// Timeout auto submit
function autoSubmitTimeout() {
    const q = activeQuestions[currentQuestionIndex];
    const allBtns = optionsContainer.querySelectorAll(".option-btn");
    allBtns.forEach(b => b.disabled = true);
    allBtns[q.answer].classList.add("correct");

    explanationText.textContent = "Time expired! " + q.explanation;
    explanationBox.classList.remove("d-none");
    nextBtn.disabled = false;
}

// Next button listener
nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

// Show Results
function showResults() {
    quizView.classList.add("d-none");
    resultView.classList.remove("d-none");

    const maxScore = activeQuestions.length * 10;
    const accuracy = Math.round((score / maxScore) * 100);

    document.getElementById("res-final-score").textContent = `${score} / ${maxScore}`;
    document.getElementById("res-accuracy").textContent = `${accuracy}%`;

    const msgBox = document.getElementById("performance-msg");
    if (accuracy >= 80) {
        msgBox.className = "alert alert-success border-0 rounded-4 p-3 mb-4 fw-medium text-dark";
        msgBox.textContent = "🏆 Excellent mastery! You have a firm grip on enterprise concepts.";
    } else if (accuracy >= 50) {
        msgBox.className = "alert alert-warning border-0 rounded-4 p-3 mb-4 fw-medium text-dark";
        msgBox.textContent = "👍 Good effort! Review the explanations and retake to achieve perfection.";
    } else {
        msgBox.className = "alert alert-danger border-0 rounded-4 p-3 mb-4 fw-medium text-dark";
        msgBox.textContent = "💡 Keep practicing! Study the module materials and try again.";
    }
}

// Navigation Listeners
document.getElementById("back-to-dash").onclick = initDashboard;
document.getElementById("home-btn").onclick = initDashboard;
document.getElementById("retake-btn").onclick = () => startQuiz(currentSubjectKey, currentTopicKey);

// Bookmark feature
bookmarkBtn.onclick = () => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!userBookmarks.includes(currentQ.question)) {
        userBookmarks.push(currentQ.question);
        bookmarkBtn.classList.remove("btn-outline-warning");
        bookmarkBtn.classList.add("btn-warning", "text-white");
        bookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark me-1"></i> Bookmarked';
    } else {
        userBookmarks = userBookmarks.filter(q => q !== currentQ.question);
        bookmarkBtn.classList.remove("btn-warning", "text-white");
        bookmarkBtn.classList.add("btn-outline-warning");
        bookmarkBtn.innerHTML = '<i class="fa-regular fa-bookmark me-1"></i> Bookmark';
    }
};

// Reset bookmark state per question
const origLoad = loadQuestion;
// Whenever loadQuestion runs, reset bookmark button
const oldReset = resetQuestionState;
resetQuestionState = function() {
    oldReset();
    bookmarkBtn.classList.remove("btn-warning", "text-white");
    bookmarkBtn.classList.add("btn-outline-warning");
    bookmarkBtn.innerHTML = '<i class="fa-regular fa-bookmark me-1"></i> Bookmark';
};

// Initialize on load
initDashboard();
