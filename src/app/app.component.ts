import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {Student} from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  name: string = 'Paweł';
  surname: string = 'Wojtanka';
  imageAlt: string = 'Pizza';
  myHref: string = '#';
  names: Array<string> = ['name1', 'name2'];

  ngOnInit(): void {
    alert('Inicjalizacja komponentu');
    const user: User = {
      firstName: 'Ola',
      sureName: 'Pszczoła',
      email: 'ola.pszczola@wp.pl',
      phone: 566123432,
      www: 'www.pszczolki.pl',
    };
    const student = new Student();
    console.log(user);
  }

  clickHandler(): void {
    alert('Alert!!!');
  }
}
