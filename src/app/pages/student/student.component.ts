
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student = new Student();
  students: Array<Student> = new Array();
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(res => { this.students = res._embedded.students; });
  }

  addStudent(): void {
    this.studentService.addStudent(this.student)
      .subscribe(student => this.getStudents());
    this.student = new Student();
  }

  editStudent(student) {
    this.student = student;
  }

  deleteStudent(student) {
    this.studentService.deleteStudent(student).subscribe(() => this.getStudents());
  }
}
