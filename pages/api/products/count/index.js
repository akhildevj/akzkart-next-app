import dbConnect from '../../../../middlewares/mongodb';
import Product from '../../../../models/Product';

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const count = await Product.find({}).countDocuments();
        res.status(200).json({ success: true, count });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;