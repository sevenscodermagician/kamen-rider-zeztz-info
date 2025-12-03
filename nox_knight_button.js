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
    capsem.innerHTML = `<img src="capsem/${data.key}.png" width="200" height="200" alt="${data.key} capsem">`;
    render.innerHTML = `<img src="render/${data.key}.png" alt="Zeztz ${data.name}">`;
    info.innerHTML = data.info || "";
    extra.innerHTML = data.extra || "";
    extraimg.innerHTML = data.extraimg || "";
    capsem_gif.innerHTML = `<img src="capsem/gif/${data.key}.gif" alt="${data.key}.gif" width="250" height="250">`;


    const box = document.getElementById('box');
    const box2 = document.getElementById('box2');

    if (data.color === "rainbow") {
        name.style.backgroundImage = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        name.style.backgroundSize = "100%";
        name.style.backgroundRepeat = "no-repeat";
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
    erase: {
        key: "erase",
        name: "Erase",
        color: "white",
        info: `Erase and the driver was restore with recovery after they stole it restoring them both to their original form Nox Knight have the ability to Erase capsems
      <br>
      <img src="capsem/void.png">`,
        gradient: "linear-gradient(90deg, white, orange) 1"
    }
};
