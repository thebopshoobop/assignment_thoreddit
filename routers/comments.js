const router = require("express").Router();
const { CommentController } = require("../controllers");
const h = require("../helpers");

// router.get("/", (req, res) => {
//   CommentController.getAll()
//     .then(users => res.render("users/index", { users }))
//     .catch(e => res.status(500).send(e.stack));
// });

// router.get("/new", (req, res) => {
//   res.render("users/new");
// });

router.post("/new", (req, res) => {
  if (!req.body.body || !req.body.userId) {
    req.flash("alert", "You must include a comment!");
    res.redirect("back");
  } else {
    CommentController.new(req.body)
      .then(comment => {
        res.redirect("back");
      })
      .catch(e => res.status(500).send(e.stack));
  }
});

// router.get("/:id", (req, res) => {
//   UserController.getById(req.params.id).then(user => {
//     if (user) res.render("users/single", { user });
//     else {
//       req.flash("alert", "User not found");
//       res.redirect(h.usersPath());
//     }
//   });
// });

module.exports = router;
