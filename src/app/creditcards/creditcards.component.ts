import { Component, ViewChild } from '@angular/core';
import {CreditCard} from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator} from "@angular/material/paginator";
import { MatSort } from '@angular/material/sort';
const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: "Bank of America",
    description: "Bank of America offers customers with variety of options",
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: false,
    recommendedScore: "700-900",
    annualFee: 4,
    termsAndConditions: 'The following conditions are applicable for this card',
    createdDate: '2023-31-08',
    updatedDate: '2023-31-08'
  },
  {
    id: 2,
    name: "Bank of America",
    description: "Bank of America offers customers with variety of options",
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: false,
    recommendedScore: "700-900",
    annualFee: 4,
    termsAndConditions: 'The following conditions are applicable for this card',
    createdDate: '2023-31-08',
    updatedDate: '2023-31-08'
  },
  {
    id: 3,
    name: "Bank of America",
    description: "Bank of America offers customers with variety of options",
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: false,
    recommendedScore: "700-900",
    annualFee: 4,
    termsAndConditions: 'The following conditions are applicable for this card',
    createdDate: '2023-31-08',
    updatedDate: '2023-31-08'
  }
];

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  displayColums = ["select", "id", "name", "description",
    "bankName", "maxCredit", "interestRate", "active", "recommendedScore" 
  ]

  dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

/**
 * Lifecycle hook that is called after the component's view has been fully initialized.
 * This method assigns the paginator and sorting functionality to the dataSource for
 * the Angular Material table, enabling pagination and sorting of data.
 * The paginator and sort references are accessed via @ViewChild, which are only available
 * after the view is initialized, making ngAfterViewInit the appropriate hook for this setup.
 */
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

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
