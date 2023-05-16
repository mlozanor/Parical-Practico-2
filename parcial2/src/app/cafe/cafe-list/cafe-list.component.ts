import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';
import { CafeDetail } from '../cafe-detail';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<CafeDetail> = [];
  selected: Boolean = false;
  selectedCafe!: CafeDetail;
  p: number = 1;
  searchedCafe: any;

  constructor(private cafeService: CafeService) { }

  getCafes() {
    this.cafeService.getCafes().subscribe((data: any) => {
      this.cafes = data;
    });
  }

  onSelected(cafe: CafeDetail): void {
      this.selected = true;
      this.selectedCafe = cafe;
  }

  ngOnInit(): void {
    this.getCafes();

  }

}
