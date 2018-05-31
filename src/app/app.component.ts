import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse} from '@angular/common/http';
import {StudentInterface} from './student.interface';
import {StudentService} from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private studentService: StudentService) {}
    response: StudentInterface;
    student_id = -1;
    onSubmit(form: NgForm) {
        if (document.getElementById('submit').classList.contains('edit')) {
            this.student_id =  document.getElementById('submit').getAttribute('row');
            this.studentService.updateStudent(this.student_id)
            .subscribe(
                res => {
                    console.log(res);
                    location.reload();
                },
                err => {
                    console.log('Error occured');
                }
            );
        } else {
            this.studentService.addStudent(form).subscribe(
                res => {
                    console.log(res);
                    location.reload();
                },
                err => {
                    console.log('Error occured');
                }
            );
        }
    }
    addStudent() {
        this.studentService.refreshInput(null);
        document.getElementById('submit').classList.remove('edit');
    }

    ngOnInit(): void {
          this.studentService.getStudents().subscribe((data: StudentInterface) => {
          this.response = data;
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        });
    }
}
