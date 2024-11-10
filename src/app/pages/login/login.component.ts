import { Component, OnInit } from '@angular/core';
import { ComponentDataSharing } from '../../components/components.share';
import { DatepickerComponent } from '../../components/datepicker/datepicker.component';

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
  fillInputValue: string = "";

  constructor( private datePickerData: ComponentDataSharing){}

  ngOnInit(): void {
    this.datePickerData.currentData.subscribe(data => {
      this.data = data;
    });
    this.datePickerData.currentInputValueFill.subscribe(data => {
      this.fillInputValue = data;
    });
  }

  submit = () => {
    console.log('submit data:', this.data, "input value:", this.fillInputValue);
  };

}
