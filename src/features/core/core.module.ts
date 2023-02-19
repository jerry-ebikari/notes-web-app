import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SuiSidebarModule } from '@richardlt/ng2-semantic-ui';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SuiSidebarModule
  ],
  exports: [SidebarComponent]
})
export class CoreModule { }
