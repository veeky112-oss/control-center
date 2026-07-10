function renderMemberOlg() {

    return `

<div class="member-page">

    <div class="upload-card">

        <div class="upload-header">

            <div class="upload-title">
                Member Analyzer
            </div>

            <div class="upload-actions">

                <label class="btn">

                    <input
                        type="file"
                        id="memberFile"
                        accept=".xlsx,.xls"
                        onchange="loadMemberOlgExcel(event)">

                    Choose File

                </label>

                <button
                    class="btn"
                    onclick="copyRekapMemberOlg()">

                    Copy Rekap

                </button>

                <button
                    class="btn btn-reset"
                    onclick="resetMemberOlg()">

                    Reset

                </button>

            </div>

        </div>

        <div
            class="file-name"
            id="memberFileName">

            Belum ada file dipilih

        </div>

    </div>



    <div class="rekap-card">

        <div class="rekap-header">

            <div class="rekap-title">

                Rekap Bank

            </div>

        </div>

        <table class="rekap-table">

            <thead>

                <tr>

                    <th>BCA</th>

                    <th>MANDIRI</th>

                    <th>BNI</th>

                    <th>BRI</th>

                    <th>CIMB</th>

                    <th>SEABANK</th>

                    <th>DANAMON</th>

                    <th>E-WALLET</th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td id="mBCA">0</td>

                    <td id="mMANDIRI">0</td>

                    <td id="mBNI">0</td>

                    <td id="mBRI">0</td>

                    <td id="mCIMB">0</td>

                    <td id="mSEABANK">0</td>

                    <td id="mDANAMON">0</td>

                    <td id="mEWALLET">0</td>

                </tr>

            </tbody>

        </table>

        <div
            class="total-member">

            Total Member :

            <span id="memberTotal">

                0

            </span>

        </div>

    </div>



    <div class="table-card">

        <div class="table-title">

            Preview Data

        </div>

        <table
            class="member-table">

            <thead>

                <tr>

                    <th>No</th>
                    <th>Username</th>
                    <th>Rekening</th>
                    <th>No HP</th>
                    <th>Email</th>
                    <th>Upline</th>
                    <th>Referral</th>
                    <th>Group</th>
                    <th>Status</th>
                    <th>Saldo</th>
                    <th>Total Deposit</th>

                </tr>

            </thead>

            <tbody
                id="memberBody">

            </tbody>

        </table>

    </div>

</div>

`;

}



let memberRows = [];



let memberRekap = {

    BCA:0,

    MANDIRI:0,

    BNI:0,

    BRI:0,

    CIMB:0,

    SEABANK:0,

    DANAMON:0,

    EWALLET:0

};
function loadMemberOlgExcel(event){

    const file = event.target.files[0];

    if(!file) return;

    document.getElementById("memberFileName").textContent=file.name;

    const reader=new FileReader();

    reader.onload=function(e){

        const data=new Uint8Array(e.target.result);

        const workbook=XLSX.read(data,{type:"array"});

        const sheet=workbook.Sheets[workbook.SheetNames[0]];

        memberRows=XLSX.utils.sheet_to_json(sheet,{
            defval:"",
            raw:false
        });

        prosesMemberOlg();

    }

    reader.readAsArrayBuffer(file);

}



function prosesMemberOlg(){

    memberRekap={

        BCA:0,
        MANDIRI:0,
        BNI:0,
        BRI:0,
        CIMB:0,
        SEABANK:0,
        DANAMON:0,
        EWALLET:0

    };

    const tbody=document.getElementById("memberBody");

    tbody.innerHTML="";

    memberRows.forEach((row,index)=>{

        const rekening=(row["Rekening"]||"").toString().trim().toUpperCase();

        if(rekening.startsWith("BCA")){

            memberRekap.BCA++;

        }

        else if(rekening.startsWith("MANDIRI")){

            memberRekap.MANDIRI++;

        }

        else if(rekening.startsWith("BNI")){

            memberRekap.BNI++;

        }

        else if(rekening.startsWith("BRI")){

            memberRekap.BRI++;

        }

        else if(rekening.startsWith("CIMB")){

            memberRekap.CIMB++;

        }

        else if(rekening.startsWith("SEABANK")){

            memberRekap.SEABANK++;

        }

        else if(rekening.startsWith("DANAMON")){

            memberRekap.DANAMON++;

        }

        else if(

            rekening.startsWith("DANA") ||

            rekening.startsWith("OVO") ||

            rekening.startsWith("GOPAY") ||

            rekening.startsWith("LINKAJA")

        ){

            memberRekap.EWALLET++;

        }

        tbody.innerHTML+=`

        <tr>

            <td>${index+1}</td>

            <td>${row["Username"]||""}</td>

            <td>${row["Rekening"]||""}</td>

            <td>${row["No Hp"]||""}</td>

            <td>${row["Email"]||""}</td>

            <td>${row["Upline"]||""}</td>

            <td>${row["Kode Referral"]||""}</td>

            <td>${row["Group"]||""}</td>

            <td>${row["Status"]||""}</td>

            <td>${row["Saldo"]||""}</td>

            <td>${row["Total Deposit"]||""}</td>

        </tr>

        `;

    });

    document.getElementById("memberTotal").textContent=memberRows.length;

    document.getElementById("mBCA").textContent=memberRekap.BCA;

    document.getElementById("mMANDIRI").textContent=memberRekap.MANDIRI;

    document.getElementById("mBNI").textContent=memberRekap.BNI;

    document.getElementById("mBRI").textContent=memberRekap.BRI;

    document.getElementById("mCIMB").textContent=memberRekap.CIMB;

    document.getElementById("mSEABANK").textContent=memberRekap.SEABANK;

    document.getElementById("mDANAMON").textContent=memberRekap.DANAMON;

    document.getElementById("mEWALLET").textContent=memberRekap.EWALLET;

}
function copyRekapMemberOlg(type="data"){

    let text="";

    if(type==="header"){

        text="BCA\tMANDIRI\tBNI\tBRI\tCIMB\tSEABANK\tDANAMON\tE-WALLET\n";

    }

    text+=
        memberRekap.BCA+"\t"+
        memberRekap.MANDIRI+"\t"+
        memberRekap.BNI+"\t"+
        memberRekap.BRI+"\t"+
        memberRekap.CIMB+"\t"+
        memberRekap.SEABANK+"\t"+
        memberRekap.DANAMON+"\t"+
        memberRekap.EWALLET;

    navigator.clipboard.writeText(text);

    alert("Rekap berhasil dicopy.");

}



function resetMemberOlg(){

    memberRows=[];

    memberRekap={

        BCA:0,

        MANDIRI:0,

        BNI:0,

        BRI:0,

        CIMB:0,

        SEABANK:0,

        DANAMON:0,

        EWALLET:0

    };

    document.getElementById("memberBody").innerHTML="";

    document.getElementById("memberTotal").textContent="0";

    document.getElementById("memberFile").value="";

    document.getElementById("memberFileName").textContent="Belum ada file dipilih";

    document.getElementById("mBCA").textContent="0";
    document.getElementById("mMANDIRI").textContent="0";
    document.getElementById("mBNI").textContent="0";
    document.getElementById("mBRI").textContent="0";
    document.getElementById("mCIMB").textContent="0";
    document.getElementById("mSEABANK").textContent="0";
    document.getElementById("mDANAMON").textContent="0";
    document.getElementById("mEWALLET").textContent="0";

}