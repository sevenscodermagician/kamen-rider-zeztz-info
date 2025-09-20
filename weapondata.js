function loadWeapon(key) {
    var data = weapondata[key];
    if (!data) return;

    var name = document.getElementById("name");
    var capsem = document.getElementById("Breakam_Zeztzer_sword");
    var info = document.getElementById("info");

    name.innerHTML = data.name;
    name.style.color = data.color;
    Breakam_Zeztzer_sword.innerHTML = `<img src="weapon/${data.key}.png" width="300" height="300" alt="${data.key}">`;
    info.innerHTML = data.info || "";
}

const weapondata = {
    sword: {
        key: "Breakam_Zeztzer_sword",
        name: "Breakam Zeztzer Sword",
        color: "red",
        info: "Impact, Wing and Transform main weapon"
    },
    gun: {
        key: "Breakam_Zeztzer_gun",
        name: "Breakam Zeztzer Gun",
        color: "blue",
        info: "Stream, Projection and Machinery main weapon"
    },
    axe: {
        key: "Breakam_Zeztzer_axe",
        name: "Breakam Zeztzer Axe",
        color: "green",
        info: "Recovery and Barrier main weapon"
    },
    scythe: {
        key: "Breakam_Zeztzer_scythe",
        name: "Breakam Zeztzer Scythe",
        color: "purple",
        info: "Wonder and Gravity main weapon"
    },
};