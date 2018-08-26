import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

interface Card {
  value: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable-demo';
  input$ = new Subject<string>();

  output$ = this.input$.pipe(
    debounceTime(1000),
    map(v => parseInt(v, 10)),
    filter(v => !isNaN(v)));

  outputImageUrl$ = this.output$.pipe(
    map(v => `https://picsum.photos/500?imageid=${v}`));
}
