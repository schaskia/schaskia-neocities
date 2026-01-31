const songs = [
    {
        title: "Never Meant",
        artist: "American Football",
        album: "American Football",
        src: "/assets/audio/American Football - Never Meant.mp3",
        cover: "/assets/audio/album-art/american-football.jpg"
    },
    {
        title: "City Lights Cry",
        artist: "Armistice",
        album: "Armistice",
        src: "/assets/audio/Armistice - City Lights Cry.mp3",
        cover: "/assets/audio/album-art/armistice.jpg"
    },
    {
        title: "Atomic Love",
        artist: "Beatsteaks",
        album: "Smack Smash",
        src: "/assets/audio/Beatsteaks - Atomic Love.mp3",
        cover: "/assets/audio/album-art/smack-smash.jpg"
    },
    {
        title: "When the Night Feels My Song",
        artist: "Bedouin Soundclash",
        album: "Sounding a Mosaic",
        src: "/assets/audio/Bedouin Soundclash - When the Night Feels My Song.mp3",
        cover: "/assets/audio/album-art/sounding-a-mosaic.jpg"
    },
    {
        title: "She Said No",
        artist: "BoyWithUke",
        album: "Serotonin Dreams",
        src: "/assets/audio/BoyWithUke - She Said No.mp3",
        cover: "/assets/audio/album-art/serotonin-dreams.jpg"
    },
    {
        title: "Supermodel",
        artist: "Bran Van 3000",
        album: "Glee",
        src: "/assets/audio/Bran Van 3000 - Supermodel.mp3",
        cover: "/assets/audio/album-art/glee.jpg"
    },
    {
        title: "Old Soul Song (for the New World Order)",
        artist: "Bright Eyes",
        album: "I'm Wide Awake, It's Morning",
        src: "/assets/audio/Bright Eyes - Old Soul Song (for the New World Order).mp3",
        cover: "/assets/audio/album-art/im-wide-awake-its-morning.jpg"
    },
    {
        title: "Nugget",
        artist: "CAKE",
        album: "Fashion Nugget",
        src: "/assets/audio/CAKE - Nugget.mp3",
        cover: "/assets/audio/album-art/fashion-nugget.jpg"
    },
    {
        title: "LA Hallucinations",
        artist: "Carly Rae Jepsen",
        album: "E·MO·TION",
        src: "/assets/audio/Carly Rae Jepsen - LA Hallucinations.mp3",
        cover: "/assets/audio/album-art/emotion.jpg"
    },
    {
        title: "Femininomenon",
        artist: "Chappell Roan",
        album: "The Rise and Fall of a Midwest Princess",
        src: "/assets/audio/Chappell Roan - Femininomenon.mp3",
        cover: "/assets/audio/album-art/the-rise-and-fall-of-a-midwest-princess.jpg"
    },
    {
        title: "Iceblink Luck",
        artist: "Cocteau Twins",
        album: "Heaven or Las Vegas",
        src: "/assets/audio/Cocteau Twins - Iceblink Luck.mp3",
        cover: "/assets/audio/album-art/heaven-or-las-vegas.jpg"
    },
    {
        title: "I Can Hardly Make You Mine",
        artist: "Cults",
        album: "Static",
        src: "/assets/audio/Cults - I Can Hardly Make You Mine.mp3",
        cover: "/assets/audio/album-art/static.jpg"
    },
    {
        title: "Et si tu n'existais pas",
        artist: "Dobacaracol",
        album: "Salut Joe!",
        src: "/assets/audio/Dobacaracol - Et si tu n'existais pas.mp3",
        cover: "/assets/audio/album-art/salut-joe.jpg"
    },
    {
        title: "Le Grillon et la Luciole",
        artist: "Émile Proulx-Cloutier",
        album: "Aimer les monstres",
        src: "/assets/audio/Émile Proulx-Cloutier - Le Grillon et la Luciole.mp3",
        cover: "/assets/audio/album-art/aimer-les-monstres.jpg"
    },
    {
        title: "Le vent se lève",
        artist: "Étienne Coppée",
        album: "Et on pleurera ensemble",
        src: "/assets/audio/Étienne Coppée - Le vent se lève.mp3",
        cover: "/assets/audio/album-art/et-on-pleurera-ensemble.jpg"
    },
    {
        title: "Not the End of the World (Even as We Know It)",
        artist: "Faded Paper Figures",
        album: "Relics",
        src: "/assets/audio/Faded Paper Figures - Not the End of the World (Even as We Know It).mp3",
        cover: "/assets/audio/album-art/relics.jpg"
    },
    {
        title: "Walking Alone",
        artist: "Green Day",
        album: "nimrod.",
        src: "/assets/audio/Green Day - Walking Alone.mp3",
        cover: "/assets/audio/album-art/nimrod.jpg"
    },
    {
        title: "Barracuda",
        artist: "Heart",
        album: "Little Queen",
        src: "/assets/audio/Heart - Barracuda.mp3",
        cover: "/assets/audio/album-art/little-queen.jpg"
    },
    {
        title: "Through Me (The Flood)",
        artist: "Hozier",
        album: "Unreal Unearth: Unending",
        src: "/assets/audio/Hozier - Through Me (The Flood).mp3",
        cover: "/assets/audio/album-art/unreal-unearth-unending.jpg"
    },
    {
        title: "Constellations",
        artist: "Jack Johnson",
        album: "In Between Dreams",
        src: "/assets/audio/Jack Johnson - Constellations.mp3",
        cover: "/assets/audio/album-art/in-between-dreams.jpg"
    },
    {
        title: "Too Fast",
        artist: "Jon Lajoie",
        album: "You Want Some of This?",
        src: "/assets/audio/Jon Lajoie - Too Fast.mp3",
        cover: "/assets/audio/album-art/you-want-some-of-this.jpg"
    },
    {
        title: "Je fais le mort",
        artist: "Juniore",
        album: "Juniore",
        src: "/assets/audio/Juniore - Je fais le mort.mp3",
        cover: "/assets/audio/album-art/juniore.jpg"
    },
    {
        title: "Parle-moi",
        artist: "Le Paysagiste",
        album: "Alter Ego",
        src: "/assets/audio/Le Paysagiste - Parle-moi.mp3",
        cover: "/assets/audio/album-art/alter-ego.jpg"
    },
    {
        title: "La reine",
        artist: "Les Cowboys Fringants",
        album: "La grand-messe",
        src: "/assets/audio/Les Cowboys Fringants - La reine.mp3",
        cover: "/assets/audio/album-art/la-grand-messe.jpg"
    },
    {
        title: "Léopold",
        artist: "Les Cowboys Fringants",
        album: "Motel Capri",
        src: "/assets/audio/Les Cowboys Fringants - Léopold.mp3",
        cover: "/assets/audio/album-art/motel-capri.jpg"
    },
    {
        title: "Fais-moi un show de boucane",
        artist: "Les soeurs Boulay",
        album: "4488 de l'amour",
        src: "/assets/audio/Les soeurs Boulay - Fais-moi un show de boucane.mp3",
        cover: "/assets/audio/album-art/4488-de-lamour.jpg"
    },
    {
        title: "Dans mon corps",
        artist: "Les Trois Accords",
        album: "Dans mon corps",
        src: "/assets/audio/Les Trois Accords - Dans mon corps.mp3",
        cover: "/assets/audio/album-art/dans-mon-corps.jpg"
    },
    {
        title: "L'eusses-tu cru",
        artist: "Les Trois Accords",
        album: "Gros mammouth album turbo",
        src: "/assets/audio/Les Trois Accords - L'eusses-tu cru.mp3",
        cover: "/assets/audio/album-art/gros-mammouth-album-turbo.jpg"
    },
    {
        title: "Louis-Félix-Antoine",
        artist: "Les Trois Accords",
        album: "Grand champion international de course",
        src: "/assets/audio/Les Trois Accords - Louis-Félix-Antoine.mp3",
        cover: "/assets/audio/album-art/grand-champion-international-de-course.jpg"
    },
    {
        title: "Beaux pains dans ta gueule",
        artist: "Maggy Bolle",
        album: "J'suis pas ta mère",
        src: "/assets/audio/Maggy Bolle - Beaux pains dans ta gueule.mp3",
        cover: "/assets/audio/album-art/jsuis-pas-ta-mere.jpg"
    },
    {
        title: "Sherry Fraser",
        artist: "Marcy Playground",
        album: "Marcy Playground",
        src: "/assets/audio/Marcy Playground - Sherry Fraser.mp3",
        cover: "/assets/audio/album-art/marcy-playground.jpg"
    },
    {
        title: "Philadelphie",
        artist: "Marie Céleste",
        album: "Feux de joie",
        src: "/assets/audio/Marie Céleste - Philadelphie.mp3",
        cover: "/assets/audio/album-art/feux-de-joie.jpg"
    },
    {
        title: "Les mots, l'élan et la chance",
        artist: "Marie Onile",
        album: "Les mots, l'élan et la chance",
        src: "/assets/audio/Marie Onile - Les mots, l'élan et la chance.mp3",
        cover: "/assets/audio/album-art/les-mots-lelan-et-la-chance.jpg"
    },
    {
        title: "The New American Apathy",
        artist: "Mazarin",
        album: "We're Already There",
        src: "/assets/audio/Mazarin - The New American Apathy.mp3",
        cover: "/assets/audio/album-art/were-already-there.jpg"
    },
    {
        title: "Big Girl (You Are Beautiful)",
        artist: "MIKA",
        album: "Life in Cartoon Motion",
        src: "/assets/audio/MIKA - Big Girl (You Are Beautiful).mp3",
        cover: "/assets/audio/album-art/life-in-cartoon-motion.jpg"
    },
    {
        title: "This Is How I Disappear",
        artist: "My Chemical Romance",
        album: "The Black Parade",
        src: "/assets/audio/My Chemical Romance - This Is How I Disappear.mp3",
        cover: "/assets/audio/album-art/the-black-parade.jpg"
    },
    {
        title: "Orgy for One",
        artist: "Ninja Sex Party",
        album: "Cool Patrol",
        src: "/assets/audio/Ninja Sex Party - Orgy for One.mp3",
        cover: "/assets/audio/album-art/cool-patrol.jpg"
    },
    {
        title: "Rhinoceratops Vs. Superpuma",
        artist: "Ninja Sex Party",
        album: "Strawberries and Cream",
        src: "/assets/audio/Ninja Sex Party - Rhinoceratops Vs. Superpuma.mp3",
        cover: "/assets/audio/album-art/strawberries-and-cream.jpg"
    },
    {
        title: "Why I Cry",
        artist: "Ninja Sex Party",
        album: "Attitude City",
        src: "/assets/audio/Ninja Sex Party - Why I Cry.mp3",
        cover: "/assets/audio/album-art/attitude-city.jpg"
    },
    {
        title: "100",
        artist: "Oldelaf",
        album: "Saint-Valentin",
        src: "/assets/audio/Oldelaf - 100.mp3",
        cover: "/assets/audio/album-art/saint-valentin.jpg"
    },
    {
        title: "Raoul mon pitbull",
        artist: "Oldelaf et Monsieur D.",
        album: "Chansons c",
        src: "/assets/audio/Oldelaf et Monsieur D. - Raoul mon pitbull.mp3",
        cover: "/assets/audio/album-art/chansons-c.jpg"
    },
    {
        title: "You're Not Alone",
        artist: "Olive",
        album: "Extra Virgin",
        src: "/assets/audio/Olive - You're Not Alone.mp3",
        cover: "/assets/audio/album-art/extra-virgin.jpg"
    },
    {
        title: "Au bar des suicidés",
        artist: "Pierre Lapointe",
        album: "Sentiments humains",
        src: "/assets/audio/Pierre Lapointe - Au bar des suicidés.mp3",
        cover: "/assets/audio/album-art/sentiments-humains.jpg"
    },
    {
        title: "Au nom des cieux galvanisés",
        artist: "Pierre Lapointe",
        album: "La forêt des mal-aimés",
        src: "/assets/audio/Pierre Lapointe - Au nom des cieux galvanisés.mp3",
        cover: "/assets/audio/album-art/la-foret-des-mal-aimes.jpg"
    },
    {
        title: "Octogénaire",
        artist: "Pierre Lapointe",
        album: "Pierre Lapointe",
        src: "/assets/audio/Pierre Lapointe - Octogénaire.mp3",
        cover: "/assets/audio/album-art/pierre-lapointe.jpg"
    },
    {
        title: "Toutes tes idoles",
        artist: "Pierre Lapointe",
        album: "Dix chansons démodées pour ceux qui ont le coeur brisé",
        src: "/assets/audio/Pierre Lapointe - Toutes tes idoles.mp3",
        cover: "/assets/audio/album-art/dix-chansons-demodees.jpg"
    },
    {
        title: "Black Star",
        artist: "Radiohead",
        album: "The Bends",
        src: "/assets/audio/Radiohead - Black Star.mp3",
        cover: "/assets/audio/album-art/the-bends.jpg"
    },
    {
        title: "Famous Last Words",
        artist: "Reel Big Fish",
        album: "Candy Coated Fury",
        src: "/assets/audio/Reel Big Fish - Famous Last Words.mp3",
        cover: "/assets/audio/album-art/candy-coated-fury.jpg"
    },
    {
        title: "Chat Back",
        artist: "SCOBY",
        album: "The Perfect Pleasure",
        src: "/assets/audio/SCOBY - Chat Back.mp3",
        cover: "/assets/audio/album-art/the-perfect-pleasure.jpg"
    },
    {
        title: "Day Job - Modern Art Sculpture",
        artist: "SIMON I",
        album: "Simon I",
        src: "/assets/audio/SIMON I - Day Job - Modern Art Sculpture.mp3",
        cover: "/assets/audio/album-art/simon-i.jpg"
    },
    {
        title: "Everything Went Numb",
        artist: "Streetlight Manifesto",
        album: "Everything Goes Numb",
        src: "/assets/audio/Streetlight Manifesto - Everything Went Numb.mp3",
        cover: "/assets/audio/album-art/everything-goes-numb.jpg"
    },
    {
        title: "Standing Room In Heaven",
        artist: "That Handsome Devil",
        album: "That Handsome Devil",
        src: "/assets/audio/That Handsome Devil - Standing Room In Heaven.mp3",
        cover: "/assets/audio/album-art/that-handsome-devil.jpg"
    },
    {
        title: "Sophie",
        artist: "The Altogether",
        album: "Look Up",
        src: "/assets/audio/The Altogether - Sophie.mp3",
        cover: "/assets/audio/album-art/look-up.jpg"
    },
    {
        title: "Owl",
        artist: "The Cat Empire",
        album: "Where the Angels Fall",
        src: "/assets/audio/The Cat Empire - Owl.mp3",
        cover: "/assets/audio/album-art/where-the-angels-fall.jpg"
    },
    {
        title: "Til the Ocean Takes Us All",
        artist: "The Cat Empire",
        album: "So Many Nights",
        src: "/assets/audio/The Cat Empire - Til the Ocean Takes Us All.mp3",
        cover: "/assets/audio/album-art/so-many-nights.jpg"
    },
    {
        title: "SMALL TALK",
        artist: "The Horne Section",
        album: "Three Great Songs (and Eight More Songs)",
        src: "/assets/audio/The Horne Section - SMALL TALK.mp3",
        cover: "/assets/audio/album-art/three-great-songs.jpg"
    },
    {
        title: "Straight Up",
        artist: "The Lost Fingers",
        album: "Lost in the 80s",
        src: "/assets/audio/The Lost Fingers - Straight Up.mp3",
        cover: "/assets/audio/album-art/lost-in-the-80s.jpg"
    },
    {
        title: "What Katie Said",
        artist: "The Matches",
        album: "Decomposer",
        src: "/assets/audio/The Matches - What Katie Said.mp3",
        cover: "/assets/audio/album-art/decomposer.jpg"
    },
    {
        title: "Carol Brown (FOTC Cover)",
        artist: "Tom Cardy",
        album: "Artificial Intelligence",
        src: "/assets/audio/Tom Cardy - Carol Brown (FOTC Cover).mp3",
        cover: "/assets/audio/album-art/artificial-intelligence.jpg"
    },
    {
        title: "Don't Touch My Ladder (feat. Louie Zong)",
        artist: "Tom Cardy, Louie Zong",
        album: "The Dancefloor at the End of the Universe",
        src: "/assets/audio/Tom Cardy, Louie Zong - Don't Touch My Ladder (feat. Louie Zong).mp3",
        cover: "/assets/audio/album-art/the-dancefloor-at-the-end-of-the-universe.jpg"
    },
    {
        title: "L'ours",
        artist: "TRICOT MACHINE",
        album: "Tricot Machine",
        src: "/assets/audio/TRICOT MACHINE - L'ours.mp3",
        cover: "/assets/audio/album-art/tricot-machine.jpg"
    },
    {
        title: "Apocalypticodramatic",
        artist: "Tryo",
        album: "Grain de sable",
        src: "/assets/audio/Tryo - Apocalypticodramatic.mp3",
        cover: "/assets/audio/album-art/grain-de-sable.jpg"
    },
    {
        title: "Marsha, Thankk You for the Dialectics, but I Need You to Leave",
        artist: "Will Wood",
        album: "The Normal Album",
        src: "/assets/audio/Will Wood - Marsha, Thankk You for the Dialectics, but I Need You to Leave.mp3",
        cover: "/assets/audio/album-art/the-normal-album.jpg"
    },
    {
        title: "Willard!",
        artist: "Will Wood",
        album: "\"In case I make it,\"",
        src: "/assets/audio/Will Wood - Willard!.mp3",
        cover: "/assets/audio/album-art/in-case-i-make-it.jpg"
    },
    {
        title: "The First Step",
        artist: "Will Wood and the Tapeworms",
        album: "Everything is a Lot",
        src: "/assets/audio/Will Wood and the Tapeworms - The First Step.mp3",
        cover: "/assets/audio/album-art/everything-is-a-lot.jpg"
    },
    {
        title: "La valse des vieux os",
        artist: "Yann Tiersen",
        album: "Le fabuleux destin d'Amélie Poulain",
        src: "/assets/audio/Yann Tiersen - La valse des vieux os.mp3",
        cover: "/assets/audio/album-art/amelie-poulain.jpg"
    },
];

let currentSong = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Fisher-Yates shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(songs);

  const audio = document.getElementById('audio');
  const title = document.getElementById('song-title');
  const artist = document.getElementById('song-artist');
  const album = document.getElementById('song-album');
  const cover = document.getElementById('song-cover');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    if (title) title.textContent = song.title;
    if (artist) artist.textContent = song.artist;
    if (album) album.textContent = song.album;
    if (cover) cover.src = song.cover;
  }

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', () => {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  });

  audio.addEventListener('pause', () => {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSong = (currentSong - 1 + songs.length) % songs.length;
      loadSong(currentSong);
      audio.play();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSong = (currentSong + 1) % songs.length;
      loadSong(currentSong);
      audio.play();
    });
  }

    loadSong(currentSong);
    // Try to autoplay as soon as the page loads
    audio.play().catch((err) => {
        // Autoplay might be blocked by the browser; you can handle it here if needed
        console.log('Autoplay was prevented by the browser:', err);
    });

    // Loop to the first song after the last song finishes
    audio.addEventListener('ended', () => {
        currentSong = (currentSong + 1) % songs.length;
        loadSong(currentSong);
        audio.play();
    });
});