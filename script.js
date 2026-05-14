const problems = [
  {
    id: 1,
    title: "Algebra Drill 1",
    topic: "algebra",
    difficulty: "easy",
    text: "If 4(x-2) = 2(x-4), what is the value of x?",
    answer: "0",
    hint: "Expand the equations, then solve.",
    solution:
      "Since 4(x+2) = 2(x-4), then 4x-8 = 2x-8." +
      "This means that 2x = 0, therefore x = 0.",
  },
  {
    id: 2,
    title: "Number Theory Drill 1",
    topic: "number-theory",
    difficulty: "easy",
    text: "What is the sum of the 20 smallest odd positive integers?",
    answer: "400",
    hint: ".",
    solution:
      "Let S be the sum of all 20 integers. Then, S = 1+3+5+...+35+37+39. Then rewrite S in reverse order, S = 39+37+35+...+5+3+1." +
      "Adding these 2 representations, we obtain: 2S = 40+40+40+...+40+40+40." +
      "There are 20 terms in this sum, therefore 2S = (20)(40) = 400.",
  },
  {
    id: 3,
    title: "Geometry Drill 1",
    topic: "geometry",
    difficulty: "easy",
    text:
      "A right triangle has legs 6 and 8. What is the length of the " +
      "hypotenuse?",
    answer: "10",
    hint: "Use the Pythagorean theorem.",
    solution: "c^2 = 6^2 + 8^2 = 36 + 64 = 100, so c = 10.",
  },
  {
    id: 4,
    title: "Combinatorics Drill 1",
    topic: "combinatorics",
    difficulty: "medium",
    text:
      "How many different 3-letter arrangements can be made from the " +
      "letters A, B, C, D without repetition?",
    answer: "24",
    hint: "This is a permutation: 4 choices, then 3, then 2.",
    solution:
      "There are 4 choices for the first letter, 3 for the second, and 2 " +
      "for the third. So the total is 4 × 3 × 2 = 24.",
  },
  {
    id: 5,
    title: "Algebra Drill 2",
    topic: "algebra",
    difficulty: "medium",
    text: "If 2x = 9, what is the value of 2^(6x-23)?",
    answer: "16",
    hint: "Use a^2 + b^2 = (a + b)^2 - 2ab.",
    solution:
      "Method 1: If 2x = 9, then 6x = (3)(2x) = (3)(9) = 27. This means that 2^(6x-23) = 2^(4) = 16." +
      "Method 2: if 2x = 9, then x = 9/2. Therefore, 6x-23 = 6(9/2)-23 = 4. Thus, 2^(4) = 16.",
  },
  {
    id: 6,
    title: "Number Theory Drill 2",
    topic: "number-theory",
    difficulty: "medium",
    text: "What is the greatest common divisor of 84 and 126?",
    answer: "42",
    hint: "Try prime factorization or the Euclidean algorithm.",
    solution:
      "84 = 2^2 × 3 × 7 and 126 = 2 × 3^2 × 7. The common factors are " +
      "2 × 3 × 7 = 42.",
  },
  {
    id: 7,
    title: "Geometry Drill 2",
    topic: "geometry",
    difficulty: "medium",
    text:
      "A circle has radius 5. What is its area? Give your answer in " +
      "terms of pi.",
    answer: "25pi",
    hint: "Use the area formula for a circle.",
    solution: "Area = pi × r^2 = pi × 5^2 = 25pi.",
  },
  {
    id: 8,
    title: "Combinatorics Drill 2",
    topic: "combinatorics",
    difficulty: "hard",
    text: "How many subsets does a set with 6 elements have?",
    answer: "64",
    hint: "Each element is either in or out of a subset.",
    solution:
      "Each of the 6 elements has 2 choices: in or out. So there are " +
      "2^6 = 64 subsets.",
  },
  {
    id: 9,
    title: "Algebra Drill 3",
    topic: "algebra",
    difficulty: "hard",
    text: "There is one positive integer, K, for which 3<$\sqrt{K^(2)+4}<4. What is this positive integer K?",
    answer: "K = 3",
    hint: "Square each part, then solve.",
    solution:
      "Since 3<$\sqrt{K^(2)+4}<4, then 3^(2)<K^(2)+4<4^(4). Therefore, 9<K^(2)+4<16, and so 5<K^(2)<12." +
      "Since K is a positive integer whose square is is between 5 and 12, K = 3.",
  },
  {
    id: 10,
    title: "Number Theory Drill 3",
    topic: "number-theory",
    difficulty: "hard",
    text: "How many positive divisors does 72 have?",
    answer: "12",
    hint: "Prime factorize 72 and use the divisor formula.",
    solution:
      "72 = 2^3 × 3^2, so the number of positive divisors is " +
      "(3 + 1)(2 + 1) = 12.",
  },
  {
    id: 11,
    title: "Algebra Drill 4",
    topic: "algebra",
    difficulty: "easy",
    text: "Suppose that p+q+r = 18, and p+q = 5 and q+r =9. What is the value of q?",
    answer: "-4",
    hint: ".",
    solution:
      "Since p+q+r = 18, and p+q = 5, then 5+r = 18, so r = 13. Since q+r = 9 and r = 13, then " +
      "q+13 = 9, so q = -4.",
  },
  {
    id: 12,
    title: "Geometry Drill 4",
    topic: "algebra",
    difficulty: "medium",
    text: "The line with the equation 6x+y = 24 has its x-intercept at point P, and its y-intercept at point Q." +
          "What is an equation of the parabola whose y-intercept is at Q and whose only x-intercept is at P.",
    answer: "y = 3/2(x-4)^2",
    hint: "Solve for the intercepts.",
    solution:
      "y-intercept = 24 when x is set to 0. Since the parabola only has 1 x-int, write the equation as y = a(x-4)^2." +
      "Since the y-int is at (0,24), substitute the points in to get 24 = a(0-4)^2, which then gives a = 3/2, so y = 3/2(x-4)^2.",
  },
  {
    id: 13,
    title: "Algebra Drill 5",
    topic: "algebra",
    difficulty: "hard",
    text: "Suppose that 1/2w = 1/3y = 1/4z and 1/2w + 1/3y + 1/4z = 1/24. Determine the value of w+y+z.",
    answer: "78",
    hint: ".",
    solution:
      "Since 1/2w = 1/3y = 1/4z and 1/2w + 1/3y + 1/4z = 1/24, then each of 1/2w and 1/3y and 1/4z is 1/3 of the whole." +
      "This gives 1/2w = 1/3y = 1/4z = 1/3 * 1/24 = 1/72. Therefore, 2w = 3y = 4z = 72, so w = 36, y = 24, and z = 18.",  
  },
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createGeneratedId() {
  const randomPart = Math.random().toString(36).slice(2, 8);
  return `generated-${Date.now()}-${randomPart}`;
}

function normalizeAnswer(value) {
  return String(value).toLowerCase().replace(/\s+/g, "");
}

function formatLabel(value) {
  if (value === "number-theory") {
    return "Number Theory";
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function generateAlgebraSquareProblem() {
  const n = randomInt(3, 12);
  const answer = n * n - 2;

  return {
    id: createGeneratedId(),
    title: "Generated Algebra Identity",
    topic: "algebra",
    difficulty: "medium",
    text: `If x + 1/x = ${n}, find x^2 + 1/x^2.`,
    answer: String(answer),
    hint: "Square both sides, then subtract 2.",
    solution:
      `Square both sides: (x + 1/x)^2 = x^2 + 2 + 1/x^2 = ${n * n}. ` +
      `So x^2 + 1/x^2 = ${n * n} - 2 = ${answer}.`,
  };
}

function generateAlgebraSumProductProblem() {
  const a = randomInt(2, 12);
  const b = randomInt(2, 12);
  const sum = a + b;
  const product = a * b;
  const answer = a * a + b * b;

  return {
    id: createGeneratedId(),
    title: "Generated Sum and Product",
    topic: "algebra",
    difficulty: "medium",
    text: `If a + b = ${sum} and ab = ${product}, find a^2 + b^2.`,
    answer: String(answer),
    hint: "Use a^2 + b^2 = (a + b)^2 - 2ab.",
    solution:
      "Use a^2 + b^2 = (a + b)^2 - 2ab. " +
      `So a^2 + b^2 = ${sum}^2 - 2(${product}) = ${sum * sum} - ` +
      `${2 * product} = ${answer}.`,
  };
}

function generateLinearEquationProblem() {
  const x = randomInt(2, 15);
  const m = randomInt(2, 9);
  const b = randomInt(1, 15);
  const rhs = m * x + b;

  return {
    id: createGeneratedId(),
    title: "Generated Linear Equation",
    topic: "algebra",
    difficulty: "easy",
    text: `Solve for x: ${m}x + ${b} = ${rhs}.`,
    answer: String(x),
    hint: `Subtract ${b} from both sides, then divide by ${m}.`,
    solution:
      `${m}x + ${b} = ${rhs} → ${m}x = ${rhs - b} → ` +
      `x = ${rhs - b}/${m} = ${x}.`,
  };
}

const topicFilter = document.getElementById("topicFilter");
const difficultyFilter = document.getElementById("difficultyFilter");
const sessionLengthSelect = document.getElementById("sessionLength");
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimerBtn");
const pauseTimerBtn = document.getElementById("pauseTimerBtn");
const resetTimerBtn = document.getElementById("resetTimerBtn");
const newProblemBtn = document.getElementById("newProblemBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const problemTopic = document.getElementById("problemTopic");
const problemDifficulty = document.getElementById("problemDifficulty");
const problemTitle = document.getElementById("problemTitle");
const problemText = document.getElementById("problemText");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const hintBtn = document.getElementById("hintBtn");
const solutionBtn = document.getElementById("solutionBtn");
const feedbackBox = document.getElementById("feedbackBox");
const hintBox = document.getElementById("hintBox");
const solutionBox = document.getElementById("solutionBox");
const attemptedStat = document.getElementById("attemptedStat");
const correctStat = document.getElementById("correctStat");
const accuracyStat = document.getElementById("accuracyStat");
const streakStat = document.getElementById("streakStat");

let currentProblem = null;
let questionLocked = false;
let timeLeft = Number(sessionLengthSelect.value) * 60;
let timerInterval = null;

const savedProgress =
  JSON.parse(localStorage.getItem("euclidPrepProgress")) || {
    attempted: 0,
    correct: 0,
    streak: 0,
  };

let progress = savedProgress;

function saveProgress() {
  localStorage.setItem("euclidPrepProgress", JSON.stringify(progress));
}

function updateStats() {
  attemptedStat.textContent = progress.attempted;
  correctStat.textContent = progress.correct;
  streakStat.textContent = progress.streak;

  const accuracy =
    progress.attempted === 0
      ? 0
      : Math.round((progress.correct / progress.attempted) * 100);

  accuracyStat.textContent = `${accuracy}%`;
}
function getSelectedDurationInSeconds() {
  return Number(sessionLengthSelect.value) * 60;
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const minuteText = String(minutes).padStart(2, "0");
  const secondText = String(seconds).padStart(2, "0");

  timerDisplay.textContent = `${minuteText}:${secondText}`;
}

function clearMessages() {
  feedbackBox.className = "feedback hidden";
  feedbackBox.textContent = "";

  hintBox.className = "hint-box hidden";
  hintBox.textContent = "";

  solutionBox.className = "solution-box hidden";
  solutionBox.textContent = "";
}

function getFilteredFixedProblems() {
  const selectedTopic = topicFilter.value;
  const selectedDifficulty = difficultyFilter.value;

  return problems.filter((problem) => {
    const matchesTopic =
      selectedTopic === "all" || problem.topic === selectedTopic;

    const matchesDifficulty =
      selectedDifficulty === "all" ||
      problem.difficulty === selectedDifficulty;

    return matchesTopic && matchesDifficulty;
  });
}

function getGeneratedProblems() {
  const selectedTopic = topicFilter.value;
  const selectedDifficulty = difficultyFilter.value;

  const generated = [];

  if (selectedTopic === "all" || selectedTopic === "algebra") {
    generated.push(
      generateAlgebraSquareProblem(),
      generateAlgebraSumProductProblem(),
      generateLinearEquationProblem()
    );
  }

  return generated.filter((problem) => {
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      problem.difficulty === selectedDifficulty;

    return matchesDifficulty;
  });
}

function showNoProblemsMessage() {
  currentProblem = null;
  questionLocked = true;

  problemTopic.textContent = "No match";
  problemDifficulty.textContent = "Change filters";
  problemTitle.textContent = "No problems found";
  problemText.textContent =
    "Try a different topic or difficulty filter.";

  answerInput.value = "";
  clearMessages();
}

function pickRandomProblem() {
  const fixedProblems = getFilteredFixedProblems();
  const generatedProblems = getGeneratedProblems();
  const availableProblems = [...fixedProblems, ...generatedProblems];

  if (availableProblems.length === 0) {
    showNoProblemsMessage();
    return;
  }

  let nextProblem =
    availableProblems[Math.floor(Math.random() * availableProblems.length)];

  if (availableProblems.length > 1 && currentProblem !== null) {
    while (nextProblem.id === currentProblem.id) {
      nextProblem =
        availableProblems[
          Math.floor(Math.random() * availableProblems.length)
        ];
    }
  }

  currentProblem = nextProblem;
  questionLocked = false;

  problemTopic.textContent = formatLabel(currentProblem.topic);
  problemDifficulty.textContent = formatLabel(currentProblem.difficulty);
  problemTitle.textContent = currentProblem.title;
  problemText.textContent = currentProblem.text;

  answerInput.value = "";
  clearMessages();
  answerInput.focus();
}

function submitAnswer() {
  if (!currentProblem || questionLocked) {
    return;
  }

  const userAnswer = normalizeAnswer(answerInput.value);
  const correctAnswer = normalizeAnswer(currentProblem.answer);

  if (userAnswer === "") {
    feedbackBox.textContent = "Type an answer before submitting.";
    feedbackBox.className = "feedback feedback--error";
    return;
  }

  questionLocked = true;
  progress.attempted += 1;

  if (userAnswer === correctAnswer) {
    progress.correct += 1;
    progress.streak += 1;

    feedbackBox.textContent = "Correct. Loading the next problem...";
    feedbackBox.className = "feedback feedback--success";

    saveProgress();
    updateStats();

    setTimeout(() => {
      pickRandomProblem();
    }, 1500);
  } else {
    progress.streak = 0;

    feedbackBox.textContent =
      `Not quite. The correct answer was ${currentProblem.answer}.`;
    feedbackBox.className = "feedback feedback--error";

    saveProgress();
    updateStats();
  }
}

function showHint() {
  if (!currentProblem) {
    return;
  }

  hintBox.textContent = `Hint: ${currentProblem.hint}`;
  hintBox.className = "hint-box";
}

function showSolution() {
  if (!currentProblem) {
    return;
  }

  solutionBox.textContent = `Solution: ${currentProblem.solution}`;
  solutionBox.className = "solution-box";
}

function startTimer() {
  if (timerInterval !== null) {
    return;
  }

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft -= 1;
      updateTimerDisplay();
      return;
    }

    clearInterval(timerInterval);
    timerInterval = null;
    alert("Time is up. Session over.");
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = getSelectedDurationInSeconds();
  updateTimerDisplay();
}

function resetProgress() {
  progress = {
    attempted: 0,
    correct: 0,
    streak: 0,
  };

  saveProgress();
  updateStats();
}

topicFilter.addEventListener("change", pickRandomProblem);
difficultyFilter.addEventListener("change", pickRandomProblem);
sessionLengthSelect.addEventListener("change", resetTimer);
newProblemBtn.addEventListener("click", pickRandomProblem);
submitBtn.addEventListener("click", submitAnswer);
hintBtn.addEventListener("click", showHint);
solutionBtn.addEventListener("click", showSolution);
startTimerBtn.addEventListener("click", startTimer);
pauseTimerBtn.addEventListener("click", pauseTimer);
resetTimerBtn.addEventListener("click", resetTimer);
resetProgressBtn.addEventListener("click", resetProgress);

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitAnswer();
  }
});

updateStats();
updateTimerDisplay();
pickRandomProblem();
