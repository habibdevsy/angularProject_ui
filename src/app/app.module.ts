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
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TaskComponent } from './task/task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleComponent,
    NotificationComponent,
    PhotoComponent,
    SearchComponent,
    SliderComponent,
    DateTabsComponent,
    TabsComponent,
    TaskComponent,
    NavbarComponent,
    TaskCardComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
