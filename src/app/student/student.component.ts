import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../model/student';
import {Post} from '../model/post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<Student> = [];
  posts: Array<Post> = [];
  private studentToUpdate: Student;

  constructor(private studentService: StudentService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      response => {
        this.students = response;
        console.log('Studenci: ' + this.students);
        this.studentToUpdate = response[0];
        console.log('Student do aktualizacji: ' + this.studentToUpdate);
        this.studentToUpdate.name = 'Adam Hanke';
        this.studentService.updateStudent(this.studentToUpdate, 1).subscribe(result => console.log(result));
      });
    const newStudent1: Student = this.createStudent('Paweł Wojtanka', 'pawel.wojtanka@wp.pl', 555555555, 'www.paulws.pl');
    const newStudent2: Student = this.createStudent('Helga Fritz', 'helga.f@onet.pl', 511511511, 'www.helga.com');
    this.studentService.addStudent(newStudent1).subscribe();
    this.studentService.addStudent(newStudent2).subscribe();
    this.studentService.delete(2).subscribe();

    this.postService.getPosts().subscribe(
      response => {
        this.posts = response;
        this.students = this.matchPostToStudent(this.posts, this.students);
      }
    );
  }

  deleteRow(studentId: number): void {
    console.log(studentId);
    this.studentService.delete(studentId).subscribe(
      () => this.students = this.students.filter(student => !student.id.toString().includes(studentId.toString()))
    );
  }

  private createStudent(name: string, email: string, phone: number, website: string): Student {
    const student: Student = new Student();
    student.name = name;
    student.email = email;
    student.phone = phone;
    student.website = website;

    return student;
  }

  matchPostToStudent(posts: Array<Post>, students: Array<Student>): Array<Student> {
    students.forEach(student => student.posts = posts.filter(post => post.userId === student.id)
      .map(post => post.id));

    return students;
  }

}
