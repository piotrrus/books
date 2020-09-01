import { Injectable } from '@angular/core';
import { RestApiService } from './api-service.service';
import { Observable } from 'rxjs';
import { IDataService } from '../interfaces/idata-service.interface';

const path = 'publishers';

@Injectable({
  providedIn: 'root'
})

export class PublishersService implements IDataService {

  constructor(private apiService: RestApiService) { }

  public getAll(): Observable<any> {
    return this.apiService.get(path);
  }

  public show(id: number): Observable<any> {
    return this.apiService.get(path + '/' + id);
  }

  public update(id: number, data): Observable<any> {
    return this.apiService.post(path + '/update/' + id, data);
  }

  public add(data): Observable<any> {
    return this.apiService.post('authors/add/', data);
  }

  public delete(id: number): Observable<any> {
    return this.apiService.get('authors/delete/' + id);
  }

}
