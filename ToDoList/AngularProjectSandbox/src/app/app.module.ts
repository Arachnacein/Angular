import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    /*AppComponent*/
  
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [/*AppComponent*/]
})
export class AppModule { }
