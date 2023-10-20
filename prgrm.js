// quiz.js
import sportsQuestions from './sports.js';
import historyQuestions from './history.js';
import programmingQuestions from './prgm.js';

var allQuestions = [...sportsQuestions, ...historyQuestions, ...programmingQuestions];
var allQuestions = {
    sports: sportsQuestions,
    history: historyQuestions,
    programming: programmingQuestions,
};

// Your quiz logic here
// Assuming the user selects a category named 'selectedCategory'
var selectedCategory = 'sports'; // Example category

var selectedQuestions = allQuestions[selectedCategory];

// Now 'selectedQuestions' contains the questions for the selected category
// sports.js
var sportsQuestions = [
    {
        question: 'Who won the last FIFA World Cup?',
        option: ['Brazil', 'Germany', 'France', 'Argentina'],
        answer: 'France'
    },
    // Add more sports questions here
];
// quiz.js
import sportsQuestions from './sports.js';
import historyQuestions from './history.js';
import programmingQuestions from './programming.js';

// Combine all the questions into one array

// Rest of your quiz logic here
