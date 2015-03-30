;(function () {
    'use strict';

    blogsApp.services.routes
        .config(['urlServiceProvider', '$provide',function(urlServiceProvider, $provide){
            var urlService = urlServiceProvider.$get();
            // routes value
            $provide.value('routes',{

                postsService: urlService.createUrl('posts.json')

            });
        }]);

}());
