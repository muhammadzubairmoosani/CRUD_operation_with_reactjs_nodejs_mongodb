const express = require("express");
const router = express.Router();
const { todoSchema } = require("../schemas");

router.post("/", (req, res, next) => {
  todoSchema
    .create(req.body)
    .then(snap => res.send(snap))
    .catch(next);
});

router.get("/", (req, res, next) => {
  todoSchema
    .find({})
    .then(snap => res.send(snap))
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  todoSchema
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      todoSchema
        .findOne({ _id: req.params.id })
        .then(snap => res.send(snap))
        .catch(next);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  todoSchema.findByIdAndRemove({ _id: req.params.id }).then(snap => {
    res.send(snap).catch(next);
  });
});

const todoRoutes = router;
module.exports = todoRoutes;
