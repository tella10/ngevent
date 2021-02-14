import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor( private toastrService : ToastrService) { }

  ngOnInit() {
  }
 @Input() event : any

 toastrclick(eventName){
  this.toastrService.success(eventName)
 }

 Earlyclick(){
  if (this.event && this.event.time === '10:00 am')
     { return ['red', 'bold']}
  if (this.event && this.event.time === '8:00 am') 
      {return ['green', 'bold']}
 return []
 }
}
