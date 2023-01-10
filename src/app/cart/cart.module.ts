import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';

import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
      
    ConfirmOrderComponent,
    BookingDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class CartModule { }