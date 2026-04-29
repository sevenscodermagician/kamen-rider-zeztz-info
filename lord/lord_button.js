function loadCapsem(key) {
    var data = capsemData[key];
    if (!data) return;

    var name = document.getElementById("name");
    var capsem = document.getElementById("capsem");
    var render = document.getElementById("render");
    var info = document.getElementById("info");
    var extra = document.getElementById("extra");
    var extraimg = document.getElementById("extraimg");
    var capsem_gif = document.getElementById("capsem_gif");

    name.innerHTML = data.name;
    name.style.color = data.color;
    capsem.innerHTML = `<img src="../capsem/${data.key}.png" width="200" height="200" alt="${data.key} capsem">`;
    render.innerHTML = `<img src="../render/${data.key}.png" alt="${data.name}">`;
    info.innerHTML = data.info || "";
    extra.innerHTML = data.extra || "";
    extraimg.innerHTML = data.extraimg || "";
    capsem_gif.innerHTML = `<img src="../capsem/gif/${data.key}.gif" alt="${data.key}.gif" width="250" height="250">`;

    if (key == "extra"){
        loadtable(1)
    }else{
        loadtable(0)
    }

    const box = document.getElementById('box');
    const box2 = document.getElementById('box2');
    const driverbox = document.getElementById('driverbox');

    if (data.color === "rainbow") {
        name.style.backgroundImage = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        name.style.backgroundSize = "100%";
        name.style.backgroundRepeat = "no-repeat";
        name.style.webkitBackgroundClip = "text";
        name.style.webkitTextFillColor = "transparent";


        const rainbowGradient = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        box.style.borderImage = rainbowGradient + " 1";
        box2.style.borderImage = rainbowGradient + " 1";
        driverbox.style.borderImage = rainbowGradient + " 1";
    } else {
        name.style.background = "";
        name.style.webkitBackgroundClip = "";
        name.style.webkitTextFillColor = "";
        name.style.color = data.color || "";

        box.style.borderImage = data.gradient || "";
        box2.style.borderImage = data.gradient || "";
        driverbox.style.borderImage = data.gradient || "";
    }
}

const capsemData = {
    extra: {
        key: "extra",
        name: "Extra",
        color: "purple",
        info: "Extra is used mainly used by Lord 3",
        gradient:"linear-gradient(90deg, purple, rgb(41, 2, 66)) 1"
    },
    shock: {
        key: "shock",
        name: "Shock",
        color: "yellow",
        info: "Shock is used mainly by Lord 5",
        gradient:"linear-gradient(90deg, yellow, rgb(119, 107, 2)) 1"
    },
    panic: {
        key: "panic",
        name: "Panic",
        color: "darkblue",
        info: "Panic is used mainly by lord 6",
        gradient:"linear-gradient(90deg, darkblue, rgb(0, 7, 99)) 1"
    },
    lord_booster: {
        key: "lord_booster",
        name: "Lord Booster",
        color: "rainbow",
        info: "Lord Booster is used mainly used by Lord 3 and increase lord 3 power",
        gradient:"linear-gradient(90deg, purple, rgb(41, 2, 66)) 1"
    }
};

function loadriver(num){
}

function loadtable(num) {
    const box = document.getElementById("box");

    if (num === 1) {
        box.innerHTML = `
        <table class="center" id="box">
            <tr>
                <th><button onclick="loadCapsem('extra')"><img src="../capsem/extra.png" width="50" height="50" alt="extra"></button></th>
                <th><button onclick="loadCapsem('lord_booster')"><img src="../capsem/lord_booster.png" width="50" height="50" alt="Lord Booster"></button></th>
                <th><button onclick="loadCapsem('shock')"><img src="../capsem/shock.png" width="50" height="50" alt="shock"></button></th>
                <th><button onclick="loadCapsem('panic')"><img src="../capsem/panic.png" width="50" height="50" alt="panic"></button></th>
            </tr>
        </table>
        `;
    } else {
        box.innerHTML = `
        <table class="center" id="box">
            <tr>
                <th><button onclick="loadCapsem('extra')"><img src="../capsem/extra.png" width="50" height="50" alt="extra"></button></th>
                <th><button onclick="loadCapsem('shock')"><img src="../capsem/shock.png" width="50" height="50" alt="shock"></button></th>
                <th><button onclick="loadCapsem('panic')"><img src="../capsem/panic.png" width="50" height="50" alt="panic"></button></th>
            </tr>
        </table>
        `;
    }
}

loadCapsem('extra')