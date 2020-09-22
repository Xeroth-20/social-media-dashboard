import { Component, OnInit, Input } from '@angular/core';

/* Models */
import { SnOverview } from './../models/snOverview.model';

@Component({
    selector: 'jx-smd-overview-card',
    templateUrl: './smd-overview-card.component.html',
    styleUrls: ['./smd-overview-card.component.scss']
})
export class SmdOverviewCardComponent implements OnInit {

    @Input('snOverview')
    public overview: SnOverview;

    constructor() { }

    ngOnInit(): void {
    }
}
