const SETTING_MENU = [
    {
        id: "account",
        icon: "fa-solid fa-user",
        title: "Account",
        desc: "Kelola akun & password"
    },
    {
        id: "menu",
        icon: "fa-solid fa-bars",
        title: "Menu Management",
        desc: "Atur menu sidebar"
    },
    {
        id: "api",
        icon: "fa-solid fa-cloud",
        title: "API Management",
        desc: "Google Apps Script"
    },
    {
        id: "bot",
        icon: "fa-solid fa-robot",
        title: "Bot",
        desc: "Telegram Bot"
    },
    {
        id: "mirror",
        icon: "fa-solid fa-desktop",
        title: "Mirror Device",
        desc: "ADB & SCRCP"
    },
    {
        id: "appearance",
        icon: "fa-solid fa-palette",
        title: "Appearance",
        desc: "Tema aplikasi"
    },
    {
        id: "backup",
        icon: "fa-solid fa-database",
        title: "Backup & Restore",
        desc: "Backup data"
    },
    {
        id: "security",
        icon: "fa-solid fa-shield-halved",
        title: "Security",
        desc: "Keamanan aplikasi"
    },
    {
        id: "about",
        icon: "fa-solid fa-circle-info",
        title: "About",
        desc: "Informasi aplikasi"
    }
];

function renderSetting(){

    return `

<div class="setting-page">

    <div class="setting-sidebar">

        <div id="settingMenu"></div>

    </div>

    <div class="setting-content">

        <div id="settingContent"></div>

    </div>

</div>

`;

}
function loadSetting(menu = "account"){

    renderSettingMenu(menu);

    renderSettingContent(menu);

}

function renderSettingMenu(active){

    const menu = document.getElementById("settingMenu");

    if(!menu) return;

    menu.innerHTML = "";

    SETTING_MENU.forEach(item=>{

        menu.innerHTML += `

<div
class="setting-menu-item ${active===item.id?'active':''}"
onclick="loadSetting('${item.id}')">

    <div class="setting-menu-left">

        <i class="${item.icon}"></i>

        <div>

            <div class="setting-menu-title">

                ${item.title}

            </div>

            <div class="setting-menu-desc">

                ${item.desc}

            </div>

        </div>

    </div>

    <i class="fa-solid fa-chevron-right"></i>

</div>

`;

    });

}

function renderSettingContent(menu){

    const content = document.getElementById("settingContent");

    if(!content) return;

    switch(menu){

        case "account":

            content.innerHTML = renderSettingAccount();

            break;

        case "menu":

            content.innerHTML = renderSettingMenuManagement();

            break;

        case "api":

            content.innerHTML = renderSettingAPI();

            break;

        case "bot":

            content.innerHTML = renderSettingBot();

            break;

        case "mirror":

            content.innerHTML = renderSettingMirror();

            break;

        case "appearance":

            content.innerHTML = renderSettingAppearance();

            break;

        case "backup":

            content.innerHTML = renderSettingBackup();

            break;

        case "security":

            content.innerHTML = renderSettingSecurity();

            break;

        case "about":

            content.innerHTML = renderSettingAbout();

            break;

    }

}

document.addEventListener("click",()=>{

    if(document.querySelector(".setting-page")){

        loadSetting();

    }

});
function renderSettingAccount(){

    return `

<div class="setting-title">

    👤 Account

</div>

<div class="setting-subtitle">

    Kelola informasi akun administrator.

</div>

<div class="setting-grid">

    <div class="setting-card">

        <div class="setting-card-title">

            Informasi Akun

        </div>

        <div class="setting-form">

            <div>

                <label>Nama</label>

                <input
                    type="text"
                    id="settingNama"
                    value="${localStorage.getItem("nama") || "Administrator"}">

            </div>

            <div>

                <label>Role</label>

                <input
                    type="text"
                    value="${localStorage.getItem("role") || "Admin"}"
                    readonly>

            </div>

            <div>

                <label>Username</label>

                <input
                    type="text"
                    value="Administrator"
                    readonly>

            </div>

            <button
                class="btn setting-save"
                onclick="saveAccountSetting()">

                <i class="fa-solid fa-floppy-disk"></i>

                Simpan Perubahan

            </button>

        </div>

    </div>



    <div class="setting-card">

        <div class="setting-card-title">

            Ubah Password

        </div>

        <div class="setting-form">

            <div>

                <label>Password Lama</label>

                <input
                    type="password"
                    id="oldPassword">

            </div>

            <div>

                <label>Password Baru</label>

                <input
                    type="password"
                    id="newPassword">

            </div>

            <div>

                <label>Konfirmasi Password</label>

                <input
                    type="password"
                    id="confirmPassword">

            </div>

            <button
                class="btn setting-save"
                onclick="changePassword()">

                <i class="fa-solid fa-key"></i>

                Update Password

            </button>

        </div>

    </div>

</div>

`;

}

