const express = require("express");
const mysql = require("../mysql");
const jwt = require("../jwt");

const router = express();

router.post("/sign", async (req, res, next) => {
  const { deviceid } = req.headers;

  try {
    const conn = await mysql.getConnection();
    const [rows] = await conn.query(
      `INSERT INTO user(device_id, type) SELECT '${deviceid}',0 FROM dual WHERE NOT EXISTS(SELECT device_id, type FROM user WHERE device_id='${deviceid}')`
    );
    /**
     * affectedRows
     * insertId
     */
    const accessToken = jwt.signToken({ user_id: rows.insertId });

    return res.setHeader("accessToken", accessToken).sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/signup", async (req, res, next) => {
  const { deviceid } = req.headers;

  try {
    const conn = await mysql.getConnection();
    const [rows] = await conn.query(
      `INSERT INTO user(device_id, type) SELECT '${deviceid}',0 FROM dual WHERE NOT EXISTS(SELECT device_id, type FROM user WHERE device_id='${deviceid}')`
    );
    /**
     * affectedRows
     * insertId
     */
    const accessToken = jwt.signToken({ user_id: rows.insertId });

    return res.setHeader("accessToken", accessToken).sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
