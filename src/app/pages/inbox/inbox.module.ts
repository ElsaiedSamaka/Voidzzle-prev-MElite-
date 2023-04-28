import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SortDirective } from 'src/utils/directives/sort.directive';
import { DetailedComponent } from './components/detailed/detailed.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  imports: [InboxRoutingModule, CommonModule, SharedModule, ViewsModule],
  declarations: [
    HomeComponent,
    NotFoundComponent,
    PlaceholderComponent,
    DetailedComponent,
    SortDirective,
  ],
})
export class InboxModule {}
