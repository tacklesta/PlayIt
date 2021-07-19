import {v4 as uuidv4} from "uuid";

const music = () => {
  return [
    {
      name: "Unstoppable",
      cover: "http://a10.gaanacdn.com/images/song/82/23586282/crop_480x480_1526883694.jpg",
      artist: "Dino James",
      audio: "https://dwn.mr-jatt1.com/siteuploads/files/sfd11/5348/Unstoppable(Mr-Jatt1.com).mp3",
      color: [
        "#DBE8DF", "#24253A"
      ],
      id: uuidv4(),
      active: true
    }, {
      name: "Despacito",
      cover: "https://upload.wikimedia.org/wikipedia/en/c/c8/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png",
      artist: "Luis Fonsi",
      audio: "https://dwn.mr-jatt1.com/siteuploads/files/sfd5/2369/Despacito(Mr-Jatt1.com).mp3",
      color: [
        "#41DACC", "#FAB670"
      ],
      id: uuidv4(),
      active: false
    }, {
      name: "Can't Find The Words",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/24d75baebd16d287703d481b4cc77f6c0b5159c7-1024x1024.jpg",
      artist: "Ward Wills, Middle School",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8718",
      color: [
        "#0B4376", "#E37E80"
      ],
      id: uuidv4(),
      active: false
    }, {
      name: "Canção",
      cover: "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
      artist: "The BREED",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7961",
      color: [
        "#FADED0", "#342276"
      ],
      id: uuidv4(),
      active: false
    }, {
      name: "Mirage",
      cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      artist: "Nymano, j'san",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10136",
      color: [
        "#1C1C52", "#FDF4F0"
      ],
      id: uuidv4(),
      active: false
    }, {
      name: "Les Mouvements d'Hiver",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "L'Indécis, sadtoi",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10351",
      color: [
        "#BBA3C5", "#3D367A"
      ],
      id: uuidv4(),
      active: false
    }, {
      name: "Ocean View",
      cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      artist: "G Mills, Kyle McEvoy, Luke Otwell",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10320",
      color: [
        "#1C1C52", "#FDF4F0"
      ],
      id: uuidv4(),
      active: false
    },
    {
      name: "Shape of U",
      cover: "https://m.media-amazon.com/images/M/MV5BNWU3N2ZkODAtMTQ0MS00ODA3LWE4MWQtOWJiNjllZWU1NzdhXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
      artist: "Ed Sheran",
      audio: "https://dwn.mr-jatt1.com/siteuploads/files/sfd12/5986/Ed%20Sheeran%20-%20Shape%20of%20You(Mr-Jatt1.com).mp3",
      color: [
        "#1C1C52", "#FDF4F0"
      ],
      id: uuidv4(),
      active: false
    }
  ];
};

export default music;
