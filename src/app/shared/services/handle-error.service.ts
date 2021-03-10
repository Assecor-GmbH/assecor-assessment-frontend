import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {
  private Unauthorized!: boolean;
  private Forbidden!: boolean;

  constructor(private router: Router) {
  }

  handle(error: any): void {

    let errorCode;
    let errorType;
    let authError;


    if (error && error.status) {
      authError = error.status === 401 || error.status === 403;
      this.Unauthorized = error.status === 401;
      this.Forbidden = error.status === 403;
    } else {
      errorType = 'knownError';
      errorCode = error;
    }

    if (authError) {
      errorType = 'auth';
    } else {
      if (error.error) {
        if (error.error.ErrorCode) {
          errorType = 'knownError';
          errorCode = error.error.ErrorCode;
        } else if (error.error.title) {
          errorType = 'error';
          errorCode = null;
        } else {
          errorType = 'unknownError';
          errorCode = 0;
        }
      }
    }

    switch (errorType) {
      case 'knownError':
        // @ts-ignore
        console.log('UnknownError');
        break;
      case 'error':
        console.log(error);
        break;
      case 'auth':
        console.log('LoginAgain');
        break;
      case 'unknownError':
        console.log('UnknownError');
        break;
    }
  }

}
