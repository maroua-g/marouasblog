import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
  const client = await clientPromise
  const db = client.db("posts")
  const entry = await db
    .collection("entry")
    .find({})
    .limit(3)
    .toArray();

  res.json(entry);
};