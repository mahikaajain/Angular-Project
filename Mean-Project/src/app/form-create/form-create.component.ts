import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  interests = new FormControl();

  interestList: string[] = 
  [
    'Wine',
    'Film',
'Cooking',
    'Handmade Crafts',
    'Concerts',
    'Positive Thinking',
    'Bible Group Study',
    'Web Design',
    'Animal Welfare',
    'Musicians',
    'Volunteering',
    'Active Dogs',
    'Makeup Artist',
    'Running',
    'Playdates',
    'Professional Development',
    'Hobbies',
    'Scrapbooking',
    'Video Production',
    'Teachers',
    
    'Art',
    
    'History',
    
    'LGBT Friendly',
    
    'New Parents',
    
   'Coffee and Tea Socials',
    
    'Social Dancing'
  ];
  citys: City[] = [
    {value: 'steak-0', viewValue: 'Chandigarh'},
    {value: 'pizza-1', viewValue: 'Mumbai'},
    {value: 'tacos-2', viewValue: 'Delhi'},
    {value: 'tacos-2', viewValue: 'Banglore'},
    {value: 'tacos-2', viewValue: 'Pune'},
    {value: 'tacos-2', viewValue: 'Goa'},
  ];
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
