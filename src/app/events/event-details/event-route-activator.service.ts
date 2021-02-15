import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService  implements CanActivate {

constructor( private eventService : EventService , private router : Router) { }

  canActivate (route : ActivatedRouteSnapshot ){
    const isEventexist = !!this.eventService.getEventsbyId(+route.params['id'])

    if (!isEventexist){
      this.router.navigate(['/404'])
    return isEventexist
  }

  }
}
