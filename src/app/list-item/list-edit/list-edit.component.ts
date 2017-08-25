import {
  ListItem
} from './../list-item.model';
import {
  ListItemService
} from './../list-item.service';
import {
  Component,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit, OnChanges {

  @Output() onEditEvent = new EventEmitter < {
    itemName: string,
    itemDesc: string,
    indexOfItem: number,
    navigate: string
  } > ();

  @Input() editItem: ListItem;
  @Input() indexOfItem: number;

  itemName = '';
  itemDesc = '';
  indexItem: number;
  canEditAble = true;

  constructor(private liService: ListItemService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.editItem) {
      this.itemName = changes.editItem.currentValue.itemName;
      this.itemDesc = changes.editItem.currentValue.itemDesc;
      this.indexItem = changes.indexOfItem.currentValue;
      this.canEditAble = false;
    }
  }

  onAddItem() {
    this.liService.addListItem(new ListItem(this.itemName, this.itemDesc));
    this.liService.onChangeNavigate.emit('list');
  }

  onEditItem() {
    const listItem = new ListItem(this.itemName, this.itemDesc);
    this.liService.editListItem(this.indexItem, listItem);
    this.liService.onChangeNavigate.emit('list');
  }

  onClearItem() {
    this.itemName = '';
    this.itemDesc = '';
  }

}
