const router = require("express").Router();

module.exports = db => {
  router.get("/order_items", (request, response) => {
    db.query(`SELECT * FROM order_items`).then(({ rows: orders }) => {
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
