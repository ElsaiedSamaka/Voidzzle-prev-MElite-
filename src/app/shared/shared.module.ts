import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ExplianatoryModalComponent } from './explianatory-modal/explianatory-modal.component';
import { InputComponent } from './input/input.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ModalComponent } from './modal/modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SortIconComponent } from './sort-icon/sort-icon.component';
import { ToastComponent } from './toast/toast.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    BreadcrumbComponent,
    InputComponent,
    ModalComponent,
    ConfirmModalComponent,
    SortIconComponent,
    NavBarComponent,
    ToastComponent,
    LoadingSpinnerComponent,
    SideBarComponent,
    ExplianatoryModalComponent,
    CartComponent,
    CartItemsComponent,
    UserCardComponent,
  ],
  exports: [
    BreadcrumbComponent,
    InputComponent,
    ModalComponent,
    ConfirmModalComponent,
    SortIconComponent,
    NavBarComponent,
    ToastComponent,
    LoadingSpinnerComponent,
    SideBarComponent,
    ExplianatoryModalComponent,
    CartComponent,
    CartItemsComponent,
    UserCardComponent,
  ],
})
export class SharedModule {}
