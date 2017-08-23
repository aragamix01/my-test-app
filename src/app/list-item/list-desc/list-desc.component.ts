import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../list-item.model';
@Component({
  selector: 'app-list-desc',
  templateUrl: './list-desc.component.html',
  styleUrls: ['./list-desc.component.css']
})
export class ListDescComponent implements OnInit {
@Input() item: ListItem;
  constructor() { }

  ngOnInit() {
  }

}
