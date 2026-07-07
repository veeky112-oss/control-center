function renderHome() {
    return `
        <div class="home-grid">

            <div class="stat-card">
                <div class="stat-title">Total Member</div>
                <div class="stat-value">0</div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Laporan Hari Ini</div>
                <div class="stat-value">0</div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Status Server</div>
                <div class="stat-value">Online</div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Versi Aplikasi</div>
                <div class="stat-value">1.0.0</div>
            </div>

        </div>

        <div class="card">
            <div class="card-title">
                Selamat Datang
            </div>

            <div class="card-text">
                Selamat datang di Aplikasi Baru.<br><br>

                Dashboard ini akan menjadi pusat informasi aplikasi.
                Nantinya Anda bisa menambahkan berbagai fitur seperti
                Member, Deposit, Withdraw, Validasi, Laporan,
                Bot, Google Sheets, dan fitur lainnya tanpa mengubah
                struktur aplikasi.
            </div>
        </div>
    `;
}