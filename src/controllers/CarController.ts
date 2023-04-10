import Car from "../models/Car";

const CarController = {
  async carList(req: any, res: any) {
    const users = await Car.find();
    res.json(users);
  },

  async carCreate(req: any, res: any) {
    const { car_name, car_year, car_model, car_brand } = req.body;

    let data = {
      car_name,
      car_year,
      car_model,
      car_brand,
    };

    const users = await Car.create(data);

    return res.json(users);
  },
};

export default CarController;
