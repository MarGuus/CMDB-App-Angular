import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Ci } from './ci.model';
import { CiService } from './ci.service';

@Injectable({
  providedIn: 'root',
})
export class CiResolverService implements Resolve<Ci[]> {
  constructor(
    private dataService: DataStorageService,
    private ciService: CiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Ci[] | Observable<Ci[]> | Promise<Ci[]> {
    const cis = this.ciService.getCis();

    if ((cis.length = 0)) {
      return this.dataService.fetchCis();
    } else {
      return cis;
    }
  }
}
