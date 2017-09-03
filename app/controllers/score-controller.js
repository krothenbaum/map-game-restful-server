import Score from '../models/score';

class ScoreController {
  topscores = async (req, res, next) => {
    try {
      const topScores = await Score.find().sort({score: -1}).limit(10);

      if(!topScores) {
        return res.sendStatus(404);
      }

      res.json(topScores);
    } catch(err) {
      next(err);
    }
  }

  create = async (req, res, next) => {
    const newScore = new Score({name: req.body.name, score: req.body.score});

    try {
      const savedScore = await Score.save(newScore);
      res.status(201).end();
    } catch(err) {
      next(err);
    }
  }
}

export default new ScoreController();