function saveAccountSetting(){

    const nama = document
        .getElementById("settingNama")
        .value
        .trim();

    localStorage.setItem("nama", nama);

    const loginName = document.getElementById("loginName");

    if(loginName){

        loginName.textContent = nama;

    }

    alert("Nama berhasil diperbarui.");

}

function changePassword(){

    const oldPass =
        document.getElementById("oldPassword").value;

    const newPass =
        document.getElementById("newPassword").value;

    const confirm =
        document.getElementById("confirmPassword").value;

    if(oldPass===""){

        alert("Masukkan password lama.");

        return;

    }

    if(newPass===""){

        alert("Masukkan password baru.");

        return;

    }

    if(newPass!==confirm){

        alert("Konfirmasi password tidak sama.");

        return;

    }

    alert("Fitur ganti password akan dihubungkan ke database.");

}
function renderSettingMenuManagement(){

    const menus = [
        "Home",
        "Daily Member OLG",
        "Daily Member IDN",
        "Fairplay Lottery",
        "Bot",
        "Mirror Device",
        "Withdraw OLG",
        "Withdraw IDN",
        "Laporan",
        "Setting"
    ];

    return `

<div class="setting-title">

    🗂 Menu Management

</div>

<div class="setting-subtitle">

    Atur menu yang ditampilkan pada sidebar.

</div>

<div class="setting-card">

    <div class="setting-card-title">

        Daftar Menu

    </div>

    <div class="setting-form">

        ${menus.map((menu,index)=>`

        <div class="setting-switch">

            <span>${menu}</span>

            <input
                type="checkbox"
                id="menu_${index}"
                checked>

        </div>

        `).join("")}

        <button
            class="btn setting-save"
            onclick="saveMenuManagement()">

            <i class="fa-solid fa-floppy-disk"></i>

            Simpan Pengaturan

        </button>

    </div>

</div>

`;

}

function saveMenuManagement(){

    const menus = [];

    document
        .querySelectorAll("[id^='menu_']")
        .forEach((item,index)=>{

            menus.push({

                id:index,

                aktif:item.checked

            });

        });

    localStorage.setItem(
        "cc_menu_setting",
        JSON.stringify(menus)
    );

    alert("Pengaturan menu berhasil disimpan.");

}
function renderSettingAPI(){

    const gas =
        localStorage.getItem("cc_gas_url") || "";

    const supabaseUrl =
        localStorage.getItem("cc_supabase_url") || "";

    const supabaseKey =
        localStorage.getItem("cc_supabase_key") || "";

    return `

<div class="setting-title">

    🌐 API Management

</div>

<div class="setting-subtitle">

    Pengaturan koneksi aplikasi.

</div>

<div class="setting-grid">

    <div class="setting-card">

        <div class="setting-card-title">

            Google Apps Script

        </div>

        <div class="setting-form">

            <div>

                <label>API URL</label>

                <input
                    id="gasUrl"
                    type="text"
                    value="${gas}"
                    placeholder="https://script.google.com/macros/...">

            </div>

        </div>

    </div>

    <div class="setting-card">

        <div class="setting-card-title">

            Supabase

        </div>

        <div class="setting-form">

            <div>

                <label>Project URL</label>

                <input
                    id="supabaseUrl"
                    type="text"
                    value="${supabaseUrl}"
                    placeholder="https://xxxxx.supabase.co">

            </div>

            <div>

                <label>Anon Key</label>

                <input
                    id="supabaseKey"
                    type="password"
                    value="${supabaseKey}"
                    placeholder="Supabase Anon Key">

            </div>

        </div>

    </div>

    <div class="setting-card">

        <div class="setting-card-title">

            Status

        </div>

        <div class="setting-form">

            <div class="setting-switch">

                <span>Google Apps Script</span>

                <strong style="color:#16a34a;">Ready</strong>

            </div>

            <div class="setting-switch">

                <span>Supabase</span>

                <strong style="color:#16a34a;">Ready</strong>

            </div>

            <button
                class="btn setting-save"
                onclick="saveAPISetting()">

                <i class="fa-solid fa-floppy-disk"></i>

                Simpan Pengaturan

            </button>

        </div>

    </div>

</div>

`;

}

