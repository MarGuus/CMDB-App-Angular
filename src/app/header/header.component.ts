import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataService: DataStorageService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.dataService.storeCis();
  }

  onFetchData() {
    this.dataService.fetchCis().subscribe();
  }
}
