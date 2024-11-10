import { formatDate } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentDataSharing } from '../components.share';


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

  constructor(private datepickerData: ComponentDataSharing) {}

  onDateChange = (event: any) => {
    const formattedDate = formatDate(event?.target.value, 'MMM d, y, h:mm:ss a', 'en-US');
    this.datepickerData.setDate(formattedDate);
  };
}
