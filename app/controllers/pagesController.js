var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var content = require("../model/konten.js");

var pagesController = new Controller();

pagesController.main = function() {
  //var item = new content();
  //item.kategori = "makanan";
  //item.konten = "soto bogor enak";
  //item.save(
    //function(err){
    var self = this;
      content.findOne({kategori:"makanan"}, function(err, result){
        console.log(result);
        self.title = 'Locomotive';
        self.konten = result.konten;
        self.render();
      });
    //});
  
}

pagesController.list = function() {
    var self = this;
      content.find({}, function(err, result){
        console.log(result);
        self.res.json(result);
      });
}

pagesController.post = function() {
    var self = this;
    var item = new content();
    item.kategori = self.param("kategori");
    item.konten = self.param("konten");
    item.save(function(err){
      if (err){
        self.res.json({message: "gagal"});
      }
        self.res.json({message: "sukses"});
      
    });
}

pagesController.view = function() {
    var self = this;
      content.findOne({id: self.params.id}, function(err, result){
        console.log(result);
        self.res.json(result);
      });
}

pagesController.delete = function() {
    var self = this;
    //find one and remove
      content.findOneAndRemove({id: self.params.id}, function(err){
      if (err){
          self.res.json({message: "gagal"});
      }
          self.res.json({message: "sukses"});
      });
}

module.exports = pagesController;
