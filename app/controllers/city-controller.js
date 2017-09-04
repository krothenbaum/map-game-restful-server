import City from '../models/city';

class CityController {

  randomcities = async (req, res, next) => {
    try {
      const count = await City.count();
      const random = Math.floor(Math.random() * count);
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
