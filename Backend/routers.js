"use strict";

module.exports = (app) => {
  var users = require("./controllers");
  app.route("/users").get(users.user).post(users.add);
  app
    .route("/users/:id")
    .get(users.getuser)
    .put(users.update)
    .delete(users.delete);
};
