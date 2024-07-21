import { Injectable } from "@angular/core";
import { NotificationService } from "./notification.service";
import { NotificationServerLoggerService } from "./notification-server-logger.service";

@Injectable({
    providedIn:'root'
})

export class NotificationServerService extends NotificationServerLoggerService {
    override logInfo(message: string): void {
        
    }

    override logError(message: string): void {
        
    }
}