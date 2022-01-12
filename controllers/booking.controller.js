const database = require('../config/db.config.js');
const booking = database.table('booking');

module.exports = {
    get: async function (req, res) {
        const query = {
            columns: ['bookingid', 'flightid', 'bookdate'],
            keySet: {
              all: true,
            },
        };        
        try {
            const [rows] = await booking.read(query);
            let result = rows.map(row => row.toJSON());
            res.render('booking/list', { data: result });
            
            //let result = [{ passid: 1, passname: "George Henriquez", passemail: "ghenriqu@espol.edu.ec", passdob: "2022-01-05" }]
            //res.render('passenger/list', { data: result });
        } catch (err) {
            res.status(500).send({ message: err.message || "Error when retrieving passengers." })
        } finally {
            //await database.close();
        }
    },
    show: async function (req, res) {
        const query = {
            sql: `SELECT bookingid, flightid, bookdate 
                FROM booking WHERE bookingid = ${req.params.id}`,
        };
        try {
            const [rows] = await database.run(query);
            let result = rows.map(row => row.toJSON());
            res.render('booking/show', { data: result[0] });
        } catch (err) {
            res.status(500).send({ message: err.message || "Error when retrieving passenger." })
        } finally {
            //await database.close();
        }
    },
    update: async function (req, res) {
        var id = req.params.id;
        let fields = {
            bookingid: id,
            flightid: req.body.flightid,
            bookdate: req.body.bookdate,
        }
        console.log(fields);
        try {
            await booking.update(fields);
            res.redirect("/booking");
        } catch (err) {
            res.status(500).send({ message: err.message || "Error when updating passenger." })
        } finally {
            //await database.close();
        }
    },
}