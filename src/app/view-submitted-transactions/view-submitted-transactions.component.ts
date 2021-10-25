import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import transactionData from '../data/transaction.json';

@Component({
  selector: 'app-view-submitted-transactions',
  templateUrl: './view-submitted-transactions.component.html',
  styleUrls: ['./view-submitted-transactions.component.scss']
})
export class ViewSubmittedTransactionsComponent implements OnInit {

  constructor(private _liveAnnouncer: LiveAnnouncer) { }
  displayedColumns: string[] = ['position', 'Customername', 'Transferamount', 'TransferCurrency','Reference'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);transactionData
  dataSource = new MatTableDataSource<PeriodicElement>(transactionData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  ngOnInit(): void {

    console.log(transactionData);
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

export interface PeriodicElement {
  Customername: String;
  position: number;
  Transferamount: number;
  TransferCurrency: string;
  Reference: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1,  Customername: 'Hydrogen', Transferamount: 1.0079, TransferCurrency: 'INR',Reference: 'CUSram'},
//   {position: 2,  Customername: 'Helium', Transferamount: 4.0026, TransferCurrency: 'USD',Reference: 'CUSram'},
//   {position: 3,  Customername: 'Lithium', Transferamount: 6.941, TransferCurrency: 'EUR',Reference: 'CUSram'},
//   {position: 4,  Customername: 'Beryllium', Transferamount: 9.0122, TransferCurrency: 'INR',Reference: 'CUSram'},
//   {position: 5,  Customername: 'Boron', Transferamount: 10.811, TransferCurrency: 'INR',Reference: 'CUSram'},
//   {position: 6,  Customername: 'Carbon', Transferamount: 12.0107, TransferCurrency: 'INR',Reference: 'CUSram'},
//   {position: 7,  Customername: 'Nitrogen', Transferamount: 14.0067, TransferCurrency: 'USD',Reference: 'CUSram'},
//   {position: 8,  Customername: 'Oxygen', Transferamount: 15.9994, TransferCurrency: 'CHF',Reference: 'CUSram'},
//   {position: 9,  Customername: 'Fluorine', Transferamount: 18.9984, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 10,  Customername: 'Neon', Transferamount: 20.1797, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 11,  Customername: 'Sodium', Transferamount: 22.9897, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 12,  Customername: 'Magnesium', Transferamount: 24.305, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 13,  Customername: 'Aluminum', Transferamount: 26.9815, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 14,  Customername: 'Silicon', Transferamount: 28.0855, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 15,  Customername: 'Phosphorus', Transferamount: 30.9738, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 16,  Customername: 'Sulfur', Transferamount: 32.065, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 17,  Customername: 'Chlorine', Transferamount: 35.453, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 18,  Customername: 'Argon', Transferamount: 39.948, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 19,  Customername: 'Potassium', Transferamount: 39.0983, TransferCurrency: 'MUR',Reference: 'CUSram'},
//   {position: 20,  Customername: 'Calcium', Transferamount: 40.078, TransferCurrency: 'MUR',Reference: 'CUSram'},
// ];
