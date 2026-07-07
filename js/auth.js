// ======================================
// AUTH CONTROL CENTER
// ======================================

(function () {

    const page = location.pathname.split("/").pop();

    const isLogin = localStorage.getItem("cc_login") === "true";

    if (
        page === "login.html" ||
        page === "login"
    ) {

        if (isLogin) {

            location.replace("index.html");

        }

        return;

    }

    if (!isLogin) {

        location.replace("login.html");

    }

})();