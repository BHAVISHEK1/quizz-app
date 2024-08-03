import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-status',
  templateUrl: './market-status.component.html',
  styleUrls: ['./market-status.component.css']
})
export class MarketStatusComponent implements OnInit {

  data: any[] = [];
  filteredData: any[] = [];
  exchanges: string[] = [];
  segments: string[] = [];
  segmentCodes: string[] = [];
  marketTypes: string[] = [];
  marketStatuses: string[] = [];

  selectedExchange: string = '';
  selectedSegment: string = '';
  selectedSegmentCode: string = '';
  selectedMarketType: string = '';
  selectedMarketStatus: string = '';
  error: string = '';

  private apiUrl = 'https://dhan-rms-admin-api.dhanuat.co/get-mkt-status';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      tap((response) => {
        console.log('Data fetched:', response);
        this.data = response;
        this.filteredData = response;
        this.exchanges = [...new Set(response.map(item => item.exchange))];
        this.segments = [...new Set(response.map(item => item.segment))];
        this.segmentCodes = [...new Set(response.map(item => item.segmentcode))];
        this.marketTypes = [...new Set(response.map(item => item.mkttype))];
        this.marketStatuses = [...new Set(response.map(item => item.mktstatus))];
      }),
      catchError((error) => {
        this.error = 'Failed to load data. Please try again later.';
        return of([]);
      })
    ).subscribe({
      next: (response) => {
        this.data = response;
        this.filteredData = response;
        this.exchanges = [...new Set(response.map(item => item.exchange))];
        this.segments = [...new Set(response.map(item => item.segment))];
        this.segmentCodes = [...new Set(response.map(item => item.segmentcode))];
        this.marketTypes = [...new Set(response.map(item => item.mkttype))];
        this.marketStatuses = [...new Set(response.map(item => item.mktstatus))];
      },
      error: (err) => {
        this.error = 'Failed to load data. Please try again later.';
        console.error('Request error:', err);
      }
    });
  }

  filterData(): void {
    this.filteredData = this.data.filter(item => 
      (this.selectedExchange ? item.exchange === this.selectedExchange : true) &&
      (this.selectedSegment ? item.segment === this.selectedSegment : true) &&
      (this.selectedSegmentCode ? item.segmentcode === this.selectedSegmentCode : true) &&
      (this.selectedMarketType ? item.mkttype === this.selectedMarketType : true) &&
      (this.selectedMarketStatus ? item.mktstatus === this.selectedMarketStatus : true)
    );    
  }

  home() {
    this.router.navigate(['/']);
  }
}
