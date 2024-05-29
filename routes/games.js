const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsVoteRequest, checkIsGameExists } = require('../middlewares/games');
const { sendAllGames, sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");




gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth,  updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;