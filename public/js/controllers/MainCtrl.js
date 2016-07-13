angular.module('MainCtrl', []).controller('MainController', function($scope, Emails) {
 $scope.formData = {};
    $scope.loading = true;

    // GET =====================================================================
    // when landing on the page, get all emails and show them
    // use the service to get all the emails
    Emails.get()
      .success(function(data) {
        $scope.emails = data;
        $scope.loading = false;
      });

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createEmail = function() {
      $scope.loading = true;

      // validate the formData to make sure that something is there
      // if form is empty, nothing will happen
      if ($scope.formData.text != undefined) {
        // call the create function from our service (returns a promise object)
        Emails.create($scope.formData)


          // if successful creation, call our get function to get all the new emails
          .success(function(data) {
            $scope.loading = false;
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.emails = data; // assign our new list of emails
          });
      }
    };

    // DELETE ==================================================================
    // delete a email after checking it
    $scope.deleteEmail = function(id) {
      $scope.loading = true;

      Emails.delete(id)
        // if successful creation, call our get function to get all the new emails
        .success(function(data) {
          $scope.loading = false;
          $scope.emails = data; // assign our new list of emails
        });
    };

});