import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// To find operators, check this website:
// http://reactivex.io/documentation/operators.html#tree

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable-demo';
  input$ = new Subject<string>();

  output$ = of(`To find operators, check this website: http://reactivex.io/documentation/operators.html#tree`);

  outputImageUrl$ = of(`https://picsum.photos/500?imageid=${3}`);
}
