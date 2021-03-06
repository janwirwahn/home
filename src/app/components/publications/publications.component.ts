import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'ut-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' , height: '0'}),
        animate('.5s ease-out', style({ opacity: '1' , height: '*'})),
      ]),
      transition(':leave', [
        style({ opacity: '1' , height: '*'}),
        animate('.5s ease-out', style({ opacity: '0' , height: '0'})),
      ])
    ])
  ]
})
export class PublicationsComponent implements OnInit {

    public showAll = true;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
