import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { error } from 'console';
import { debounceTime, filter } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Debouncing';
  searchBox = new FormControl('');

  constructor(private service: AppServiceService) {
    this.searchBox.valueChanges.pipe(
      debounceTime(3000),
      // filter(data => (data || '').length > 3)
    ).subscribe((datas: any) => {
      this.callApi(datas)

    });
  };



  callApi(data: any) {
    this.service.api('https://fake-json-api.mock.beeceptor.com/users').subscribe(data => {
      console.log("api data", data)
    })

  }



  //approach 2
  callDebouncing: any
  ngOnInit() {
    this.callDebouncing = this.debounce(this.callApi, 3000);
  }
  trigeringFunc(data: any) {
    if (data.target.value.length > 3) {
      this.callDebouncing()
    }
  }

  debounce(fn: any, delay: any) {
    let counter: any;
    return () => {
      clearTimeout(counter);
      counter = setTimeout(() => { fn.apply(this, arguments) }, delay);
    }
  };

}
