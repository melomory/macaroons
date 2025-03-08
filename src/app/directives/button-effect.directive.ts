import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[buttonEffect]'
})
export class ButtonEffectDirective implements OnInit {
  @Input() buttonEffectDefaultBackground: string = 'linear-gradient(0, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() buttonEffectHoverBackground: string = 'linear-gradient(0, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';

  constructor() {
  }

  private _background: string = '';

  @HostBinding('style.background')
  get getBackground() {
    return this._background;
  }

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    this.changeElementBackground(this.buttonEffectHoverBackground);
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.changeElementBackground(this.buttonEffectDefaultBackground);
  }

  ngOnInit() {
    this.changeElementBackground(this.buttonEffectDefaultBackground);
  }

  changeElementBackground(background: string) {
    this._background = background;
  }
}
