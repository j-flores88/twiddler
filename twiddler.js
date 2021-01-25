$(document).ready(function(){

    const $body = $('body');
    const main = document.getElementsByClassName('.main');
    const newTweeds = document.getElementById('loadTweeds')
    const homeButton = document.getElementById('home')

    let tweet;
    let $tweet;
    let $userName;
    let currentUser;
    let stream = streams.home

    $(home).hide();
    $(newTweeds).hide();
    $(newTweeds).fadeIn(5000);

    function loadTweeds() {
        stream.forEach(tweet => {
            tweet = tweet
            $tweet = $('<div class=tweet></div>')
            $userName = $('<a class=user href="#"></a>')
            $userName.text(`@${tweet.user}`);
            $userName.on('click', function(e){
                let userHandle = $(this).text().slice(1);
                userTimeLine(userHandle)
            })
            //loadTweet($userName, tweet.message)
            $('.main').prepend($userName, ': ' + tweet.message, ' twiddled at ');
            $tweet.prependTo('.main');
        });
    }

    function userTimeLine(user) {
        $('.main').hide()
        $(newTweeds).hide()
        $(homeButton).show()
        stream.forEach(tweet => {
            if(user === tweet.user) {
                currentUser = $('<a class=user href="#"></a>');
                currentUser.text(`${tweet.user}`)
                $tweet = $('<div class=tweet></div>')
                
                $('.userTimeLine').prepend(currentUser, ': ' + tweet.message, ' twiddled at ')
                $tweet.prependTo('.userTimeLine')
            }   
        })
    }
    newTweeds.onclick = function() {
        $('.main').prepend($(loadTweeds()))
        $(newTweeds).fadeOut(500);
        $(newTweeds).fadeIn(5000);
    }
    homeButton.onclick = function() {
        $('.userTimeLine').empty();
        $('.main').show();
        $(newTweeds).fadeIn(5000)
        $(homeButton).hide()
    }
    loadTweeds()
});