function saveAPISetting(){

    localStorage.setItem(
        "cc_gas_url",
        document.getElementById("gasUrl").value.trim()
    );

    localStorage.setItem(
        "cc_supabase_url",
        document.getElementById("supabaseUrl").value.trim()
    );

    localStorage.setItem(
        "cc_supabase_key",
        document.getElementById("supabaseKey").value.trim()
    );

    alert("API berhasil disimpan.");

}
function renderSettingAppearance(){

    const theme =
        localStorage.getItem("cc_theme") || "light";

    const sidebar =
        localStorage.getItem("cc_sidebar_color") || "blue";

    const animation =
        localStorage.getItem("cc_animation") || "true";

    return `

<div class="setting-title">

    🎨 Appearance

</div>

<div class="setting-subtitle">

    Atur tampilan aplikasi Control Center.

</div>

<div class="setting-grid">

    <div class="setting-card">

        <div class="setting-card-title">

            Theme

        </div>

        <div class="setting-form">

            <label>

                <input
                    type="radio"
                    name="theme"
                    value="light"
                    ${theme==="light"?"checked":""}>

                Light

            </label>

            <label>

                <input
                    type="radio"
                    name="theme"
                    value="dark"
                    ${theme==="dark"?"checked":""}>

                Dark

            </label>

        </div>

    </div>

    <div class="setting-card">

        <div class="setting-card-title">

            Sidebar Color

        </div>

        <div class="setting-form">

            <select id="sidebarColor">

                <option value="blue" ${sidebar==="blue"?"selected":""}>
                    Blue
                </option>

                <option value="green" ${sidebar==="green"?"selected":""}>
                    Green
                </option>

                <option value="purple" ${sidebar==="purple"?"selected":""}>
                    Purple
                </option>

                <option value="dark" ${sidebar==="dark"?"selected":""}>
                    Dark
                </option>

            </select>

        </div>

    </div>

    <div class="setting-card">

        <div class="setting-card-title">

            Animation

        </div>

        <div class="setting-form">

            <div class="setting-switch">

                <span>Enable Animation</span>

                <input
                    id="enableAnimation"
                    type="checkbox"
                    ${animation==="true"?"checked":""}>

            </div>

        </div>

    </div>

</div>

<div style="margin-top:25px;">

<button
class="btn"
onclick="saveAppearanceSetting()">

<i class="fa-solid fa-floppy-disk"></i>

Simpan Pengaturan

</button>

</div>

`;

}

function saveAppearanceSetting(){

    const theme =
        document.querySelector(
            "input[name='theme']:checked"
        ).value;

    localStorage.setItem(
        "cc_theme",
        theme
    );

    localStorage.setItem(
        "cc_sidebar_color",
        document.getElementById("sidebarColor").value
    );

    localStorage.setItem(
        "cc_animation",
        document.getElementById("enableAnimation").checked
    );

    alert("Pengaturan berhasil disimpan.");

}
function renderSettingBackup(){

    return `

<div class="setting-title">

    📂 Backup & Restore

</div>

<div class="setting-subtitle">

    Backup atau Restore seluruh pengaturan aplikasi.

</div>

<div class="setting-grid">

    <div class="setting-card">

        <div class="setting-card-title">

            Backup

        </div>

        <p style="color:#64748b;margin-bottom:20px;">

            Simpan seluruh konfigurasi aplikasi ke file JSON.

        </p>

        <button
            class="btn"
            onclick="backupSetting()">

            <i class="fa-solid fa-download"></i>

            Backup Setting

        </button>

    </div>

    <div class="setting-card">

        <div class="setting-card-title">

            Restore

        </div>

        <p style="color:#64748b;margin-bottom:20px;">

            Muat kembali konfigurasi dari file backup.

        </p>

        <input
            type="file"
            id="restoreFile"
            accept=".json"
            onchange="restoreSetting(event)">

        <label
            class="btn"
            for="restoreFile">

            <i class="fa-solid fa-upload"></i>

            Pilih File Backup

        </label>

    </div>

</div>

`;

}

