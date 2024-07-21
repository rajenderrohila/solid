import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/http';
import { NotificationService } from './core/services/notification.service';
import { NotificationConsoleService } from './core/services/notification-console.service';
import { NotificationServerService } from './core/services/notification-server.service';
import { NotificationServerLoggerService } from './core/services/notification-server-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
    {provide: NotificationService, useClass:NotificationConsoleService},
    {provide: NotificationServerLoggerService, useClass:NotificationServerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
