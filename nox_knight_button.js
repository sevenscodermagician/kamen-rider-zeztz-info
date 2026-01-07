const capsemData = {
    erase: {
        key: "erase",
        name: "Erase",
        color: "white",
        info: `
            Erase and the driver was restored with recovery after they stole it,
            restoring them both to their original form. Nox Knight has the ability
            to erase capsems.
            <br>
            <img src="capsem/void.png">
        `,
        gradient: "linear-gradient(90deg, white, orange) 1"
    },
    shadow: {
        key: "shadow",
        name: "Shadow",
        color: "rgb(72, 0, 82)",
        info: `
            Shadow was created with the essence of the Shadow Nightmare,
            allowing Nox to use shadow power to create objects and living beings.
        `,
        gradient: "linear-gradient(90deg, rgba(29, 0, 63, 1), rgb(46, 1, 97)) 1"
    },
    gun: {
        key: "gun",
        name: "Gun",
        color: "rgba(153, 0, 89, 1)",
        info: `
            Shadow was created with the essence of the Gun Nightmare
        `,
        gradient: "linear-gradient(90deg, rgba(63, 0, 0, 1), rgba(153, 0, 89, 1)) 1"
    },
    wolf: {
        key: "wolf",
        name: "Wolf",
        color: "rgba(173, 147, 0, 1)",
        info: `
            Shadow was created with the essence of the Wolf Nightmare
        `,
        gradient: "linear-gradient(90deg, rgba(102, 92, 0, 1), rgba(139, 137, 0, 1)) 1"
    }
};

function loadCapsem(key) {
    const data = capsemData[key];
    if (!data) return;

    const name = document.getElementById("name");
    const capsem = document.getElementById("capsem");
    const render = document.getElementById("render");
    const info = document.getElementById("info");
    const extra = document.getElementById("extra");
    const extraimg = document.getElementById("extraimg");
    const capsemGif = document.getElementById("capsem_gif");
    const box = document.getElementById("box");
    const box2 = document.getElementById("box2");
    const driverbox = document.getElementById("driverbox");

    name.textContent = data.name;
    info.innerHTML = data.info || "";
    extra.innerHTML = data.extra || "";
    extraimg.innerHTML = data.extraimg || "";

    capsem.innerHTML = `
        <img src="capsem/${data.key}.png" width="200" height="200" alt="${data.key} capsem">
    `;

    render.innerHTML = `
        <img src="render/${data.key}.png" alt="${data.name} render">
    `;

    capsemGif.innerHTML = `
        <img src="capsem/gif/${data.key}.gif" width="250" height="250" alt="${data.key} gif">
    `;

    // Reset styles
    name.style.background = "";
    name.style.webkitBackgroundClip = "";
    name.style.webkitTextFillColor = "";
    name.style.color = data.color || "white";

    box.style.borderImage = data.gradient || "";
    box2.style.borderImage = data.gradient || "";
    driverbox.style.borderImage = data.gradient || "";

    // Rainbow name support
    if (data.color === "rainbow") {
        const rainbow = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        name.style.backgroundImage = rainbow;
        name.style.webkitBackgroundClip = "text";
        name.style.webkitTextFillColor = "transparent";
        box.style.borderImage = `${rainbow} 1`;
        box2.style.borderImage = `${rainbow} 1`;
        driverbox.style.borderImage = `${rainbow} 1`;
    }
}

function loadtable(num) {
    const box = document.getElementById("box");

    if (num === 1) {
        box.innerHTML = `
            <table class="center">
                <tr>
                    <th>
                        <button onclick="loadCapsem('erase')">
                            <img src="capsem/erase.png" width="50" height="50" alt="erase">
                        </button>
                    </th>
                </tr>
            </table>
        `;
        loadCapsem("erase");
    } else {
        box.innerHTML = `
            <table class="center">
                <tr>
                    <th>
                        <button onclick="loadCapsem('shadow')">
                            <img src="capsem/shadow.png" width="50" height="50" alt="shadow">
                        </button>
                        <button onclick="loadCapsem('gun')">
                            <img src="capsem/gun.png" width="50" height="50" alt="gun">
                        </button>
                        <button onclick="loadCapsem('wolf')">
                            <img src="capsem/wolf.png" width="50" height="50" alt="wolf">
                        </button>
                    </th>
                </tr>
            </table>
        `;
        loadCapsem("shadow");
    }
}
