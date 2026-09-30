import { StudentDAO } from './Studentdao.ts';

const dao = new StudentDAO();
dao.addStudent('STD-001', 'Somchai Jaidee', 3.85);
dao.addStudent('STD-002', 'Somsri Deja', 3.20);
const students = dao.getAllStudents();
students.forEach(s => {
    console.log(`${s.getStudentCode()} - ${s.getFullName()} (GPA: ${s.getGpa()}) [Honors: ${s.isHonors() ? 'YES' : 'NO'}]`);});