import data from "../Data/dataB.json";

export default function handler(req, res) {
  res.status(200).json(data.courses);
}
