const Animals =require("../controllers/index.controller");

module.exports=app=>{
    app.get("/api/animals", Animals.findAll);
    app.get("/api/animals/:id", Animals.findOne);
    app.put("/api/animals/:id", Animals.update);
    app.post("/api/animals/", Animals.create);
    app.delete("/api/animals/:id", Animals.delete);
};