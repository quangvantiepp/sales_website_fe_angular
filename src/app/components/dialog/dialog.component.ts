import { ComponentType } from '@angular/cdk/portal';
import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog<T, Td>(component:ComponentType<T>, data:Td): void {
    const dialogRef = this.dialog.open(component, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

  // openDialog<T, Td>(component:ComponentType<T>, data:Td): void {
  //   const dialogRef = this.dialog.open(component, {
  //     data: {name: this.name(), animal: this.animal()},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     if (result !== undefined) {
  //       this.animal.set(result);
  //     }
  //   });
  // }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template:`<div>

<h2 mat-dialog-title>Hi {{data.name}}</h2>
<mat-dialog-content>
  <p>What's your favorite animal?</p>
  <mat-form-field>
    <mat-label>Favorite Animal</mat-label>
    <input matInput [(ngModel)]="animal" />
  </mat-form-field>
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button (click)="onNoClick()">No Thanks</button>
  <button mat-button [mat-dialog-close]="animal()" cdkFocusInitial>Ok</button>
</mat-dialog-actions>

  </div>`,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}