import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleCollapse]'
})
export class ToggleCollapseDirective {

  @HostBinding('class.collapse') isToggle = false;

  constructor() { }

  @HostListener('click') onToggle() {
    this.isToggle = !this.isToggle;
    console.log(this.isToggle);
  }
}
