import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TrafiicComponent } from './dashboard/trafiic/trafiic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    TrafiicComponent, 
    TicketsComponent, 
    ServerStatusComponent, 
    DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Chart App';


}
