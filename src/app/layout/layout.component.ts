import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { FillComponent } from '../components/formField/fill/fill.component';
import { OutlineComponent } from '../components/formField/outline/outline.component';
import { LoginComponent } from '../pages/login/login.component';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

interface InputData{
  type:string;
  value:string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [provideNativeDateAdapter(), DialogComponent, OutlineComponent, LoginComponent, DatepickerComponent, FillComponent],
  imports: [RouterOutlet, MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatMenuModule, DialogComponent, LoginComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  constructor(private dialogComponent:DialogComponent){}


  // constructor(private sharedService: SharedService) {
  //   this.sharedService.currentData.subscribe(data => this.data = data);
  // }

  // changeData() {
  //   this.sharedService.changeData('Data changed by Component 1');
  // }

  openDialogComponent() {
    // this.dialogComponent.openDialog<LoginComponent, {data:InputData} >(LoginComponent, {data:{
    //   type:"",
    //   value:"",
    // }})
    this.dialogComponent.openDialog<FillComponent, {data:InputData} >(FillComponent, {data:{
      type:"",
      value:"",
    }})
  }



  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });


}
