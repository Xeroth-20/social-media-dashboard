import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'separateNumber'
})
export class SeparateNumberPipe implements PipeTransform {

    transform(value: number, between: number, separator: string): string {
        let str = value.toString();
        
        for (let i = str.length - between; i > 0; i-=between) {
            str = str.slice(0, i) + separator + str.slice(i);
        }
        
        return str;
    }
}
