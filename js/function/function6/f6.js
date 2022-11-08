/*6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
ili “not found” ako nema ponavljanja.
Primer 1: "Computer" ->; [8, "C", "r", "pu", "not found"] ,
Primer 2: “Science" ->; [7, "S", "e", "e", "@ index 5"]*/

function stringWithALotConditions (str) {
    var result = [str.length, str[0], str[str.length - 1]];

    if (str.length % 2 === 0) {
      result[3] = str[str.length / 2 - 1] + str[str.length / 2];
    } else {
      result[3] = str[Math.floor(str.length / 2)];
    }

    if ( str.lastIndexOf(str[1]) === 1) {
      result.push("Not found");
    } else {
      result.push("@ index " + str.lastIndexOf(str[1]));
    }

    console.log(result);
  }

  stringWithALotConditions ("Science");