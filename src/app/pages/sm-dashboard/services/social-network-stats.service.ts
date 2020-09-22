import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* Models */
import { SnUserSummary } from './../models/snUserSummary.model';
import { SnUserStats } from './../models/snUserStats.model';
import { SnStats } from './../models/snStats.model'

@Injectable()
export class SocialNetworkStatsService {

    private apiBaseUrl: string = 'http://localhost:8000/api/v1'

    constructor(
        private _http: HttpClient
    ) { }

    public getSocialNetworksStats(): Observable<SnUserStats> {
        return this._http.get<SnUserSummary>(`${this.apiBaseUrl}/user`)
            .pipe(
                map((snUserSummary: SnUserSummary) => {
                    return {
                        firstname: snUserSummary.firstname,
                        lastname: snUserSummary.lastname,
                        email: snUserSummary.email,
                        totalFollowers: snUserSummary.totalFollowers,
                        socialNetworkStatsList: Object.keys(snUserSummary.stats).map((snName) => {
                            return {
                                snName: snName,
                                snUsername: snUserSummary.stats[snName].snUsername,
                                totalFollowers: snUserSummary.stats[snName].totalFollowers,
                                todayFollowers: snUserSummary.stats[snName].todayFollowers,
                                overviewList: Object.keys(snUserSummary.stats[snName].overview).map(overviewName => {
                                    return {
                                        overviewName: overviewName,
                                        snName: snName,
                                        todayStats: snUserSummary.stats[snName].overview[overviewName].today,
                                        todayIncrease: snUserSummary.stats[snName].overview[overviewName].increase
                                    }
                                })
                            }
                        })
                    }
                })
            );
    }
}
