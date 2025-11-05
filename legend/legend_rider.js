function legendcapsem(key) {
    var data = capsemData[key];
    if (!data) return;

    var name = document.getElementById("name");
    var capsem = document.getElementById("capsem");
    var info = document.getElementById("info");
    var capsem_gif = document.getElementById("capsem_gif");

    name.innerHTML = data.name;
    name.style.color = data.color;
    capsem.innerHTML = `<img src="../capsem/legend/${data.key}.png" width="200" height="200" alt="${data.key} capsem">`;
    info.innerHTML = data.info || "";
    capsem_gif.innerHTML = `<img src="../capsem/legend/gif/${data.key}.gif" alt="${data.key}.gif">`;
}

const capsemData = {
    kuuga: {
        key: "kuuga",
        name: "Kuuga",
        color: "red",
        info: "Kuuga the first heisei rider begining the riders once again"
    },
    agito: {
        key: "agito",
        name: "Agito",
        color: "yellow",
        info: "agito is the rider to come after kuuga and originally plan to be a sequal to kuuga."
    },
    ryuki: {
        key: "ryuki",
        name: "Ryuki",
        color: "red",
        info: "facing a mirror with an Advent Deck your able to transform and enter the mirror world as Masked Rider Ryuki"
    },
    knight: {
        key: "knight",
        name: "Knight",
        color: "darkblue",
        info: "facing a mirror with an Advent Deck your able to transform and enter the mirror world as Masked Rider Knight"
    },
    faiz: {
        key: "faiz",
        name: "Faiz",
        color: "red",
        info: "using an ancient belt created by Smart Brain a Orphnoch can transform into Kamen Rider Faiz"
    },
    faiz_axel: {
        key: "faiz_axel",
        name: "Faiz Axel Form",
        color: "red",
        info: "an upgrade form for faiz that gives them the ability to go fast but only for 10 seconds"
    },
    kaixa: {
        key: "kaixa",
        name: "Kaixa",
        color: "yellow",
        info: "using an ancient belt created by Smart Brain someone can transform into Kamen Rider Kaixa but losing come with a cost."
    },
    blade: {
        key: "blade",
        name: "Blade",
        color: "rgba(0, 38, 255, 1)",
        info: "the first rider to have the gimmick of cards"
    },
    garren: {
        key: "garren",
        name: "Garren",
        color: "rgba(43, 255, 0, 1)",
        info: "blade secondary rider garren!"
    },
    hibiki: {
        key: "hibiki",
        name: "Hibiki",
        color: "purple",
        info: "The oni rider the rider who had a different producer mid way in the series"
    },
    kabuto: {
        key: "kabuto",
        name: "Kabuto",
        color: "red",
        info: "the beetle rider who only have 1 other form being the final form kabuto speed matches faiz axel speed."
    },
    deno: {
        key: "den-o",
        name: "Den-o",
        color: "red",
        info: "The Time Traveller rider Masked Rider Den-o with the denliner den-o can go to any time with a ticket"
    },
    zeronos: {
        key: "zeronos",
        name: "Zeronos",
        color: "green",
        info: "The Time Traveller rider Masked Rider that no one remembers Zeronos!"
    },
    kiva: {
        key: "kiva",
        name: "Kiva",
        color: "yellow",
        info: "the vampire rider"
    },
    ixa: {
        key: "ixa",
        name: "Ixa",
        color: "white",
        info: "kiva secondary rider who fully human KAMEN RIDER IXA!"
    },
    decade: {
        key: "decade",
        name: "Decade",
        color: "magenta",
        info: "decade the 10th heisei rider the one who said to be the Destoryer of worlds with the ability to become any rider before them"
    },
    diend: {
        key: "diend",
        name: "Diend",
        color: "rgba(0, 183, 255, 1)",
        info: "decade Secondary Rider the thief that want the treasure with the ability to summon any rider before them."
    },
    decadekuuga: {
        key: "kuuga",
        name: "Kuuga",
        color: "red",
        info: "Kuuga the first heisei rider and decade tertiary rider"
    },
    double: {
        key: "double",
        name: "Double",
        color: "greenyellow",
        info: 'The 2 in 1 rider Double using the gaia memories 2 people are able to unit and become Double and the first rider to offically be called "Kamen Rider"'
    },
    fangjoker: {
        key: "fangjoker",
        name: "Double Fang Joker",
        color: "white",
        info: 'Double power up form the berserk form'
    },
    accel: {
        key: "accel",
        name: "Accel",
        color: "red",
        info: 'the original person who was suppose to parnter up with phillp to become Kamen Rider Cyclone Accel Xtreme'
    },
    skull: {
        key: "skull",
        name: "Skull",
        color: "rgba(72, 1, 90, 1)",
        info: 'with a lost driver and the skull memory kamen rider skull is possible or even the proto/base form before it crystal skull'
    },
    joker: {
        key: "joker",
        name: "Joker",
        color: "rgba(72, 1, 90, 1)",
        info: 'after losing phillip they lost the ability to become double but threat still remain in wind city so using the lost driver and the joker memory shotro become KAMEN RIDER JOKER!'
    },
    ooo: {
        key: "ooo",
        name: "ooo",
        color: "red",
        info: "using 3 core medals a head, torso and leg medal that given from their best friend Ankh allow eiji to become Kamen Rider ooo"
    },
    birth: {
        key: "birth",
        name: "Birth",
        color: "DarkGreen",
        info: "the kamen rider that uses cell medals to access weapons or even finisher anyone can be kamen rider birth so HAPPY BIRTHDAY!"
    },
    fourze: {
        key: "fourze",
        name: "Fourze",
        color: "whitesmoke",
        info: 'the space kamen rider and the last one in the "number theory" before most people beileve that to not be true'
    },
    wizard: {
        key: "wizard",
        name: "Wizard",
        color: "red",
        info: "thanks to the phantom isnisde off wizard they can use magic stone that get converted into rings to use MAGIC for abilites or transformation"
    },
    gaim: {
        key: "gaim",
        name: "Gaim",
        color: "orange",
        info: "Gaim the orange samurai!"
    },
    drive: {
        key: "drive",
        name: "Drive",
        color: "red",
        info: 'Drive the rider who can create "slowdowns"'
    },
    ghost: {
        key: "ghost",
        name: "Ghost",
        color: "orangered",
        info: "the ghost rider! GHOST!"
    },
    exaid: {
        key: "ex-aid",
        name: "Ex-aid",
        color: "violet",
        info: "the number one gamer!"
    },
    build: {
        key: "build",
        name: "Build",
        color: "blue",
        info: "The genius rider, Build with the build driver allow the user to combine 2 fullbottles and a hazard level of 3 or more to transform"
    },
    hazardRT: {
        key: "hazardRT",
        name: "Build hazard Rabbit Tank",
        color: "black",
        info: "Build power up allowing them to access Build Hazard form with the ability to use any bestmatch to access hazard form but like build uses rabbit and tank as the base"
    },
    crossz: {
        key: "cross-z",
        name: "Cross-z",
        color: "rgba(0, 4, 255, 1)",
        info: "The secondary rider for build using a special device that was built allow the user to use 1 fullbottle and a hazard level of 3 or more to transform"
    },
    grease: {
        key: "grease",
        name: "Grease",
        color: "gold",
        info: "the Tertiary rider for build using a new driver that was made to be stronger then build {add rest}"
    },
    zio: {
        key: "zi-o",
        name: "Zi-o",
        color: "magenta",
        info: "Iwea Zi-o the 20th heisei rider the demon king himself! the one that will control the past, present and future!"
    },
    zeroone: {
        key: "zero-one",
        name: "Zero-One",
        color: "yellow",
        info: "The first rewia rider kamen rider ZERO-ONE"
    },
    saber: {
        key: "saber",
        name: "Saber",
        color: "red",
        info: "The rider that battles with book kamen rider SABER!"
    },
    revice: {
        key: "revice",
        name: "Revice",
        color: "pink",
        info: "Kamen Rider Revi and the devil Kamen Rider Vice the 2 in 1 rider"
    },
    geats: {
        key: "geats",
        name: "Geats",
        color: "whitesmoke",
        info: "one off the fighter in the Desire Grand Prix using 2 raise buckle to access their base form and the one to cause Daybreak timeline in Gotchard"
    },
    tycoon: {
        key: "tycoon",
        name: "Tycoon",
        color: "green",
        info: "one off the fighter in the Desire Grand Prix using 1 raise buckle to access their base form"
    },
    buffa: {
        key: "buffa",
        name: "Buffa",
        color: "purple",
        info: "one off the fighter in the Desire Grand Prix using 1 raise buckle to access their base form"
    },
    gotchard: {
        key: "gotchard",
        name: "Gotchard",
        color: "cyan",
        info: "With the gotchadriver the rider can combine 2 chemy into 1 becoming Kamen Rider Gotchard"
    },
    majade: {
        key: "majade",
        name: "Majade",
        color: "rgba(255, 136, 1, 1)",
        info: "majade"
    },
    legend: {
        key: "legend",
        name: "Legend",
        color: "yellow",
        info: "The rewia decade now let make things GORGEOUS"
    },
    gavv: {
        key: "gavv",
        name: "Gavv",
        color: "purple",
        info: "Gavv the rider before zeztz who half Granute and half Human using the power off sweets to transform"
    },
    valen: {
        key: "valen",
        name: "Valen",
        color: "rgba(100, 46, 2, 1)",
        info: "Gavv secondary rider who is fully human and use the Valenbuster to tranform into their base form"
    },
    vram: {
        key: "vram",
        name: "Vram",
        color: "rgba(255, 217, 0, 1)",
        info: "Gavv Tertiary rider who is fully granute and use the Vrastumgear to transform into their base form"
    },
    gochizo: {
        key: "gochizo",
        name: "Gochizo",
        color: "rgba(212, 0, 255, 1)",
        info: "Gochizo the gimmick item that the riders in Gavv uses to transform"
    },
};