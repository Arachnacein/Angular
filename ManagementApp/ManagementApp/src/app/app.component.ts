import { Component, ElementRef, HostListener, inject } from '@angular/core';
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
    host: {
      class: 'app-root',
      '(click)': 'onClick()'
    },
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Chart App';
  private element = inject(ElementRef);

  onClick()
  {
    console.log('AppComponent clicked');
    console.log(this.element);
  }
}
