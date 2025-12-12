// Sonic the Hedgehog Complete Media Database
// All content data for SuperSonic streaming site

const sonicData = {
    // ==================== MOVIES ====================
    movies: [
        {
            id: 1,
            title: "Sonic the Hedgehog",
            year: 2020,
            description: "A cop in the rural town of Green Hills will help Sonic escape from the government who is looking to capture him.",
            poster: "https://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/tCUcuLOr0TGNIbXREWThI8zphxF.jpg",
            tmdbId: 454626,
            embedUrl: "https://vidsrc.to/embed/movie/454626",
            embedUrl2: "https://www.2embed.cc/embed/454626",
            embedUrl3: "https://vidsrc.xyz/embed/movie/454626",
            rating: 7.3,
            duration: "99 min",
            genres: ["Action", "Science Fiction", "Comedy", "Family"],
            cast: ["Ben Schwartz", "James Marsden", "Jim Carrey", "Tika Sumpter"],
            isNew: false
        },
        {
            id: 2,
            title: "Sonic the Hedgehog 2",
            year: 2022,
            description: "When the manic Dr. Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails are all that stands in their way.",
            poster: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
            tmdbId: 675353,
            embedUrl: "https://vidsrc.to/embed/movie/675353",
            embedUrl2: "https://www.2embed.cc/embed/675353",
            embedUrl3: "https://vidsrc.xyz/embed/movie/675353",
            rating: 7.5,
            duration: "122 min",
            genres: ["Action", "Science Fiction", "Comedy", "Family"],
            cast: ["Ben Schwartz", "James Marsden", "Jim Carrey", "Idris Elba", "Colleen O'Shaughnessey"],
            isNew: false
        },
        {
            id: 3,
            title: "Sonic the Hedgehog 3",
            year: 2024,
            description: "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before.",
            poster: "https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/b85bJfrHwV4Kb4eSXHdqNnWgNjL.jpg",
            tmdbId: 939243,
            embedUrl: "https://vidsrc.to/embed/movie/939243",
            embedUrl2: "https://www.2embed.cc/embed/939243",
            embedUrl3: "https://vidsrc.xyz/embed/movie/939243",
            rating: 8.0,
            duration: "109 min",
            genres: ["Action", "Science Fiction", "Comedy", "Family"],
            cast: ["Ben Schwartz", "Keanu Reeves", "Jim Carrey", "Idris Elba", "Colleen O'Shaughnessey"],
            isNew: true
        },
        {
            id: 4,
            title: "Sonic the Hedgehog: The Movie (OVA)",
            year: 1996,
            description: "Sonic and Tails must stop Dr. Robotnik from destroying the Land of Darkness and creating Hyper Metal Sonic.",
            poster: "https://image.tmdb.org/t/p/w500/fqnypHsRrWLLxPeSDvLVlVGxRXy.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/fqnypHsRrWLLxPeSDvLVlVGxRXy.jpg",
            tmdbId: 21157,
            embedUrl: "https://vidsrc.to/embed/movie/21157",
            embedUrl2: "https://www.2embed.cc/embed/21157",
            embedUrl3: "https://vidsrc.xyz/embed/movie/21157",
            rating: 6.5,
            duration: "60 min",
            genres: ["Animation", "Action", "Adventure", "Family"],
            cast: ["Masami Kikuchi", "Hekiru Shiina", "Junpei Takiguchi"],
            isNew: false
        }
    ],

    // ==================== TV SERIES ====================
    series: [
        {
            id: 1,
            title: "Sonic Prime",
            year: 2022,
            description: "When an explosive battle with Dr. Eggman shatters the universe, Sonic races through parallel dimensions to reconnect with his friends.",
            poster: "https://image.tmdb.org/t/p/w500/q5UaqVaENnHmJoSzBWCX5efA7zM.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/dAPmTvVHAg1SbAzrjEMQhvKr3e6.jpg",
            tmdbId: 125910,
            seasons: 3,
            rating: 7.8,
            genres: ["Animation", "Action", "Adventure", "Comedy"],
            episodeList: [
                { season: 1, episode: 1, title: "Shattered", embedUrl: "https://vidsrc.to/embed/tv/125910/1/1" },
                { season: 1, episode: 2, title: "The Yoke's on You", embedUrl: "https://vidsrc.to/embed/tv/125910/1/2" },
                { season: 1, episode: 3, title: "Escape from New Yoke City", embedUrl: "https://vidsrc.to/embed/tv/125910/1/3" },
                { season: 1, episode: 4, title: "Avoid the Void", embedUrl: "https://vidsrc.to/embed/tv/125910/1/4" },
                { season: 1, episode: 5, title: "The Grim", embedUrl: "https://vidsrc.to/embed/tv/125910/1/5" },
                { season: 1, episode: 6, title: "Barking Orders", embedUrl: "https://vidsrc.to/embed/tv/125910/1/6" },
                { season: 1, episode: 7, title: "Trouble Deep", embedUrl: "https://vidsrc.to/embed/tv/125910/1/7" },
                { season: 1, episode: 8, title: "Second Wind", embedUrl: "https://vidsrc.to/embed/tv/125910/1/8" },
                { season: 2, episode: 1, title: "Dome Sweet Dome", embedUrl: "https://vidsrc.to/embed/tv/125910/2/1" },
                { season: 2, episode: 2, title: "Knuckles to Knuckles", embedUrl: "https://vidsrc.to/embed/tv/125910/2/2" },
                { season: 2, episode: 3, title: "Opposites Attract", embedUrl: "https://vidsrc.to/embed/tv/125910/2/3" },
                { season: 2, episode: 4, title: "Uprising", embedUrl: "https://vidsrc.to/embed/tv/125910/2/4" },
                { season: 2, episode: 5, title: "Nine's Lives", embedUrl: "https://vidsrc.to/embed/tv/125910/2/5" },
                { season: 2, episode: 6, title: "When You Go, I Go", embedUrl: "https://vidsrc.to/embed/tv/125910/2/6" },
                { season: 2, episode: 7, title: "Grim Tidings", embedUrl: "https://vidsrc.to/embed/tv/125910/2/7" },
                { season: 2, episode: 8, title: "Ghost of the Prism", embedUrl: "https://vidsrc.to/embed/tv/125910/2/8" }
            ],
            isNew: true
        },
        {
            id: 2,
            title: "Sonic X",
            year: 2003,
            description: "Sonic and friends are transported to Earth where they befriend Chris Thorndyke and battle Dr. Eggman.",
            poster: "https://image.tmdb.org/t/p/w500/jBCPyLvZ5xaK3xGiZlN1P1H4a5Y.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/jBCPyLvZ5xaK3xGiZlN1P1H4a5Y.jpg",
            tmdbId: 3819,
            seasons: 3,
            rating: 7.2,
            genres: ["Animation", "Action", "Adventure", "Comedy"],
            episodeList: [
                { season: 1, episode: 1, title: "Chaos Control Freaks", embedUrl: "https://vidsrc.to/embed/tv/3819/1/1" },
                { season: 1, episode: 2, title: "Sonic to the Rescue", embedUrl: "https://vidsrc.to/embed/tv/3819/1/2" },
                { season: 1, episode: 3, title: "Missile Wrist Rampage", embedUrl: "https://vidsrc.to/embed/tv/3819/1/3" },
                { season: 1, episode: 4, title: "Chaos Emerald Chaos", embedUrl: "https://vidsrc.to/embed/tv/3819/1/4" },
                { season: 1, episode: 5, title: "Cracking Knuckles", embedUrl: "https://vidsrc.to/embed/tv/3819/1/5" },
                { season: 1, episode: 6, title: "Techno-Teacher", embedUrl: "https://vidsrc.to/embed/tv/3819/1/6" },
                { season: 1, episode: 7, title: "Party Hardly", embedUrl: "https://vidsrc.to/embed/tv/3819/1/7" },
                { season: 1, episode: 8, title: "Satellite Swindle", embedUrl: "https://vidsrc.to/embed/tv/3819/1/8" },
                { season: 1, episode: 9, title: "The Last Resort", embedUrl: "https://vidsrc.to/embed/tv/3819/1/9" },
                { season: 1, episode: 10, title: "Unfair Ball", embedUrl: "https://vidsrc.to/embed/tv/3819/1/10" },
                { season: 2, episode: 1, title: "Pure Chaos", embedUrl: "https://vidsrc.to/embed/tv/3819/2/1" },
                { season: 2, episode: 2, title: "A Chaotic Day", embedUrl: "https://vidsrc.to/embed/tv/3819/2/2" },
                { season: 2, episode: 3, title: "A Robot Rebels", embedUrl: "https://vidsrc.to/embed/tv/3819/2/3" },
                { season: 2, episode: 4, title: "Head's Up, Tails!", embedUrl: "https://vidsrc.to/embed/tv/3819/2/4" },
                { season: 2, episode: 5, title: "Revenge of the Robot", embedUrl: "https://vidsrc.to/embed/tv/3819/2/5" }
            ],
            isNew: false
        },
        {
            id: 3,
            title: "Sonic Boom",
            year: 2014,
            description: "Sonic and his friends hang out on Bygone Island and battle Dr. Eggman whenever he attacks with new robots.",
            poster: "https://image.tmdb.org/t/p/w500/wBIk7xPQ8rLf5AvQyPWRz5TKhcL.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/wBIk7xPQ8rLf5AvQyPWRz5TKhcL.jpg",
            tmdbId: 61865,
            seasons: 2,
            rating: 6.8,
            genres: ["Animation", "Action", "Comedy", "Family"],
            episodeList: [
                { season: 1, episode: 1, title: "The Sidekick", embedUrl: "https://vidsrc.to/embed/tv/61865/1/1" },
                { season: 1, episode: 2, title: "Can an Evil Genius Crash on Your Couch?", embedUrl: "https://vidsrc.to/embed/tv/61865/1/2" },
                { season: 1, episode: 3, title: "Translate This", embedUrl: "https://vidsrc.to/embed/tv/61865/1/3" },
                { season: 1, episode: 4, title: "Buster", embedUrl: "https://vidsrc.to/embed/tv/61865/1/4" },
                { season: 1, episode: 5, title: "My Fair Sticksy", embedUrl: "https://vidsrc.to/embed/tv/61865/1/5" },
                { season: 1, episode: 6, title: "Fortress of Squalitude", embedUrl: "https://vidsrc.to/embed/tv/61865/1/6" },
                { season: 1, episode: 7, title: "Double Doomsday", embedUrl: "https://vidsrc.to/embed/tv/61865/1/7" },
                { season: 1, episode: 8, title: "Eggheads", embedUrl: "https://vidsrc.to/embed/tv/61865/1/8" },
                { season: 2, episode: 1, title: "Tommy Thunder", embedUrl: "https://vidsrc.to/embed/tv/61865/2/1" },
                { season: 2, episode: 2, title: "Spacemageddonocalypse", embedUrl: "https://vidsrc.to/embed/tv/61865/2/2" }
            ],
            isNew: false
        },
        {
            id: 4,
            title: "Sonic the Hedgehog (SatAM)",
            year: 1993,
            description: "Sonic leads a band of freedom fighters against the tyrant Dr. Robotnik who has taken over Planet Mobius.",
            poster: "https://image.tmdb.org/t/p/w500/vMNsRXyVw8WLXt9W1y1YhW3ZHGP.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/vMNsRXyVw8WLXt9W1y1YhW3ZHGP.jpg",
            tmdbId: 4305,
            seasons: 2,
            rating: 8.0,
            genres: ["Animation", "Action", "Adventure", "Science Fiction"],
            episodeList: [
                { season: 1, episode: 1, title: "Heads or Tails", embedUrl: "https://vidsrc.to/embed/tv/4305/1/1" },
                { season: 1, episode: 2, title: "Sonic Boom", embedUrl: "https://vidsrc.to/embed/tv/4305/1/2" },
                { season: 1, episode: 3, title: "Ultra Sonic", embedUrl: "https://vidsrc.to/embed/tv/4305/1/3" },
                { season: 1, episode: 4, title: "Sonic and Sally", embedUrl: "https://vidsrc.to/embed/tv/4305/1/4" },
                { season: 1, episode: 5, title: "Sonic Racer", embedUrl: "https://vidsrc.to/embed/tv/4305/1/5" },
                { season: 1, episode: 6, title: "Hooked on Sonics", embedUrl: "https://vidsrc.to/embed/tv/4305/1/6" },
                { season: 2, episode: 1, title: "Game Guy", embedUrl: "https://vidsrc.to/embed/tv/4305/2/1" },
                { season: 2, episode: 2, title: "Sonic Conversion", embedUrl: "https://vidsrc.to/embed/tv/4305/2/2" },
                { season: 2, episode: 3, title: "No Brainer", embedUrl: "https://vidsrc.to/embed/tv/4305/2/3" },
                { season: 2, episode: 4, title: "Blast to the Past Part 1", embedUrl: "https://vidsrc.to/embed/tv/4305/2/4" },
                { season: 2, episode: 5, title: "Blast to the Past Part 2", embedUrl: "https://vidsrc.to/embed/tv/4305/2/5" }
            ],
            isNew: false
        },
        {
            id: 5,
            title: "Adventures of Sonic the Hedgehog",
            year: 1993,
            description: "The comedic adventures of Sonic and Tails as they foil Dr. Robotnik's schemes.",
            poster: "https://image.tmdb.org/t/p/w500/kP4qCWN5trGgJwA2ZKgT0MmKvhI.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/kP4qCWN5trGgJwA2ZKgT0MmKvhI.jpg",
            tmdbId: 4304,
            seasons: 1,
            rating: 6.5,
            genres: ["Animation", "Action", "Comedy", "Family"],
            episodeList: [
                { season: 1, episode: 1, title: "Super Special Sonic Search & Smash Squad", embedUrl: "https://vidsrc.to/embed/tv/4304/1/1" },
                { season: 1, episode: 2, title: "Subterranean Sonic", embedUrl: "https://vidsrc.to/embed/tv/4304/1/2" },
                { season: 1, episode: 3, title: "Lovesick Sonic", embedUrl: "https://vidsrc.to/embed/tv/4304/1/3" },
                { season: 1, episode: 4, title: "Slowwww Going", embedUrl: "https://vidsrc.to/embed/tv/4304/1/4" },
                { season: 1, episode: 5, title: "High Stakes Sonic", embedUrl: "https://vidsrc.to/embed/tv/4304/1/5" },
                { season: 1, episode: 6, title: "Sonic Breakout", embedUrl: "https://vidsrc.to/embed/tv/4304/1/6" },
                { season: 1, episode: 7, title: "Trail of the Missing Tails", embedUrl: "https://vidsrc.to/embed/tv/4304/1/7" },
                { season: 1, episode: 8, title: "Close Encounter of the Sonic Kind", embedUrl: "https://vidsrc.to/embed/tv/4304/1/8" }
            ],
            isNew: false
        },
        {
            id: 6,
            title: "Sonic Underground",
            year: 1999,
            description: "Sonic and his siblings Sonia and Manic search for their mother Queen Aleena while battling Robotnik.",
            poster: "https://image.tmdb.org/t/p/w500/80fAg61ihqJGl7dZ2amLlP2fxkE.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/80fAg61ihqJGl7dZ2amLlP2fxkE.jpg",
            tmdbId: 4306,
            seasons: 1,
            rating: 6.0,
            genres: ["Animation", "Action", "Adventure", "Music"],
            episodeList: [
                { season: 1, episode: 1, title: "Beginnings", embedUrl: "https://vidsrc.to/embed/tv/4306/1/1" },
                { season: 1, episode: 2, title: "Getting to Know You", embedUrl: "https://vidsrc.to/embed/tv/4306/1/2" },
                { season: 1, episode: 3, title: "Harmony or Something", embedUrl: "https://vidsrc.to/embed/tv/4306/1/3" },
                { season: 1, episode: 4, title: "Wedding Bell Blues", embedUrl: "https://vidsrc.to/embed/tv/4306/1/4" },
                { season: 1, episode: 5, title: "To Catch a Queen", embedUrl: "https://vidsrc.to/embed/tv/4306/1/5" },
                { season: 1, episode: 6, title: "Mobodoon", embedUrl: "https://vidsrc.to/embed/tv/4306/1/6" },
                { season: 1, episode: 7, title: "The Price of Freedom", embedUrl: "https://vidsrc.to/embed/tv/4306/1/7" },
                { season: 1, episode: 8, title: "Underground Masquerade", embedUrl: "https://vidsrc.to/embed/tv/4306/1/8" }
            ],
            isNew: false
        }
    ],

    // ==================== GAMES ====================
    games: [
        {
            id: 1,
            title: "Sonic the Hedgehog",
            year: 1991,
            platform: "Genesis",
            description: "The original game that started it all. Help Sonic rescue the animals from Dr. Robotnik!",
            poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
            romUrl: "https://archive.org/download/sega-genesis-romset/Sonic%20The%20Hedgehog%20%28USA%2C%20Europe%29.zip",
            emulator: "genesis",
            category: "classic",
            rating: 9.0,
            isNew: false
        },
        {
            id: 2,
            title: "Sonic the Hedgehog 2",
            year: 1992,
            platform: "Genesis",
            description: "Sonic teams up with Tails to stop Dr. Robotnik's Death Egg!",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg",
            romUrl: "https://archive.org/download/sega-genesis-romset/Sonic%20The%20Hedgehog%202%20%28World%29.zip",
            emulator: "genesis",
            category: "classic",
            rating: 9.5,
            isNew: false
        },
        {
            id: 3,
            title: "Sonic the Hedgehog 3",
            year: 1994,
            platform: "Genesis",
            description: "Sonic and Tails land on Angel Island and meet Knuckles the Echidna.",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/5b/Sonic3-box-us-225.jpg",
            romUrl: "https://archive.org/download/sega-genesis-romset/Sonic%20The%20Hedgehog%203%20%28USA%29.zip",
            emulator: "genesis",
            category: "classic",
            rating: 9.5,
            isNew: false
        },
        {
            id: 4,
            title: "Sonic & Knuckles",
            year: 1994,
            platform: "Genesis",
            description: "Play as Sonic or Knuckles in this unique lock-on cartridge game!",
            poster: "https://upload.wikimedia.org/wikipedia/en/7/71/Sonic_and_Knuckles_cover.jpg",
            romUrl: "https://archive.org/download/sega-genesis-romset/Sonic%20%26%20Knuckles%20%28World%29.zip",
            emulator: "genesis",
            category: "classic",
            rating: 9.0,
            isNew: false
        },
        {
            id: 5,
            title: "Sonic 3D Blast",
            year: 1996,
            platform: "Genesis",
            description: "Sonic's first isometric adventure - rescue the Flickies from Robotnik!",
            poster: "https://upload.wikimedia.org/wikipedia/en/2/26/Sonic3DBlastSaturnBox.jpg",
            romUrl: "https://archive.org/download/sega-genesis-romset/Sonic%203D%20Blast%20%28USA%29.zip",
            emulator: "genesis",
            category: "classic",
            rating: 7.0,
            isNew: false
        },
        {
            id: 6,
            title: "Sonic Spinball",
            year: 1993,
            platform: "Genesis",
            description: "A unique pinball adventure starring Sonic the Hedgehog!",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/95/Sonic_Spinball_Box.jpeg",
            romUrl: "https://archive.org/download/sega-genesis-romset/Sonic%20Spinball%20%28USA%29.zip",
            emulator: "genesis",
            category: "classic",
            rating: 7.5,
            isNew: false
        },
        {
            id: 7,
            title: "Dr. Robotnik's Mean Bean Machine",
            year: 1993,
            platform: "Genesis",
            description: "A puzzle game where you must stop Dr. Robotnik from turning beans into robots!",
            poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/Mean_Bean_Machine_cover_art.jpg",
            romUrl: "https://archive.org/download/sega-genesis-romset/Dr.%20Robotnik%27s%20Mean%20Bean%20Machine%20%28USA%29.zip",
            emulator: "genesis",
            category: "classic",
            rating: 8.0,
            isNew: false
        },
        {
            id: 8,
            title: "Sonic CD",
            year: 1993,
            platform: "Sega CD",
            description: "Travel through time to save Little Planet from Dr. Robotnik and Metal Sonic!",
            poster: "https://upload.wikimedia.org/wikipedia/en/8/8f/Sonic_CD_cover.jpg",
            romUrl: "https://archive.org/download/SegaCDUSA/Sonic%20CD%20%28USA%29.zip",
            emulator: "segacd",
            category: "classic",
            rating: 9.5,
            isNew: false
        },
        {
            id: 9,
            title: "Sonic Adventure",
            year: 1998,
            platform: "Dreamcast",
            description: "Sonic's first 3D adventure - stop Chaos and Dr. Eggman from destroying Station Square!",
            poster: "https://upload.wikimedia.org/wikipedia/en/6/60/Sonic_Adventure.PNG",
            romUrl: "https://archive.org/download/chd_dc/chd_dc/Sonic%20Adventure%20%28USA%29.chd",
            emulator: "dreamcast",
            category: "adventure",
            rating: 8.5,
            isNew: false
        },
        {
            id: 10,
            title: "Sonic Adventure 2",
            year: 2001,
            platform: "Dreamcast",
            description: "Play as heroes or villains in this epic adventure featuring Shadow the Hedgehog!",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/9f/Sonic_Adventure_2_cover.png",
            romUrl: "https://archive.org/download/chd_dc/chd_dc/Sonic%20Adventure%202%20%28USA%29.chd",
            emulator: "dreamcast",
            category: "adventure",
            rating: 9.0,
            isNew: false
        },
        {
            id: 11,
            title: "Sonic Shuffle",
            year: 2000,
            platform: "Dreamcast",
            description: "A party game featuring Sonic and friends in the world of Maginaryworld!",
            poster: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_Shuffle_Coverart.png",
            romUrl: "https://archive.org/download/chd_dc/chd_dc/Sonic%20Shuffle%20%28USA%29.chd",
            emulator: "dreamcast",
            category: "adventure",
            rating: 6.5,
            isNew: false
        }
    ],

    // ==================== COMICS ====================
    comics: [
        {
            id: 1,
            title: "Sonic the Hedgehog #1 (IDW)",
            year: 2018,
            publisher: "IDW Publishing",
            description: "The beginning of Sonic's IDW comic series - Sonic fights Badniks across the world!",
            cover: "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/6504339-01.jpg",
            readUrl: "https://readcomiconline.li/Comic/Sonic-the-Hedgehog-2018/Issue-1?id=137995"
        },
        {
            id: 2,
            title: "Sonic the Hedgehog #1 (Archie)",
            year: 1993,
            publisher: "Archie Comics",
            description: "The classic Archie Sonic series that ran for over 290 issues!",
            cover: "https://comicvine.gamespot.com/a/uploads/scale_medium/0/9241/797553-01.jpg",
            readUrl: "https://readcomiconline.li/Comic/Sonic-the-Hedgehog/Issue-1?id=27609"
        },
        {
            id: 3,
            title: "Sonic Universe #1",
            year: 2009,
            publisher: "Archie Comics",
            description: "A spin-off series focusing on characters beyond Sonic, starting with Shadow!",
            cover: "https://comicvine.gamespot.com/a/uploads/scale_medium/0/9241/1142009-01.jpg",
            readUrl: "https://readcomiconline.li/Comic/Sonic-Universe/Issue-1?id=27743"
        },
        {
            id: 4,
            title: "Sonic Boom #1",
            year: 2014,
            publisher: "Archie Comics",
            description: "Comics based on the Sonic Boom animated series!",
            cover: "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/4419587-01.jpg",
            readUrl: "https://readcomiconline.li/Comic/Sonic-Boom/Issue-1?id=64167"
        },
        {
            id: 5,
            title: "Sonic the Hedgehog: Bad Guys #1",
            year: 2020,
            publisher: "IDW Publishing",
            description: "Dr. Starline assembles a team of villains in this mini-series!",
            cover: "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/7638088-01.jpg",
            readUrl: "https://readcomiconline.li/Comic/Sonic-the-Hedgehog-Bad-Guys/Issue-1?id=181027"
        },
        {
            id: 6,
            title: "Sonic the Hedgehog: Imposter Syndrome #1",
            year: 2021,
            publisher: "IDW Publishing",
            description: "Surge and Kit's origin story - created by Dr. Starline to destroy Sonic!",
            cover: "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/8105891-01.jpg",
            readUrl: "https://readcomiconline.li/Comic/Sonic-the-Hedgehog-Imposter-Syndrome/Issue-1?id=191755"
        }
    ],

    // ==================== GALLERY ====================
    gallery: {
        wallpapers: [
            {
                id: 1,
                title: "Sonic Forces Key Art",
                thumbnail: "https://images.alphacoders.com/873/873451.jpg",
                fullImage: "https://images.alphacoders.com/873/873451.jpg",
                resolution: "3840x2160"
            },
            {
                id: 2,
                title: "Sonic Frontiers Open Zone",
                thumbnail: "https://images.alphacoders.com/127/1271231.jpg",
                fullImage: "https://images.alphacoders.com/127/1271231.jpg",
                resolution: "3840x2160"
            },
            {
                id: 3,
                title: "Sonic Adventure 2 Battle",
                thumbnail: "https://images.alphacoders.com/714/714458.png",
                fullImage: "https://images.alphacoders.com/714/714458.png",
                resolution: "1920x1080"
            },
            {
                id: 4,
                title: "Classic Sonic Green Hill Zone",
                thumbnail: "https://images.alphacoders.com/117/1177893.png",
                fullImage: "https://images.alphacoders.com/117/1177893.png",
                resolution: "3840x2160"
            },
            {
                id: 5,
                title: "Sonic Mania Plus",
                thumbnail: "https://images.alphacoders.com/917/917989.png",
                fullImage: "https://images.alphacoders.com/917/917989.png",
                resolution: "1920x1080"
            },
            {
                id: 6,
                title: "Shadow the Hedgehog",
                thumbnail: "https://images.alphacoders.com/635/635632.jpg",
                fullImage: "https://images.alphacoders.com/635/635632.jpg",
                resolution: "1920x1200"
            },
            {
                id: 7,
                title: "Sonic Heroes Team",
                thumbnail: "https://images.alphacoders.com/635/635633.jpg",
                fullImage: "https://images.alphacoders.com/635/635633.jpg",
                resolution: "1920x1200"
            },
            {
                id: 8,
                title: "Sonic Movie Poster",
                thumbnail: "https://images.alphacoders.com/109/1099182.jpg",
                fullImage: "https://images.alphacoders.com/109/1099182.jpg",
                resolution: "2764x4096"
            },
            {
                id: 9,
                title: "Sonic Prime Netflix",
                thumbnail: "https://images.alphacoders.com/131/1313598.jpg",
                fullImage: "https://images.alphacoders.com/131/1313598.jpg",
                resolution: "2000x3000"
            },
            {
                id: 10,
                title: "Metal Sonic",
                thumbnail: "https://images.alphacoders.com/714/714461.png",
                fullImage: "https://images.alphacoders.com/714/714461.png",
                resolution: "1920x1080"
            }
        ],
        profilePics: [
            {
                id: 1,
                title: "Sonic",
                image: "https://i.imgur.com/PF6t2RJ.png",
                character: "Sonic the Hedgehog"
            },
            {
                id: 2,
                title: "Tails",
                image: "https://i.imgur.com/8W0s8Bx.png",
                character: "Miles 'Tails' Prower"
            },
            {
                id: 3,
                title: "Knuckles",
                image: "https://i.imgur.com/DFVWzNv.png",
                character: "Knuckles the Echidna"
            },
            {
                id: 4,
                title: "Shadow",
                image: "https://i.imgur.com/qvxNOuD.png",
                character: "Shadow the Hedgehog"
            },
            {
                id: 5,
                title: "Amy Rose",
                image: "https://i.imgur.com/aVxvBQa.png",
                character: "Amy Rose"
            },
            {
                id: 6,
                title: "Silver",
                image: "https://i.imgur.com/WLvYxMq.png",
                character: "Silver the Hedgehog"
            },
            {
                id: 7,
                title: "Blaze",
                image: "https://i.imgur.com/QXxBYYV.png",
                character: "Blaze the Cat"
            },
            {
                id: 8,
                title: "Rouge",
                image: "https://i.imgur.com/KFNb9qZ.png",
                character: "Rouge the Bat"
            },
            {
                id: 9,
                title: "Dr. Eggman",
                image: "https://i.imgur.com/R0XGEJZ.png",
                character: "Dr. Eggman"
            },
            {
                id: 10,
                title: "Metal Sonic",
                image: "https://i.imgur.com/8UBKQWL.png",
                character: "Metal Sonic"
            }
        ]
    },

    // ==================== FANMADE CONTENT ====================
    fanmade: {
        games: [
            {
                id: 1,
                title: "Sonic.exe",
                creator: "MY5TCrimson",
                description: "A creepypasta-inspired horror fan game featuring a demonic version of Sonic.",
                thumbnail: "https://img.gamejolt.com/e6e1e34d7a7a7d9a9f9f9f9f9f9f9f9f/sonic-exe-the-game-dvq4rwmt/soneexema-p4xhtpmn.png",
                playUrl: "https://gamejolt.com/games/sonicexe/30631",
                type: "Horror"
            },
            {
                id: 2,
                title: "Sonic Robo Blast 2",
                creator: "Sonic Team Junior",
                description: "A free 3D Sonic fan game built using a modified Doom engine.",
                thumbnail: "https://www.srb2.org/wp-content/uploads/srb2-2.2.10-header.png",
                playUrl: "https://www.srb2.org/",
                type: "Platformer"
            },
            {
                id: 3,
                title: "Sonic GT",
                creator: "Sonic GT Team",
                description: "An ambitious 3D Sonic fan game with boost gameplay mechanics.",
                thumbnail: "https://img.itch.zone/aW1nLzM0OTc1NDAucG5n/original/3%2FSKW9.png",
                playUrl: "https://sonicgtofficial.itch.io/sonic-gt",
                type: "3D Platformer"
            },
            {
                id: 4,
                title: "Sonic Before the Sequel",
                creator: "LakeFeperd",
                description: "A fan game set between Sonic 1 and Sonic 2, featuring original levels.",
                thumbnail: "https://info.sonicretro.org/images/thumb/7/7e/Bts_title.png/300px-Bts_title.png",
                playUrl: "https://info.sonicretro.org/Sonic_Before_the_Sequel",
                type: "Platformer"
            },
            {
                id: 5,
                title: "Sonic After the Sequel",
                creator: "LakeFeperd",
                description: "The sequel to Before the Sequel, set between Sonic 2 and Sonic 3.",
                thumbnail: "https://info.sonicretro.org/images/thumb/5/55/Ats_title.png/300px-Ats_title.png",
                playUrl: "https://info.sonicretro.org/Sonic_After_the_Sequel",
                type: "Platformer"
            }
        ],
        animations: [
            {
                id: 1,
                title: "Sonic Mania Adventures",
                creator: "Tyson Hesse / SEGA",
                description: "Official animated shorts created for Sonic Mania Plus promotion.",
                thumbnail: "https://i.ytimg.com/vi/cD5qKLQE4-4/maxresdefault.jpg",
                watchUrl: "https://www.youtube.com/playlist?list=PLAIcZs9N4171E_-WnNRVyJvC1VBC9e9Hx",
                type: "Official"
            },
            {
                id: 2,
                title: "Sonic in Jaws",
                creator: "Mashed",
                description: "A hilarious Sonic parody animation by Mashed.",
                thumbnail: "https://i.ytimg.com/vi/9E_Dg-4WLFE/maxresdefault.jpg",
                watchUrl: "https://www.youtube.com/watch?v=9E_Dg-4WLFE",
                type: "Parody"
            },
            {
                id: 3,
                title: "There's Something About Amy",
                creator: "Mashed",
                description: "A dark comedy Sonic animation featuring Amy Rose.",
                thumbnail: "https://i.ytimg.com/vi/ZSE5jQEQzLY/maxresdefault.jpg",
                watchUrl: "https://www.youtube.com/watch?v=ZSE5jQEQzLY",
                type: "Parody"
            },
            {
                id: 4,
                title: "Sonic Shorts Volume 1",
                creator: "Newgrounds Community",
                description: "Classic Sonic fan animation collection from Newgrounds.",
                thumbnail: "https://art.ngfiles.com/images/169/169893_sonicshorts.png",
                watchUrl: "https://www.newgrounds.com/portal/view/369912",
                type: "Fan Animation"
            }
        ],
        comics: [
            {
                id: 1,
                title: "Sonic the Continuation",
                creator: "Various Artists",
                description: "A fan-made continuation of the Archie Sonic comics.",
                thumbnail: "https://pbs.twimg.com/media/EAB8cXqU4AAtHiR.jpg",
                readUrl: "https://www.deviantart.com/tag/sonicthecontinuation",
                type: "Fan Comic"
            },
            {
                id: 2,
                title: "Ghosts of the Future",
                creator: "Evan Stanley",
                description: "A popular Silver the Hedgehog fan comic.",
                thumbnail: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75f24b07-f1ac-4e6c-953b-8a4d60dfefd6/d7x7pu9-9c86f5c3-3e2e-48b4-9c5c-6b4c6f5e1c5c.png",
                readUrl: "https://www.deviantart.com/ghostsofthefuture",
                type: "Fan Comic"
            }
        ],
        music: [
            {
                id: 1,
                title: "Sonic CD JP Soundtrack",
                creator: "Naofumi Hataya",
                description: "The original Japanese Sonic CD soundtrack.",
                thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/8f/Sonic_CD_cover.jpg",
                listenUrl: "https://www.youtube.com/playlist?list=PLvNp0Boas720r7n0k7sDKZoA0E3GHQBYq",
                type: "Official OST"
            },
            {
                id: 2,
                title: "Sonic 3 & Knuckles Complete Soundtrack",
                creator: "SEGA Sound Team",
                description: "The legendary soundtrack from Sonic 3 & Knuckles.",
                thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/8b/Sonic_3_%26_Knuckles.png",
                listenUrl: "https://www.youtube.com/playlist?list=PLWxgDNWPBqdG7u1fVpNiDbGRuLNbDUBMH",
                type: "Official OST"
            },
            {
                id: 3,
                title: "City Escape (Cover)",
                creator: "FamilyJules",
                description: "An amazing metal cover of City Escape from Sonic Adventure 2.",
                thumbnail: "https://i.ytimg.com/vi/rVyD6z_fKzY/maxresdefault.jpg",
                listenUrl: "https://www.youtube.com/watch?v=rVyD6z_fKzY",
                type: "Fan Cover"
            },
            {
                id: 4,
                title: "Live and Learn (Cover)",
                creator: "Jonathan Young",
                description: "A powerful rock cover of the iconic Sonic Adventure 2 theme.",
                thumbnail: "https://i.ytimg.com/vi/JG4gGN9M-mM/maxresdefault.jpg",
                listenUrl: "https://www.youtube.com/watch?v=JG4gGN9M-mM",
                type: "Fan Cover"
            },
            {
                id: 5,
                title: "Sonic Frontiers OST - I'm Here",
                creator: "Tomoya Ohtani",
                description: "The emotional main theme from Sonic Frontiers.",
                thumbnail: "https://upload.wikimedia.org/wikipedia/en/e/e7/Sonic_Frontiers_cover_art.jpg",
                listenUrl: "https://www.youtube.com/watch?v=7ByE9fpANt8",
                type: "Official OST"
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sonicData;
}
