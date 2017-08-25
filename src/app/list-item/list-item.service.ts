import {
  EventEmitter
} from '@angular/core';
import {
  ListItem
} from './list-item.model';


export class ListItemService {

  onChangeListEvent = new EventEmitter < ListItem[] > ();
  onChangeNavigate = new EventEmitter < string > ();
  onSelectItemEvent = new EventEmitter < ListItem > ();

  items: ListItem[] = [
    new ListItem('Angular2', 'TypeScript Language'),
    new ListItem('JSF', 'Java Language')
  ];

  getListItems() {
    return this.items.slice();
  }

  addListItem(listItem: ListItem) {
    this.items.push(listItem);
    console.log(this.items);
    this.onChangeListEvent.emit(this.items.slice());
  }

  delListItem(index: number) {
    this.items.splice(index, 1);
    console.log(this.items);
    this.onChangeListEvent.emit(this.items.slice());
  }

  editListItem(index: number, listItem: ListItem) {
    this.items[index].itemName = listItem.itemName;
    this.items[index].itemDesc = listItem.itemDesc;
    this.onChangeListEvent.emit(this.items.slice());
    console.log('changed');
  }
}
