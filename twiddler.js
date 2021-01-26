$(document).ready(function(){

    const $body = $('body');
    const main = document.getElementsByClassName('.main');
    const newTweeds = document.getElementById('loadTweeds')
    const homeButton = document.getElementById('home')
    const mainTitle = document.getElementsByClassName('title')

    let tweet;
    let $tweet;
    let $userName;
    let currentUser;
    let time;
    let stream = streams.home

    function loadTweeds() {
        $(home).hide();
        $(newTweeds).fadeIn(5000);
        $('.userTimeLine').hide();
        $('.userProfile').hide();
        $('.userHandle').empty()

        stream.forEach(tweet => {
            tweet = tweet;    
            time = (` on ${tweet.created_at.toString()}`)       
            $tweet = $('<div class=tweet></div>')
            $userName = $('<a class=user href="#"></a>')
            $userName.text(`@${tweet.user}`);
            $userName.on('click', function(e){
                $(newTweeds).hide()
                let userHandle = $(this).text().slice(1);
                userTimeLine(userHandle)
            })            
            $('.main').prepend($userName, ': ' + tweet.message + time);                   
            $tweet.prependTo('.main');
        });
        
    }

    function userTimeLine(user) {
        $('.main').hide()
        $(newTweeds).hide()
        $(homeButton).show()
        $('.userTimeLine').show();
        $('.yourProfile').hide();
        $('.userProfile').show();
        $('.userPic').hide();

        stream.forEach(tweet => {
            if(user === tweet.user) {
                if(user === 'shawndrost') {
                    $('.shawn').show();
                    $('.userHandle').text(`@${user}`)
                } else if (user === 'sharksforcheap') {
                    $('.sharks').show();
                    $('.userHandle').text(`@${user}`)
                } else if (user === 'mracus') {
                    $('.mracus').show();
                    $('.userHandle').text(`@${user}`)
                } else if(user === 'douglascalhoun') {
                    $('.doug').show();
                    $('.userHandle').text(`@${user}`)
                }

                currentUser = $('<a class=user href="#"></a>');
                currentUser.text(`@${tweet.user}`)
                $tweet = $('<div class=tweet></div>')
                
                $('.userTimeLine').prepend(currentUser, ': ' + tweet.message, ' on ' + tweet.created_at)
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
        $(mainTitle).text(`twiddler`)
        $('.userTimeLine').empty();
        $('.main').show();
        $(newTweeds).fadeIn(5000)
        $(homeButton).hide()
        $('.userTimeLine').hide();
        $('.yourProfile').show();
        $('.userProfile').hide();
        $('.userHandle').empty()
    }
    loadTweeds()
    
});

