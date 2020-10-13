import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create product component', () => {
    expect(component).toBeTruthy();
  });
  it('should render all products', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#product').childElementCount).toEqual(10);
  });
  it('should render all products with names', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const products = compiled.querySelector('#product').children;
    expect(products[0].querySelector('.white-text').innerText).toEqual('CERAMIC TAPER HOLDER - WHITE');
    expect(products[9].querySelector('.white-text').innerText).toEqual('6&QUOT; FANCY TAPER CANDLES');
  });
  it('should render all products with hero images', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const component = fixture.componentInstance;
    const bImage0 = compiled.querySelectorAll('.view-img')[0].style.backgroundImage;
    const bImage9 = compiled.querySelectorAll('.view-img')[9].style.backgroundImage;
    const images = compiled.querySelectorAll('.view-img').length;
    expect(images).toEqual(10);
    expect(bImage0.includes(component.products[0].hero.href)).toEqual(true);
    expect(bImage9.includes(component.products[9].hero.href)).toEqual(true);
  });
  it('should render thumbnail view on click of hero image', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const img = fixture.debugElement.nativeElement.querySelector('.view');
    spyOn(component, 'showThumbnail');
    img.click();
    fixture.whenStable().then(() => {
      expect(component.showThumbnail).toHaveBeenCalled();
    });

  });
});
