$( document ).ready(function() {

    $('.next i').click(function() {

        //salvo l'immagine corrente in una variabile
        var current_img = $('img.active');

        //rimuovo la classe active dall'immagine corrente
        current_img.removeClass('active');

        //se esiste un immagine dopo l'immagine corrente
        if(current_img.next().length){
            //aggiungo classe active all'immagine successiva
            current_img.next().addClass('active');
        //altrimenti
        }else{
            //aggiungo la classe active alla prima immagine del blocco slides
            $('.slides img:first-of-type').addClass('active');
        }

    });

    $('.prev i').click(function() {

        //salvo l'immagine corrente in una variabile
        var current_img = $('img.active');

        //rimuovo la classe active dall'immagine corrente
        current_img.removeClass('active');

        //se esiste un immagine precedente all'immagine corrente
        if(current_img.prev().length){
            //aggiungo classe active all'immagine precedente
            current_img.prev().addClass('active');
        //altrimenti
        }else{
            //aggiungo la classe active all'ultima' immagine del blocco slides
            $('.slides img:last-of-type').addClass('active');
        }

    });

});
