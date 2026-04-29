function legendcapsem(key) {
    var data = capsemData[key];
    if (!data) return;

    var name = document.getElementById("name");
    var capsem = document.getElementById("capsem");
    var info = document.getElementById("info");
    var capsem_gif = document.getElementById("capsem_gif");
    
    // Elements for border gradients
    const box = document.getElementById('box');
    const box2 = document.getElementById('box2');
    const driverbox = document.getElementById('driverbox');

    name.innerHTML = data.name;
    // Legend pathing for images
    capsem.innerHTML = `<img src="../capsem/legend/${data.key}.png" width="200" height="200" alt="${data.key} capsem">`;
    info.innerHTML = data.info || "";
    capsem_gif.innerHTML = `<img src="../capsem/legend/gif/${data.key}.gif" alt="${data.key}.gif" width="250" height="250">`;

    if (data.color === "rainbow") {
        // Text Rainbow Effect
        name.style.backgroundImage = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        name.style.backgroundSize = "100%";
        name.style.backgroundRepeat = "no-repeat";
        name.style.webkitBackgroundClip = "text";
        name.style.webkitTextFillColor = "transparent";

        // Border Rainbow Effect
        const rainbowGradient = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        box.style.borderImage = rainbowGradient + " 1";
        box2.style.borderImage = rainbowGradient + " 1";
        driverbox.style.borderImage = rainbowGradient + " 1";
    } else {
        // Reset Rainbow Text styles
        name.style.background = "";
        name.style.webkitBackgroundClip = "";
        name.style.webkitTextFillColor = "";
        name.style.color = data.color || "";

        // Apply standard gradient or clear it
        box.style.borderImage = data.gradient || "";
        box2.style.borderImage = data.gradient || "";
        driverbox.style.borderImage = data.gradient || "";
    }
}

