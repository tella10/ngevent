import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

 export const routes: Routes = [
  { path : 'events' , component : EventListComponent },
  { path : 'events/:id' , component : EventDetailsComponent},
  { path : '' , redirectTo : '/events' , pathMatch : 'full' },
];

// export const RouteRoutes = RouterModule.forChild(routes);
