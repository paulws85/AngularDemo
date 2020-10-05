import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../model/student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  studentDetails: Student;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    console.log(id);
    this.studentService.getStudent(id).subscribe(
      response => this.studentDetails = response
    );
  }

}
