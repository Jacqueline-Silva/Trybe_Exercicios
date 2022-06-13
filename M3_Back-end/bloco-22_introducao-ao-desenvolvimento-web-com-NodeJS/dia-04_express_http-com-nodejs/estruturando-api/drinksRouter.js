const express = require('express');
const router = express.Router();

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

router.get('/', function(req, res) {
  res.json(drinks);
});

router.get('/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));
  res.status(200).json(filteredDrinks);
});

router.get('/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredDrinks = drinks.filter((drink) => drink.name.includes(name) && drink.price < +maxPrice);
	res.status(200).json(filteredDrinks);
});

router.get('/:id', function(req, res) {
  const { id } = req.params;
  const drinkId = drinks.find((drink) => drink.id === +id)

  if (!drinkId) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drinkId);
});

module.exports = router;