const express = require('express');

const referenciasRouter = express.Router();

function router(nav) {
  referenciasRouter.route('/').get((req, res) => {
    res.render(
      'referencias',
      {
        nav,
      },
    );
  });
  return referenciasRouter;
}

module.exports = router;
