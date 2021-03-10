import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  @Input() sliderItems!: [{ imgUrl: string }];

  constructor() {
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '',
    nextArrow: '',
    dots: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
        }
      },
    ]

  };

  // commentsList = [
  //   {
  //     imgUrl: 'assets/images/slider_01.png'
  //   },
  //   {
  //     imgUrl: 'assets/images/slider_01.png',
  //   },
  //   {
  //     imgUrl: 'assets/images/slider_01.png',
  //   }
  // ];

  ngOnInit(): void {
  }

}
