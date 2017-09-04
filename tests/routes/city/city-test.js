import { expect } from 'chai';
import server from '../../utils/server.mock';
import City from '../../../app/models/city';
import CityFactory from '../../factories/city-factory';

describe(`Score API Endpoint`, () => {
  before(() => {
    return City.remove({})
      .then(() => City.create(CityFactory.generate(10)))
  });

  describe('Get a city', () => {
    it('should return a single random city', done => {
      server.get('/api/randomcities')
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        // expect(res.body).to.have.lengthOf(1);
        const expectedKeys = ['lat','lon','wikipedia','city'];
        expect(res.body).to.include.keys(expectedKeys);
        done();
      });
    });
  });
});
