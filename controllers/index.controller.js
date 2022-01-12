const database = require('../config/db.config.js');
const bookingdetailsTable = database.table('bookingdetails');
const passengerTable = database.table('passenger');
const bookingTable = database.table('booking');
const flightTable = database.table('flight');

function aleatorio() {
    let inferior = 1000000000;
    var numPosibilidades = 99999999999 - 1000000000;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

module.exports = {

    new: async function (req, res) {
        let passid = aleatorio();
        let flightid = aleatorio();
        let bookingid = aleatorio();
        try {
            await passengerTable.insert({
                passid: passid,
                passname: req.body.passname,
                passemail: req.body.passemail,
                passdob: req.body.passdob,
            });
            await flightTable.insert({
                flightid: flightid,
                flightsource: req.body.flightsource,
                flightdest: req.body.flightdest,
                flightdate: req.body.flightdate,
                flightseat: parseInt(req.body.flightseat),
                ticketcost: parseFloat(req.body.flightcost),
            });
            await bookingTable.insert({
                bookingid: bookingid,
                flightid: flightid,
                bookdate: new Date().toISOString().slice(0,10),
            });
            await bookingdetailsTable.insert({
                passid: passid,
                bookingid: bookingid,
            });
            res.redirect("/passenger");
        }catch (err) {
            res.status(500).send({ message: err.message || "Error when creating object." })
        } finally {
            // await database.close();
        }
    },

}

