import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'my-cell',
  template: `<div>{{value}}</div>`,
  styles: [
    `div { height: 40px; width: 40px; background-color:yellow; float: left; margin: 0 4px 4px 0; color:black;}`
  ]
})
export class SecondPersonComponent {
  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
}