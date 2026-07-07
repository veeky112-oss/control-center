function openPage(page) {

    renderMenu(page);

    const title = document.getElementById("pageTitle");
    const content = document.getElementById("content");

    switch (page) {

        case "home":
            title.textContent = "Home";
            content.innerHTML = renderHome();
            break;

        case "member":
            title.textContent = "Member";
            content.innerHTML = renderMember();
            break;

        case "laporan":
            title.textContent = "Laporan";
            content.innerHTML = renderLaporan();
            break;

        case "setting":
            title.textContent = "Setting";
            content.innerHTML = renderSetting();
            break;

        default:
            title.textContent = "Home";
            content.innerHTML = renderHome();
            break;
    }

}