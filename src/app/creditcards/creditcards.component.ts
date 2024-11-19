import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss'],
})
export class CreditcardsComponent {
  creditcards: CreditCard[] = [];

  constructor(private creditcardsService: CreditcardsService) {
    this.creditcardsService.getCreditCards().subscribe((data: CreditCard[]) => {
      this.creditcards = data;
      console.log('HERE IS THE DATA', this.creditcards);

      this.dataSource = new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // If the constructor fails to get the data it will come here and get null/empty data.
  dataSource = new MatTableDataSource(this.creditcards);
  displayColums = [
    'select',
    'id',
    'name',
    'description',
    'bankName',
    'maxCredit',
    'interestRate',
    'active',
    'recommendedScore',
    'actions'
  ];

  //dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   * This method assigns the paginator and sorting functionality to the dataSource for
   * the Angular Material table, enabling pagination and sorting of data.
   * The paginator and sort references are accessed via @ViewChild, which are only available
   * after the view is initialized, making ngAfterViewInit the appropriate hook for this setup.
   */
  //ngAfterViewInit() {}

  /**
   * Handles the selection or deselection of a table row.
   * This method toggles the selection state of the given credit card row
   * by using the SelectionModel to track which rows are selected.
   * The 'as never' cast is used to satisfy type requirements when working with SelectionModel.
   *
   * @param row - The CreditCard object representing the selected/deselected row.
   */
  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }
}
