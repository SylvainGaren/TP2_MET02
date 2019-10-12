import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-data-recap',
  templateUrl: './data-recap.component.html',
  styleUrls: ['./data-recap.component.scss']
})
@Pipe({name: 'format'})

export class DataRecapComponent implements OnInit {

  @Input() recapForm: string;
  @Input() tel: string;

  constructor() { }

  ngOnInit() {
  }

  transform(value: string) {
    return "+33" + value;
  }

}
