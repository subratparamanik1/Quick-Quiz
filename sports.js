// Question bank
var questionBank = [
    {
        question: "Which country won the FIFA World Cup in 2018?",
        option: ["Brazil", "Germany", "France", "Spain"],
        answer: "France"
    },
    {
        question: "Who holds the record for the most Grand Slam singles titles in tennis?",
        option: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Serena Williams"],
        answer: "Margaret Court"
    },
    {
        question: "In which sport would you perform a slam dunk?",
        option: ["Basketball", "Football", "Tennis", "Golf"],
        answer: "Basketball"
    },
    {
        question: "Which city hosted the 2016 Summer Olympics?",
        option: ["Rio de Janeiro", "Tokyo", "London", "Beijing"],
        answer: "Rio de Janeiro"
    },
    {
        question: "Who is known as 'The Greatest' in boxing?",
        option: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Manny Pacquiao"],
        answer: "Muhammad Ali"
    },
    {
        question: "Which team has won the most NBA championships?",
        option: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
        answer: "Boston Celtics"
    },
    {
        question: "In golf, what is a 'birdie'?",
        option: ["One stroke under par", "One stroke over par", "Par score", "Double bogey"],
        answer: "One stroke under par"
    },
    {
        question: "Which country won the ICC Cricket World Cup in 2019?",
        option: ["India", "Australia", "England", "New Zealand"],
        answer: "England"
    },
    {
        question: "Who is the leading run-scorer in international cricket?",
        option: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Kumar Sangakkara"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "In cricket, what does LBW stand for?",
        option: ["Long Boundary Wicket", "Leg Before Wicket", "Last Ball Wicket", "Late Batting Wicket"],
        answer: "Leg Before Wicket"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        option: ["James Anderson", "Anil Kumble", "Glenn McGrath", "Shane Warne"],
        answer: "James Anderson"
    },
    {
        question: "Who holds the record for the fastest century in T20 International cricket?",
        option: ["Virat Kohli", "Chris Gayle", "Brendon McCullum", "David Miller"],
        answer: "David Miller"
    },
    {
        question: "Which team has won the most Indian Premier League (IPL) titles?",
        option: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Rajasthan Royals"],
        answer: "Mumbai Indians"
    },
    {
        question: "What is the maximum number of runs a batsman can score off one ball in cricket?",
        option: ["4", "6", "8", "7"],
        answer: "6"
    },
    {
        question: "Which player won the FIFA Ballon d'Or in 2021?",
        option: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo", "Mohamed Salah"],
        answer: "Lionel Messi"
    },
    {
        question: "In which country will the 2022 FIFA World Cup be held?",
        option: ["Brazil", "Germany", "Qatar", "France"],
        answer: "Qatar"
    },
    {
        question: "Which team won the UEFA Champions League in the 2020-2021 season?",
        option: ["Real Madrid", "Manchester City", "Chelsea", "Bayern Munich"],
        answer: "Chelsea"
    },
    {
        question: "Who is the all-time top scorer in the English Premier League?",
        option: ["Thierry Henry", "Alan Shearer", "Wayne Rooney", "Frank Lampard"],
        answer: "Alan Shearer"
    },
    {
        question: "Which country has won the most FIFA World Cup titles?",
        option: ["Brazil", "Germany", "Italy", "Argentina"],
        answer: "Brazil"
    },
    {
        question: "Who is the coach of the Liverpool football team?",
        option: ["Pep Guardiola", "Jurgen Klopp", "Zinedine Zidane", "Carlo Ancelotti"],
        answer: "Jurgen Klopp"
    },
    {
        question: "Which player is often referred to as 'CR7'?",
        option: ["Cristiano Ronaldo", "Ciro Immobile", "Carlos Tevez", "Cesc Fabregas"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Which country has won the most Olympic gold medals in men's field hockey?",
        option: ["Netherlands", "Germany", "India", "Australia"],
        answer: "India"
    },
    {
        question: "Who is known as the 'Dribbling Magician' in women's field hockey?",
        option: ["Ellen Hoog", "Luciana Aymar", "Maartje Paumen", "Alex Danson"],
        answer: "Luciana Aymar"
    },
    {
        question: "In ice hockey, what is a 'hat trick'?",
        option: ["Three goals by a single player in a game", "A special trick play", "Scoring the winning goal", "A penalty for a hat violation"],
        answer: "Three goals by a single player in a game"
    },
    {
        question: "Which country hosted the first-ever Women's Hockey World Cup in 1974?",
        option: ["Netherlands", "Australia", "Germany", "Spain"],
        answer: "Netherlands"
    },
    {
        question: "What is the duration of a standard field hockey match in international competitions?",
        option: ["60 minutes", "70 minutes", "80 minutes", "90 minutes"],
        answer: "60 minutes"
    },
    {
        question: "Which famous field hockey tournament is held annually in India and features franchise-based teams?",
        option: ["Sultan Azlan Shah Cup", "Hockey World League", "Hockey India League", "Champions Trophy"],
        answer: "Hockey India League"
    },
    {
        question: "Who is the all-time leading goal-scorer in men's field hockey?",
        option: ["Teun de Nooijer", "Jamie Dwyer", "Floris Jan Bovelander", "Dhanraj Pillay"],
        answer: "Floris Jan Bovelander"
    },
    {
        question: "Which popular multiplayer online battle arena (MOBA) game is developed by Riot Games?",
        option: ["Dota 2", "League of Legends", "Heroes of the Storm", "Smite"],
        answer: "League of Legends"
    },
    {
        question: "What is the primary objective in the game Counter-Strike: Global Offensive (CS:GO) during a bomb scenario?",
        option: ["Capture the flag", "Plant and defuse the bomb", "Eliminate the opposing team", "Complete objectives"],
        answer: "Plant and defuse the bomb"
    },
    {
        question: "Which esports organization is known for its successful Dota 2 team, winning The International 2018?",
        option: ["Team Liquid", "OG", "Fnatic", "Evil Geniuses"],
        answer: "OG"
    },
    {
        question: "In the game Overwatch, what is the role of a player who primarily heals and supports the team?",
        option: ["DPS (Damage Per Second)", "Tank", "Healer/Support", "Flex"],
        answer: "Healer/Support"
    },
    {
        question: "Which popular first-person shooter (FPS) game is developed by Epic Games and features a battle royale mode?",
        option: ["Call of Duty: Warzone", "Overwatch", "PUBG", "Fortnite"],
        answer: "Fortnite"
    },
    {
        question: "What is the main objective in the game League of Legends?",
        option: ["Destroy the enemy's base", "Capture the flag", "Eliminate all opponents", "Complete missions"],
        answer: "Destroy the enemy's base"
    },
    {
        question: "Which country is known for producing top-tier esports teams and players, particularly in StarCraft II?",
        option: ["South Korea", "China", "United States", "Sweden"],
        answer: "South Korea"
    },
    {
        question: "Which team won the inaugural season of the Indian Premier League (IPL) in 2008?",
        option: ["Mumbai Indians", "Chennai Super Kings", "Rajasthan Royals", "Deccan Chargers"],
        answer: "Rajasthan Royals"
    },
    {
        question: "Who holds the record for the most runs scored in a single IPL season?",
        option: ["Chris Gayle", "Virat Kohli", "David Warner", "AB de Villiers"],
        answer: "David Warner"
    },
    {
        question: "Which player has won the 'Orange Cap' for the highest run-scorer in the most IPL seasons?",
        option: ["Virat Kohli", "Chris Gayle", "David Warner", "AB de Villiers"],
        answer: "David Warner"
    },
    {
        question: "In which year did the Chennai Super Kings make a successful comeback to the IPL after a two-year suspension?",
        option: ["2017", "2018", "2019", "2020"],
        answer: "2018"
    },
    {
        question: "Who is the only captain to win the IPL title for Mumbai Indians in multiple seasons?",
        option: ["Rohit Sharma", "Sachin Tendulkar", "Kieron Pollard", "Lasith Malinga"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which city serves as the home ground for the Royal Challengers Bangalore?",
        option: ["Mumbai", "Chennai", "Delhi", "Bengaluru"],
        answer: "Bengaluru"
    },
    {
        question: "Who is the leading wicket-taker in the history of the IPL?",
        option: ["Lasith Malinga", "Sunil Narine", "Amit Mishra", "Dwayne Bravo"],
        answer: "Lasith Malinga"
    },
    {
        question: 'Who is known as the "Father of Cricket"?',
        option: ['Sir Donald Bradman', 'W.G. Grace', 'Sachin Tendulkar', 'Kapil Dev'],
        answer: 'W.G. Grace'
    },
    {
        question: 'In which year was the first official international cricket match played?',
        option: ['1877', '1892', '1900', '1923'],
        answer: '1877'
    },
    {
        question: 'Which country hosted the first-ever Cricket World Cup?',
        option: ['Australia', 'West Indies', 'England', 'India'],
        answer: 'England'
    },
    {
        question: 'Who scored the first-ever double century in One Day Internationals (ODIs)?',
        option: ['Vivian Richards', 'Sachin Tendulkar', 'Chris Gayle', 'Martin Guptill'],
        answer: 'Sachin Tendulkar'
    },
    {
        question: 'Which cricketer holds the record for the most runs in Test cricket?',
        option: ['Ricky Ponting', 'Jacques Kallis', 'Sachin Tendulkar', 'Brian Lara'],
        answer: 'Sachin Tendulkar'
    },
    {
        question: 'Who captained the West Indies cricket team during their dominance in the 1980s?',
        option: ['Brian Lara', 'Clive Lloyd', 'Vivian Richards', 'Gordon Greenidge'],
        answer: 'Clive Lloyd'
    },
    {
        question: 'In which year did womens cricket make its debut at the Commonwealth Games?',
        option: ['1998', '2002', '2006', '2010'],
        answer: '1998'
    },
    {
        question: 'Who was the first cricketer to achieve the feat of taking 10 wickets in a Test innings?',
        option: ['Jim Laker', 'Anil Kumble', 'Muttiah Muralitharan', 'Shane Warne'],
        answer: 'Jim Laker'
    },
    {
        question: 'Which country won the first T20 Cricket World Cup in 2007?',
        option: ['India', 'Australia', 'Pakistan', 'West Indies'],
        answer: 'India'
    },
    {
        question: 'Who holds the record for the fastest century in One Day Internationals (ODIs)?',
        option: ['AB de Villiers', 'Shahid Afridi', 'Brendon McCullum', 'Chris Gayle'],
        answer: 'AB de Villiers'
    },
    {
        question: 'In tennis, what is the term for a score of 40-40?',
        option: ['Match point', 'Deuce', 'Advantage', 'Love'],
        answer: 'Deuce'
    },
    {
        question: 'In basketball, how many players from each team are allowed on the court at the same time?',
        option: ['4', '5', '6', '7'],
        answer: '5'
    },
    {
        question: 'What is the maximum number of players allowed on a standard soccer (football) team?',
        option: ['9', '11', '13', '15'],
        answer: '11'
    },
    {
        question: 'In baseball, how many balls constitute a walk?',
        option: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'What is the penalty for a "double fault" in tennis?',
        option: ['Loss of point', 'Loss of serve', 'Warning', 'Timeout'],
        answer: 'Loss of point'
    },
    {
        question: 'How many rounds are there in a professional boxing match?',
        option: ['8', '10', '12', '15'],
        answer: '12'
    },
    {
        question: 'In American football, how many points is a touchdown worth?',
        option: ['3', '6', '7', '8'],
        answer: '6'
    },
    {
        question: 'What is the maximum time allowed between points in a professional tennis match?',
        option: ['15 seconds', '20 seconds', '25 seconds', '30 seconds'],
        answer: '25 seconds'
    },
    {
        question: 'In cricket, what is the maximum number of bouncers allowed per over in Test matches?',
        option: ['2', '3', '4', 'Unlimited'],
        answer: '2'
    },
    {
        question: 'What is the penalty for a "handball" in soccer (football)?',
        option: ['Free kick', 'Penalty kick', 'Corner kick', 'Throw-in'],
        answer: 'Penalty kick'
    },
    {
        question: 'In golf, what is the term for completing a hole in one stroke under par?',
        option: ['Eagle', 'Birdie', 'Bogey', 'Albatross'],
        answer: 'Birdie'
    },
    {
        question: 'In badminton, how many points are required to win a game?',
        option: ['15', '21', '25', '30'],
        answer: '21'
    },
    {
        question: 'What is the penalty for a "technical foul" in basketball?',
        option: ['Loss of possession', 'Free throw', 'Player ejection', 'Timeout'],
        answer: 'Free throw'
    },
    {
        question: 'In swimming, what stroke is swum underwater with a dolphin kick?',
        option: ['Freestyle', 'Breaststroke', 'Butterfly', 'Backstroke'],
        answer: 'Butterfly'
    },
    {
        question: 'What is the maximum number of consecutive fouls allowed by a player in snooker before giving away points?',
        option: ['1', '2', '3', '4'],
        answer: '3'
    },
    {
        question: 'In rugby, how many points is a try worth?',
        option: ['3', '5', '7', '10'],
        answer: '5'
    },
    {
        question: 'What is the maximum number of touches allowed per side in volleyball before the ball must go over the net?',
        option: ['2', '3', '4', '5'],
        answer: '3'
    },
    {
        question: 'In table tennis, how many points are needed to win a game?',
        option: ['7', '11', '15', '21'],
        answer: '11'
    },
    {
        question: 'What is the penalty for a "foul throw" in soccer (football)?',
        option: ['Free kick', 'Throw-in for the opposing team', 'Yellow card', 'Red card'],
        answer: 'Throw-in for the opposing team'
    },
    {
        question: 'In baseball, how many strikes result in a strikeout?',
        option: ['1', '2', '3', '4'],
        answer: '3'
    },
    {
        question: 'Which map was the original map in PUBG?',
        option: ['Erangel', 'Miramar', 'Vikendi', 'Sanhok'],
        answer: 'Erangel'
    },
    {
        question: 'What is the maximum number of players in a PUBG squad?',
        option: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'Which type of ammunition is used by the M416 assault rifle in PUBG?',
        option: ['5.56mm', '7.62mm', '9mm', '.45 ACP'],
        answer: '5.56mm'
    },
    {
        question: 'In PUBG, what does the term "AFK" stand for?',
        option: ['Away from Keyboard', 'Alliance of Killers', 'Advanced Fighting Kit', 'Auto Firing Killshot'],
        answer: 'Away from Keyboard'
    },
    {
        question: 'Which vehicle is known as the "Dacia" in PUBG?',
        option: ['Buggy', 'Motorcycle', 'Pickup Truck', 'Sedan'],
        answer: 'Sedan'
    },
    {
        question: 'What is the name of the largest and newest map in PUBG?',
        option: ['Erangel', 'Miramar', 'Vikendi', 'Sanhok'],
        answer: 'Vikendi'
    },
    {
        question: 'Which attachment is used for reducing recoil in PUBG?',
        option: ['Compensator', 'Flash Hider', 'Suppressor', 'Choke'],
        answer: 'Compensator'
    },
    {
        question: 'What is the maximum duration of a match in PUBG?',
        option: ['20 minutes', '30 minutes', '40 minutes', '60 minutes'],
        answer: '30 minutes'
    },
    {
        question: 'Which type of helmet provides the highest level of protection in PUBG?',
        option: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
        answer: 'Level 3'
    },
    {
        question: 'In PUBG, what is the "blue zone"?',
        option: ['A high loot area', 'The play area boundary', 'Airdrop delivery zone', 'A dangerous wildlife zone'],
        answer: 'The play area boundary'
    }
];


var QuestionBtn = document.querySelector("button"),
    rQues = document.querySelector(".questions");


function randomQuestions() {
    console.log("")
}
QuestionBtn.addEventListener("click", randomQuestions);
var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;
var timer;

//function to display questions
function displayQuestion() {
    resetTimer();
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
    startTimer();
}

// Function to start the timer
function startTimer() {
    var timerValueElement = document.getElementById('timer-value');
    timer = setInterval(function () {
        var timerValue = parseInt(timerValueElement.textContent);
        if (timerValue > 0) {
            timerValueElement.textContent = timerValue - 1;
        } else {
            // Time is up, move to the next question
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000); // Update every 1 second
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    document.getElementById('timer-value').textContent = 15; // Reset timer value to 20 seconds
}

//function to calculate scores
function calcScore(e) {
    resetTimer();
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 400);
}

//function to display next question
function nextQuestion() {
    resetTimer();
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    }
    else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);
//Play again button event
function backToQuiz() {
    window.location.href = "category.html";
}

function checkAnswer() {
    resetTimer();
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}
// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to get a random set of 10 questions
function getRandomQuestions() {
    const questionsCopy = [...questionBank];
    shuffleArray(questionsCopy);
    const randomQuestions = questionsCopy.slice(0, 10);
    return randomQuestions;
}

// Function to display 5 random questions
function displayRandomQuestions() {
    const randomQuestions = getRandomQuestions();
    questionBank = randomQuestions;
    displayQuestion();
}

displayRandomQuestions();