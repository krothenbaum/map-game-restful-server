import { expect } from 'chai';
import server from '../../utils/server.mock';
import City from '../../../app/models/city';
import CityFactory from '../../factories/city-factory';

describe(`Score API Endpoint`, () => {
  before(() => {
    return City.remove({})
      .then(() => City.create(CityFactory.generate(10)))
  });

  describe('Get Cities', () => {
    it('should return an array of 3 cities', done => {
      server.get(`/api/cities`)
        .end((err, res) => {
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.lengthOf(3);
          const expectedKeys = ['lat','lon','wikipedia','city'];
          res.body.forEach(city => {
            expect(city).to.be.a('object');
            expect(city).to.include.keys(expectedKeys);
          })
          done();
        });
    });
  });

  describe('Get a city', () => {
    it('should return a single random city', done => {
      server.get('/api/randomcity')
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.lengthOf(1);
        const expectedKeys = ['lat','lon','wikipedia','city'];
        res.body.forEach(city => {
          expect(city).to.be.a('object');
          expect(city).to.include.keys(expectedKeys);
        })
        done();
      });
    });
  });
});
