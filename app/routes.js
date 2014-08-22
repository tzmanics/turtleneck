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
      // TODO: move and rename the file using req.files.path & .name
      avatar : req.files,
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

app.post('/presenter/create', function (req, res) {
  // TODO: move and rename the file using req.files.path & .name
  res.send(console.dir(req.files));
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