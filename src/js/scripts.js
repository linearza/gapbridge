(function($, window, document, undefined) {

  'use strict';

  $(function() {

    // Contact form
    var $contactForm = $('#contact-form'),
      $submitButton = $('#contact-form input[type=submit]');
    $contactForm.submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: '//formspree.io/hello@gapbridge.co.za',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
          $submitButton.prop('disabled', true);
          $contactForm.find('.alert.sent').remove();
          $submitButton.val('Sending message...');
        },
        success: function() {
          // $contactForm.find('.alert.sending').remove();
          $submitButton.before('<div class="alert sent">Thank you, we will be in contact shortly!</div>');
          $submitButton.val('Message sent!');
          $submitButton.prop('disabled', false);
          setTimeout(function() {
            $submitButton.val('Send');
          }, 5000);
        },
        error: function() {
          $submitButton.before('<div class="alert error">Oops, there was an error. Please contact us directly at hello@gapbridge.co.za</div>');
          $submitButton.val('Error!');
          $submitButton.prop('disabled', false);
          setTimeout(function() {
            $submitButton.val('Send');
            $contactForm.find('.alert.error').remove();
          }, 10000);
        }
      });
    });


    // Accordion

    $('.accordion-item').click(function() {
      $(this).toggleClass('is-open');
    });


  });

})(jQuery, window, document);
