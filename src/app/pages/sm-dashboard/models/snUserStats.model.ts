import { SnStats } from './snStats.model';

export interface SnUserStats {
    firstname: String,
    lastname: String,
    email: String,
    totalFollowers: Number,
    socialNetworkStatsList: SnStats []
}