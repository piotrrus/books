import { Injectable } from '@angular/core';
import { RestApiService } from './api-service.service';
import { Observable } from 'rxjs';
import { IDataService } from '../interfaces/idata-service.interface';

const path = 'authors';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService implements IDataService {

  constructor(private apiService: RestApiService) { }

  public getAll(): Observable<any> {
    return this.apiService.get(path);
  }

  public show(id: number): Observable<any> {
    return this.apiService.get(path + '/' + id);
  }

  public update(id: number): Observable<any> {
    return this.apiService.get(path + '/update/' + id);
  }

  public add(data): Observable<any> {
    return this.apiService.get('authors/add/' + data);
  }

  public delete(id: number): Observable<any> {
    return this.apiService.get('authors/delete/' + id);
  }

}
