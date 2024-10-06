import { formatDate } from '@angular/common';
import { Component, computed, inject, Injectable, signal } from '@angular/core';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-datepicker',
  standalone: true,
  providers: [provideNativeDateAdapter(), 
    {provide: MAT_DATE_LOCALE, 
    //  useValue: 'ja-JP'
     useValue: 'fr'
    },
  ],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {

  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));
  readonly dateFormatString = computed(() => {
    if (this._locale() === 'ja-JP') {
      return 'YYYY/MM/DD';
    } else if (this._locale() === 'fr') {
      return 'DD/MM/YYYY';
    }
    return '';
  });

  constructor(private datepickerService: DatepickerService) {}

  onDateChange = (event: any) => {
    const formattedDate = formatDate(event?.target.value, 'MMM d, y, h:mm:ss a', 'en-US');
    this.datepickerService.setDate(formattedDate);
    console.log('dateChange:', formattedDate);
  };
}

@Injectable({
  providedIn: 'root',
   /**
   * Make sure this service is shared by all applications.
   * Makes the service usable in any component or service without having to add it to the providers array
   */
})
export class DatepickerService {
  private fullDate = new BehaviorSubject<string>('Initial data');
  currentData = this.fullDate.asObservable();

  setDate(date: string) {
    this.fullDate.next(date);
  }
}