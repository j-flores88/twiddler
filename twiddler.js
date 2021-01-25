$(document).ready(function(){

    const $body = $('body');
    const main = document.getElementsByClassName('.main');

    let tweet;
    let $tweet;
    let $userName;
    let currentUser;
    let stream = streams.home

    stream.forEach(tweet => {
        tweet = tweet
        $tweet = $('<div class=tweet></div>')
        $userName = $('<a class=user href="#"></a>')
        $userName.text(`@${tweet.user}`);
        $userName.on('click', function(e){
            let userHandle = $(this).text().slice(1);
            userTimeLine(userHandle)
        })
        loadTweet($userName, tweet.message)
    });

    function userTimeLine(user) {
        $('.main').hide()
        stream.forEach(tweet => {
            if(user === tweet.user) {
                currentUser = $('<a class=user href="#"></a>');
                currentUser.text(`${tweet.user}`)
                $tweet = $('<div class=tweet></div>')
                
                $('.userTimeLine').append(currentUser, ': ' + tweet.message, ' twiddled at ')
                
            }
            $tweet.appendTo('.userTimeLine')
        })
    }

    function loadTweet(user, message, timeStamp) {
        $('.main').append(user, ': ' + message, ' twiddled at ' + timeStamp);
        $tweet.appendTo('.main');
    }
});

