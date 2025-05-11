import { Album, Artist, Playlist, RadioStation, Song } from '../types';

// Mock songs data
export const songs: Song[] = [
  {
    id: '1',
    title: 'Ayudha Pooja',
    artist: 'Anirudh Ravichander',
    album: 'Devara Part 1',
    albumArt: 'https://a10.gaanacdn.com/gn_img/albums/oAJbDElKnL/JbDLBVqDbn/size_m.jpg',
    duration: 210,
    streamUrl: '/songs/Ayudha Pooja.mp3' // ✅ Correct path (no 'public')
    ,
    isRadio: undefined,
    url: ''
  },
  {
    id: '2',
    title: 'Chuttamalle',
    artist: 'Anirudh Ravichander, Shilpa Rao',
    album: 'Devara Part 1',
    albumArt: 'https://a10.gaanacdn.com/gn_img/albums/6Zxb2r7b9w/xb2q0dvgW9/size_l.jpg',
    duration: 220,
    streamUrl: '/songs/Chuttamalle.mp3' // ✅ Correct path (no 'public')
    ,
    isRadio: undefined,
    url: ''
  },
  {
    id: '3',
    title: 'Daavudi',
    artist: 'Anirudh Ravichander',
    album: 'Devara Part 1',
    albumArt: 'https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4kg9NyWL/size_m.jpg',
    duration: 215,
    streamUrl: '/songs/Daavudi.mp3',
    isRadio: undefined,
    url: ''
  },
  {
    id: '4',
    title: 'Kurchi Madathapetti',
    artist: 'Thaman S, Sahithi Chaganti, Sri Krishna',
    album: 'Guntur Kaaram',
    albumArt: 'https://a10.gaanacdn.com/gn_img/albums/MmqK5EKwRO/qK5ZXQME3w/size_l.jpg',
    duration: 200,
    url: '',
    isRadio: undefined,
    streamUrl: '/songs/Kurchi Madathapetti.mp3' // ✅ Correct path (no 'public')
  },
  {
    id: '5',
    title: 'Salaar Theme',
    artist: 'Ravi Basrur',
    album: 'Salaar',
    albumArt: 'https://a10.gaanacdn.com/gn_img/albums/R7vKXr6Wmr/vKXr7XE5Wm/size_m_1730991146.jpg',
    duration: 230,
    url: '',
    isRadio: undefined,
    streamUrl: '/songs/Salaar Theme.mp3' // ✅ Correct path (no 'public')
  },
  {
    id: '6',
    title: 'Sooreede',
    artist: 'Thaman S',
    album: 'Guntur Kaaram',
    albumArt: 'https://a10.gaanacdn.com/gn_img/albums/oAJbDElKnL/JbDLg20Dbn/size_m_1731001687.jpg',
    duration: 210,
    url: '',
    isRadio: undefined,
    streamUrl: ''
  },
  {
    id: '7',
    title: 'Jai Salaar',
    artist: 'Ravi Basrur',
    album: 'Salaar',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Salaar_Album.jpg',
    duration: 220,
    url: '',
    isRadio: undefined,
    streamUrl: ''
  },
];

// Mock albums data
export const albums: Album[] = [
  {
    id: '1',
    title: 'Prema Velluva',
    artist: 'Krishna Kanth',
    coverArt:'https://c.saavncdn.com/133/Prema-Velluva-From-Hit-3-Telugu-Telugu-2025-20250323083324-500x500.jpg',
    year: '2025',
    songs: songs.filter(song => song.album === 'HIT 3'),
  },
  {
    id: '2',
    title: 'Abki Baar Arjun Sarkaar',
    artist: 'Mickey J Meyer',
    coverArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxfhLG6HYQaKIWCire_VXyXDtT4p2GLOmgw&s',
    year: '2025',
    songs: songs.filter(song => song.album === 'HIT 3'),
  },
   {
    id: '3',
    title: 'Premalo',
    artist: 'Purna Chary Challury',
    coverArt: 'https://c.saavncdn.com/854/Premalo-From-Court-Telugu-2025-20250213103211-500x500.jpg',
    year: '2025',
    songs: songs.filter(song => song.album === 'Court'),
  },
  {
    id: '4',
    title: 'Dabidi Dibidi',
    artist: 'Thaman S',
    coverArt: 'https://c.saavncdn.com/000/Daaku-Maharaaj-Telugu-2024-20250103122655-500x500.jpg',
    year: '2025',
    songs: songs.filter(song => song.album === 'Daaku Maharaaj'),
  },
  {
    id: '5',
    title: 'Blockbuster Pongal',
    artist: ' Venkatesh',
    coverArt: 'https://c.saavncdn.com/508/Sankranthiki-Vasthunam-Telugu-2025-20250114191008-500x500.jpg',
    year: '2025',
    songs: songs.filter(song => song.album === 'Sankranthiki Vasthunam'),
  },
];

