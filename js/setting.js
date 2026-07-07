function renderSetting() {
    return `
        <div class="setting-list">

            <div class="setting-item">

                <div>
                    <div class="setting-name">
                        Tema
                    </div>

                    <div class="setting-desc">
                        Pengaturan tampilan aplikasi
                    </div>
                </div>

                <button class="btn">
                    Pengaturan
                </button>

            </div>

            <div class="setting-item">

                <div>
                    <div class="setting-name">
                        Backup Data
                    </div>

                    <div class="setting-desc">
                        Backup seluruh data aplikasi
                    </div>
                </div>

                <button class="btn">
                    Backup
                </button>

            </div>

            <div class="setting-item">

                <div>
                    <div class="setting-name">
                        Restore Data
                    </div>

                    <div class="setting-desc">
                        Mengembalikan data dari file backup
                    </div>
                </div>

                <button class="btn">
                    Restore
                </button>

            </div>

        </div>
    `;
}