const capsemData = {

    // ===== SHOWA =====
    ichigo: {
        key: "ichigo",
        name: "Ichigo",
        color: "rgb(94, 255, 0)",
        info: "The very first Kamen Rider given their power by the enemy Shocker"
    },
    nigo: {
        key: "nigo",
        name: "Nigo",
        color: "red",
        info: "The very Secondary Rider created to defeat ichigo but turn good."
    },
    v3: {
        key: "v3",
        name: "V3",
        color: "rgb(7, 235, 83)",
        info: "The next generation of riders given the power of Ichigo and Nigo to fight against Shocker"
    },
    riderman: {
        key: "riderman",
        name: "Riderman",
        color: "blue",
        info: "a new rider here to help V3 defeat Shocker."
    },
    X: {
        key: "X",
        name: "X",
        color: "rgb(212, 196, 196)",
        info: 'After a surgery to save their son using the last of his robotics technology to give them the ability to transform into the "X rider"'
    },
    amazon: {
        key: "amazon",
        name: "Amazon",
        color: "rgb(31, 168, 3)",
        info: 'after a plane crash in the amazon rainforest a child was adopted by an ican tribue under the name "Amazon" who later get given the GiGi Armlet'
    },
    stronger: {
        key: "stronger",
        name: "Stronger",
        color: "rgba(168, 3, 3, 1)",
        info: 'following the death of his close friend and mentor goro, they join a evil organization with the promise of GREAT POWER and fueled by desire of revenge they undergoes a surgery to become Masked Rider Stronger'
    },
    skyrider: {
        key: "skyrider",
        name: "Skyrider",
        color: "darkgreen",
        info: 'the first rider reboot and later refer to Masked Rider Skyrider'
    },
    super1: {
        key: "super-1",
        name: "Super-1",
        color: "silver",
        info: "A Kamen Rider enhanced by NASA with interchangeable power hands."
    },
    zx: {
        key: "zx",
        name: "ZX",
        color: "darkred",
        info: "A cybernetic ninja Rider created by Badan."
    },
    black: {
        key: "black",
        name: "Black",
        color: "black",
        info: "A Kingstone Warrior who rebelled against Gorgom."
    },
    blackrx: {
        key: "blackrx",
        name: "Black RX",
        color: "crimson",
        info: "The evolved form of Black after being empowered by solar energy."
    },
    shin: {
        key: "shin",
        name: "Shin",
        color: "darkgreen",
        info: "A dark bio-horror Kamen Rider created through forced mutation."
    },
    zo: {
        key: "zo",
        name: "ZO",
        color: "forestgreen",
        info: "A genetically engineered Rider who protects nature."
    },
    j: {
        key: "j",
        name: "J",
        color: "lightgreen",
        info: "A Kamen Rider capable of growing to gigantic size."
    },

    // ===== HEISEI PHASE 1 =====
    kuuga: {
        key: "kuuga",
        name: "Kuuga",
        color: "red",
        info: "Kuuga the first heisei rider begining the riders once again"
    },
    kuuga_ultimate: {
        key: "kuuga_ultimate",
        name: "Kuuga Ultimate Form",
        color: "black",
        info: "{fix later}"
    },

    agito: {
        key: "agito",
        name: "Agito",
        color: "yellow",
        info: "agito is the rider to come after kuuga and originally plan to be a sequal to kuuga."
    },
    agito_shining: {
        key: "agito_shining",
        name: "Agito Shining Form",
        color: "red",
        info: "{fix later}"
    },

    ryuki: {
        key: "ryuki",
        name: "Ryuki",
        color: "red",
        info: "facing a mirror with an Advent Deck your able to transform and enter the mirror world as Masked Rider Ryuki"
    },
    ryuki_survive: {
        key: "ryuki_survive",
        name: "Ryuki Survive Form",
        color: "red",
        info: "{fix later}"
    },
    knight: {
        key: "knight",
        name: "Knight",
        color: "darkblue",
        info: "facing a mirror with an Advent Deck your able to transform and enter the mirror world as Masked Rider Knight"
    },
    ouja: {
        key: "ouja",
        name: "Ouja",
        color: "purple",
        info: "facing a mirror with an Advent Deck your able to transform and enter the mirror world as Masked Rider Ouja"
    },

    faiz: {
        key: "faiz",
        name: "Faiz",
        color: "red",
        info: "using an ancient belt created by Smart Brain a Orphnoch can transform into Masked Rider Faiz"
    },
    faiz_axel: {
        key: "faiz_axel",
        name: "Faiz Axel Form",
        color: "red",
        info: "an upgrade form for faiz that gives them the ability to go fast but only for 10 seconds"
    },
    faiz_blaster: {
        key: "faiz_blaster",
        name: "Faiz Blaster Form",
        color: "red",
        info: "{fix later}"
    },
    kaixa: {
        key: "kaixa",
        name: "Kaixa",
        color: "yellow",
        info: "using an ancient belt created by Smart Brain someone can transform into Masked Rider Kaixa but losing come with a cost."
    },
    delta: {
        key: "delta",
        name: "Delta",
        color: "white",
        info: "a belt with multiple user whoever use this belt will become Masked Rider Delta"
    },

    blade: {
        key: "blade",
        name: "Blade",
        color: "rgba(0, 38, 255, 1)",
        info: "the first rider to have the gimmick of cards"
    },
    blade_king: {
        key: "blade_king",
        name: "Blade King Form",
        color: "yellow",
        info: "{fix later}"
    },
    garren: {
        key: "garren",
        name: "Garren",
        color: "rgba(43, 255, 0, 1)",
        info: "blade secondary rider garren!"
    },
    chalice: {
        key: "chalice",
        name: "Chalice",
        color: "rgba(209, 6, 6, 1)",
        info: "Chalice is not a traditional Masked Riderbut rather the form of the Mantis Undead taken on by the Joker Undead as per his abilities."
    },

    hibiki: {
        key: "hibiki",
        name: "Hibiki",
        color: "purple",
        info: "The oni rider the rider who had a different producer mid way in the series"
    },
    hibiki_armed: {
        key: "hibiki_armed",
        name: "Hibiki Armed",
        color: "purple",
        info: "{fix later}"
    },

    kabuto: {
        key: "kabuto",
        name: "Kabuto",
        color: "red",
        info: "the beetle rider who only have 1 other form being the final form kabuto speed matches faiz axel speed."
    },
    kabuto_hyper: {
        key: "kabuto_hyper",
        name: "Kabuto Hyper",
        color: "red",
        info: "{fix later}"
    },

    deno: {
        key: "den-o",
        name: "Den-o",
        color: "red",
        info: "The Time Traveller rider Masked Rider Den-o with the denliner den-o can go to any time with a ticket"
    },
    den_o_liner: {
        key: "den-o_liner",
        name: "Den-O Liner Form",
        color: "red",
        info: "{fix later}"
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
    kiva_emperor: {
        key: "kiva_emperor",
        name: "Kiva Emperor",
        color: "gold",
        info: "{fix later}"
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
    decade_complete: {
        key: "decade_complete",
        name: "Decade Complete",
        color: "magenta",
        info: "{fix later}"
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

    // ===== HEISEI PHASE 2 =====
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
    double_extreme: {
        key: "double_extreme",
        name: "Double Extreme",
        color: "silver",
        info: "{fix later}"
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
    eternal: {
        key: "eternal",
        name: "Eternal",
        color: "rgba(252, 250, 221, 1)",
        info: 'with a lost driver and the eternal memory kamen rider eternal is possible or even the proto/base form before it name Red Flare'
    },

    ooo: {
        key: "ooo",
        name: "ooo",
        color: "red",
        info: "using 3 core medals a head, torso and leg medal that given from their best friend Ankh allow eiji to become Kamen Rider ooo"
    },
    ooo_putotyra: {
        key: "ooo_putotyra",
        name: "OOO Putotyra",
        color: "purple",
        info: "{fix later}"
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
    fourze_cosmic: {
        key: "fourze_cosmic",
        name: "Fourze Cosmic",
        color: "blue",
        info: "{fix later}"
    },

    wizard: {
        key: "wizard",
        name: "Wizard",
        color: "red",
        info: "thanks to the phantom isnisde off wizard they can use magic stone that get converted into rings to use MAGIC for abilites or transformation"
    },
    wizard_infinity: {
        key: "wizard_infinity",
        name: "Wizard Infinity",
        color: "cyan",
        info: "{fix later}"
    },

    gaim: {
        key: "gaim",
        name: "Gaim",
        color: "orange",
        info: "Gaim the orange samurai!"
    },
    gaim_kiwami_arms: {
        key: "gaim_kiwami_arms",
        name: "Gaim Kiwami Arms",
        color: "white",
        info: "{fix later}"
    },

    drive: {
        key: "drive",
        name: "Drive",
        color: "red",
        info: 'Drive the rider who can create "slowdowns"'
    },
    drive_tridoron: {
        key: "drive_tridoron",
        name: "Drive Tridoron",
        color: "red",
        info: "{fix later}"
    },
    mach: {
        key: "mach",
        name: "Mach",
        color: "white",
        info: 'Tracking... terminating... both done at Mach speed! Kamen Rider... Mach!'
    },

    ghost: {
        key: "ghost",
        name: "Ghost",
        color: "orangered",
        info: "the ghost rider! GHOST!"
    },
    ghost_mugen: {
        key: "ghost_mugen",
        name: "Ghost Mugen",
        color: "orange",
        info: "{fix later}"
    },

    exaid: {
        key: "ex-aid",
        name: "Ex-aid",
        color: "violet",
        info: "the number one gamer!"
    },
    ex_aid_muteki: {
        key: "ex-aid_muteki",
        name: "Ex-Aid Muteki",
        color: "yellow",
        info: "{fix later}"
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
    build_genius: {
        key: "build_genius",
        name: "Build Genius",
        color: "white",
        info: "{fix later}"
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
    grand_zio: {
        key: "grand_zi-o",
        name: "Grand Zi-O",
        color: "gold",
        info: "{fix later}"
    },

    // ===== REIWA =====
    zeroone: {
        key: "zero-one",
        name: "Zero-One",
        color: "yellow",
        info: "The first rewia rider kamen rider ZERO-ONE"
    },
    zero_two: {
        key: "zero_two",
        name: "Zero-Two",
        color: "red",
        info: "{fix later}"
    },
    zeroonealt: {
        key: "zero-one_alt",
        name: "Zero-One",
        color: "yellow",
        info: "this is the Original Capsem gif for the zero-one capsem which goes unused and replace with the newer one"
    },

    saber: {
        key: "saber",
        name: "Saber",
        color: "red",
        info: "The rider that battles with book kamen rider SABER!"
    },
    xcross_saber: {
        key: "xcross_saber",
        name: "Xross Saber",
        color: "blue",
        info: "{fix later}"
    },

    revice: {
        key: "revice",
        name: "Revice",
        color: "pink",
        info: "Kamen Rider Revi and the devil Kamen Rider Vice the 2 in 1 rider"
    },
    revi: {
        key: "revi",
        name: "Revi",
        color: "pink",
        info: "Kamen Rider Revi the 2 in 1 rider"
    },
    ultimate_revi: {
        key: "ultimate_revi",
        name: "Ultimate Revi",
        color: "pink",
        info: "{fix later}"
    },
    vice: {
        key: "vice",
        name: "Vice",
        color: "purple",
        info: "Kamen Rider Vice the 2 in 1 rider"
    },
    ultimate_vice: {
        key: "ultimate_vice",
        name: "Ultimate Vice",
        color: "purple",
        info: "{fix later}"
    },
    

    geats: {
        key: "geats",
        name: "Geats",
        color: "whitesmoke",
        info: "one off the fighter in the Desire Grand Prix using 2 raise buckle to access their base form and the one to cause Daybreak timeline in Gotchard"
    },
    geats_IX: {
        key: "geats_IX",
        name: "Geats IX",
        color: "white",
        info: "{fix later}"
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
    rainbow_gotchard: {
        key: "rainbow_gotchard",
        name: "Rainbow Gotchard",
        color: "gold",
        info: "{fix later}"
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
    gavv_valen: {
        key: "gavv_valen",
        name: "Gavv Valen",
        color: "brown",
        info: "{fix later}"
    },
    gavv_master: {
        key: "gavv_master",
        name: "Gavv Master Mode",
        color: "purple",
        info: "{fix later}"
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

    gozyuger: {
        key: "gozyuger",
        name: "Gozyuger",
        color: "red",
        info: "gozyuger is the 50th sentai team and the final sentai for a while"
    },

    zeztz_impact: {
        key: "zeztz_impact",
        name: "Zeztz Impact",
        color: "red",
        info: "based off Kamen Rider Zeztz Impact Form this capsem give the user the power of Impact Form"
    },
    zeztz_transform: {
        key: "zeztz_transform",
        name: "Zeztz Transform",
        color: "orange",
        info: "based off Kamen Rider Zeztz Transform Form this capsem give the user the power of Transform Form",
        gradient: "linear-gradient(90deg, orange, orangered) 1"
    },
    zeztz_wing: {
        key: "zeztz_wing",
        name: "Zeztz Wing",
        color: "rgb(255, 0, 119)",
        info: "based off Kamen Rider Zeztz Wing Form this capsem give the user the power of Wing Form",
        gradient: "linear-gradient(90deg, rgb(255, 0, 119), rgba(187, 4, 89, 1)) 1"
    },
    zeztz_stream: {
        key: "zeztz_stream",
        name: "Zeztz Stream",
        color: "blue",
        info: "based off Kamen Rider Zeztz Stream Form this capsem give the user the power of Stream Form",
        gradient: "linear-gradient(90deg, blue, darkblue) 1"
    },
    zeztz_machinery: {
        key: "zeztz_machinery",
        name: "Zeztz Machinery",
        color: "rgb(0, 255, 255)",
        info: "based off Kamen Rider Zeztz Machinery Form this capsem give the user the power of Machinery Form",
        gradient: "linear-gradient(90deg, rgb(0,255,255), rgba(0, 214, 214, 1)) 1"
    },
    zeztz_projection: {
        key: "zeztz_projection",
        name: "Zeztz Projection",
        color: "rgba(0, 102, 255, 1)",
        info: "based off Kamen Rider Zeztz Projection Form this capsem give the user the power of Projection Form",
        gradient: "linear-gradient(90deg, rgba(0, 102, 255, 1), darkblue) 1"
    },
    zeztz_recovery: {
        key: "zeztz_recovery",
        name: "Zeztz Recovery",
        color: "rgba(30, 255, 0, 1)",
        info: "based off Kamen Rider Zeztz Recovery Form this capsem give the user the power of Recovery Form",
        gradient: "linear-gradient(90deg, rgb(30,255,0), rgba(21, 180, 0, 1)) 1"
    },
    zeztz_barrier: {
        key: "zeztz_barrier",
        name: "Zeztz Barrier",
        color: "rgba(136, 255, 0, 1)",
        info: "based off Kamen Rider Zeztz Barrier Form this capsem give the user the power of Barrier Form",
        gradient: "linear-gradient(90deg, rgb(136,255,0), rgba(0, 177, 59, 1)) 1"
    },
    zeztz_wonder: {
        key: "zeztz_wonder",
        name: "Zeztz Wonder",
        color: "rgba(183, 0, 255, 1)",
        info: "based off Kamen Rider Zeztz Wonder Form this capsem give the user the power of Wonder Form",
        gradient: "linear-gradient(90deg, rgba(183, 0, 255, 1), MediumPurple) 1"
    },
    zeztz_gravity: {
        key: "zeztz_gravity",
        name: "Zeztz Gravity",
        color: "rgba(153, 0, 255, 1)",
        info: "based off Kamen Rider Zeztz Gravity Form this capsem give the user the power of Gravity Form",
        gradient: "linear-gradient(90deg, rgba(153, 0, 255, 1), DarkSlateBlue) 1"
    },
    zeztz_plasma: {
        key: "zeztz_plasma",
        name: "Zeztz Plasma",
        color: "yellow",
        info: "based off Kamen Rider Zeztz Plasma Form this capsem give the user the power of Plasma Form",
        gradient:"linear-gradient(90deg, yellow, gold) 1"
    },
    zeztz_booster: {
        key: "zeztz_booster",
        name: "Zeztz Plasma Booster",
        color: "rainbow",
        info: "based off Kamen Rider Zeztz Plasma Booster Form this capsem give the user the power of Plasma Booster Form",
        gradient:"linear-gradient(90deg, white, wheat) 1"
    },
    zeztz_catastrom: {
        key: "zeztz_catastrom",
        name: "Zeztz Catastrom",
        color: "orange",
        info: "based of Catastrom Form this capsem will make the generic kamen rider transformation"
    },
    zeztz_capsem: {
        key: "zeztz_capsem",
        name: "Zeztz (Capsem Ver)",
        color: "brown",
        info: "came with the DX capsem Dropper"
    },
    zeztz_fashion: {
        key: "zeztz_fashion",
        name: "Zeztz (Fashion Ver)",
        color: "red",
        info: "came with a T-Shirt"
    },
    zeztz_sweets: {
        key: "zeztz_sweets",
        name: "Zeztz (Sweets Ver)",
        color: "brown",
        info: "came with a pack of sweets"
    },
    zeztz_singing: {
        key: "zeztz_singing",
        name: "Zeztz (Singing Ver)",
        color: "darkblue",
        info: "a bonus item for buying Vision CD"
    },
    zeztz_charadeco: {
        key: "zeztz_charadeco",
        name: "Zeztz (Charadeco Ver)",
        color: "red",
        info: "came with the Zeztz Cake"
    },
    zeztz_book: {
        key: "zeztz_book",
        name: "Zeztz (Telemaga Ver)",
        color: "green",
        info: "came with the tv-kun"
    }

};