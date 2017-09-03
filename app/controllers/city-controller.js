import City from '../models/City';

class CityController {
  cities = async (req, res, next) => {
    try {
      const cities = await City.find()

      if(!city) {
        return res.sendStatus(404);
      }

      for (let i = 0; i < 2; i++) {
        let citiesArr = [];
        const randomCity = Math.floor(Math.random() * cities.length);
        citiesArr.push(cities[random]);
      }

      res.json(citiesArr);
    } catch(err) {
      next(err);
    }
  }

  randomcities = async (req, res, next) => {
    try {
      const count = await City.count();
      const random = await Math.floor(Math.random() * count);
      const randomCity = await City.findOne().skip(random);

      if(!randomCity) {
        return res.sendStatus(404);
      }

      res.json(randomCity);
    } catch(err) {
      next(err);
    }
  }
}

export default new CityController();
