import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export abstract class NotificationServerLoggerService {
    abstract logInfo(message:string): void;
    abstract logError(message:string): void;
}