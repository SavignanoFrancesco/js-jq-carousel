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

});
