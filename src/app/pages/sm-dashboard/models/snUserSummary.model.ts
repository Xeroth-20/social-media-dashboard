export interface SnUserSummary {
    firstname: String,
    lastname: String,
    totalFollowers: Number,
    email: String,
    stats: SnUserStats
}

interface SnUserStats {
    facebook: {
        snUsername: String,
        todayFollowers: Number,
        totalFollowers: Number,
        overview: {
            pageViews: {
                today: Number,
                increase: Number,
            },
            pagelikes: {
                today: Number,
                increase: Number
            }
        }
    },
    twitter: {
        snUsername: String,
        todayFollowers: Number,
        totalFollowers: Number,
        overview: {
            likes: {
                today: Number,
                increase: Number,
            },
            retweets: {
                today: Number,
                increase: Number
            }
        }
    },
    instagram: {
        snUsername: String,
        todayFollowers: Number,
        totalFollowers: Number,
        overview: {
            likes: {
                today: Number,
                increase: Number
            },
            profileViews: {
                today: Number,
                increase: Number
            }
        }
    },
    youtube: {
        snUsername: String,
        todayFollowers: Number,
        totalFollowers: Number,
        overview: {
            likes: {
                today: Number,
                increase: Number
            },
            views: {
                today: Number,
                increase: Number
            }
        }
    }
}