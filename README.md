# Angular Observable Demo

Simple project to showcase the very basics of Rx

# Playground

## [app.component.html](./src/app/app.component.html)

This html template file binds to the observable `output$` and shows its plain text content. It uses the `async` pipe, so angular calls `subscribe()` upon it and shows its latest emitted value.

The `outputImageUrl$` observable is used as an URL for the picture that is shown.

## [app.component.ts](./src/app/app.component.ts)

This file contains the mentioned observables.

See also the `input$` subject (which is also observable) which will emit the content of the input control whenever it changes.

# Assignments

1. Make `output$` such that it emits what `input$` emits.

2. Same as 1, but it must only emit the last value when `input$` emitted it's last value 1 second ago. (So essentially, it must emit after the user stopped typing for more than a second.)

3. Change the type of `output$` to `Observable<number>`. Convert the values from `input$` to a number using `parseInt()`.

4. Make sure `output$` does not emit `NaN` values. (Tip: use `isNaN()`). (So NaN values must be filtered out.)

5. Make `outputImageUrl$` such that it emits whenever `output$` emits, but it is converted to a URL like this: 'https://picsum.photos/500?imageid=${output}'
