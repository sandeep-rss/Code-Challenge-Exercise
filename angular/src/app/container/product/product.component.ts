import { Component, OnInit } from '@angular/core';
import data from './data.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  showThumb = false;
  products = [];
  constructor() {}

  ngOnInit(): void {
    this.products = data.groups;
    this.products = this.products.map((item) => {
      return { ...item, showThump: false, step: 0 };
    });
  }

  showThumbnail(page): void {
    if (page.images.length > 0) {
      page.showThumb = true;
    }
  }

  closeThumbnail(evnt, page): void {
    page.showThumb = false;
    evnt.stopPropagation();
  }

  next(page, evnt): void {
    ++page.step;
    if (page.step === page.images.length) {
      page.step = 0;
    }
    evnt.stopPropagation();
  }

  prev(page, evnt): void {
    --page.step;
    if (page.step === -1) {
      page.step = page.images.length - 1;
    }
    evnt.stopPropagation();
  }

  getImage(page): void {
    const href = page.images[page.step].href;
    return href;
  }

  getPriceRegular(page): void {
    if (page.price) {
      return page.price.regular;
    }
    if (page.priceRange) {
      return page.priceRange.regular.high;
    }
  }

  getPriceSelling(page): void {
    if (page.price) {
      return page.price.selling;
    }
    if (page.priceRange) {
      return page.priceRange.selling.high;
    }
  }

  getReviews(page): void {
    return page.reviews.averageRating;
  }
}
