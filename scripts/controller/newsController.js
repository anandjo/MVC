 myapp.controller('newsController', function($scope){
    $scope.result3 = "News page"; 
    $scope.list = [
        {
            id: 'n1',    
            title: 'GodFather',
            auther: 'Mario Puzo'
        },
        {
            id: 'n2',    
            title: 'Windmills of the god',
            auther: 'Dan brown'
        },
        {
            id: 'n3',    
            title: 'The wings of fire',
            auther: 'Dr. APJ Abdul kalam'
        }
    ];
    
 });