class Learner {
    fullName: string;
    studentNumber: number;
    grades: number[];

    constructor(fullName: string, studentNumber: number) {
        this.fullName = fullName;
        this.studentNumber = studentNumber;
        this.grades = [];
    }

    recordGrade(grade: number): void {
        this.grades.push(grade);
    }

    calculateAverage(): number {
        let sum = 0;

        for (let i = 0; i < this.grades.length; i++) {
            sum = sum + this.grades[i];
        }

        if (this.grades.length == 0) {
            return 0;
        }

        return sum / this.grades.length;
    }
}

let studentA = new Learner("John", 1);

studentA.recordGrade(80);
studentA.recordGrade(90);
studentA.recordGrade(70);

console.log("John average:", studentA.calculateAverage());