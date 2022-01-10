// const database = require('../config/db.config.js');
// const passenger = database.table('passenger');

module.exports = {

    get: async function (req, res) {
        const query = {
            columns: ['passid', 'passname', 'passemail', 'passdob'],
            keySet: {
              all: true,
            },
        };        
        try {
            // const [rows] = await passenger.read(query);
            // let result = rows.map(row => row.toJSON());
            // res.render('passenger/list', { data: result });
            let result = [{ passid: 1, passname: "George Henriquez", passemail: "ghenriqu@espol.edu.ec", passdob: "2022-01-05" }]
            res.render('passenger/list', { data: result });
        } catch (err) {
            res.status(500).send({ message: err.message || "Error when retrieving passengers." })
        } finally {
            // await database.close();
        }
    },

    show: async function (req, res) {
        const query = {
            sql: `SELECT passid, passname, passemail, FORMAT_DATE("%F", passdob) as passdob 
                FROM passenger WHERE passid = ${req.params.id}`,
        };
        try {
            // const [rows] = await database.run(query);
            // let result = rows.map(row => row.toJSON());
            // res.render('flight/show', { data: result[0] });
            let result = { passid: 1, passname: "George Henriquez", passemail: "ghenriqu@espol.edu.ec", passdob: "2022-01-05" }
            res.render('passenger/show', { data: result });
        } catch (err) {
            res.status(500).send({ message: err.message || "Error when retrieving passenger." })
        } finally {
            // await database.close();
        }
    },

    update: async function (req, res) {
        var id = req.params.id;
        let fields = {
            passid: id,
            passname: req.body.passname,
            passemail: req.body.passemail,
            passdob: req.body.passdob,
        }
        console.log(fields)
        try {
            // await passenger.update(fields);
            res.redirect("/passenger");
        } catch (err) {
            res.status(500).send({ message: err.message || "Error when updating passenger." })
        } finally {
            // await database.close();
        }
    },

}

