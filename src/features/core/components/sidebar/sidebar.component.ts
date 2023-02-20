import { Component, OnInit } from '@angular/core';
import { ISidebarItem } from '../../models/sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: ISidebarItem[] = [
    {
      name: "Notes",
      link: ""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  isMobile() {
    return window.innerWidth < 768;
  }

}
