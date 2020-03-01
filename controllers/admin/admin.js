/*----------------------------------------
/  NODE DEPENDANCIES
/---------------------------------------*/

/*----------------------------------------
/  LOCAL DEPENDANCIES
/---------------------------------------*/

/*----------------------------------------
/  VARIABLES
/---------------------------------------*/
/**
 * ADMIN CONTROLLER
 * Main controller for the admin dashboard area of the site.
 */
/*------------------------------------------------------------------------------
/  
/  ROUTE HANDLERS
/  
------------------------------------------------------------------------------*/
/**
 * Login
 * @route GET /admin/logi
 * @param Object req
 * @param Object res
 */
exports.index = function(req, res) {
  res.render('admin/login', {
    title: 'Login'
  });
};
/**
 * Dashboard page
 * @route GET /admin/dashboard
 * @param Object req
 * @param Object res
 */
exports.index = function(req, res) {
  res.render('admin/dashboard', {
    title: 'Dashboard'
  });
};

/*------------------------------------------------------------------------------
/  
/  FUNCTIONS
/  All considered _private
/  
------------------------------------------------------------------------------*/
