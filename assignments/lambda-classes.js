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
        console.log(`${this.name} has submitted a PR for ${subject}`); 
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate(instructorObj) {

        // loops until score is greater than 70
        while (this.score < 70) {

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
 * specialty 
 * favLanguage 
 * catchPhrase 
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
        console.log(`Today we are learning about ${subject}`); 
    }

    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}`); 
    }

    correctGrade(studentObj) {

        // a positive between 0 and 100
        const points = Math.floor(Math.random() * 101) 

        // -1 or 0 
        const posOrNeg =  Math.floor((Math.random() * 2) * -1); 

        
        if (posOrNeg !== 0) {   // deducted points 

            // points * -1 is a negative number 
            studentObj.grade += points * posOrNeg; 

            console.log(`${this.name} subtracted ${points} points from ${studentObj.name}'s score. \n${studentObj.name}'s new grade is ${studentObj.grade}. \n`); 

        } else {  // added points  

            studentObj.grade += points; 

            console.log(`${this.name} added ${points} points to ${studentObj.name}'s score. \n${studentObj.name}'s new grade is ${studentObj.grade}. \n`); 
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
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}