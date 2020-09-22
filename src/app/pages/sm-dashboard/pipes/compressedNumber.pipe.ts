import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'compressedNumber'
})
export class CompressedNumberPipe implements PipeTransform {

    transform(value: number): string {
        let compressedNumber = value.toString();
        
        if (value >= 10000 && value < 1000000) {
            compressedNumber = Math.floor(value / (10 ** (value.toString().length - 2))).toString() + 'K';
        } else if (value >= 1000000){
            compressedNumber = Math.floor(value / (10 ** (value.toString().length - 2))).toString() + 'M';
        }

        return compressedNumber;
    }
}
