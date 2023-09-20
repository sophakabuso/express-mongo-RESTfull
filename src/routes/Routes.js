const routes = (app) => {
  app.route('/contact')
    .get((req, res) => 
      // Handle GET request for /contact
      res.send ('GET request sucessful')
    )
    .post((req, res) => 
      // Handle POST request for /contact
      res.send('POST request sucessful!')
    );

  app.route('/contact/:contactId')
    .put((req, res) => 
      // Handle PUT request for /contact/:contactId
      res.send('PUT request sucessful!')
    )
    .delete((req, res) => 
      // Handle DELETE request for /contact/:contactID
    
      res.send('DELETE request sucessful!')
      );
};

export default routes;
