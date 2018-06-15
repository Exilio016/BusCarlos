const express = require('express');

const feedRouter = express.Router();

function router(nav) {
  feedRouter.route('/').get((req, res) => {
    res.render(
      'feed',
      {
        nav,
      },
    );
  });
  return feedRouter;
}

module.exports = router;
