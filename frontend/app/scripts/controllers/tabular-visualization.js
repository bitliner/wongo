'use strict';

/**
 * @ngdoc function
 * @name wongoApp.controller:TabularVisualizationCtrl
 * @description
 * # TabularVisualizationCtrl
 * Controller of the wongoApp
 */
angular.module('wongoApp')
    .controller('TabularVisualizationCtrl', function($scope, SchemaParser, SchemaEditorView) {

        $scope.SchemaEditorView = SchemaEditorView;

        $scope.data = [{
            "__v": 0,
            "aggregatedSentiment": 2,
            "analysis": {
                "hasBeenManuallyAnnotated": true
            },
            "feature2sentiment": [{
                "name": "taste/result",
                "sentiment": 1,
                "category": "primary performance",
                "syn": "taste/result",
                "uid": "taste/result"
            }, {
                "name": "easy to use",
                "type": "user-generated",
                "sentiment": 1,
                "syn": "easy to use",
                "uid": "handling/ergonomics",
                "category": "product execution / features"
            }],
            "manualAnnotation": {
                "lastUpdate": "2015-04-14T16:46:13.929Z"
            },
            "review": {
                "_id": "5522b3ea55d62de7006102a4",
                "authorLink": "http://www.amazon.co.uk/gp/pdp/profile/A2DTDFAIB1ED2O/ref=cm_cr_pr_pdp/276-9638689-5637336",
                "authorLocation": null,
                "authorName": "Stella",
                "channel": "amazon.co.uk",
                "hash": "85672a64db20c188c4408d501016a00e",
                "html": "I'm very pleased with my purchase. It's keeps tasted good and it's very easy to use. I just love my air fryer!!!!",
                "language": "gb",
                "lastUpdate": "2015-04-06T16:26:29.484Z",
                "link": "http://www.amazon.co.uk/product-reviews/B0042EU3A2/ref=cm_cr_pr_top_link_next_37/276-9638689-5637336?ie=UTF8&pageNumber=37&showViewpoints=0&sortBy=byRankDescending",
                "linkToProductPage": "http://www.amazon.co.uk/Philips-HD9220-20-Airfryer-Healthier/dp/B0042EU3A2/ref=cm_cr_pr_product_top/276-9638689-5637336",
                "linkToSingleReview": "http://www.amazon.co.uk/review/R31ZSXE688JIT7/ref=cm_cr_pr_perm/?ie=UTF8&ASIN=B0042EU3A2",
                "pubDate": "2014-05-16T00:00:00.000Z",
                "rating": {
                    "best": 5,
                    "value": 5
                },
                "source": "amazon.co.uk",
                "subtitle": "A great deal",
                "title": "Philips HD9220/20 Airfryer Healthier Oil Free Fryer, Black (Kitchen & Home)",
                "votes": {
                    "total": 2014,
                    "positiveVotes": 16
                },
                "keywords": [],
                "normalizedProductInfos": [],
                "productNames": [],
                "categories": [],
                "pros": null,
                "cons": null
            }
        }, {
            "__v": 0,
            "aggregatedSentiment": 2,
            "analysis": {
                "hasBeenManuallyAnnotated": true
            },
            "feature2sentiment": [{
                "name": "easy to use",
                "type": "user-generated",
                "sentiment": 1,
                "syn": "easy to use",
                "uid": "handling/ergonomics",
                "category": "product execution / features"
            }],
            "manualAnnotation": {
                "lastUpdate": "2015-04-14T16:46:03.890Z"
            },
            "review": {
                "_id": "5522ba0555d62de7006108bb",
                "authorLink": "http://www.amazon.co.uk/gp/pdp/profile/AL6DJN5NHKW0U/ref=cm_cr_pr_pdp/276-9638689-5637336",
                "authorLocation": null,
                "authorName": "Jayne Taylor",
                "channel": "amazon.co.uk",
                "hash": "d004d890565a2a1139eaa6f482ad3266",
                "html": "This is fantastic and so easy to use.",
                "language": "gb",
                "lastUpdate": "2015-04-06T16:52:31.820Z",
                "link": "http://www.amazon.co.uk/product-reviews/B0042EU3A2/ref=cm_cr_pr_top_link_next_89/276-9638689-5637336?ie=UTF8&pageNumber=89&showViewpoints=0&sortBy=byRankDescending",
                "linkToProductPage": "http://www.amazon.co.uk/Philips-HD9220-20-Airfryer-Healthier/dp/B0042EU3A2/ref=cm_cr_pr_product_top/276-9638689-5637336",
                "linkToSingleReview": "http://www.amazon.co.uk/review/RUAMBQUFSH1FP/ref=cm_cr_pr_perm/?ie=UTF8&ASIN=B0042EU3A2",
                "pubDate": "2014-11-15T00:00:00.000Z",
                "rating": {
                    "best": 5,
                    "value": 5
                },
                "source": "amazon.co.uk",
                "subtitle": "Five Stars",
                "title": "Philips HD9220/20 Airfryer Healthier Oil Free Fryer, Black (Kitchen & Home)",
                "votes": null,
                "keywords": [],
                "normalizedProductInfos": [],
                "productNames": [],
                "categories": [],
                "pros": null,
                "cons": null
            }
        }];
        $scope.schema = SchemaParser.parse($scope.data);

    });