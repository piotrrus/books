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
    return this.apiService.get(path + '/show/' + id);
  }

  public update(id: number, data): Observable<any> {
    return this.apiService.post(path + '/update/' + id, data);
  }

  public add(data): Observable<any> {
    return this.apiService.post(path + '/create', data);
  }

  public delete(id: number): Observable<any> {
    return this.apiService.get('authors/delete/' + id);
  }

}
