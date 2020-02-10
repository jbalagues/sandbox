import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RellotgeComponent } from "./rellotge.component";

describe("RellotgeComponent", () => {
  let component: RellotgeComponent;
  let fixture: ComponentFixture<RellotgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RellotgeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RellotgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
