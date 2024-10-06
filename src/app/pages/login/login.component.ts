import { Component, OnInit } from '@angular/core';
import { DatepickerComponent, DatepickerService } from '../../components/datepicker/datepicker.component';

@Component({
  selector: 'app-login',
  standalone: true,
  providers:[DatepickerComponent],
  imports: [DatepickerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  data: string = "";
  constructor( private datepickerService: DatepickerService){}

  ngOnInit(): void {
    this.datepickerService.currentData.subscribe(data => {
      this.data = data;
      console.log('Updated data:', this.data);
    });
  }

  submit = () => {
    console.log('submit data:', this.data);
  };

}
