import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { CreateTokenRequest } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  mainURL = environment.url;
  urlForToken = {
    createToken: this.mainURL + 'createtoken',
    tokenList: this.mainURL + 'listToken',
  };
  constructor(private http: HttpClient) { }

  createToken(data: CreateTokenRequest): Observable<any> {
      return this.http.post<any>(this.urlForToken.createToken, data);
  }

  listToken(data: CreateTokenRequest): Observable<any> {
    return this.http.post<any>(this.urlForToken.tokenList, data);
}
}
