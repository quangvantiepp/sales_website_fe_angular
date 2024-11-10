import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
     /**
     * Make sure this service is shared by all applications.
     * Makes the service usable in any component or service without having to add it to the providers array
     */
  })
  export class ComponentDataSharing {
    private fullDate = new BehaviorSubject<string>('Initial data');
    private inputValueFill = new BehaviorSubject<string>("Initial value")


    currentData = this.fullDate.asObservable();
    currentInputValueFill = this.inputValueFill.asObservable();


    setDate(date: string) {
      this.fullDate.next(date);
    }

    setInputFill(value:string){
      this.inputValueFill.next(value);
    }
  }