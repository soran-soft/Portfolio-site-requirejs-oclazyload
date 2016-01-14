(function () {

    angular.module('petStoreApp', [{
            files: [
                'portfolio/petstore/js/adminRouting.js',
                'portfolio/petstore/components/shoppingCart/shoppingCart.js', //leave this here (due to race condition with other shoppingCart components)
                'portfolio/petstore/controllers/cartSummaryController.js',
                'portfolio/petstore/controllers/productListController.js',
                'portfolio/petstore/controllers/petStoreController.js',
                'portfolio/petstore/components/productsService.js',
                'portfolio/petstore/components/shoppingCart/shoppingCartSummary.js',
                'portfolio/petstore/components/shoppingCart/shoppingCartPanel.js',
                'portfolio/petstore/filters/customFilters.js'
            ]
        }])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/catalogue');

            $stateProvider
                .state('root.portfolio.petstore', { //root.portfolio.petstore
                    url: '/catalogue',
                    views: {
                        // relative: 'petstoreContent' (ui-view='petstoreContent') or '' (ui-view)
                        // absolute: 'petstoreContent@root.portfolio' (ui-view='petstoreContent')
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/productList.html',
                            controller: 'petStoreCtrl',
                            controllerAs: 'petStore'
                        }
                    }
                })
                .state('root.portfolio.petstore.checkout', {
                    url: '^/petstore/checkout',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/checkoutSummary.html'
                        }
                    }
                })
                .state('root.portfolio.petstore.placeorder', {
                    url: '^/petstore/placeorder',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/placeOrder.html'
                        }
                    }
                })
                .state('root.portfolio.petstore.complete', {
                    url: '^/petstore/complete',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/thankYou.html'
                        }
                    }
                });
        });

})();