
App.directive('acmeNavbar', acmeNavbar)
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/templates/header.html',
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };
    return directive;   
  }


App.directive('acmeSidebar', acmeSidebar)
  function acmeSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/templates/sidebar.html',
      controller: SidebarController,
      controllerAs: 'sbr',
      bindToController: true
    };
    return directive;   
  }

  