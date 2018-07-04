const routes = app => {
  app.get('/', (req, res) => {
    res.status(200).json({
      result: 'success'
    });
  });

  app.post('/test', (req, res) => {
    res.status(200).json({
      result: 'success'
    });
  });
};

export default routes;
