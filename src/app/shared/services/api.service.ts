import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions: any = {
    headers: new HttpHeaders({'Content-Type': 'application/json' , 'Vary': 'Accept'}),
    observe: 'response'
  };

  private readonly serverURL: string;
  private readonly tokenService: string;

  constructor(private httpClient: HttpClient,
              private configService: ConfigService) {
    this.tokenService = '';
    this.serverURL = `${this.configService.baseUrl}/api/`;
  }

  get<T>(url: string, needAuth: boolean, queryParams?: any): Observable<T> {
    const queryParamsLocal = {...queryParams};

    if (queryParams) {
      for (const key in queryParamsLocal) {
        if (queryParamsLocal.hasOwnProperty(key)) {
          if (queryParamsLocal[key] === undefined || queryParamsLocal[key] === null) {
            delete queryParamsLocal[key];
          }
        }
      }
    }

    let options: any = {
      observe: this.httpOptions.observe,
      params: queryParamsLocal
    };

    if (needAuth) {
      options = {
        ...options,
        headers: this.httpOptions.headers.append('Authorization', 'Bearer ' + this.tokenService),
      };
    }

    return this.httpClient.get<T>(this.serverURL + url, options)
      .pipe(
        map((res: any) => {
          return res.body;
        })
      );
  }

  post<T>(url: string, payload: T, needAuth: boolean, file?: any): any {
    let options: any = {
      observe: this.httpOptions.observe
    };

    if (needAuth) {
      options = {
        ...options,
        headers: this.httpOptions.headers.append('Authorization', 'Bearer ' + this.tokenService),
      };
    }
    return this.httpClient.post<T>((this.serverURL) + url, payload, needAuth ? options : this.httpOptions)
      .pipe(
        map((res: any) => {
          return res.body;
        })
      );
  }

  put<T>(url: string, payload: T, needAuth: boolean): any {
    let options: any = {
      observe: this.httpOptions.observe
    };
    if (needAuth) {
      options = {
        ...options,
        headers: this.httpOptions.headers.append('Authorization', 'Bearer ' + this.tokenService)
      };
    }
    return this.httpClient.put<T>((this.serverURL) + url, payload, needAuth ? options : this.httpOptions)
      .pipe(
        map((res: any) => {
          return res.body;
        })
      );
  }

  patch<T>(url: string, payload: T, needAuth: boolean): Observable<any> {
    let options: any = {
      observe: this.httpOptions.observe
    };
    if (needAuth) {
      options = {
        ...options,
        headers: this.httpOptions.headers.append('Authorization', 'Bearer ' + this.tokenService)
      };
    }
    return this.httpClient.patch<T>((this.serverURL) + url, payload, needAuth ? options : this.httpOptions)
      .pipe(
        map((res: any) => {
          return res.body;
        })
      );
  }

  delete<T>(url: string, needAuth: boolean, payload?: T): any {
    let options: any = {
      observe: this.httpOptions.observe
    };
    if (payload) {
      options = {
        ...options,
        body: payload
      };
    }
    if (needAuth) {
      options = {
        ...options,
        headers: this.httpOptions.headers.append('Authorization', 'Bearer ' + this.tokenService)
      };
    }
    return this.httpClient.delete<T>((this.serverURL) + url, needAuth ? options : this.httpOptions)
      .pipe(
        map((res: any) => {
          return res.body;
        })
      );
  }

  putFile(url: string, file: any): any {
    return this.httpClient.put((this.serverURL) + url, file, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({Authorization: 'Bearer ' + this.tokenService})
    })
      .pipe(
        map((res: any) => {
          return res.body;
        })
      );

  }
}
