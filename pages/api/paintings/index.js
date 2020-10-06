import { connectDB } from '@/utils/db';

export default async function (req, res) {
  try {
    const { db } = await connectDB();
    const paintings = await db.collection('paintings').find().toArray();
    res.status(200);
    res.json({ paintings });
    console.log(paintings);
  } catch (err) {
    res.status(500);
    res.json({ error: err });
  }
}
