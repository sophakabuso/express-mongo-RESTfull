const routes = (app) => {
    app.route('/contact')
      .get((req, res) => {
        // Handle GET request for /contact
      })
      .post((req, res) => {
        // Handle POST request for /contact
      });
  
    app.route('/contact/:contactID')
      .put((req, res) => {
        // Handle PUT request for /contact/:contactID
      })
      .delete((req, res) => {
        // Handle DELETE request for /contact/:contactID
      });
  };
  
  export default routes;
  