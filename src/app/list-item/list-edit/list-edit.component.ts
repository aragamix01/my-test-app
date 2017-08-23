import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListItem } from '../list-item.model';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit, OnChanges {

  @Output() onAddEvent = new EventEmitter<{itemName: string, itemDesc: string, navigate: string}>();
  @Output() onEditEvent = new EventEmitter<{itemName: string, itemDesc: string, indexOfItem: number, navigate: string}>();
  @Input() editItem: ListItem;
  @Input() indexOfItem: number;

  itemName = '';
  itemDesc = '';
  indexItem: number;
  canEditAble = true;

  constructor() {
  }

  ngOnInit() { }



  ngOnChanges(changes: SimpleChanges) {
    if ( this.editItem ) {
      this.itemName = changes.editItem.currentValue.itemName;
      this.itemDesc = changes.editItem.currentValue.itemDesc;
      this.indexItem = changes.indexOfItem.currentValue;
      this.canEditAble = false;
    }
  }

  onAddItem() {
    this.onAddEvent.emit({
      itemName: this.itemName,
      itemDesc: this.itemDesc,
      navigate: 'list'
    });
  }

  onEditItem() {
    this.onEditEvent.emit({
      itemName: this.itemName,
      itemDesc: this.itemDesc,
      indexOfItem: this.indexItem,
      navigate: 'list'
    });
  }

}
