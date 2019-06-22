var client_id = '254a49a9abbb9fb5894484ffcadc6528e20b58d12c0e38fa9bc4d22714d2413b';
var limit = 50;

$(document).ready(function () {
    var $container = $('#posts');
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.post'
        });
    });
});

function unsplash(more) {
    $.ajax({
        url: 'https://api.unsplash.com/photos',
        type: 'GET',
        dataType: 'json',
        data: {
            client_id: client_id,
            page: more,
            per_page: limit
        },
        success: function (data) {
            $.each(data, function (i, item) {
                var image = $("<img>").attr("src", item.urls.small);
                var item = $("<div class='post'>").append(image).hide();
                var $container = $('#posts');
                $container.append(item).imagesLoaded(function () {
                    item.fadeIn(2000);
                    $container.masonry('appended', item).masonry();
                });

            });
            $(".more").attr("href", more).html("More");
        }
    });
}