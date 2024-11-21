import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  creditCardId!: number;
  creditCardDetails: CreditCard | null = null;

  constructor(
    private creditCardService: CreditcardsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve the credit card ID from the route parameters
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get('id') || '', 10);

    // Fetch the credit card details
    this.getCreditCardDetails();
  }

  getCreditCardDetails(): void {
    this.creditCardService
      .getCreditCardById(this.creditCardId)
      .subscribe(
        (data: CreditCard) => {
          this.creditCardDetails = data;
          console.log('Credit Card Details:', this.creditCardDetails);
        },
        (error) => {
          console.error('Error fetching credit card details:', error);
        }
      );
  }

}
