import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-slider',
  templateUrl: './film-slider.component.html',
  styleUrls: ['./film-slider.component.scss']
})
export class FilmSliderComponent implements OnInit {

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

  commentsList = [
    {
      imgUrl: 'assets/images/slider_01.png'
    },
    {
      imgUrl: 'assets/images/slider_01.png',
    },
    {
      imgUrl: 'assets/images/slider_01.png',
    }
  ];

  ngOnInit(): void {
  }

}
