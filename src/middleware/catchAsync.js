export default function catchAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      res.status(400).json({ err });
    });
  };
}
