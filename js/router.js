function openPage(page) {

    renderMenu(page);

    const title = document.getElementById("pageTitle");
    const content = document.getElementById("content");

    switch (page) {

        case "home":
            title.textContent = "Home";
            content.innerHTML = renderHome();
            break;

        case "memberOlg":
            title.textContent = "Daily Member OLG";
            content.innerHTML = renderMemberOlg();
            break;

        case "memberIdn":
            title.textContent = "Daily Member IDN";
            content.innerHTML = renderMemberIdn();
            break;

        case "fairplayLottery":
            title.textContent = "Fairplay Lottery";
            content.innerHTML = renderFairplayLottery();
            break;

        case "bot":
            title.textContent = "Bot";
            content.innerHTML = renderBot();
            break;

        case "mirrorDevice":
            title.textContent = "Mirror Device";
            content.innerHTML = renderMirrorDevice();
            break;

        case "withdrawOlg":
            title.textContent = "Withdraw OLG";
            content.innerHTML = renderWithdrawOlg();
            break;

        case "withdrawIdn":
            title.textContent = "Withdraw IDN";
            content.innerHTML = renderWithdrawIdn();
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