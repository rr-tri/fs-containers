const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const { getAsync, setAsync } = require('../redis');

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});



// Route to get the todo counter
router.get('/statistics', async (req, res) => {
  try {
    // Get the current value of the counter
    const addedTodos = await getAsync('added_todos');
    res.status(200).json({ added_todos: parseInt(addedTodos) || 0 });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

module.exports = router;
