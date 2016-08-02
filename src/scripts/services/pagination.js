function PaginationService($log){
    'ngInject';

    return {
        get: function(items = [], CurrentPage = 1, step = 5, ShowPages = 3){

            var LastPage = Math.ceil(items.length / step);
            
            var getPages = function(){
                var pages = [], StartPage, FinalPage, CurrentStep;
                var PagesStep = (ShowPages - 1) / 2;

                StartPage = CurrentPage - PagesStep;
                FinalPage = CurrentPage + PagesStep;

                if(StartPage < 1){
                    StartPage = 1;
                    FinalPage = ShowPages;
                }

                if(FinalPage > LastPage){
                    StartPage = LastPage - ShowPages +1;
                    FinalPage = LastPage;
                }

                for (let i = StartPage; i <= FinalPage; i++) {
                    pages.push(i);
                }
                return pages;
            };

            //init
            (function() {
                //Force quantity of showed pages to odd number because of design desicion
                ShowPages = ShowPages%2 === 0 ? ShowPages-1 : ShowPages;
               //Force minimun quantity of showed pages to 3
                ShowPages = ShowPages < 3 ? 3 : ShowPages;
                //Force quantity of showed not 
                ShowPages = ShowPages > LastPage ? LastPage : ShowPages;
            })();

            return {
                pages: getPages(),
                last_page: LastPage
            };
        }
    };
}

export default {
    name: 'PaginationService',
    fn: PaginationService
};