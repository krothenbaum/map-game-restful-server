import { expect } from 'chai';
import server from '../../utils/server.mock';
import Score from '../../../app/models/score';
import ScoreFactory from '../../factories/score-factory';

describe(`Score API Endpoint`, () => {
  before(() => {
    return Score.remove({})
      .then(() => Score.create(ScoreFactory.generateList(10)))
  });

  describe('TOP SCORES', () => {
    it('should return the top 10 scores', done => {
      server.get(`/api/score/top`)
        .end((err, res) => {
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(10);
          const expectedKeys = ['name','score'];
          res.body.forEach(score => {
            expect(score).to.be.a('object');
            expect(score).to.include.keys(expectedKeys);
          })
          done();
        });
    });
  });

  describe('NEW SCORE', () => {
    it('should post a new score', done => {
      const newScore = ScoreFactory.generateList(1);
      server.post('/api/score')
      .send(newScore[0])
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
    });
  });
});
