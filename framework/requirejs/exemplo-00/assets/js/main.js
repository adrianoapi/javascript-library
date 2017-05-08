require.config({
    name: 'app',
    baseUrl: 'assets/js',
    paths: {
        'jquery': 'libs/jquery-3.2.1.min'
    }
});

require(['jquery'], function ($) {
    $('body').append('String invocada');
});