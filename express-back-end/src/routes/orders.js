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

  router.post("/orders", (req, res) => {

    db.query(`
      INSERT INTO orders (user_id, item_id, created_at, quantity, location)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `, [req.body.user_id, req.body.item_id, req.body.created_at, req.body.quantity, req.body.location])
    .then((result) => {
      res.status(201).json(result.rows[0]);
    });
  });

  return router;
};
