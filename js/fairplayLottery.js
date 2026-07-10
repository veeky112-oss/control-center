function renderFairplayLottery(){

    return `

<div class="member-page">

    <div class="upload-card">

        <div class="upload-header">

            <div class="upload-title">

                Fairplay Lottery

            </div>

            <div class="upload-actions">

                <button
                    class="btn"
                    onclick="copyFairplayLottery()">

                    Copy

                </button>

                <button
                    class="btn btn-reset"
                    onclick="resetFairplayLottery()">

                    Reset

                </button>

            </div>

        </div>

<textarea
id="fairplayInput"
placeholder="Paste data disini..."
style="
width:100%;
height:180px;
padding:15px;
font-size:15px;
border:1px solid #ddd;
border-radius:10px;
resize:vertical;
font-family:inherit;
"
oninput="prosesFairplayLottery()"></textarea>

    </div>

<div class="table-card">

    <div class="table-title">

        Hasil Fairplay Lottery

    </div>

<table class="member-table">

<thead>

<tr>

<th style="width:90px;">TEBAK</th>

<th style="width:150px;">BELI</th>

<th style="width:90px;">HASIL</th>

<th style="width:80px;">STATUS</th>

<th style="width:150px;">OUTPUT</th>

</tr>

</thead>

<tbody id="fairplayBody">

</tbody>

</table>

<div class="total-member">

Jumlah Data :

<span id="fairplayTotal">

0

</span>

</div>

</div>

`;

}

let fairplayRows=[];
function prosesFairplayLottery(){

    const input = document
        .getElementById("fairplayInput")
        .value
        .trim();

    fairplayRows = [];

    const tbody = document.getElementById("fairplayBody");

    tbody.innerHTML = "";

    if(input===""){

        document.getElementById("fairplayTotal").textContent="0";

        return;

    }

    const lines = input.split(/\r?\n/);

    lines.forEach(line=>{

        if(line.trim()==="") return;

        const cols = line.split("\t");

        if(cols.length<2) return;

        const tebak = cols[0].trim();

        const beli = cols[1].trim();

        // Hilangkan titik dan ,00
        const angka = Number(
            beli
                .replace(/\./g,"")
                .replace(",00","")
        );

        // Format menjadi 82,200
        const output = angka.toLocaleString("en-US");

        fairplayRows.push({

            tebak:tebak,
            beli:beli,
            hasil:tebak,
            status:"X",
            output:output

        });

    });

    renderFairplayLotteryTable();

}



function renderFairplayLotteryTable(){

    const tbody = document.getElementById("fairplayBody");

    tbody.innerHTML = "";

    fairplayRows.forEach(row=>{

        tbody.innerHTML += `

<tr>

<td>${row.tebak}</td>

<td>${row.beli}</td>

<td>${row.hasil}</td>

<td style="font-weight:bold;color:#16a34a;">
${row.status}
</td>

<td>${row.output}</td>

</tr>

`;

    });

    document.getElementById("fairplayTotal").textContent =
        fairplayRows.length;

}
function copyFairplayLottery(){

    if(fairplayRows.length===0){

        alert("Belum ada data.");

        return;

    }

    let text = "";

    // Header
    text += "TEBAK\tBELI\tHASIL\tSTATUS\tOUTPUT\n";

    fairplayRows.forEach(row=>{

        text +=
            row.tebak + "\t" +
            row.beli + "\t" +
            row.hasil + "\t" +
            row.status + "\t" +
            row.output + "\n";

    });

    navigator.clipboard.writeText(text);

    alert("Hasil berhasil dicopy.");

}



function resetFairplayLottery(){

    fairplayRows = [];

    document.getElementById("fairplayInput").value = "";

    document.getElementById("fairplayBody").innerHTML = "";

    document.getElementById("fairplayTotal").textContent = "0";

}