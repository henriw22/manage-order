const router = require("express").Router();

module.exports = db => {
  router.get("/order_items", (request, response) => {
    db.query(`
    SELECT order_items.id, order_items.name, order_items.price, order_items.order_quantity, order_items.description, order_items.img_url, order_items.created_at, order_items.order_date, ARRAY(Select name from locations where item_id = order_items.id) as locations FROM order_items JOIN locations on order_items.id = locations.item_id GROUP BY order_items.id`).then(({ rows: orders }) => {
      response.json(orders);
      // response.json(
      //   users.reduce(
      //     (previous, current) => ({ ...previous, [current.id]: current }),
      //     {}
      //   )
      // );
    });
  });

  router.post("/order_items", (req, res) => {

    db.query(`
      INSERT INTO order_items (name, price, order_quantity, description, img_url, created_at, order_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id;
    `, [req.body.name, req.body.price, req.body.order_quantity, req.body.description, req.body.img_url, req.body.created_at, req.body.order_date])
      .then((result) => {
        res.status(201).json(result.rows[0]);
        const id = result.rows[0].id;
        const locations = req.body.locations;

        locations.map((location) => {
          db.query(`
          INSERT INTO locations (item_id, name)
          VALUES ($1, $2);
        `, [id, `${location.location} at ${location.time}`])
            .then(() => {
              res.status(201).send('successful!');
            });
        });
      });
  });

  return router;
};
