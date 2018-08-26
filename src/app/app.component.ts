import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';

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

  output$ = of('No output yet...');

  outputImageUrl$ = of('https://picsum.photos/500');
}
