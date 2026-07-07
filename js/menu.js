const MENU = [
    {
        id: "home",
        title: "Home",
        icon: "fa-solid fa-house"
    },
    {
        id: "member",
        title: "Member",
        icon: "fa-solid fa-users"
    },
    {
        id: "laporan",
        title: "Laporan",
        icon: "fa-solid fa-chart-column"
    },
    {
        id: "setting",
        title: "Setting",
        icon: "fa-solid fa-gear"
    }
];

function renderMenu(active = "home") {

    const menu = document.getElementById("menu");

    menu.innerHTML = "";

    MENU.forEach(item => {

        const div = document.createElement("div");

        div.className =
            "menu-item" +
            (item.id === active ? " active" : "");

        div.innerHTML = `
            <i class="${item.icon}"></i>
            <span>${item.title}</span>
        `;

        div.onclick = () => openPage(item.id);

        menu.appendChild(div);

    });

}