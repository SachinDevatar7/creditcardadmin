import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  creditCardId!: Number;
  constructor(
    private router: ActivatedRoute,
    private creditCardService: CreditcardsService,
    private route: Router
  ) {
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get('id') || '');

    this.creditCardService
      .deleteCreditCard(this.creditCardId)
      .subscribe((data) => {
        alert('Credit Card Deleted');
        this.route.navigate(['creditcards'])
      });
  }
}
