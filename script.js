// Pengelolaan angkot
// Sopirnya siapa
// Trayek jalurnya
// Kas atau uang pembayaran angkot
// Penumpang

function Angkot(supir, trayek, penumpang, kas) {
    // Property dan method yang dibutuhkan
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas; 

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if( this.penumpang.length === 0 ) {
            alert('Angkot masih kosong!');
            return false;
        }

        for( var i = 0; i < this.penumpang.length; i++ ) {
            if( this.penumpang[i] === namaPenumpang ) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Dida', ['Kendal', 'Sukodono'], [], 0);

var angkot2 = new Angkot('Fina', ['Wonosobo', 'Dieng'], [], 0);