import { Injectable } from "@angular/core";
import { NotificationService } from "./notification.service";

@Injectable({
    providedIn:'root'
})

export class NotificationConsoleService extends NotificationService {
    log(message:string):void {
        console.log(message)
    }
}