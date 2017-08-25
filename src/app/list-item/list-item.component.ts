import {
  ListItemService
} from './list-item.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ListItem
} from './list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  providers: [ListItemService]
})
export class ListItemComponent implements OnInit {
  @Input() listNavigate: string;
  items: ListItem[] = [];
  constructor(private liService: ListItemService) {}

  item: ListItem;
  index: number;
  ngOnInit() {
    this.items = this.liService.getListItems();
    this.liService.onChangeListEvent.subscribe(
      (items: ListItem[]) => {
        this.items = items;
      }
    );
    this.liService.onChangeNavigate.subscribe(
      (nav: string) => {
        this.listNavigate = nav;
      }
    );
  }

  onSelectedItem(item: ListItem) {
    // this.item = item;
    this.liService.onSelectItemEvent.emit(item);
  }

  onSelectedEdit(item: ListItem) {
    const index: number = this.items.indexOf(item, 0);
    this.item = item;
    this.index = index;
    this.listNavigate = 'input';
  }

  onDeleteItem(item: ListItem) {
    const index: number = this.items.indexOf(item, 0);
    this.liService.delListItem(index);
  }

  onEditListItem(editItemEvent: {
    itemName: string,
    itemDesc: string,
    indexOfItem: number,
    navigate: string
  }) {
    console.log(editItemEvent);
    this.items[editItemEvent.indexOfItem].itemName = editItemEvent.itemName;
    this.items[editItemEvent.indexOfItem].itemDesc = editItemEvent.itemDesc;
    this.listNavigate = editItemEvent.navigate;
  }
}
