import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentDataSharing } from '../../components.share';
import { LoginComponent } from '../../../pages/login/login.component';

@Component({
  selector: 'app-fill',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, LoginComponent],
  templateUrl: './fill.component.html',
  styleUrl: './fill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FillComponent {
  inputValue = "";
  constructor(private formFillData: ComponentDataSharing) {}

  onChange = (event:any)=>{
    let value = event.target.value;
    console.log("input value:", event.target.value)
    this.formFillData.setInputFill(value)
  }

}
