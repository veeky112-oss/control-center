// ======================================
// CONTROL CENTER LOGIN - SUPABASE
// ======================================

const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const loginMessage = document.getElementById("loginMessage");
const togglePassword = document.getElementById("togglePassword");

// Sudah login?
if (localStorage.getItem("cc_login") === "true") {
    location.href = "index.html";
}

// Login
btnLogin.addEventListener("click", login);

// Enter
username.addEventListener("keypress", e => {
    if (e.key === "Enter") login();
});

password.addEventListener("keypress", e => {
    if (e.key === "Enter") login();
});

// Show Hide Password
togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

async function login() {

    loginMessage.innerHTML = "";

    const id = username.value.trim();
    const pass = password.value.trim();

    if (!id || !pass) {

        loginMessage.innerHTML =
            "ID dan Password wajib diisi.";

        return;

    }

    btnLogin.disabled = true;
    btnLogin.innerHTML = "Loading...";

    try {

        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("username", id)
            .eq("password", pass)
            .eq("status", "AKTIF")
            .limit(1);

        if (error) {

            throw error;

        }

        if (!data || data.length === 0) {

            loginMessage.innerHTML =
                "ID atau Password salah.";

            btnLogin.disabled = false;
            btnLogin.innerHTML = "LOGIN";

            return;

        }

        const user = data[0];

        localStorage.setItem("cc_login", "true");
        localStorage.setItem("nama", user.nama);
        localStorage.setItem("role", user.role);

        location.href = "index.html";

    } catch (err) {

        console.error(err);

        loginMessage.innerHTML =
            "Tidak dapat terhubung ke database.";

    }

    btnLogin.disabled = false;
    btnLogin.innerHTML = "LOGIN";

}