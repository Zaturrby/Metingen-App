var fs = require('fs');
var geojsonArea = require('geojson-area');
var turf = require('turf');

var geom = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var groteBlok = geojsonArea.geometry(geom.features[0].geometry);
var kleineBlok = geojsonArea.geometry(geom.features[1].geometry);
var nutsBlok = geojsonArea.geometry(geom.features[2].geometry);
var macBlok = geojsonArea.geometry(geom.features[3].geometry);
var boerBlok = geojsonArea.geometry(geom.features[4].geometry);
var bebouwd = geojsonArea.geometry(geom.features[5].geometry);

console.log("");
console.log("----------------------------------------");
console.log("");

console.log("");
console.log("Oppervlakte geometrie:");
console.log("");

console.log("Het kleine blok waarin de Mac Donalds zit: ", macBlok, " m2");
console.log("Het blok achter de Mac Donalds waarin Fa. Boer komt: ", boerBlok, " m2");
console.log("Het blok bestemd voor nutsvoorzieningen: ", nutsBlok, " m2");
console.log("Het grote blok bestemd voor detailhandel: ", groteBlok, " m2");
console.log("Het kleine blok bestemd voor detailhandel: ", kleineBlok, " m2");
console.log("Het bebouwde gebied in het grote gebied bestemd voor detailhandel: ", bebouwd, " m2");

console.log("");
console.log("Berekeningen:");
console.log("");

console.log("Van Wendel (1/4 van de bebouwing van het blok waar Fa. Boer in komt): ", (1/4) * boerBlok, " m2");
console.log("Bebouwd als detailhandel + van Wendel (1/4 van de bebouwing): ", bebouwd + (1/4) * boerBlok, " m2");
console.log("Bebouwd als detailhandel + van Wendel + Fa. Boer en tuincentrum: ", bebouwd + boerBlok, " m2");
console.log("Officiele detailhandelbestemming: ", kleineBlok + groteBlok, " m2");
console.log("Detailhandelsbestemming met legalisering van Wendel, Tuincentrum en Fa. Boer: ", groteBlok + boerBlok + kleineBlok, " m2");

console.log("");
console.log("----------------------------------------");
console.log("");