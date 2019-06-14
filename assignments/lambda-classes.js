// CODE here for your Lambda Classes

/**
 * === Person (base-class)
 * 
 * name - str 
 * age - int 
 * location - str  
 * 
 * speak() -> logs out a phrase using name, age, and location 
 */

class Person {

    constructor(props) {

        // person properties 
        this.name = props.name; 
        this.age = props.age; 
        this.location = props.location; 
    }

    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`); 
    }

    speakChinese() {
        console.log(`您好，我叫${this.name}。我是${this.location}人。`); 
    }
}


/**
 * === Student (inherits from Person class)
 * 
 * previousBackground - str 
 * className - str 
 * favSubjects - []
 * grade - int 
 * 
 * listsSubjects() ->  logs out all of the student's favorite subjects one by one
 * prAssignment(str) ->  receives a subject as an argument and logs out a phrase 
 * sprintChallenge(str) ->  receives a subject as an argument and logs out a phrase
 * graduate() -> checks if student can graduate; continues to grade students papers until the student
 * can graduate using a while loop; eventually logs a phrase saying the student can graduate
 */

class Student extends Person {

    constructor(studentProps) {

        // inherits Person properties 
        super(studentProps); 

        // unique properties for students 
        this.previousBackground = studentProps.previousBackground; 
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects; 
        this.grade = studentProps.grade; 
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject)); 
    }

    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`); 
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }

    graduate(instructorObj) {

        // loops until score is greater than 70
        while (this.grade < 70) {

            // logs a sincere apology and informs the student that their score is being updated 
            console.log(`${this.name}, I am sorry to inform you that you cannot graduate yet. Please continue to study hard! \nYour next assignment is being graded. Please be patient.\n`);
            
            // uses the instructor (or PM's) correctGrade method to change the student's score
            instructorObj.correctGrade(this); 
        };

        console.log(`${this.name}, you can graduate! Congratulations!`);  
    }

}


/**
 * === Instructor (inherits from Person class)
 * 
 * specialty - str
 * favLanguage - str 
 * catchPhrase - str
 * 
 * demo(str) -> receives a string as an argument and logs out a phrase
 * grade(obj, str) -> receives an object and a string as arguments and logs out a phrase 
 * correctGrade(obj) -> receives a student object and changes the student object's grade value; 
 * logs out an update
 */

class Instructor extends Person {

    constructor(instructorProps) {

        // inherits Person properties 
        super(instructorProps); 

        // unique properties for instructors 
        this.specialty = instructorProps.specialty; 
        this.favLanguage = instructorProps.favLanguage; 
        this.catchPhrase = instructorProps.catchPhrase; 
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}!`); 
    }

    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}!`); 
    }

    correctGrade(studentObj) {

        // a positive between 0 and 100
        const points = Math.floor(Math.random() * 101) 

        // -1 or 0 
        const posOrNeg = (Math.floor(Math.random() * 2)) * -1; 

        /** 
         * Debugging helpers 
         * console.log(`-1 or 0: ${posOrNeg}`)
         * console.log(`Points generated: ${points}`); 
         * console.log(`Student's current grade: ${studentObj.grade}`); 
        */
        
        if (posOrNeg < 0) {   // deducted points 

            if ((studentObj.grade + (points * posOrNeg)) <= 0) {  // student grade will be 0 or negative number 

                // forces the lowest student grade to be 0 
                studentObj.grade = 0; 

                console.log(`${studentObj.name} has failed this assignment. \n${studentObj.name}'s current grade is ${studentObj.grade}. \n`);

            } else {

                // deducts points from student's grade 
                studentObj.grade += (points * posOrNeg); 

                console.log(`${this.name} subtracted ${points * posOrNeg} points from ${studentObj.name}'s score. \n${studentObj.name}'s new grade is ${studentObj.grade}.`); 
            }

        } else {  // added points  

            // student grade will be above or equal to 100 after adding points 
            if ((studentObj.grade + points) >= 100) {

                //forces the max grade to be 100 
                studentObj.grade = 100;
                
                console.log(`${studentObj.name} recieves a perfect score! \n${studentObj.name}'s new grade is ${studentObj.grade}. Nice work!`); 

            } else {

                // add points to student's grade 
                studentObj.grade += points; 

                console.log(`${this.name} added ${points} points to ${studentObj.name}'s score. \n${studentObj.name}'s new grade is ${studentObj.grade}.`); 
            } 
        }
    }
}


/**
 * === ProjectManager (inherits from Instructor)
 * 
 * gradClassName - str  
 * favInstructor - str 
 * 
 * standUp(str) -> takes a slack channel string and logs a phrase  
 * debugsCode(obj, str) -> takes in a student object and a subject and logs out a phrase 
 */

class ProjectManager extends Instructor {

    constructor(pmProps) {

        // inherits Instructor properties 
        super(pmProps); 

        // unique ProjectManager properties 
        this.gradClassName = pmProps.gradClassName; 
        this.favInstructor = pmProps.favInstructor; 
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`);
    }
}


// Objects copied from Isaiah Francois' post in web21_help; Modified to test my code 

// students 

const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 60, 
});

const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 94, 
});

const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 68, 
});

// Instuctors 

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

// Project Managers 

const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
});

const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});


// Testing Person [speak, speakChinese] and 
// Student methods [listsSubjects, prAssignment, sprintChallenge,] using nisa object 

/** for reference 
const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 68, 
});
 */


/** 
console.log(nisa.name);                 // Nisa 
nisa.speak();                           // Hello, my name is Nisa. I am from Ohio.
nisa.speakChinese();                    // 您好，我叫Nisa。我是Ohio人。
nisa.listsSubjects();                   // Html \n CSS \n JavaScript 
nisa.prAssignment("Website Design");    // Nisa has submitted a PR for Website Design.
nisa.sprintChallenge("Arrays");         // Nisa has begun sprint challenge on Arrays.
*/

// SPRINT CHALLENGE: Testing Student [graduate] method using isaiah Student object and pat PM object 

// isaiah.graduate(pat);                   // ** Answers may vary ** 

// Below are my results after using the with isaiah and pat 
/**
Isaiah, I am sorry to inform you that you cannot graduate yet. Please continue to study hard! 
Your next assignment is being graded. Please be patient.

Pat subtracted -30 points from Isaiah's score. 
Isaiah's new grade is 30.
Isaiah, I am sorry to inform you that you cannot graduate yet. Please continue to study hard! 
Your next assignment is being graded. Please be patient.

Pat added 40 points to Isaiah's score. 
Isaiah's new grade is 70.
Isaiah, you can graduate! Congratulations!

*/

// Testing instructor methods [demo, grade] using dan and nisa objects 

/** for reference 
const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 68, 
});
 */

/**
dan.demo("JavaScript");             // Today we are learning about JavaScript!
dan.grade(nisa, "JavaScript");      // Nisa receives a perfect score on JavaScript!
dan.correctGrade(nisa);             // ** Answers may vary ** 
 */


 // Testing Project Manager methods [standUp, debugsCode] using mary and kevin objects  

 /** for reference 
const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 94, 
});
  */

/**
mary.standUp("Is1905"); 
mary.debugsCode(kevin, "JavaScript"); 
*/
