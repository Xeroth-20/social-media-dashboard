import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'spacedPascalCase'
})
export class SpacedPascalCasPipe implements PipeTransform {

    transform(value: String): String {
        return value.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
    }
}