function backupSetting(){

    const data = {};

    for(let i=0;i<localStorage.length;i++){

        const key = localStorage.key(i);

        data[key] = localStorage.getItem(key);

    }

    const blob = new Blob(
        [JSON.stringify(data,null,2)],
        {type:"application/json"}
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "control-center-backup.json";

    a.click();

    URL.revokeObjectURL(url);

}

function restoreSetting(event){

    const file = event.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        try{

            const data = JSON.parse(e.target.result);

            Object.keys(data).forEach(key=>{

                localStorage.setItem(key,data[key]);

            });

            alert("Restore berhasil. Silakan refresh aplikasi.");

        }catch(err){

            alert("File backup tidak valid.");

        }

    };

    reader.readAsText(file);

}
function renderSettingSecurity(){

    const autoLogin =
        localStorage.getItem("cc_auto_login") || "true";

    const remember =
        localStorage.getItem("cc_remember_login") || "true";

    const timeout =
        localStorage.getItem("cc_session_timeout") || "30";

    return `

<div class="setting-title">

    🔒 Security

</div>

<div class="setting-subtitle">

    Pengaturan keamanan aplikasi.

</div>

<div class="setting-grid">

    <div class="setting-card">

        <div class="setting-card-title">

            Login

        </div>

        <div class="setting-form">

            <div class="setting-switch">

                <span>Auto Login</span>

                <input
                    id="autoLogin"
                    type="checkbox"
                    ${autoLogin==="true"?"checked":""}>

            </div>

            <div class="setting-switch">

                <span>Remember Login</span>

                <input
                    id="rememberLogin"
                    type="checkbox"
                    ${remember==="true"?"checked":""}>

            </div>

        </div>

    </div>



    <div class="setting-card">

        <div class="setting-card-title">

            Session

        </div>

        <div class="setting-form">

            <label>

                Session Timeout (Menit)

            </label>

            <input
                id="sessionTimeout"
                type="number"
                min="5"
                max="480"
                value="${timeout}">

        </div>

    </div>



    <div class="setting-card">

        <div class="setting-card-title">

            Security Action

        </div>

        <div class="setting-form">

            <button
                class="btn"
                onclick="logoutAllDevice()">

                <i class="fa-solid fa-right-from-bracket"></i>

                Logout Sekarang

            </button>

            <button
                class="btn btn-reset"
                onclick="clearSettingCache()">

                <i class="fa-solid fa-trash"></i>

                Hapus Cache

            </button>

        </div>

    </div>

</div>

<div style="margin-top:25px;">

<button
class="btn"
onclick="saveSecuritySetting()">

<i class="fa-solid fa-floppy-disk"></i>

Simpan Pengaturan

</button>

</div>

`;

}

function saveSecuritySetting(){

    localStorage.setItem(
        "cc_auto_login",
        document.getElementById("autoLogin").checked
    );

    localStorage.setItem(
        "cc_remember_login",
        document.getElementById("rememberLogin").checked
    );

    localStorage.setItem(
        "cc_session_timeout",
        document.getElementById("sessionTimeout").value
    );

    alert("Pengaturan Security berhasil disimpan.");

}

function logoutAllDevice(){

    if(!confirm("Logout dari aplikasi sekarang?")) return;

    localStorage.removeItem("cc_login");

    location.href="login.html";

}

