import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { d404Component } from './error/404/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

 export const routes: Routes = [
  { path : 'events/new' , component : CreateEventComponent },
  { path : 'events' , component : EventListComponent },
  { path : '404' , component : d404Component },
  { path : 'events/:id' , component : EventDetailsComponent , canActivate : [EventRouteActivatorService]},
  { path : '' , redirectTo : '/events' , pathMatch : 'full' },
];

// export const RouteRoutes = RouterModule.forChild(routes);
