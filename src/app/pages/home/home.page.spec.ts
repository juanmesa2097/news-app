import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageContentWrapperModule } from 'src/app/components/page-content-wrapper/page-content-wrapper.module';
import { PageHeaderWrapperModule } from 'src/app/components/page-header-wrapper/page-header-wrapper.module';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [PageHeaderWrapperModule, PageContentWrapperModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
