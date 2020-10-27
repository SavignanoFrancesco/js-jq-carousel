$( document ).ready(function() {

    $('.next i').click(scrollRight);

    $('.prev i').click(scrollLeft);

    $('.bullets i:nth-of-type(1)').click(function(){
        //salvo l'immagine corrente in una variabile
        var current_img = $('img.active');
        //salvo il bullet corrente in una variabile
        var current_bullet = $('.bullets i.fas');

        //rimuovo la classe active dall'immagine corrente
        current_img.removeClass('active');
        //svuoto il bullet corrente(fas = bullet pieno, far = bullet vuoto)
        current_bullet.removeClass('fas');
        current_bullet.addClass('far');

        //attivo l'immagine relativa al bullet cliccato
        $('.slides img:nth-of-type(1)').addClass('active');
        $('.bullets i:nth-of-type(1)').addClass('fas');
    });

    $('.bullets i:nth-of-type(2)').click(function(){
        //salvo l'immagine corrente in una variabile
        var current_img = $('img.active');
        //salvo il bullet corrente in una variabile
        var current_bullet = $('.bullets i.fas');

        //rimuovo la classe active dall'immagine corrente
        current_img.removeClass('active');
        //svuoto il bullet corrente(fas = bullet pieno, far = bullet vuoto)
        current_bullet.removeClass('fas');
        current_bullet.addClass('far');

        //attivo l'immagine relativa al bullet cliccato
        $('.slides img:nth-of-type(2)').addClass('active');
        $('.bullets i:nth-of-type(2)').addClass('fas');
    });

    $('.bullets i:nth-of-type(3)').click(function(){
        //salvo l'immagine corrente in una variabile
        var current_img = $('img.active');
        //salvo il bullet corrente in una variabile
        var current_bullet = $('.bullets i.fas');

        //rimuovo la classe active dall'immagine corrente
        current_img.removeClass('active');
        //svuoto il bullet corrente(fas = bullet pieno, far = bullet vuoto)
        current_bullet.removeClass('fas');
        current_bullet.addClass('far');

        //attivo l'immagine relativa al bullet cliccato
        $('.slides img:nth-of-type(3)').addClass('active');
        $('.bullets i:nth-of-type(3)').addClass('fas');
    });

    //attivo l'immagine relativa al bullet cliccato
    $('.bullets i:nth-of-type(4)').click(function(){
        //salvo l'immagine corrente in una variabile
        var current_img = $('img.active');
        //salvo il bullet corrente in una variabile
        var current_bullet = $('.bullets i.fas');

        //rimuovo la classe active dall'immagine corrente
        current_img.removeClass('active');
        //svuoto il bullet corrente(fas = bullet pieno, far = bullet vuoto)
        current_bullet.removeClass('fas');
        current_bullet.addClass('far');

        $('.slides img:nth-of-type(4)').addClass('active');
        $('.bullets i:nth-of-type(4)').addClass('fas');
    });

});

//__________FUNZIONI__________

//scorrimento delle slides e dei bullets verso destra
function scrollRight() {

    //salvo l'immagine corrente in una variabile
    var current_img = $('img.active');
    //salvo il bullet corrente in una variabile
    var current_bullet = $('.bullets i.fas');

    //rimuovo la classe active dall'immagine corrente
    current_img.removeClass('active');
    //svuoto il bullet corrente(fas = bullet pieno, far = bullet vuoto)
    current_bullet.removeClass('fas');
    current_bullet.addClass('far');

    //se esiste un immagine dopo l'immagine corrente
    if(current_img.next('img').length){
        //aggiungo classe active all'immagine successiva
        current_img.next('img').addClass('active');
        //riempio il bullet successivo
        current_bullet.next('i').addClass('fas');
    //altrimenti
    }else{
        //aggiungo la classe active alla prima immagine del blocco slides
        $('.slides img:first-of-type').addClass('active');
        //riempio il primo bullet
        $('.bullets i:first-of-type').addClass('fas');
    }

}

//scorrimento delle slides e dei bullets verso sinistra
function scrollLeft() {

    //salvo l'immagine corrente in una variabile
    var current_img = $('img.active');
    //salvo il bullet corrente in una variabile
    var current_bullet = $('.bullets i.fas');

    //rimuovo la classe active dall'immagine corrente
    current_img.removeClass('active');
    //svuoto il bullet corrente(fas = bullet pieno, far = bullet vuoto)
    current_bullet.removeClass('fas');
    current_bullet.addClass('far');

    //se esiste un immagine precedente all'immagine corrente
    if(current_img.prev('img').length){
        //aggiungo classe active all'immagine precedente
        current_img.prev('img').addClass('active');
        //riempio il bullet precedente
        current_bullet.prev('i').addClass('fas');
    //altrimenti
    }else{
        //aggiungo la classe active all'ultima immagine del blocco slides
        $('.slides img:last-of-type').addClass('active');
        //riempio l'ultimo bullet
        $('.bullets i:last-of-type').addClass('fas');
    }

}
