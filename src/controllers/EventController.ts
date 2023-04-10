import Event from "../models/Event";

const EventController = {
  async eventList(req: any, res: any) {
    const users = await Event.find();
    res.json(users);
  },

  async eventCreate(req: any, res: any) {
    const {
      event_name,
      event_date,
      event_address,
      event_description,
      event_award,
    } = req.body;

    let data = {
      event_name,
      event_date,
      event_address,
      event_description,
      event_award,
    };

    const users = await Event.create(data);

    return res.json(users);
  },
};

export default EventController;
