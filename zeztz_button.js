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
}

const capsemData = {
    impact: {
        key: "impact",
        name: "Impact",
        color: "red",
        info: "Impact is Zeztz based form ... main weapon is a sword"
    },
    transform: {
        key: "transform",
        name: "Transform",
        color: "orange",
        info: "gives the user the ability to morph their hands/legs into whatever shape they need (etc turning their leg into a spike to stop a car)"
    },
    wing: {
        key: "wing",
        name: "Wing",
        color: "rgb(255, 0, 119)",
        info: "give the user the ability to fly"
    },
    stream: {
        key: "stream",
        name: "Stream",
        color: "blue",
        info: "Stream is Zeztz Second base form, main weapon is a gun"
    },
    machinery: {
        key: "machinery",
        name: "Machinery",
        color: "rgb(0, 255, 255)",
        info: "test"
    },
    projection: {
        key: "projection",
        name: "Projection",
        color: "rgba(0, 102, 255, 1)",
        info: "give the user the ability of cloning themselves",
        extra: "the Clones don't look the same as zeztz",
        extraimg: '<img src="render/projection_clone.png" alt="Zeztz Projection Clone">'
    },
    recovery: {
        key: "recovery",
        name: "Recovery",
        color: "rgba(30, 255, 0, 1)",
        info: "Recovery is Zeztz 3rd base form, main weapon is an axe"
    },
    barrier: {
        key: "barrier",
        name: "Barrier",
        color: "rgba(136, 255, 0, 1)",
        info: "test"
    },
    wonder: {
        key: "wonder",
        name: "Wonder",
        color: "rgba(183, 0, 255, 1)",
        info: "Wonder is Zeztz 4th and final base form, main weapon is a scythe and give the user the ability to change sizes"
    },
    gravity: {
        key: "gravity",
        name: "Gravity",
        color: "rgba(153, 0, 255, 1)",
        info: "test"
    }
};