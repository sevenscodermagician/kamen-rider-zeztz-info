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
        info: "The first nightmare seen on screen created in Baku dreams later the nightmare combine with a blank capsem to become the Gun Capsem"
    },
    bomber: {
        key: "bomber",
        name: "Bomber Nightmare",
        color: "rgb(46, 1, 97)",
        info: "the second nightmare created by Tetsuya Fujimi lingering resentment with the police force."
    },
    crow: {
        key: "crow",
        name: "Crow Nightmare",
        color: "rgb(46, 1, 97)",
        info: "the third nightmare created by Miyuki Asamiya lingering resentment of Heights and anxiety over travelling by plane"
    },
	prison: {
        key: "prison",
        name: "Prison Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by Bijogi lingering resentment guilt and trauma involving an accident with nem"
    },
	poison: {
        key: "poison",
        name: "Poison Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by Bijogi lingering resentment of a medical condition threatening his liveihood"
    },
	mold: {
        key: "mold",
        name: "Mold Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by a struggling artist-turned-counterfeiter name Taro Atsumi resentment over fear that his never making something of his own and his greatest works"
    },
    meteor: {
        key: "meteor",
        name: "Meteor Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by {} lingering resentment of {}"
    },
	shadow: {
        key: "shadow",
        name: "Shadow Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by Nox lingering resentment of hes fears and preventing nox from waking up later the nightmare combine with a blank capsem to become the Shadow Capsem"
    },
    wolf: {
        key: "wolf",
        name: "Wolf Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by {} lingering resentment of {} later the nightmare combine with a blank capsem to become the Wolf Capsem"
    },
    blackcat: {
        key: "black-cat",
        name: "Black Cat Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by {} lingering resentment of {}"
    },
};