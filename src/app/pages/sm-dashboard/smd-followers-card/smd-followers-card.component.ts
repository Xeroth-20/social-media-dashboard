import { Component, OnInit, Input } from '@angular/core';

/* Models */
import { SnStats } from './../models/snStats.model';

@Component({
    selector: 'jx-smd-followers-card',
    templateUrl: './smd-followers-card.component.html',
    styleUrls: ['./smd-followers-card.component.scss']
})
export class SmdFollowersCardComponent implements OnInit {

    @Input('snStats')
    public socialNetwork: SnStats;

    constructor() { }

    ngOnInit(): void {
    }
}
