var Presenter = require('./models/presenter');

module.exports = function (app) {

// api
  app.get('/api/presenters', function(req, res) {
    Presenter.find(function(err, presenters) {
      if (err)
        res.send(err);
      res.json(presenters);
    });
  });

  app.post('/api/presenters', function (req, res) {
    Presenter.create({
      name : req.body.name,
      done : false
    }, function(err, presenter) {
      if (err)
      res.send(err);

      Presenter.find(function (err, presenters) {
        if (err)
          res.send(err)
        res.json(presenters);
      });
    });
});

  app.delete('/api/presenters/:presenter_id', function(req, res) {
    Presenter.remove({
      _id : req.params.presenter_id
    }, function(err, presenter) {
      if (err)
        res.send(err);

      Presenter.find(function(err, presenters) {
        if (err)
          res.send(err)
        res.json(presenters);
      });
    });
  });

  // application
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};