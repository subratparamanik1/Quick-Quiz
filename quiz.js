// Question bank
var questionBank = [
    {
        question: 'In C, what is the purpose of the "printf" function?',
        option: ['To read user input', 'To perform mathematical calculations', 'To print output to the console', 'To declare variables'],
        answer: 'To print output to the console'
    },
    {
        question: 'Which programming language is known for its "write once, run anywhere" capability?',
        option: ['C', 'Java', 'HTML', 'JavaScript'],
        answer: 'Java'
    },
    {
        question: 'What does HTML stand for?',
        option: ['Hypertext Markup Language', 'Hyper Transfer Markup Language', 'High Text Markup Language', 'Hyper Text Making Language'],
        answer: 'Hypertext Markup Language'
    },
    {
        question: 'Which CSS property is used to change the background color of an element?',
        option: ['color', 'background-color', 'font-color', 'text-color'],
        answer: 'background-color'
    },
    {
        question: 'Which of the following is not a JavaScript data type?',
        option: ['Number', 'Boolean', 'Undefined', 'Float'],
        answer: 'Float'
    },
    {
        question: 'What keyword is used to declare a variable in JavaScript?',
        option: ['var', 'int', 'string', 'float'],
        answer: 'var'
    },
    {
        question: 'Which symbol is used for single-line comments in Java?',
        option: ['//', '/*', '--', '##'],
        answer: '//'
    },
    {
        question: 'Which HTML tag is used to include JavaScript code in an HTML document?',
        option: ['script-tag', 'javascript-tag', 'code-tag', 'js-tag'],
        answer: 'script-tag'
    },
    {
        question: 'What is the standard file extension for CSS files?',
        option: ['.css', '.style', '.cs', '.html'],
        answer: '.css'
    },
    {
        question: 'Which C function is used to allocate memory dynamically?',
        option: ['malloc()', 'calloc()', 'free()', 'resize()'],
        answer: 'malloc()'
    },
    {
        question: 'What does CSS stand for?',
        option: ['Cascading Style Sheet', 'Creative Style Sheet', 'Computer Style Sheet', 'Colorful Style Sheet'],
        answer: 'Cascading Style Sheet'
    },
    {
        question: 'Which HTML tag is used to define an unordered list?',
        option: ['ol-tag', 'ul-tag', 'li-tag', 'dl-tag'],
        answer: 'ul-tag'
    },
    {
        question: 'What is the purpose of the "for" loop in JavaScript?',
        option: ['To declare a variable', 'To create a function', 'To perform a conditional check', 'To create a loop'],
        answer: 'To create a loop'
    },
    {
        question: 'In Java, which keyword is used to define a subclass?',
        option: ['super', 'this', 'extends', 'class'],
        answer: 'extends'
    },
    {
        question: 'Which JavaScript method is used to remove the last element from an array?',
        option: ['pop()', 'push()', 'shift()', 'unshift()'],
        answer: 'pop()'
    },
    {
        question: 'What is the purpose of the "else" statement in programming?',
        option: ['To end a loop', 'To define a function', 'To handle conditions when the "if" statement is false', 'To define an object'],
        answer: 'To handle conditions when the "if" statement is false'
    },
    {
        question: 'Which programming language is commonly used for web development?',
        option: ['Python', 'Java', 'C++', 'JavaScript'],
        answer: 'JavaScript'
    },
    {
        question: 'What is the primary function of the "DOCTYPE" declaration in an HTML document?',
        option: ['It specifies the document type', 'It defines the page title', 'It links external CSS files', 'It creates a new HTML element'],
        answer: 'It specifies the document type'
    },
    {
        question: 'In CSS, which property is used to control the size of text?',
        option: ['font-size', 'text-size', 'font-style', 'text-style'],
        answer: 'font-size'
    },
    {
        question: 'What is the purpose of the "break" statement in loops?',
        option: ['To skip the current iteration and continue with the next', 'To exit the loop immediately', 'To pause the loop temporarily', 'To restart the loop'],
        answer: 'To exit the loop immediately'
    },
    {
        question: 'In Java, which data type is used to store a single character?',
        option: ['char', 'string', 'int', 'boolean'],
        answer: 'char'
    },
    {
        question: 'What is the primary purpose of a constructor in a Java class?',
        option: ['To define class variables', 'To create objects of the class', 'To perform mathematical calculations', 'To define conditional statements'],
        answer: 'To create objects of the class'
    },
    {
        question: 'In JavaScript, what is the purpose of the "getElementById" method?',
        option: ['To change the background color of a webpage', 'To retrieve an element from the DOM by its ID', 'To create a new HTML element', 'To add event listeners to a webpage'],
        answer: 'To retrieve an element from the DOM by its ID'
    },
    {
        question: 'Which HTML tag is used to create a hyperlink?',
        option: ['link-tag', 'a-tag', 'href-tag ', 'hyperlink-tag'],
        answer: 'a-tag'
    },
    {
        question: 'In C, what is the "printf" format specifier for printing an integer?',
        option: ['%d', '%s', '%f', '%c'],
        answer: '%d'
    },
    {
        question: 'What does CSS Grid layout provide for web designers?',
        option: ['A way to create 3D animations', 'A method for handling server requests', 'A system for defining page layouts in terms of rows and columns', 'A tool for optimizing website performance'],
        answer: 'A system for defining page layouts in terms of rows and columns'
    },
    {
        question: 'In JavaScript, which operator is used for strict equality comparison?',
        option: ['==', '!=', '===', '!=='],
        answer: '==='
    },
    {
        question: 'What is the purpose of the "else if" statement in JavaScript?',
        option: ['To declare a new function', 'To end a loop', 'To handle multiple conditions in sequence', 'To create a comment'],
        answer: 'To handle multiple conditions in sequence'
    },
    {
        question: 'In Java, which keyword is used to declare a constant variable?',
        option: ['const', 'final', 'var', 'let'],
        answer: 'final'
    },
    {
        question: 'In JavaScript, what is the value of "5" + 3?',
        option: ['8', '5+3', 'NaN', '53'],
        answer: '53'
    },
    {
        question: 'What is the output of the following code in JavaScript?\n\n```\nconsole.log(1 + "1" - 1);\n```',
        option: ['10', '11', '01', 'NaN'],
        answer: '10'
    },
    {
        question: 'In CSS, what is the "z-index" property used for?',
        option: ['Changing the font size', 'Setting the opacity of an element', 'Controlling the stacking order of elements', 'Adjusting the margin of an element'],
        answer: 'Controlling the stacking order of elements'
    },
    {
        question: 'In Java, what does the "final" keyword indicate when applied to a method?',
        option: ['The method cannot be overridden', 'The method is abstract', 'The method is private', 'The method is static'],
        answer: 'The method cannot be overridden'
    },
    {
        question: 'In JavaScript, what will the following code snippet output?\n\n```\nconsole.log(2 + true);\n```',
        option: ['2', '3', 'true', 'NaN'],
        answer: '3'
    },
    {
        question: 'What is the purpose of the "box-sizing" property in CSS?',
        option: ['To control the shape of an element', 'To add a border to an element', 'To define the content area size of an element', 'To set the background color of an element'],
        answer: 'To define the content area size of an element'
    },
    {
        question: 'In Java, what is the output of the following code?\n\n```\nint x = 5;\nSystem.out.println(x++ + ++x);\n```',
        option: ['10', '11', '12', '13'],
        answer: '12'
    },
    {
        question: 'What is the result of the following JavaScript expression?\n\n```\nnull == undefined\n```',
        option: ['true', 'false', 'null', 'undefined'],
        answer: 'true'
    },
    {
        question: 'In CSS, what is the "rem" unit used for?',
        option: ['Relative to the font size of the root element', 'Relative to the width of the viewport', 'Relative to the parent element', 'Relative to the height of the container'],
        answer: 'Relative to the font size of the root element'
    },
    {
        question: 'In JavaScript, what does the "call" method do?',
        option: ['It calls a function with a given this value and arguments provided individually', 'It calls a function with arguments provided as an array', 'It invokes a callback function asynchronously', 'It terminates the current script'],
        answer: 'It calls a function with a given this value and arguments provided individually'
    },
    {
        question: 'What is the purpose of the "git" version control system?',
        option: ['To compile code', 'To automate testing', 'To manage and track changes in source code', 'To deploy web applications'],
        answer: 'To manage and track changes in source code'
    },
    {
        question: 'In Python, what does the "len()" function do?',
        option: ['Returns the length of a list or string', 'Calculates logarithm', 'Generates a random number', 'Converts a value to lowercase'],
        answer: 'Returns the length of a list or string'
    },
    {
        question: 'What is the purpose of the SQL keyword "SELECT"?',
        option: ['To insert data into a database', 'To update existing records', 'To retrieve data from a database', 'To delete records from a database'],
        answer: 'To retrieve data from a database'
    },
    {
        question: 'Which programming language is commonly used for building mobile applications?',
        option: ['C#', 'Swift', 'Java', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'What is the primary function of the "try...catch" block in programming?',
        option: ['To define a loop', 'To handle exceptions and errors', 'To declare variables', 'To create an object'],
        answer: 'To handle exceptions and errors'
    },
    {
        question: 'What is the role of the "npm" package manager in JavaScript development?',
        option: ['To create virtual environments', 'To manage and install project dependencies', 'To write test cases', 'To format code'],
        answer: 'To manage and install project dependencies'
    },
    {
        question: 'In object-oriented programming, what is encapsulation?',
        option: ['Hiding implementation details and restricting access to the internal state of an object', 'Creating multiple instances of a class', 'Defining the structure of a class', 'Inheriting properties from a superclass'],
        answer: 'Hiding implementation details and restricting access to the internal state of an object'
    },
    {
        question: 'What is the purpose of the "finally" block in a try-catch-finally statement?',
        option: ['To execute code regardless of whether an exception is thrown or not', 'To catch and handle exceptions', 'To end the program', 'To declare variables'],
        answer: 'To execute code regardless of whether an exception is thrown or not'
    },
    {
        question: 'Which HTML tag is used to embed an image in a webpage?',
        option: ['img', 'image', 'picture', 'src'],
        answer: 'img'
    },
    {
        question: 'What is the difference between "let" and "const" in JavaScript for declaring variables?',
        option: ['Both are used to declare constants', '"let" allows reassignment, while "const" does not', '"const" is used for numbers, while "let" is used for strings', '"let" is block-scoped, while "const" is function-scoped'],
        answer: '"let" allows reassignment, while "const" does not'
    },
    {
        question: 'What is the main purpose of the "static" keyword in Java?',
        option: ['To indicate that a method can be overridden', 'To create multiple instances of a class', 'To declare a constant variable', 'To indicate that a method or variable belongs to the class rather than an instance'],
        answer: 'To indicate that a method or variable belongs to the class rather than an instance'
    },
    {
        question: 'In Java, what is the difference between "==" and ".equals()" when comparing strings?',
        option: ['Both are used interchangeably for string comparison', '"==" compares object references, while ".equals()" compares content', 'There is no difference; they are synonymous', 'The usage depends on the version of Java'],
        answer: '"==" compares object references, while ".equals()" compares content'
    },
    {
        question: 'What is the purpose of the "super" keyword in Java?',
        option: ['To call the constructor of the superclass', 'To define a static method', 'To create an instance of a class', 'To access private members of the class'],
        answer: 'To call the constructor of the superclass'
    },
    {
        question: 'What is the role of the "interface" in Java?',
        option: ['To define a blueprint for a class', 'To create instances of classes', 'To store data in tabular form', 'To implement multiple inheritance'],
        answer: 'To define a blueprint for a class'
    },
    {
        question: 'Which Java keyword is used to implement exception handling?',
        option: ['try', 'catch', 'throw', 'finally'],
        answer: 'try'
    },
    {
        question: 'In Java, what is the purpose of the "this" keyword?',
        option: ['To refer to the current instance of the class', 'To create a new instance of a class', 'To invoke a static method', 'To declare a constant variable'],
        answer: 'To refer to the current instance of the class'
    },
    {
        question: 'What is the output of the following Java code?\n\n```\npublic class Example {\n  public static void main(String[] args) {\n    int x = 5;\n    System.out.println(x++ + ++x);\n  }\n}\n```',
        option: ['10', '11', '12', '13'],
        answer: '12'
    },
    {
        question: 'Which Java collection framework interface extends the Collection interface and allows the removal of elements from the collection?',
        option: ['List', 'Set', 'Map', 'Queue'],
        answer: 'List'
    },
    {
        question: 'What is the purpose of the "break" statement in a Java switch statement?',
        option: ['To end the loop', 'To terminate the program', 'To exit the switch statement', 'To skip the current iteration and continue with the next'],
        answer: 'To exit the switch statement'
    },
    {
        question: 'In Java, what is the difference between an abstract class and an interface?',
        option: ['An abstract class can have both abstract and concrete methods, while an interface can only have abstract methods', 'An interface can have fields, while an abstract class cannot', 'An abstract class can be instantiated, while an interface cannot', 'An interface can have private methods, while an abstract class cannot'],
        answer: 'An abstract class can have both abstract and concrete methods, while an interface can only have abstract methods'
    },
    {
        question: 'What is the purpose of the "StringBuilder" class in Java?',
        option: ['To create a mutable sequence of characters', 'To represent a fixed-size collection of elements', 'To read user input', 'To format text output'],
        answer: 'To create a mutable sequence of characters'
    },
    {
        question: 'In Java, what is the role of the "synchronized" keyword?',
        option: ['To declare a method as abstract', 'To prevent multiple threads from accessing a shared resource simultaneously', 'To specify the access level of a variable', 'To define an interface'],
        answer: 'To prevent multiple threads from accessing a shared resource simultaneously'
    },
    {
        question: 'What is the concept of method overriding in Java?',
        option: ['Defining a method in a subclass that is already defined in its superclass', 'Creating multiple methods with the same name and same parameters', 'Hiding the implementation details of a class', 'Implementing multiple interfaces in a class'],
        answer: 'Defining a method in a subclass that is already defined in its superclass'
    },
    {
        question: 'What is the difference between "super" and "this" keywords in Java?',
        option: ['"super" refers to the current instance of the class, while "this" refers to the superclass', '"super" refers to the superclass, while "this" refers to the current instance of the class', '"super" is used for method overloading, while "this" is used for method overriding', '"super" and "this" are interchangeable and can be used in the same context'],
        answer: '"super" refers to the superclass, while "this" refers to the current instance of the class'
    },
    {
        question: 'What is the purpose of the "abstract" keyword in Java?',
        option: ['To create an instance of a class', 'To declare a variable that cannot be changed', 'To define a blueprint for a class that cannot be instantiated', 'To perform mathematical calculations'],
        answer: 'To define a blueprint for a class that cannot be instantiated'
    },
    {
        question: 'Explain the concept of polymorphism in Java.',
        option: ['The ability to create multiple instances of a class', 'The process of converting code into machine language', 'The bundling of data and methods into a single unit', 'The ability of an object to take on multiple forms'],
        answer: 'The ability of an object to take on multiple forms'
    },
    {
        question: 'How is the concept of encapsulation implemented in Java?',
        option: ['By defining a method in a subclass that is already defined in its superclass', 'By creating multiple instances of a class', 'By bundling data and methods that operate on that data into a single unit', 'By declaring a variable that cannot be changed'],
        answer: 'By bundling data and methods that operate on that data into a single unit'
    },
    {
        question: 'What is the purpose of the "interface" in Java?',
        option: ['To create an instance of a class', 'To define a blueprint for a class', 'To declare a constant variable', 'To store data in tabular form'],
        answer: 'To define a blueprint for a class'
    },
    {
        question: 'Explain the role of the "final" keyword in Java.',
        option: ['To indicate that a method can be overridden', 'To define a variable that cannot be changed', 'To create multiple instances of a class', 'To indicate that a class cannot be extended'],
        answer: 'To indicate that a class cannot be extended'
    },
    {
        question: 'What is the purpose of the "this" keyword in Java?',
        option: ['To refer to the current instance of the class', 'To create a new instance of a class', 'To invoke a static method', 'To declare a constant variable'],
        answer: 'To refer to the current instance of the class'
    },
    {
        question: 'How is the concept of inheritance implemented in Java?',
        option: ['By creating multiple instances of a class', 'By defining a method in a subclass that is already defined in its superclass', 'By bundling data and methods that operate on that data into a single unit', 'By allowing a class to inherit properties and behaviors from another class'],
        answer: 'By allowing a class to inherit properties and behaviors from another class'
    },
    {
        question: 'What is the purpose of the "interface" in Java?',
        option: ['To create an instance of a class', 'To define a blueprint for a class', 'To declare a constant variable', 'To store data in tabular form'],
        answer: 'To define a blueprint for a class'
    },
    {
        question: 'What is the concept of method overriding in Java?',
        option: ['Defining a method in a subclass that is already defined in its superclass', 'Creating multiple methods with the same name and same parameters', 'Hiding the implementation details of a class', 'Implementing multiple interfaces in a class'],
        answer: 'Defining a method in a subclass that is already defined in its superclass'
    },
    {
        question: 'What is the difference between "super" and "this" keywords in Java?',
        option: ['"super" refers to the current instance of the class, while "this" refers to the superclass', '"super" refers to the superclass, while "this" refers to the current instance of the class', '"super" is used for method overloading, while "this" is used for method overriding', '"super" and "this" are interchangeable and can be used in the same context'],
        answer: '"super" refers to the superclass, while "this" refers to the current instance of the class'
    },
    {
        question: 'What is the purpose of the "abstract" keyword in Java?',
        option: ['To create an instance of a class', 'To declare a variable that cannot be changed', 'To define a blueprint for a class that cannot be instantiated', 'To perform mathematical calculations'],
        answer: 'To define a blueprint for a class that cannot be instantiated'
    },
    {
        question: 'Explain the concept of polymorphism in Java.',
        option: ['The ability to create multiple instances of a class', 'The process of converting code into machine language', 'The bundling of data and methods into a single unit', 'The ability of an object to take on multiple forms'],
        answer: 'The ability of an object to take on multiple forms'
    },
    {
        question: 'How is the concept of encapsulation implemented in Java?',
        option: ['By defining a method in a subclass that is already defined in its superclass', 'By creating multiple instances of a class', 'By bundling data and methods that operate on that data into a single unit', 'By declaring a variable that cannot be changed'],
        answer: 'By bundling data and methods that operate on that data into a single unit'
    },
    {
        question: 'What is the purpose of the "interface" in Java?',
        option: ['To create an instance of a class', 'To define a blueprint for a class', 'To declare a constant variable', 'To store data in tabular form'],
        answer: 'To define a blueprint for a class'
    },
    {
        question: 'Explain the role of the "final" keyword in Java.',
        option: ['To indicate that a method can be overridden', 'To define a variable that cannot be changed', 'To create multiple instances of a class', 'To indicate that a class cannot be extended'],
        answer: 'To indicate that a class cannot be extended'
    },
    {
        question: 'What is the purpose of the "this" keyword in Java?',
        option: ['To refer to the current instance of the class', 'To create a new instance of a class', 'To invoke a static method', 'To declare a constant variable'],
        answer: 'To refer to the current instance of the class'
    },
    {
        question: 'How is the concept of inheritance implemented in Java?',
        option: ['By creating multiple instances of a class', 'By defining a method in a subclass that is already defined in its superclass', 'By bundling data and methods that operate on that data into a single unit', 'By allowing a class to inherit properties and behaviors from another class'],
        answer: 'By allowing a class to inherit properties and behaviors from another class'
    },
    {
        question: 'What is the purpose of the "interface" in Java?',
        option: ['To create an instance of a class', 'To define a blueprint for a class', 'To declare a constant variable', 'To store data in tabular form'],
        answer: 'To define a blueprint for a class'
    },
    {
        question: 'What is the purpose of the "sizeof" operator in C?',
        option: ['To find the size of a file', 'To determine the size of a variable or data type', 'To allocate memory dynamically', 'To calculate the length of a string'],
        answer: 'To determine the size of a variable or data type'
    },
    {
        question: 'What is a pointer in C?',
        option: ['A variable that stores the address of another variable', 'A data type used for floating-point numbers', 'A special keyword for declaring functions', 'A statement used for conditional execution'],
        answer: 'A variable that stores the address of another variable'
    },
    {
        question: 'How is memory allocated for a variable using the "malloc" function in C?',
        option: ['Automatically by the compiler', 'Statically at compile time', 'Dynamically at runtime', 'By using the "new" keyword'],
        answer: 'Dynamically at runtime'
    },
    {
        question: 'What is the purpose of the "scanf" function in C?',
        option: ['To print output to the console', 'To read a character from the console', 'To read user input', 'To perform mathematical calculations'],
        answer: 'To read user input'
    },
    {
        question: 'What is the difference between "int" and "char" data types in C?',
        option: ['"int" is used for integers, while "char" is used for characters', '"int" is used for characters, while "char" is used for integers', 'There is no difference; they are interchangeable', '"int" is used for floating-point numbers, while "char" is used for integers'],
        answer: '"int" is used for integers, while "char" is used for characters'
    },
    {
        question: 'What does the "static" keyword do in C?',
        option: ['Indicates that a variable is local to the block in which it is declared', 'Indicates that a variable retains its value between function calls', 'Specifies that a variable is constant and cannot be modified', 'Declares a variable as a pointer'],
        answer: 'Indicates that a variable retains its value between function calls'
    },
    {
        question: 'In C, what is the purpose of the "break" statement?',
        option: ['To end the loop immediately', 'To skip the current iteration and continue with the next', 'To exit the program', 'To pause the loop temporarily'],
        answer: 'To end the loop immediately'
    },
    {
        question: 'What is the correct syntax for declaring a function in C?',
        option: ['function name() { }', 'void function() { }', 'int function { }', 'function void() { }'],
        answer: 'void function() { }'
    },
    {
        question: 'What is the purpose of the "return" statement in a C function?',
        option: ['To declare a variable', 'To end the function and return a value', 'To perform mathematical calculations', 'To read user input'],
        answer: 'To end the function and return a value'
    },
    {
        question: 'How do you include a header file in C?',
        option: ['#include "header.h"', '#import <header.h>', '<header.h>', 'include header.h'],
        answer: '#include <header.h>'
    },
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
