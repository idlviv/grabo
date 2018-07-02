import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product-interface';
import { UserService } from './user.service';
import { config } from '../app.config';


@Injectable()
export class ProductService {
  config = config;

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  getSkuList(category) {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      }),
      params: new HttpParams({fromObject: {
        category
      }})
    };
    return this.http.get<IResponse>(
      'api/product/get-sku-list',
      httpOptions
    );
  }



  getProducts(category) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams().set('category', category)
    };
    return this.http.get<IResponse>(
      'api/product/get-products',
      httpOptions
    );
  }

  getMainPageProducts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/product/get-main-page-products',
      httpOptions
    );
  }

  productAddImage(file, sku): Observable<IResponse> {
    console.log('file', file);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('sku', sku);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/add-image',
      formData,
      httpOptions
    );
  }

  productCreate(product: IProduct): Observable<IResponse> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/create',
      product,
      httpOptions
    );
  }

  productEdit(product: IProduct): Observable<IResponse> {
    console.log('prodEdit', product);
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.put<IResponse>(
      'api/product/edit',
      product,
      httpOptions
    );
  }

  productDelete(_id: string): Observable<IResponse> {
    console.log('config', config.serverUrl);
    console.log('this.config', this.config.serverUrl);
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.delete<IResponse>(
      'api/product/delete/' + _id,
      httpOptions
    );
  }

  checkFile(file): IResponse {
    if (!file) {
      return ({success: false, message: 'Виберіть файл'});
    } else if (file.size > 10500000) {
      return ({success: false, message: 'Розмір файлу повинен бути менше 10Мб'});
    } else if (
      file.type !== 'image/jpg' &&
      file.type !== 'image/jpe' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/bmp' &&
      file.type !== 'image/png' &&
      file.type !== 'image/webp') {
      return ({success: false, message: 'Виберіть інший тип файлу'});
    } else {
      return ({success: true,  message: ''});
    }
  }

  // New

  getProductsByCategory(category) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams().set('category', category)
    };
    return this.http.get<IResponse>(
      'api/product/get-products-by-category',
      httpOptions
    );
  }

  getProductById(_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams().set('_id', _id)
    };
    return this.http.get<IResponse>(
      'api/product/get-product-by-id',
      httpOptions
    );
  }

}

