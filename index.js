// var mongoose = require('mongoose');

var Tag = function(model, options) {
  this.options = options || {};
  this.Model = model;
};


Tag.prototype.create = function(options) {
  console.log(options);

  // var Model = this.Model;

  return function create(req, res, next) {
    console.log('create');
    var data = req.body || {};
    var model = new Model(data);

    // console.log(model);

    model.save(function(err) {
      console.log(err);
      // console.log(model, save);
      if (err) {
        return next(err);
      }
      res.status(201).json(model);
    });


  };
}

module.exports = Tag;
