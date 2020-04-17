//event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
    //pindah scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

//parallax jumbotron

//about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var Wscroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + Wscroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + Wscroll / 2.2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + Wscroll / 1.2 + '%)'
    });

    // portfolio
    if (Wscroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 250 * (i + 1));
        });


    }

    // foto
    if (Wscroll > $('.foto').offset().top - 350) {
        $('.foto .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.foto .thumbnail').eq(i).addClass('muncul');
            }, 250 * (i + 1));
        });


    }

});