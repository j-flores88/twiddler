$(document).ready(function(){
    const $body = $('body');
    const main = document.getElementsByClassName('.main');

    let tweet;
    let $tweet;
    let $userName;
    let stream = streams.home

    stream.forEach(tweet => {
        tweet = tweet
        $tweet = $('<div class=tweet></div>')
        $userName = $('<a class=user href="#"></a>')
        $userName.text(`@${tweet.user}`);

        $('.main').append($userName, ': ' + tweet.message);
        $tweet.appendTo('.main');
    });
});