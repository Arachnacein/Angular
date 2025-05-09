import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    /*AppComponent*/
  
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    CardComponent
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
