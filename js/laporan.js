const API =
"https://script.google.com/macros/s/AKfycbxPiTJ7EXEAARKhC6OFAe2O2LBldC8mPyFwg9qYHrt4EFpTPIloo2vLpG5VoAFfs9057g/exec";

function renderLaporan(){

return `

<div class="laporan-page">

    <div class="upload-card">

        <div class="upload-header">

            <div class="upload-title">

                Laporan Harian

            </div>

            <div class="upload-actions">

                <input
                    type="date"
                    id="tanggalLaporan">

                <button
                    class="btn"
                    onclick="loadLaporan()">

                    Tampilkan

                </button>

            </div>

        </div>

    </div>

    <div id="laporanList">

    </div>

</div>

`;

}

function renderBankCard(bank,total,count){

return `

<div class="rekap-card" style="margin-bottom:15px;">

    <div class="rekap-header">

        <div class="rekap-title">

            ${bank}

        </div>

        <button
            class="btn"
            onclick="copyBank('${bank}',${total},${count})">

            COPY

        </button>

    </div>

    <table class="rekap-table">

        <tbody>

            <tr>

                <th style="width:180px">

                    TOTAL

                </th>

                <td>

                    Rp ${Number(total).toLocaleString("id-ID")}

                </td>

            </tr>

            <tr>

                <th>

                    COUNT

                </th>

                <td>

                    ${count}

                </td>

            </tr>

        </tbody>

    </table>

</div>

`;

}

function copyBank(bank,total,count){

    navigator.clipboard.writeText(total + "\t" + count);

    alert(bank + " berhasil dicopy.");

}

async function loadLaporan(){

    const input = document.getElementById("tanggalLaporan");

    if(!input.value){

        alert("Silakan pilih tanggal.");

        return;

    }

    const d = new Date(input.value);

    const bulan = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"
    ];

    const tanggal =
        d.getDate() + " " + bulan[d.getMonth()];

    try{

        const res = await fetch(

            API + "?tanggal=" + encodeURIComponent(tanggal)

        );

        const json = await res.json();

        if(!json.status){

            alert(json.message);

            return;

        }

        const urutan = [
            "BCA",
            "MANDIRI",
            "BNI",
            "BRI",
            "CIMB",
            "SEABANK",
            "DANAMON"
        ];

        let html = "";

        urutan.forEach(bank=>{

            const item = json.banks.find(x=>x.bank===bank);

            html += renderBankCard(

                bank,

                item ? item.total : 0,

                item ? item.count : 0

            );

        });

        document.getElementById("laporanList").innerHTML = html;

    }catch(err){

        console.error(err);

        alert("Gagal mengambil data dari Google Sheets.");

    }

}