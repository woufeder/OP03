import expresss from "express";

const app = expresss;
app.get("/", (req, res) => {
  res.send("壓哈巫拉瞇瞇瞇");
});
app.get("/sally", (req, res) => {
  res.send("sally 首頁");
});

app.listen(3005, () => {});
