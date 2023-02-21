import { Component, OnInit } from '@angular/core';
import { ISidebarItem } from '../../models/sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isVisible: boolean = true;
  items: ISidebarItem[] = [
    {
      name: "Notes",
      link: ""
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.isVisible = !this.isMobile()
  }

  isMobile() {
    return window.innerWidth < 768;
  }

}
