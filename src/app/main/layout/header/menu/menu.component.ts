import {Component} from '@angular/core';
import {MenuItemInterface} from '../model/menu-item.interface';
import {DeviceType} from '../../../../shared/models/device-type';
import {ResizeService} from '../../../../shared/services/resize.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItems: MenuItemInterface[] = [
    {
      title: 'Star Wars',
      link: '/home'
    },
    {
      title: 'Filme',
      link: '/films'
    },
    {
      title: 'Charaktere',
      link: '/people'
    },
    {
      title: 'Planeten',
      link: null
    },
  ];
  openClass = false;
  deviceType!: DeviceType;

  constructor(public resize: ResizeService) {
    this.resize.deviceMode
      .pipe(untilDestroyed(this))
      .subscribe(f => {
        if (f !== 'xs' && f !== 'sm') {
          this.openClass = false;
        }
        this.deviceType = f;
      });
  }

  menuHandler(): void {
    this.openClass = !this.openClass;
  }

  closeMenu(): void {
    this.openClass = false;
  }
}
