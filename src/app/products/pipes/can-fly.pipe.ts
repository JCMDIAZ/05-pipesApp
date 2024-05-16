import { Pipe, PipeTransform } from "@angular/core";

//Ejemplo
// true | canFly = 'Vuela'
// false | canFly = 'No vuela'

@Pipe({
    name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

    transform(canFly: boolean = false): 'Vuela'|'No vuela' {
        return (canFly) ? 'Vuela' : 'No vuela';
    }

}