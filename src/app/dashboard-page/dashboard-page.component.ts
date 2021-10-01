import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  searchText = '';
  moreDetails: any = null;
  usStates = [
    {name: 'Alabama'},
    {name: 'Alaska'},
    {name: 'Arizona'},
    {name: 'Arkansas'},
    {name: 'California'},
    {name: 'Colorado'},
    {name: 'Connecticut'},
    {name: 'Delaware'},
    {name: 'Florida'},
    {name: 'Georgia'},
    {name: 'Hawaii'},
    {name: 'Idaho'},
    {name: 'Illinois'},
    {name: 'Indiana'},
    {name: 'Iowa'},
    {name: 'Kansas'},
    {name: 'Kentucky'},
    {name: 'Louisiana'},
    {name: 'Maine'},
    {name: 'Maryland'},
    {name: 'Massachusetts'},
    {name: 'Michigan'},
    {name: 'Minnesota'},
    {name: 'Mississippi'},
    {name: 'Missouri'},
    {name: 'Montana'},
    {name: 'Nebraska'},
    {name: 'Nevada'},
    {name: 'New Hampshire'},
    {name: 'New Jersey'},
    {name: 'New Mexico'},
    {name: 'New York'},
    {name: 'North Carolina'},
    {name: 'North Dakota'},
    {name: 'Ohio'},
    {name: 'Oklahoma'},
    {name: 'Oregon'},
    {name: 'Pennsylvania'},
    {name: 'Rhode Island'},
    {name: 'South Carolina'},
    {name: 'South Dakota'},
    {name: 'Tennessee'},
    {name: 'Texas'},
    {name: 'Utah'},
    {name: 'Vermont'},
    {name: 'Virginia'},
    {name: 'Washington'},
    {name: 'West Virginia'},
    {name: 'Wisconsin'},
    {name: 'Wyoming'},
  ];
  // @ts-ignore
  chartData: Array<any>;
  constructor() {
  }

  ngOnInit(): void {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 5000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}
