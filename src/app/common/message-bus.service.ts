import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MessageBusService {
    private broadcastedMessage: BehaviorSubject<any> = new BehaviorSubject({key:null,value:null});
  
    private messageEmmitted$ = this.broadcastedMessage.asObservable();
  
    /**
     * Subscribes to the message bus observer.
     * @param onNext Method that will be executed when a next value is emmitted.
     * @param error (optional) a handler for a terminal event resulting from an error.
     * @param complete (optional) a handler for a terminal event resulting from successful completion.
     */
    public subscribe(onNext, onError?, onComplete?): Subscription {
      return this.messageEmmitted$.subscribe(onNext, onError, onComplete);
    }
  
    /**
     * Sends a new message in the bus
     */
    public sendMessage(key: string, value: any): void {
      debugger;
      this.broadcastedMessage.next({key: key, value: value});
    }
}
