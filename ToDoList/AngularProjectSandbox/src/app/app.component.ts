import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeaderComponent, UserComponent]
})
export class AppComponent {
  title = 'AngularProjectSandbox';
  users = DUMMY_USERS;

  onSelectUser(id:string) {
    console.log("Selected user with id: " + id);
  }
}
