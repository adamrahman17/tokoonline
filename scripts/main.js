window.addEventListener('offline', function(event){
  alert("You are offline please turn on internet connection to run website");
});
	$(document).ready(function(){
    $('.show-modal').on('click', function(x){
      $('.modal-barang').css({'visibility': 'visible', 'opacity': '1'});
    });
    $('.modal-barang .modal-box .icon i').on('click', function(){
      $('.modal-barang').css({'visibility': 'hidden', 'opacity': '0'});
    });
  });




	$(document).ready(function(){
    $('#show-form').on('click', function(){
      $('.container-barang').css({'display': 'none', 'opacity': '0'});
      $('.container-form').css({'display': 'block', 'opacity': '1'});
      $('.modal-barang .modal-box').css({'overflow': 'visible'});
      $('.modal-barang .modal-box').css({'width': '30vw','padding' : '5rem'});
      $('.modal-barang .modal-box .icon i').css({'display': 'none', 'opacity': '0'});
    });
  });

  $(document).ready(function(){
    $('#btn-kembali-barang').on('click', function(){
      $('.container-barang').css({'display': 'block', 'opacity': '1'});
      $('.container-form').css({'display': 'none', 'opacity': '0'});
      $('.modal-barang .modal-box').css({'width': '50vw'});
      $('.modal-barang .modal-box').css({'overflow': 'scroll'});
      $('.modal-barang .modal-box .icon i').css({'display': 'block', 'opacity': '1'});

    });
   
  });

var swiper = new Swiper(".mySwiperPopuler", {
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "auto",
       spaceBetween :20,
      navigation: {
          nextEl: ".bxs-chevron-right-circle",
          prevEl: ".bxs-chevron-left-circle",
        },
      });

      AOS.init({
        mirror: true,
        duration : 500
      });

      $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })