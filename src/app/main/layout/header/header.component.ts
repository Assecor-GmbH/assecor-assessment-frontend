import {Component} from '@angular/core';
import {ResizeService} from '../../../shared/services/resize.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {DeviceType} from '../../../shared/models/device-type';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  deviceType!: DeviceType;

  constructor(public resize: ResizeService) {
    this.resize.deviceMode
      .pipe(untilDestroyed(this))
      .subscribe(f => {
        this.deviceType = f;
      });
  }



}