function clearSettingCache(){

    if(!confirm("Hapus cache aplikasi?")) return;

    Object.keys(localStorage).forEach(key=>{

        if(key.startsWith("cc_")){

            localStorage.removeItem(key);

        }

    });

    alert("Cache berhasil dihapus.");

}
function renderSettingAbout(){

    return `

<div class="setting-title">

    ℹ️ About

</div>

<div class="setting-subtitle">

    Informasi aplikasi Control Center.

</div>

<div class="setting-grid">

    <div class="setting-card">

        <div style="text-align:center;">

            <i
                class="fa-solid fa-layer-group"
                style="
                    font-size:70px;
                    color:#2563eb;
                    margin-bottom:20px;
                ">
            </i>

            <h2 style="margin-bottom:8px;">

                Control Center

            </h2>

            <div style="color:#64748b;">

                Management System

            </div>

        </div>

    </div>



    <div class="setting-card">

        <div class="setting-card-title">

            Informasi Aplikasi

        </div>

        <table style="width:100%;border-collapse:collapse;">

            <tr>

                <td style="padding:10px 0;font-weight:600;">Version</td>

                <td>2.0.0</td>

            </tr>

            <tr>

                <td style="padding:10px 0;font-weight:600;">Developer</td>

                <td>Bel</td>

            </tr>

            <tr>

                <td style="padding:10px 0;font-weight:600;">Build</td>

                <td>2026.07</td>

            </tr>

            <tr>

                <td style="padding:10px 0;font-weight:600;">License</td>

                <td>Private</td>

            </tr>

            <tr>

                <td style="padding:10px 0;font-weight:600;">Framework</td>

                <td>HTML • CSS • JavaScript</td>

            </tr>

        </table>

    </div>



    <div class="setting-card">

        <div class="setting-card-title">

            Status Sistem

        </div>

        <div class="setting-switch">

            <span>Application</span>

            <span style="color:#16a34a;font-weight:700;">

                ● Online

            </span>

        </div>

        <div class="setting-switch">

            <span>Google Apps Script</span>

            <span style="color:#16a34a;font-weight:700;">

                ● Ready

            </span>

        </div>

        <div class="setting-switch">

            <span>Supabase</span>

            <span style="color:#16a34a;font-weight:700;">

                ● Connected

            </span>

        </div>

        <div class="setting-switch">

            <span>Storage</span>

            <span style="color:#16a34a;font-weight:700;">

                ● LocalStorage

            </span>

        </div>

    </div>



    <div class="setting-card">

        <div class="setting-card-title">

            Statistik

        </div>

        <div class="setting-switch">

            <span>Total Menu</span>

            <strong>10</strong>

        </div>

        <div class="setting-switch">

            <span>Total Module</span>

            <strong>9</strong>

        </div>

        <div class="setting-switch">

            <span>Environment</span>

            <strong>Production</strong>

        </div>

    </div>

</div>



<div
style="
margin-top:30px;
text-align:center;
color:#94a3b8;
font-size:13px;
">

© 2026 Control Center

<br><br>

Developed by Bel

</div>

`;

}
/* =========================================
   TOAST NOTIFICATION
========================================= */

function showToast(message,type="success"){

    let toast=document.getElementById("ccToast");

    if(!toast){

        toast=document.createElement("div");

        toast.id="ccToast";

        toast.style.position="fixed";
        toast.style.right="25px";
        toast.style.bottom="25px";
        toast.style.padding="14px 22px";
        toast.style.borderRadius="12px";
        toast.style.color="#fff";
        toast.style.fontWeight="600";
        toast.style.zIndex="99999";
        toast.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";
        toast.style.transition=".3s";
        toast.style.opacity="0";
        toast.style.transform="translateY(20px)";

        document.body.appendChild(toast);

    }

    toast.style.background=
        type==="error"
        ?"#ef4444"
        :"#2563eb";

    toast.innerHTML=`
        <i class="fa-solid fa-circle-check"></i>
        ${message}
    `;

    toast.style.opacity="1";
    toast.style.transform="translateY(0)";

    clearTimeout(window.toastTimer);

    window.toastTimer=setTimeout(()=>{

        toast.style.opacity="0";

        toast.style.transform="translateY(20px)";

    },2500);

}