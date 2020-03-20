const Bootcamp = require('../models/Bootcamp');

//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//access  public -you dont need a token(no authentication)
exports.getBootcamps = (req, res, next) => {
  res.status(400).json({ success: true, message: 'Show all bootcamps' });
};

//@desc Get single bootcamps
//@route GET /api/v1/bootcamps/:id
//access  public -you dont need a token(no authentication)
exports.getBootcamp = (req, res, next) => {
  res
    .status(400)
    .json({ success: true, message: `Show bootcamp ${req.params.id}` });
};

//@desc Create a  bootcamp
//@route POST /api/v1/bootcamps
//access  Private -you have to send a token(need to be logged in)
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//access  Private -you have to send a token(need to be logged in)
exports.updateBootcamp = (req, res, next) => {
  res
    .status(400)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//access  Private -you have to send a token(need to be logged in)
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(400)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};
