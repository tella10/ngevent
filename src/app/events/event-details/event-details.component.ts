import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event : any

  constructor(private eventService : EventService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEventsbyId(+this.activatedRoute.snapshot.params['id'])
  }

}
