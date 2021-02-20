import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {EventManager} from '@angular/platform-browser';
import {DeviceType} from '../models/device-type';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  deviceMode!: Observable<DeviceType>;
  private _deviceMode$!: BehaviorSubject<DeviceType>;
  private winWidth: BehaviorSubject<number>;

  constructor(private eventManager: EventManager) {
    this.winWidth = new BehaviorSubject<number>(window.innerWidth);
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    this.onResize();
  }

  private onResize(event?: UIEvent): void {
    this.winWidth.next(window.innerWidth);
    const currentWith = this.winWidth.getValue();
    let deviceType;
    if (currentWith < 575) {
      deviceType = 'xs' as DeviceType;
    } else if (currentWith > 575 && currentWith <= 767) {
      deviceType = 'sm' as DeviceType;
    } else if (currentWith > 767 && currentWith <= 991) {
      deviceType = 'md' as DeviceType;
    } else if (currentWith > 991 && currentWith < 1200) {
      deviceType = 'lg' as DeviceType;
    } else if (currentWith >= 1200) {
      deviceType = 'xl' as DeviceType;
    }
    if (this._deviceMode$) {

      this._deviceMode$.next(deviceType as DeviceType);
    } else {
      this._deviceMode$ = new BehaviorSubject<DeviceType>(deviceType as DeviceType);
      this.deviceMode = this._deviceMode$.asObservable();
    }
  }
}
