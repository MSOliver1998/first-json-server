const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 640,
  ongs: 664,
  donates:660,
  "/user/donates/:userId": "/donates?userId=:userId",
  "/ong/donates/:ongId": "/donates?ongId=:ongId"
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/*usuario testes
{
  "email": "admin@mail.com",
  "password": "admin123"
}
{
  "email": "ongteste@mail.com",
  "password": "ong123"
}
   */