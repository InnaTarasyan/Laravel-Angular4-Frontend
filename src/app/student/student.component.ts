import {Component, Input, OnInit} from '@angular/core';
import {StudentInterface} from '../student.interface';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: StudentInterface;
  constructor(private studentService: StudentService) { }
  student_id = -1;
  ngOnInit() {
  }

    editStudent(id) {
        this.studentService.editStudent(id)
            .subscribe(
                (res: StudentInterface) => {
                    this.studentService.refreshInput(res);
                    document.getElementById('submit').classList.add('edit');
                    document.getElementById('submit').setAttribute('row', id);
                    this.student_id = id;
                },
                err => {
                    console.log('Error occured');
                }
            );
    }
    deleteStudent(id) {
        this.studentService.deleteStudent(id)
            .subscribe(
                res => {
                    location.reload();
                },
                err => {
                    console.log('Error occured');
                }
            );
    }

}
