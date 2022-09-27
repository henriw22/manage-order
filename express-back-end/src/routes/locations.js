const router = require("express").Router();

module.exports = db => {
  router.get("/locations", (request, response) => {
    db.query(`SELECT * FROM locations;`).then(({ rows: locations }) => {
      console.log(response);
      response.json(locations);
    });
  });

  return router;
};
