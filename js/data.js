// SuperSonic - Content Database

const sonicData = {
    // Movies
    movies: [
        {
            id: "sonic1",
            title: "Sonic the Hedgehog",
            year: 2020,
            rating: 6.5,
            duration: "99 min",
            description: "After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.",
            poster: "https://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/tCUcf3oNWMW8kwAj3NI1xqpNsJj.jpg",
            genres: ["Action", "Adventure", "Comedy", "Family"],
            cast: ["Ben Schwartz", "James Marsden", "Jim Carrey"],
            embedUrl: "https://vidsrc.icu/embed/movie/tt3794354",
            embedUrl2: "https://vidsrc.to/embed/movie/tt3794354",
            embedUrl3: "https://multiembed.mov/?video_id=tt3794354&tmdb=1"
        },
        {
            id: "sonic2",
            title: "Sonic the Hedgehog 2",
            year: 2022,
            rating: 6.5,
            duration: "122 min",
            description: "When the manic Dr. Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails are all that stands in their way.",
            poster: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
            genres: ["Action", "Adventure", "Comedy", "Family"],
            cast: ["Ben Schwartz", "James Marsden", "Jim Carrey", "Idris Elba"],
            embedUrl: "https://vidsrc.icu/embed/movie/tt12412888",
            embedUrl2: "https://vidsrc.to/embed/movie/tt12412888",
            embedUrl3: "https://multiembed.mov/?video_id=tt12412888&tmdb=1"
        },
        {
            id: "sonic3",
            title: "Sonic the Hedgehog 3",
            year: 2024,
            rating: 7.8,
            duration: "110 min",
            description: "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before.",
            poster: "https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/b85bJfrHwV4Kb4eSXHdqNnWgNjL.jpg",
            genres: ["Action", "Adventure", "Comedy", "Family"],
            cast: ["Ben Schwartz", "Keanu Reeves", "Jim Carrey", "Idris Elba"],
            embedUrl: "https://vidsrc.icu/embed/movie/tt14357938",
            embedUrl2: "https://vidsrc.to/embed/movie/tt14357938",
            embedUrl3: "https://multiembed.mov/?video_id=tt14357938&tmdb=1",
            isNew: true
        },
        {
            id: "sonicova",
            title: "Sonic the Hedgehog: The Movie",
            year: 1996,
            rating: 6.8,
            duration: "60 min",
            description: "Sonic and Tails must stop Dr. Robotnik and his robot, Metal Sonic, from taking over the world.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjE4NzMzMDI1MF5BMl5BanBnXkFtZTgwMDk5NTM0MjE@._V1_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMjE4NzMzMDI1MF5BMl5BanBnXkFtZTgwMDk5NTM0MjE@._V1_.jpg",
            genres: ["Animation", "Action", "Adventure"],
            cast: ["Martin Burke", "Sascha Biesi"],
            embedUrl: "https://www.youtube.com/embed/TI7Cj20EUQ8"
        }
    ],

    // TV Series
    series: [
        {
            id: "sonicprime",
            title: "Sonic Prime",
            year: "2022-2024",
            rating: 7.3,
            seasons: 3,
            episodes: 24,
            description: "Sonic's adventure to save the multiverse and a strange new ally.",
            poster: "https://image.tmdb.org/t/p/w500/pjK0r99x7rF2blRwjKWwjZDsatl.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/fkNl4r3p5RxCZ6PqD0eeF5qgKNe.jpg",
            genres: ["Animation", "Action", "Adventure"],
            episodeList: [
                { season: 1, episode: 1, title: "Shattered", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/1", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/1", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=1" },
                { season: 1, episode: 2, title: "The Yoke's on You", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/2", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/2", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=2" },
                { season: 1, episode: 3, title: "Escape from New Yoke City", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/3", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/3", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=3" },
                { season: 1, episode: 4, title: "Avoid the Void", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/4", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/4", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=4" },
                { season: 1, episode: 5, title: "No Escape", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/5", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/5", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=5" },
                { season: 1, episode: 6, title: "Welcome to the Jungle", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/6", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/6", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=6" },
                { season: 1, episode: 7, title: "Second Wind", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/7", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/7", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=7" },
                { season: 1, episode: 8, title: "Friend or Foe", embedUrl: "https://vidsrc.icu/embed/tv/tt14174916/1/8", embedUrl2: "https://vidsrc.to/embed/tv/tt14174916/1/8", embedUrl3: "https://multiembed.mov/?video_id=tt14174916&tmdb=1&s=1&e=8" }
            ],
            isNew: true
        },
        {
            id: "sonicx",
            title: "Sonic X",
            year: "2003-2006",
            rating: 7.2,
            seasons: 3,
            episodes: 78,
            description: "Sonic and friends are transported to Earth and must collect the Chaos Emeralds to return home.",
            poster: "https://m.media-amazon.com/images/M/MV5BODQ2Y2IwMDgtYzYzNy00NjRiLThhYzEtNjI3NmM3NjYxNjI1XkEyXkFqcGc@._V1_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BODQ2Y2IwMDgtYzYzNy00NjRiLThhYzEtNjI3NmM3NjYxNjI1XkEyXkFqcGc@._V1_.jpg",
            genres: ["Animation", "Action", "Adventure"],
            episodeList: [
                { season: 1, episode: 1, title: "Chaos Control Freaks", embedUrl: "" },
                { season: 1, episode: 2, title: "Sonic to the Rescue", embedUrl: "" }
            ]
        },
        {
            id: "sonicboom",
            title: "Sonic Boom",
            year: "2014-2017",
            rating: 7.0,
            seasons: 2,
            episodes: 104,
            description: "Sonic and his friends protect their island home from the villainous Dr. Eggman.",
            poster: "https://m.media-amazon.com/images/M/MV5BZTFlMDI2ZmItNTQ0OC00ZjZhLTg0ODMtYjcxMDBkNGY5MTJhXkEyXkFqcGc@._V1_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BZTFlMDI2ZmItNTQ0OC00ZjZhLTg0ODMtYjcxMDBkNGY5MTJhXkEyXkFqcGc@._V1_.jpg",
            genres: ["Animation", "Action", "Comedy"],
            episodeList: []
        },
        {
            id: "sonicsat",
            title: "Sonic the Hedgehog (SatAM)",
            year: "1993-1994",
            rating: 8.1,
            seasons: 2,
            episodes: 26,
            description: "Sonic and the Freedom Fighters battle against the tyrannical Dr. Robotnik.",
            poster: "https://m.media-amazon.com/images/M/MV5BM2M0OGNiNzYtOTIxMC00NTMyLWFlN2ItMDlkMTQzMmI5MjFlXkEyXkFqcGc@._V1_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BM2M0OGNiNzYtOTIxMC00NTMyLWFlN2ItMDlkMTQzMmI5MjFlXkEyXkFqcGc@._V1_.jpg",
            genres: ["Animation", "Action", "Adventure"],
            episodeList: []
        },
        {
            id: "aosth",
            title: "Adventures of Sonic the Hedgehog",
            year: "1993",
            rating: 6.6,
            seasons: 1,
            episodes: 65,
            description: "Sonic and Tails have comical adventures while fighting Dr. Robotnik.",
            poster: "https://m.media-amazon.com/images/M/MV5BODRlMzUxYjQtMTI4OC00ZTg5LTgzZTgtODc5MjljZjlmNWY3XkEyXkFqcGc@._V1_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BODRlMzUxYjQtMTI4OC00ZTg5LTgzZTgtODc5MjljZjlmNWY3XkEyXkFqcGc@._V1_.jpg",
            genres: ["Animation", "Comedy", "Family"],
            episodeList: []
        },
        {
            id: "sonicunderground",
            title: "Sonic Underground",
            year: "1999",
            rating: 6.2,
            seasons: 1,
            episodes: 40,
            description: "Sonic and his siblings search for their mother while fighting Dr. Robotnik.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjE0NjAyMjY3N15BMl5BanBnXkFtZTgwNTA5NDA3NjE@._V1_.jpg",
            backdrop: "https://m.media-amazon.com/images/M/MV5BMjE0NjAyMjY3N15BMl5BanBnXkFtZTgwNTA5NDA3NjE@._V1_.jpg",
            genres: ["Animation", "Action", "Music"],
            episodeList: []
        }
    ],

    // Games
    games: [
        {
            id: "sonic1game",
            title: "Sonic the Hedgehog",
            year: 1991,
            platform: "Genesis/Mega Drive",
            rating: 9.0,
            description: "The classic that started it all! Run through Green Hill Zone and defeat Dr. Robotnik.",
            poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
            emulator: "genesis",
            romUrl: "https://archive.org/download/sonic-the-hedgehog-usa-europe/Sonic%20The%20Hedgehog%20%28USA%2C%20Europe%29.md",
            category: "classic"
        },
        {
            id: "sonic2game",
            title: "Sonic the Hedgehog 2",
            year: 1992,
            platform: "Genesis/Mega Drive",
            rating: 9.5,
            description: "Sonic and Tails team up to stop Dr. Robotnik's Death Egg.",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg",
            emulator: "genesis",
            romUrl: "https://archive.org/download/sonic-the-hedgehog-2-usa/Sonic%20The%20Hedgehog%202%20%28USA%29.md",
            category: "classic"
        },
        {
            id: "sonic3k",
            title: "Sonic 3 & Knuckles",
            year: 1994,
            platform: "Genesis/Mega Drive",
            rating: 9.7,
            description: "The ultimate classic Sonic experience with multiple playable characters.",
            poster: "https://upload.wikimedia.org/wikipedia/en/6/66/Sonic3-box-us-225.jpg",
            emulator: "genesis",
            romUrl: "https://archive.org/download/sonic-knuckles-sonic-3-usa/Sonic%20%26%20Knuckles%20%2B%20Sonic%20The%20Hedgehog%203%20%28USA%29.md",
            category: "classic"
        },
        {
            id: "soniccd",
            title: "Sonic CD",
            year: 1993,
            platform: "Sega CD",
            rating: 9.2,
            description: "Travel through time to save Amy Rose and defeat Metal Sonic.",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/55/Sonic_CD_cover.jpg",
            emulator: "segacd",
            romUrl: "https://archive.org/download/SegaCDUSA/Sonic%20CD%20%28USA%29.zip",
            category: "classic"
        },
        {
            id: "sonicadv",
            title: "Sonic Adventure",
            year: 1998,
            platform: "Dreamcast",
            rating: 8.5,
            description: "Sonic's first 3D adventure with multiple playable characters.",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Sonic_Adventure.PNG/220px-Sonic_Adventure.PNG",
            emulator: "dreamcast",
            romUrl: "https://archive.org/download/redump.dc.p2/Sonic%20Adventure%20%28USA%29.zip",
            category: "adventure"
        },
        {
            id: "sonicadv2",
            title: "Sonic Adventure 2",
            year: 2001,
            platform: "Dreamcast",
            rating: 8.8,
            description: "Hero vs Dark story featuring Shadow the Hedgehog's debut.",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Sonic_Adventure_2_cover.png",
            emulator: "dreamcast",
            romUrl: "https://archive.org/download/redump.dc.p2/Sonic%20Adventure%202%20%28USA%29.zip",
            category: "adventure"
        },
        {
            id: "sonicmania",
            title: "Sonic Mania",
            year: 2017,
            platform: "Multi-Platform",
            rating: 9.3,
            description: "A love letter to classic Sonic with new and remixed zones.",
            poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Sonic_Mania_%28artwork%29.jpg",
            emulator: "none",
            romUrl: "",
            category: "modern",
            externalLink: "https://store.steampowered.com/app/584400/Sonic_Mania/"
        },
        {
            id: "sonicfrontiers",
            title: "Sonic Frontiers",
            year: 2022,
            platform: "Multi-Platform",
            rating: 7.5,
            description: "Sonic's first open-zone adventure on the Starfall Islands.",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/00/Sonic_Frontiers_Key_Art.jpg",
            emulator: "none",
            romUrl: "",
            category: "modern",
            externalLink: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/"
        },
        {
            id: "superstars",
            title: "Sonic Superstars",
            year: 2023,
            platform: "Multi-Platform",
            rating: 7.8,
            description: "Classic 2D Sonic gameplay with new Emerald Powers.",
            poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg",
            emulator: "none",
            romUrl: "",
            category: "modern",
            externalLink: "https://store.steampowered.com/app/2259190/SONIC_SUPERSTARS/",
            isNew: true
        },
        {
            id: "sonicspinball",
            title: "Sonic Spinball",
            year: 1993,
            platform: "Genesis/Mega Drive",
            rating: 7.5,
            description: "Pinball action with Sonic as the ball! Navigate through four pinball tables.",
            poster: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sonic_Spinball_Box.jpeg",
            emulator: "genesis",
            romUrl: "https://archive.org/download/sonic-the-hedgehog-spinball-usa/Sonic%20The%20Hedgehog%20Spinball%20%28USA%29.md",
            category: "classic"
        },
        {
            id: "sonic3dblast",
            title: "Sonic 3D Blast",
            year: 1996,
            platform: "Genesis/Mega Drive",
            rating: 6.5,
            description: "Isometric platformer where Sonic must rescue Flickies.",
            poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Sonic_3D_Blast.jpg",
            emulator: "genesis",
            romUrl: "https://archive.org/download/sonic-3d-blast-usa/Sonic%203D%20Blast%20%28USA%29.md",
            category: "classic"
        }
    ],

    // Comics
    comics: [
        {
            id: "archie1",
            title: "Sonic the Hedgehog #1",
            year: 1993,
            publisher: "Archie Comics",
            description: "The beginning of the longest-running video game comic series.",
            cover: "https://static.wikia.nocookie.net/sonic/images/a/a7/Archie_Sonic_the_Hedgehog_Issue_1.jpg",
            pages: 32,
            readUrl: "",
            category: "archie"
        },
        {
            id: "idw1",
            title: "Sonic the Hedgehog #1",
            year: 2018,
            publisher: "IDW Publishing",
            description: "A new beginning for Sonic comics with IDW Publishing.",
            cover: "https://static.wikia.nocookie.net/sonic/images/7/7e/IDW_Sonic_1_A.jpg",
            pages: 24,
            readUrl: "",
            category: "idw"
        },
        {
            id: "idwlatest",
            title: "Sonic the Hedgehog #68",
            year: 2024,
            publisher: "IDW Publishing",
            description: "The latest issue of the ongoing IDW Sonic series.",
            cover: "https://static.wikia.nocookie.net/sonic/images/0/0a/IDW_Sonic_68_A.jpg",
            pages: 24,
            readUrl: "",
            category: "idw",
            isNew: true
        },
        {
            id: "sonicuniverse1",
            title: "Sonic Universe #1",
            year: 2009,
            publisher: "Archie Comics",
            description: "A spin-off series featuring various Sonic characters.",
            cover: "https://static.wikia.nocookie.net/sonic/images/4/46/SU_1.jpg",
            pages: 24,
            readUrl: "",
            category: "archie"
        }
    ],

    // Gallery - Wallpapers and Profile Pictures
    gallery: {
        wallpapers: [
            {
                id: "wall1",
                title: "Sonic Running",
                category: "sonic",
                thumbnail: "https://wallpapercave.com/wp/wp7467279.jpg",
                fullUrl: "https://wallpapercave.com/wp/wp7467279.jpg",
                resolution: "1920x1080"
            },
            {
                id: "wall2",
                title: "Shadow the Hedgehog",
                category: "shadow",
                thumbnail: "https://wallpapercave.com/wp/wp2706992.jpg",
                fullUrl: "https://wallpapercave.com/wp/wp2706992.jpg",
                resolution: "1920x1080"
            },
            {
                id: "wall3",
                title: "Sonic Team",
                category: "team",
                thumbnail: "https://wallpapercave.com/wp/wp2069391.jpg",
                fullUrl: "https://wallpapercave.com/wp/wp2069391.jpg",
                resolution: "1920x1080"
            },
            {
                id: "wall4",
                title: "Green Hill Zone",
                category: "zones",
                thumbnail: "https://wallpapercave.com/wp/wp7476391.jpg",
                fullUrl: "https://wallpapercave.com/wp/wp7476391.jpg",
                resolution: "1920x1080"
            },
            {
                id: "wall5",
                title: "Sonic Frontiers",
                category: "games",
                thumbnail: "https://wallpapercave.com/wp/wp11588219.jpg",
                fullUrl: "https://wallpapercave.com/wp/wp11588219.jpg",
                resolution: "3840x2160"
            },
            {
                id: "wall6",
                title: "Super Sonic",
                category: "sonic",
                thumbnail: "https://wallpapercave.com/wp/wp7467310.jpg",
                fullUrl: "https://wallpapercave.com/wp/wp7467310.jpg",
                resolution: "1920x1080"
            }
        ],
        profilePics: [
            {
                id: "pfp1",
                title: "Sonic",
                character: "sonic",
                url: "https://static.wikia.nocookie.net/sonic/images/b/b1/TSR_Sonic.png",
                size: "512x512"
            },
            {
                id: "pfp2",
                title: "Tails",
                character: "tails",
                url: "https://static.wikia.nocookie.net/sonic/images/4/49/TSR_Tails.png",
                size: "512x512"
            },
            {
                id: "pfp3",
                title: "Knuckles",
                character: "knuckles",
                url: "https://static.wikia.nocookie.net/sonic/images/d/d1/TSR_Knuckles.png",
                size: "512x512"
            },
            {
                id: "pfp4",
                title: "Shadow",
                character: "shadow",
                url: "https://static.wikia.nocookie.net/sonic/images/1/13/TSR_Shadow.png",
                size: "512x512"
            },
            {
                id: "pfp5",
                title: "Amy Rose",
                character: "amy",
                url: "https://static.wikia.nocookie.net/sonic/images/7/76/TSR_Amy.png",
                size: "512x512"
            },
            {
                id: "pfp6",
                title: "Dr. Eggman",
                character: "eggman",
                url: "https://static.wikia.nocookie.net/sonic/images/6/6c/TSR_Eggman.png",
                size: "512x512"
            }
        ]
    },

    // Fan Made Content
    fanmade: {
        games: [
            {
                id: "srb2",
                title: "Sonic Robo Blast 2",
                creator: "Sonic Team Junior",
                description: "A 3D Sonic fan game built on the Doom engine.",
                thumbnail: "https://www.srb2.org/wp-content/uploads/srb2-title-256-1.png",
                playUrl: "https://www.srb2.org/",
                category: "fangame"
            },
            {
                id: "sonicbts",
                title: "Sonic Before the Sequel",
                creator: "LakeFeperd",
                description: "A fan game set between Sonic 1 and 2.",
                thumbnail: "https://static.wikia.nocookie.net/sonic/images/6/6a/BTS_Title_Screen.png",
                playUrl: "",
                category: "fangame"
            },
            {
                id: "sonicats",
                title: "Sonic After the Sequel",
                creator: "LakeFeperd",
                description: "A fan game set between Sonic 2 and 3.",
                thumbnail: "https://static.wikia.nocookie.net/sonic/images/8/89/ATS_Title_Screen.png",
                playUrl: "",
                category: "fangame"
            }
        ],
        animations: [
            {
                id: "nazo",
                title: "Nazo Unleashed",
                creator: "Chakra-X",
                description: "An epic fan-made animated series about a mysterious villain.",
                thumbnail: "https://img.youtube.com/vi/9Ve2VWGBX8k/maxresdefault.jpg",
                watchUrl: "https://www.youtube.com/embed/9Ve2VWGBX8k",
                category: "animation"
            },
            {
                id: "smbz",
                title: "Super Mario Bros Z",
                creator: "Alvin-Earthworm",
                description: "An epic crossover between Sonic and Mario.",
                thumbnail: "https://img.youtube.com/vi/Qyg8kyFz_xE/maxresdefault.jpg",
                watchUrl: "https://www.youtube.com/embed/Qyg8kyFz_xE",
                category: "animation"
            }
        ],
        comics: [
            {
                id: "gotta-go-fast",
                title: "Gotta Go Fast",
                creator: "Various Artists",
                description: "A collection of fan-made Sonic comics.",
                thumbnail: "",
                readUrl: "",
                category: "fancomic"
            }
        ],
        music: [
            {
                id: "crushforty",
                title: "Sonic Fan Remixes",
                creator: "Various Artists",
                description: "Fan remixes of classic Sonic music.",
                thumbnail: "",
                listenUrl: "",
                category: "music"
            }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sonicData;
}
