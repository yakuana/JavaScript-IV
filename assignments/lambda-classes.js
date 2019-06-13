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
 * 
 * listsSubjects() ->  logs out all of the student's favorite subjects one by one
 * prAssignment(str) ->  receives a subject as an argument and logs out a phrase 
 * sprintChallenge(str) ->  receives a subject as an argument and logs out a phrase 
 */

class Student extends Person {

    constructor(studentProps) {

        // inherits Person properties 
        super(studentProps); 

        // unique properties for students 
        this.previousBackground = studentProps.previousBackground; 
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects; 
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