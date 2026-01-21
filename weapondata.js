function loadWeapon(key) {
    var data = weapondata[key];
    if (!data) return;

    var name = document.getElementById("zeztzweaponname");
    var capsem = document.getElementById("Breakam_Zeztzer_sword");
    var info = document.getElementById("zeztzweaponinfo");

    name.innerHTML = data.name;
    name.style.color = data.color;
    Breakam_Zeztzer_sword.innerHTML = `<img src="weapon/${data.key}.png" width="300" height="300" alt="${data.key}">`;
    info.innerHTML = data.info || "";

    const box = document.getElementById('box');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    box.style.borderImage = data.gradient ;
    box2.style.borderImage = data.gradient;
    box3.style.borderImage = data.gradient;
}

const weapondata = {
    sword: {
        key: "Breakam_Zeztzer_sword",
        name: "Breakam Zeztzer Sword",
        color: "red",
        info: "Impact, Wing and Transform main weapon",
        gradient:"linear-gradient(90deg, red, crimson) 1",
    },
    gun: {
        key: "Breakam_Zeztzer_gun",
        name: "Breakam Zeztzer Gun",
        color: "blue",
        info: "Stream, Projection and Machinery main weapon",
        gradient:"linear-gradient(90deg, blue, darkblue) 1"
    },
    axe: {
        key: "Breakam_Zeztzer_axe",
        name: "Breakam Zeztzer Axe",
        color: "green",
        info: "Recovery and Barrier main weapon",
        gradient:"linear-gradient(90deg, rgb(30,255,0), rgba(21, 180, 0, 1)) 1"
    },
    scythe: {
        key: "Breakam_Zeztzer_scythe",
        name: "Breakam Zeztzer Scythe",
        color: "purple",
        info: "Wonder and Gravity main weapon",
        gradient:"linear-gradient(90deg, rgba(183, 0, 255, 1), MediumPurple) 1"
    },
};

function plasmaloadWeapon(key) {
    var data = plasmaweapondata[key];
    if (!data) return;

    var name = document.getElementById("plasmaweapon");
    var weapon = document.getElementById("plasmaweaponimage");
    var info = document.getElementById("plasmaweaponinfo");

    name.innerHTML = data.name;
    name.style.color = data.color;
    weapon.innerHTML = `<img src="weapon/${data.key}.png" width="300" height="500" alt="${data.key}">`;
    info.innerHTML = data.info || "";

    const box = document.getElementById('box5');
    const box2 = document.getElementById('box6');
    box.style.borderImage = data.gradient ;
    box2.style.borderImage = data.gradient ;
}

const plasmaweapondata = {
    inazuma_blaster: {
        key: "inazuma_blaster",
        name: "Inazuma Blaster",
        color: "yellow",
        info: "Plasma main weapon",
        gradient:"linear-gradient(90deg, yellow, gold) 1",
    },
    greatsword: {
        key: "inazuma_blaster_greatsword",
        name: "Inazuma Blaster Greatsword mode",
        color: "darkgreen",
        info: "inazuma blaster + Breakam Zeztzer createst he Inazuma Blaster Greatsword",
        gradient:"linear-gradient(90deg, yellow, lime) 1"
    }
};


function noxloadWeapon(key) {
    var data = noxweapondata[key];
    if (!data) return;

    var name = document.getElementById("noxweaponname");
    var weapon = document.getElementById("noxweaponimage");
    var info = document.getElementById("noxweaponinfo");

    name.innerHTML = data.name;
    name.style.color = data.color;
    weapon.innerHTML = `<img src="weapon/${data.key}.png" width="300" height="300" alt="${data.key}">`;
    info.innerHTML = data.info || "";

    const box = document.getElementById('box4');
    const box2 = document.getElementById('box5');
    box.style.borderImage = data.gradient ;
    box2.style.borderImage = data.gradient ;
}

const noxweapondata = {
    breakam_buster: {
        key: "breakam_buster",
        name: "breakam buster calibur mode",
        color: "white",
        info: "nox sword",
        gradient:"linear-gradient(90deg, white, orange) 1",
    },
    breakam_buster_launcher: {
        key: "breakam_buster_launcher",
        name: "breakam buster launcher mode",
        color: "white",
        info: "nox gun",
        gradient:"linear-gradient(90deg, white, orange) 1"
    }
};