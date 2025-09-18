function loadenemies(key) {
    var data = enemydata[key];
    if (!data) return;

    var name = document.getElementById("name");
    var render = document.getElementById("render");
    var info = document.getElementById("info");
    name.innerHTML = data.name;
    name.style.color = data.color;
    render.innerHTML = `<img src="render/enemy/nightmare/${data.key}.png" alt="${data.name} nightmare">`;
    info.innerHTML = data.info || "";
}

const enemydata = {
    gun: {
        key: "gun",
        name: "Gun Nightmare",
        color: "rgb(46, 1, 97)",
        info: "The first nightmare seen on screen created in Baku dreams"
    },
    bomber: {
        key: "bomber",
        name: "Bomber Nightmare",
        color: "rgb(46, 1, 97)",
        info: "the second"
    },
};