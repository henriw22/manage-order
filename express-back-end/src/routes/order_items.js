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

  return router;
};
