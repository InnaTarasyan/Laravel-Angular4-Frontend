import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class StudentService {
    constructor(private http: HttpClient) {
    }
    url = 'http://laravel-angular-4-app/api/v1/students';
    getStudents() {
       return  this.http.get(this.url);
    }
    deleteStudent(id) {
       return this.http.delete(this.url + '/' + id);
    }
    editStudent(id) {
       return this.http.get(this.url + '/' + id);
    }
    updateStudent(id) {
       return  this.http.post(this.url + '/' + id, {
            'name':  (<HTMLInputElement>document.getElementById('name')).value,
            'email': (<HTMLInputElement>document.getElementById('email')).value,
            'admission_date': (<HTMLInputElement>document.getElementById('admission_date')).value,
            'major': (<HTMLInputElement>document.getElementById('major')).value,
            'faculty': (<HTMLInputElement>document.getElementById('faculty')).value,
            'country': (<HTMLInputElement>document.getElementById('country')).value
        });
    }
    addStudent(form) {
        return this.http.post(this.url, form.value);
    }
    refreshInput(res) {
        (<HTMLInputElement>document.getElementById('name')).value = res ? res.name : '';
        (<HTMLInputElement>document.getElementById('email')).value = res ? res.email : '';
        (<HTMLInputElement>document.getElementById('admission_date')).value = res ? res.admission_date : '';
        (<HTMLInputElement>document.getElementById('faculty')).value = res ? res.faculty : '';
        (<HTMLInputElement>document.getElementById('major')).value = res ? res.major : '';
        (<HTMLInputElement>document.getElementById('country')).value = res ? res.country : '';
    }
}
