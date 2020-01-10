var app = angular.module('app',[]);

app.controller('MessageCRUDCtrl', ['$scope','MessageCRUDService', function ($scope,MessageCRUDService) {
	  
    $scope.updateMessage = function () {
        MessageCRUDService.updateMessage($scope.message.id,$scope.message.message)
          .then(function success(response){
              $scope.message = 'Message data updated!';
              $scope.errorMessage = '';
          },
          function error(response){
              $scope.errorMessage = 'Error updating message!';
              $scope.message = '';
          });
    }
    
    $scope.getMessage = function () {
        var id = $scope.message.id;
        MessageCRUDService.getMessage($scope.message.id)
          .then(function success(response){
              $scope.message = response.data;
              $scope.message.id = id;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response ){
              $scope.message = '';
              if (response.status === 404){
                  $scope.errorMessage = 'Message not found!';
              }
              else {
                  $scope.errorMessage = "Error getting message!";
              }
          });
    }
    
    $scope.addMessage = function () {
        if ($scope.message != null && $scope.message.message) {
            MessageCRUDService.addMessage($scope.message.message)
              .then (function success(response){
                  $scope.message = 'Message added!';
                  $scope.errorMessage = '';
              },
              function error(response){
                  $scope.errorMessage = 'Error adding message!';
                  $scope.message = '';
            });
        }
        else {
            $scope.errorMessage = 'Please enter a name!';
            $scope.message = '';
        }
    }
    
    $scope.deleteMessage = function () {
        MessageCRUDService.deleteMessage($scope.message.id)
          .then (function success(response){
              $scope.message = 'Message deleted!';
              $scope.message = null;
              $scope.errorMessage='';
          },
          function error(response){
              $scope.errorMessage = 'Error deleting message!';
              $scope.message='';
          })
    }
    
    $scope.getAllMessages = function () {
        MessageCRUDService.getAllMessages()
          .then(function success(response){
              $scope.messages = response.data._embedded.messages;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response ){
              $scope.message='';
              $scope.errorMessage = 'Error getting messages!';
          });
    }

}]);

app.service('MessageCRUDService',['$http', function ($http) {
	
    this.getMessage = function getMessage(messageId){
        return $http({
          method: 'GET',
          url: 'messages/'+messageId
        });
	}
	
    this.addMessage = function addMessage(message){
        return $http({
          method: 'POST',
          url: 'messages',
          data: {message:message}
        });
    }
	
    this.deleteMessage = function deleteMessage(id){
        return $http({
          method: 'DELETE',
          url: 'messages/'+id
        })
    }
	
    this.updateMessage = function updateMessage(id,message){
        return $http({
          method: 'PATCH',
          url: 'messages/'+id,
          data: {message:message}
        })
    }
	
    this.getAllMessages = function getAllMessages(){
        return $http({
          method: 'GET',
          url: 'messages'
        });
    }

}]);