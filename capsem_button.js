function loadCapsem(key) {
    var data = capsemData[key];
    if (!data) return;

    var name = document.getElementById("name");
    var capsem = document.getElementById("capsem");
    var info = document.getElementById("info");
    var capsem_gif = document.getElementById("capsem_gif");

    name.innerHTML = data.name;
    capsem.innerHTML = `<img src="capsem/${data.key}.png" width="200" height="200" alt="${data.key} capsem">`;
    info.innerHTML = data.info || "";
    capsem_gif.innerHTML = `<img src="capsem/gif/${data.key}.gif" alt="${data.key}.gif" width="250" height="250">`;

    const box = document.getElementById('box');
    const box2 = document.getElementById('box2');

    if (data.name.toLowerCase() === "void") {
        capsem_gif.innerHTML = "";
    }

    if (data.color === "rainbow") {
        name.style.background = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        name.style.webkitBackgroundClip = "text";
        name.style.webkitTextFillColor = "transparent";

        const rainbowGradient = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        box.style.borderImage = rainbowGradient + " 1";
        box2.style.borderImage = rainbowGradient + " 1";
    } else {
        name.style.background = "";
        name.style.webkitBackgroundClip = "";
        name.style.webkitTextFillColor = "";
        name.style.color = data.color || "";

        box.style.borderImage = data.gradient || "";
        box2.style.borderImage = data.gradient || "";
    }
}


const capsemData = {
    impact: {
        key: "impact",
        name: "Impact",
        color: "red",
        info: "Impact",
        gradient:"linear-gradient(90deg, red, crimson) 1"
    },
    transform: {
        key: "transform",
        name: "Transform",
        color: "orange",
        info: "Transform! give the ability to stretch and morph the hands or legs into whatever shape the user desire",
        gradient:"linear-gradient(90deg, orange, orangered) 1"
    },
    wing: {
        key: "wing",
        name: "Wing",
        color: "rgb(255, 0, 119)",
        info: "Wing! give the ability of flight",
        gradient:"linear-gradient(90deg, rgb(255, 0, 119), rgba(187, 4, 89, 1)) 1"
    },
    stream: {
        key: "stream",
        name: "Stream",
        color: "blue",
        info: "Stream! give the ability to control the air",
        gradient:"linear-gradient(90deg, blue, darkblue) 1"
    },
    machinery: {
        key: "machinery",
        name: "Machinery",
        color: "rgb(0, 255, 255)",
        info: "Machinery!",
        gradient:"linear-gradient(90deg, rgb(0,255,255), rgba(0, 214, 214, 1)) 1"
    },
    projection: {
        key: "projection",
        name: "Projection",
        color: "rgba(0, 102, 255, 1)",
        info: "Projection! give the ability to clone themselves",
        gradient:"linear-gradient(90deg, rgba(0, 102, 255, 1), darkblue) 1"
    },
    recovery: {
        key: "recovery",
        name: "Recovery",
        color: "rgba(30, 255, 0, 1)",
        info: "Recovery! give the ability to heal others",
        gradient:"linear-gradient(90deg, rgb(30,255,0), rgba(21, 180, 0, 1)) 1"
    },
    barrier: {
        key: "barrier",
        name: "Barrier",
        color: "rgba(136, 255, 0, 1)",
        info: "Barrier! ability allow to create a barrier",
        gradient:"linear-gradient(90deg, rgb(136,255,0), rgba(0, 177, 59, 1)) 1"
    },
    wonder: {
        key: "wonder",
        name: "Wonder",
        color: "rgba(183, 0, 255, 1)",
        info: "Wonder",
        gradient:"linear-gradient(90deg, rgba(183, 0, 255, 1), MediumPurple) 1"
    },
    gravity: {
        key: "gravity",
        name: "Gravity",
        color: "rgba(153, 0, 255, 1)",
        info: "Gravity",
        gradient:"linear-gradient(90deg, rgba(153, 0, 255, 1), DarkSlateBlue) 1"
    },
    CODE: {
        key: "CODE",
        name: "CODE",
        color: "rgba(43, 40, 44, 1)",
        info: "CODE capsem never used to transform only used in Zeztz Gear",
        gradient:"linear-gradient(90deg, rgba(43, 40, 44, 1), gray) 1"
        
    },
    erase: {
        key: "erase",
        name: "Erase",
        color: "orange",
        info: "Erase Capsem with the ability to erase things including capsems",
        gradient:"linear-gradient(90deg, white, orange) 1"
    },
    plasma: {
        key: "plasma",
        name: "Plasma",
        color: "yellow",
        info: "zeztz first powerup!",
        gradient:"linear-gradient(90deg, yellow, gold) 1"
    },
    booster: {
        key: "booster",
        name: "Booster",
        color: "rainbow",
        info: "zeztz plasma powerup... powerup!",
        gradient:"linear-gradient(90deg, white, wheat) 1"
    },
    void: {
        key: "void",
        name: "Void",
        color: "black",
        info: "a capsem that had it abilites erase.",
        gradient:"linear-gradient(90deg, black, black) 1"
    }
};