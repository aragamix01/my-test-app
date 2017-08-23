import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from './list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() listNavigate: string;
  items: ListItem[] = [
    new ListItem('Angular2', 'TypeScript Language'),
    new ListItem('JSF', 'Java Language')
  ];
  constructor() { }

  item: ListItem;
  index: number;
  ngOnInit() {
  }

  addItemToList(addItemEvent: {itemName: string, itemDesc: string, navigate: string}) {
    this.items.push({
      itemName: addItemEvent.itemName,
      itemDesc: addItemEvent.itemDesc
    });
    this.listNavigate = addItemEvent.navigate;
  }

  onSelectedItem(item: ListItem) {
    this.item = item;
  }

  onSelectedEdit(item: ListItem) {
    const index: number = this.items.indexOf(item, 0);
    this.item = item;
    this.index = index;
    this.listNavigate = 'input';
  }

  onDeleteItem(item: ListItem) {
    const index: number = this.items.indexOf(item, 0);
    console.log(index);
    this.items.splice(index, 1);
  }

  onEditListItem(editItemEvent: {itemName: string, itemDesc: string, indexOfItem: number, navigate: string}) {
    console.log(editItemEvent);
    this.items[editItemEvent.indexOfItem].itemName = editItemEvent.itemName;
    this.items[editItemEvent.indexOfItem].itemDesc = editItemEvent.itemDesc;
    this.listNavigate = editItemEvent.navigate;
  }
}