// Mock playlists data
export const playlists: Playlist[] = [
  {
    id: '1',
    title: 'Top Hits 2023',
    coverArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    songs: [songs[0], songs[1], songs[3], songs[5]],
    createdBy: 'ECHO MUSIC',
  },
  {
    id: '2',
    title: 'Chill Vibes',
    coverArt: 'https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&w=800',
    songs: [songs[2], songs[4], songs[6]],
    createdBy: 'ECHO MUSIC',
  },
  {
    id: '3',
    title: 'Workout Essentials',
    coverArt: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=800',
    songs: [songs[7], songs[3], songs[1]],
    createdBy: 'ECHO MUSIC',
  },
  {
    id: '4',
    title: 'Party Mix',
    coverArt: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
    songs: [songs[5], songs[7], songs[1], songs[0]],
    createdBy: 'ECHO MUSIC',
  }
];

// Mock radio stations data
export const radioStations: RadioStation[] = [
  {
    id: "1",
    name: "Radio Mirchi 98.3 FM",
    genre: "Bollywood, Indian Music",
    coverArt: "https://onlineradiofm.in/assets/image/radio/180/radio-mirchi.webp", // ✅ Added cover fallback
    description: "Popular FM station in Andhra Pradesh, streaming Bollywood and regional hits.",
    currentListeners: 18500,
    streamUrl: "https://radioindia.net/radio/mirchi/icecast.audio",
  },
  {
    id: "2",
    name: "Red FM 93.5",
    genre: "Rock, Dance, Talk",
    coverArt: "https://onlineradiofm.in/assets/image/radio/180/red-fm15.webp", // ✅ Added cover fallback
    description: "Energetic music & engaging talk shows from India’s top radio station.",
    currentListeners: 15800,
    streamUrl: "https://streaming.radioindia.fm/redfm.mp3", // ✅ Replaced placeholder URL
  },
  {
    id: "3",
    name: "BIG FM 92.7",
    genre: "Pop, Dance, Trance",
    coverArt: "https://onlineradiofm.in/assets/image/radio/180/big-fm.webp",
    description: "Trending Telugu & Bollywood hits live from Guntur.",
    currentListeners: 9800,
    streamUrl: "https://streaming.livefmradio.org/bigfm92.7",
  },
];


// Mock artists data
export const artists: Artist[] = [
  {
    id: '1',
    name: 'Anirudh Ravichander',
    image: 'https://a10.gaanacdn.com/gn_img/artists/a7LWBaz3zX/7LWB0AOKzX/size_l_1716892617.webp',
    monthlyListeners: 85400000,
    albums: albums.filter(album => album.artist === 'Jailer'),
  },
  {
    id: '2',
    name: 'Arijit Singh',
    image: 'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_l_1739172212.webp',
    monthlyListeners: 65200000,
    albums: albums.filter(album => album.artist === 'Sajini'),
  },
  {
    id: '3',
    name: 'AR Rahman',
    image: 'https://a10.gaanacdn.com/gn_img/artists/9En3pqeWXD/En3pQZ9WXD/size_l_1716893835.webp',
    monthlyListeners: 68900000,
    albums: albums.filter(album => album.artist === 'Robo'),
  },
  {
    id: '4',
    name: 'Sid Sriram',
    image: 'https://a10.gaanacdn.com/gn_img/artists/Dk9KN2KBx1/k9KNg85e3B/size_l_1717409498.webp',
    monthlyListeners: 48800000,
    albums: albums.filter(album => album.artist === 'Sid Sriram'),
  },
  {
    id: '5',
    name: 'Pritam',
    image: 'https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_l_1716815534.webp',
    monthlyListeners: 62000000,
    albums: albums.filter(album => album.artist === 'Pritam'),
  },
  {
    id: '6',
    name: 'Shreya Ghoshal',
    image: 'https://a10.gaanacdn.com/gn_img/artists/10q3Z1K52r/10q3Z1K52r/size_l_1717411303.webp',
    monthlyListeners: 53000000,
    albums: albums.filter(album => album.artist === 'Shreya Ghoshal'),
  },
];

// Featured content
export const featuredPlaylists = playlists.slice(0, 4);
export const topRadioStations = radioStations.slice(0, 4);
export const newReleases = albums.slice(0, 4);
export const topArtists = artists.slice(0, 6);