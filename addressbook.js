function addressBookController($scope) {
    $scope.addressBook = [];

    $scope.countContacts = function () {
        return $scope.addressBook.length;
    };

    $scope.countFriends = function () {
        var friends = $scope.addressBook.filter(function (contact) {
            return contact.friend;
        });
        return friends.length;
    };

    $scope.addContact = function () {
        var contact = {
            name: $scope.contactName,
            phoneNum: $scope.contactPhoneNum,
            friend: $scope.contactIsFriend
        }
        $scope.addressBook.push(contact);
    };

    $scope.tooManyFriends = function () {
        return $scope.countContacts() >= 3;
    };

    $scope.noFriends = function () {
        console.log($scope.addressBook.length);
        return $scope.addressBook.length == 0;
    };
}