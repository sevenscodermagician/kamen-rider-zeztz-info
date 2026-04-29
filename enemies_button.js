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
        info: "the third nightmare created by Miyuki Asamiya lingering resentment of heights and anxiety over travelling by plane"
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
        info: "created by Bijogi lingering resentment of a medical condition threatening his livelihood"
    },
    mold: {
        key: "mold",
        name: "Mold Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by a struggling artist-turned-counterfeiter named Taro Atsumi resentment over fear that he's never making something of his own and his greatest works"
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
        info: "created by Nox lingering resentment of his fears and preventing Nox from waking up later the nightmare combine with a blank capsem to become the Shadow Capsem"
    },
    wolf: {
        key: "wolf",
        name: "Wolf Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by Haru Kitazato lingering resentment of guilt for letting Nem get kidnapped under her watch, later the nightmare combine with a blank capsem to become the Wolf Capsem"
    },
    gang_wolf: {
        key: "gang_wolf",
        name: "Gang Wolf Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by Dawn after creating a brand new nightmare from wolf"
    },
    death_game: {
        key: "death_game",
        name: "Death Game Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by Kureha Miyamoto lingering resentment of regret over not being able to save her comrades that died while serving CODE"
    },
    baby: {
        key: "baby",
        name: "Baby Nightmare",
        color: "rgb(46, 1, 97)",
        info: "is a Nightmare that embodies the possibility of nightmares"
    },
    disaster: {
        key: "disaster",
        name: "Disaster Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by Sohta Watari, Tomoko Hira, and other children affected by natural disasters lingering resentment of natural disasters"
    },
    catastrophe_gore: {
        key: "catastrophe_gore",
        name: "Catastrophe Gore Nightmare",
        color: "rgb(46, 1, 97)",
        info: "is a Nightmare that exists within Baku Yorozu. Baku confronted it in an attempt to gain full access to its powers and used the Impact Capsem increase his strength as their fists collided. The Nightmare later allowed it to be absorbed by Baku to create the Dualmare Capsem which manifested on the Zeztz Driver in the real world. "
    },
    blackcat: {
        key: "black-cat",
        name: "Black Cat Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by {} lingering resentment of {}"
    },
    darkness: {
        key: "darkness",
        name: "Zeztz Darkness Nightmare",
        color: "rgb(46, 1, 97)",
        info: "created by zero lingering resentment of completeing Zeztz"
    },
};