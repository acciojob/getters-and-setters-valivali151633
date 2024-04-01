//complete this code
class Person {
	constructor(name, age)
	{
		name = this.name;
		age = this.age;
	}
 get getterName{
	 return this.name;
 }

 set setage(age){
	 this.age = age;
 }
}

class Student extends Person {
	Constructor{
	super();
	}
	study(){
       console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	Constructor{
	super();
	}
	teach(){
		console.log(`${this.name} is teching to the console`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
