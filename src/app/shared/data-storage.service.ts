import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Ci } from '../ci-main/ci.model';
import { CiService } from '../ci-main/ci.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private ciService: CiService) {}

  storeCis() {
    const cis = this.ciService.getCis();

    this.http
      .put(
        'https://angular-test-29c8c-default-rtdb.europe-west1.firebasedatabase.app/cis.json',
        cis
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchCis() {
    return this.http
      .get<Ci[]>(
        'https://angular-test-29c8c-default-rtdb.europe-west1.firebasedatabase.app/cis.json'
      )
      .pipe(
        map((cis) => {
          return cis.map((ci) => {
            return { ...ci, parts: ci.parts ? ci.parts : [] };
          });
        }),
        tap((cis) => {
          this.ciService.setCis(cis);
        })
      );
  }
}
