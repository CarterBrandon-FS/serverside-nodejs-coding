const express = require("express");
const router = express.Router();

let items = [
  { id: 1, name: "Baseball Cleats", value: 100 },
  { id: 2, name: "Baseball Glove", value: 200 },
  { id: 3, name: "Baseball Bat", value: 300 },
  { id: 4, name: "Jug Of Baseballs", value: 400 },
];

let nextId = 5;

// GET - all items
router.get("/items", (req, res) => {
  res.status(200).json(items);
});

// GET - by id
router.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.status(200).json(item);
});

// POST - create item
router.post("/items", (req, res) => {
  const { name, value } = req.body;

  if (!name || value === undefined) {
    return res.status(400).json({ message: "Name and value are required" });
  }

  const newItem = { id: nextId++, name, value };
  items.push(newItem);

  res.status(201).json(newItem);
});

// PUT - update item by id
router.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  const { name, value } = req.body;

  if (!name || value === undefined) {
    return res.status(400).json({ message: "Name and value are required" });
  }

  item.name = name;
  item.value = value;

  res.status(200).json(item);
});

// DELETE - delete item by id
router.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const i = items.findIndex((i) => i.id === id);

  if (i === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  const deleted = items.splice(i, 1)[0];
  res.status(200).json(deleted);
});

module.exports = router;
