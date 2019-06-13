// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes); 
    }
}

class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes); 
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes); 
    }
}