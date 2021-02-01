import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParallaxHeaderDirective } from "./parallax-header.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [ParallaxHeaderDirective],
  exports: [ParallaxHeaderDirective],
})
export class SharedDirectivesModule {}
