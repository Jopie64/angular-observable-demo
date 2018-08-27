import { Component } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
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

  output$: Observable<string> = of(`To find operators, check this website: http://reactivex.io/documentation/operators.html#tree`);

  outputImageUrl$: Observable<string> = of(`https://picsum.photos/500?imageid=${3}`);
}
