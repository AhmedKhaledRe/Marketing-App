import { Component } from '@angular/core';

import { faSearch, faEquals, faHeadphones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  searchIcon = faSearch;
  equalsIcon = faEquals;
  headphones = faHeadphones;

  constructor() {}

}