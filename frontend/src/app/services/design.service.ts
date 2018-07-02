import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { IResponse } from '../interfaces/server-response-interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  getDesigns() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/product/get-designs',
      httpOptions
    );
  }

}
