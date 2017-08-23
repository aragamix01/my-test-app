import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListEditComponent } from './list-item/list-edit/list-edit.component';
import { ListDescComponent } from './list-item/list-desc/list-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemComponent,
    ListEditComponent,
    ListDescComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
