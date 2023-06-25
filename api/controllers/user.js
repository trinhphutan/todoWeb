import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM todo";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO todo(`task`, `completeDays`, `level`, `startDay`) VALUES(?)";

  const values = [
    req.body.task,
    req.body.completeDays,
    req.body.level,
    req.body.startDay,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Add Successfully.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE todo SET `task` = ?, `completeDays` = ?, `level` = ?, `startDay` = ? WHERE `id` = ?";

  const values = [
    req.body.task,
    req.body.completeDays,
    req.body.level,
    req.body.startDay,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Update Successfully.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM todo WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Delete Successfully.");
  });
};
