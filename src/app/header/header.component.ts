import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigateEvent = new EventEmitter < string > ();
  navigator = 'list';
  constructor() {}

  ngOnInit() {}

  onSelectedHeader(headerText: string) {
    this.navigateEvent.emit(headerText);
  }
}
