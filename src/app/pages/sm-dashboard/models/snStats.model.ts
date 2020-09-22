import { SnOverview } from './snOverview.model';

export interface SnStats {
    snName: String,
    snUsername: String,
    totalFollowers: Number,
    todayFollowers: Number,
    overviewList: SnOverview[]
}