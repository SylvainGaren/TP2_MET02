import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-recap',
  templateUrl: './data-recap.component.html',
  styleUrls: ['./data-recap.component.scss']
})
export class DataRecapComponent implements OnInit {

  @Input() recapForm: string;

  constructor() { }

  ngOnInit() {
  }

}
