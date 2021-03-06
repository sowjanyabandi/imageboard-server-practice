const { Router } = require("express");
const Image = require("./model");
router = new Router();
router.get("/image", (request, response, next) => {
  Image.findAll()
    .then(images => response.send(images))
    .catch(next);
});
module.exports = router;
