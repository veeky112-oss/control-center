const MENU = [
    {
        id: "home",
        title: "Home",
        icon: "fa-solid fa-house"
    },

    {
        title: "Daily Member",
        icon: "fa-solid fa-users",
        children: [
            {
                id: "memberOlg",
                title: "OLG"
            },
            {
                id: "memberIdn",
                title: "IDN"
            }
        ]
    },

    {
        id: "fairplayLottery",
        title: "Fairplay Lottery",
        icon: "fa-solid fa-dice"
    },

    {
        id: "bot",
        title: "Bot",
        icon: "fa-solid fa-robot"
    },

    {
        id: "mirrorDevice",
        title: "Mirror Device",
        icon: "fa-solid fa-mobile-screen"
    },

    {
        title: "Withdraw",
        icon: "fa-solid fa-money-bill-transfer",
        children: [
            {
                id: "withdrawOlg",
                title: "OLG"
            },
            {
                id: "withdrawIdn",
                title: "IDN"
            }
        ]
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

        if(item.children){

            const group = document.createElement("div");

            group.className = "menu-group";

            group.innerHTML = `
                <div class="menu-parent">
                    <div class="menu-left">
                        <i class="${item.icon}"></i>
                        <span>${item.title}</span>
                    </div>
                    <i class="fa-solid fa-chevron-down menu-arrow"></i>
                </div>

                <div class="submenu"></div>
            `;

            const parent = group.querySelector(".menu-parent");
            const submenu = group.querySelector(".submenu");

            parent.onclick = ()=>{

                group.classList.toggle("open");

            };

            item.children.forEach(sub=>{

                const div = document.createElement("div");

                div.className =
                    "submenu-item" +
                    (active===sub.id ? " active" : "");

                div.innerHTML = `
                    <span>${sub.title}</span>
                `;

                div.onclick=(e)=>{

                    e.stopPropagation();

                    openPage(sub.id);

                };

                submenu.appendChild(div);

            });

            menu.appendChild(group);

        }else{

            const div=document.createElement("div");

            div.className=
                "menu-item"+
                (active===item.id?" active":"");

            div.innerHTML=`
                <i class="${item.icon}"></i>
                <span>${item.title}</span>
            `;

            div.onclick=()=>openPage(item.id);

            menu.appendChild(div);

        }

    });

}