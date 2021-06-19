const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// combine movie data and genre
// package up to use in redux
router.get('/:id', (req, res) => {
  // query text for sql
  let queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, 
                      STRING_AGG ("genres".name, ', ') AS genre FROM "movies"
                      JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
                      JOIN "genres" ON "genres".id = "movies_genres".genre_id        
                      WHERE "movies".id = $1
                      GROUP BY 1;`;
  // pool the sql query
  pool.query(queryText, [req.params.id])
  .then(result => {
    // console log to see what is sent
    console.log('Result rows:', result.rows);
    res.send(result.rows);
  })
  .catch( (error) => {
    res.sendStatus(500);
  })
})

module.exports = router;