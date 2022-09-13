const router = require("express").Router();

module.exports = db => {
  router.get("/orders", (request, response) => {
    db.query(`SELECT * FROM orders`).then(({ rows: orders }) => {
      response.json(orders);
      // response.json(
      //   users.reduce(
      //     (previous, current) => ({ ...previous, [current.id]: current }),
      //     {}
      //   )
      // );
    });
  });

  return router;
};
