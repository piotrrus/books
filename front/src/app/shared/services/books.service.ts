import { Injectable } from '@angular/core';
import { RestApiService } from './api-service.service';
import { Observable } from 'rxjs';
import { IDataService } from '../interfaces/idata-service.interface';

const path = 'books';

@Injectable({
  providedIn: 'root'
})

export class BooksService implements IDataService {

  constructor(private apiService: RestApiService) { }

  public getAll(): Observable<any> {
    return this.apiService.get('books');
  }

  public show(id: number): Observable<any> {
    return this.apiService.get('books/' + id);
  }

  public update(id: number): Observable<any> {
    return this.apiService.get('books/update/' + id);
  }

  public add(data): Observable<any> {
    return this.apiService.get('books/add/' + data);
  }

  public delete(id: number): Observable<any> {
    return this.apiService.get('books/delete/' + id);
  }

  public latest(): Observable<any> {
    return this.apiService.get('latest');
  }

  public popular(): Observable<any> {
    return this.apiService.get('popular');
  }

  public rates(): Observable<any> {
    return this.apiService.get('rated');
  }

}
