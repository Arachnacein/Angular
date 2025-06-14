import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  standalone: true,
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  image = input.required<{ src: string; alt: string; }>();
  title = input.required<string>();
}
