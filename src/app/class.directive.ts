import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input() backgroundColor: string | undefined;

  constructor(private element: ElementRef) {
    //NUNCA FAÇA ISSO!!
    //Essa não é a maneira correta de acessar uma propriedade
    //Depois do elemento ter sido instanciado
    setTimeout(() => {
      this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    }, 50)
  }
}
