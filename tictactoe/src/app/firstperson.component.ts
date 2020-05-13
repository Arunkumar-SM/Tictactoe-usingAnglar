import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello Players {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class FirstPersonComponent  {
  @Input() name: string;
}
