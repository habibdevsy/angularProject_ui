import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';
import { NotificationComponent } from './notification/notification.component';
import { PhotoComponent } from './photo/photo.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SliderComponent } from './slider/slider.component';
import { DateTabsComponent } from './date-tabs/date-tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleComponent,
    NotificationComponent,
    PhotoComponent,
    SearchComponent,
    SliderComponent,
    DateTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
