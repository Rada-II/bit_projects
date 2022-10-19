//zadatak 6.//
function cToF(celsius) {
    var cTemp = celsius;
    var cFahr = 9 * cTemp / 5 + 32;
    var message = cTemp + '\xB0C is ' + cFahr + ' \xB0F.';
    console.log(message);
}
cToF(60);
