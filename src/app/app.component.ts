import { Component, OnInit } from '@angular/core';
import { NotificationConsoleService } from './core/services/notification-console.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prac';
  constructor(
    private logger:NotificationConsoleService
  ) {

  }

  ngOnInit(): void {
    this.logger.log('App started') 
  }
}
