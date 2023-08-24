$('.nav-link').on('click', function () {
    // Get the target content div ID
    const targetId = $(this).data('target');
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    // Hide all tasklist divs
    $('.tasklist').hide();
    
    // Show the selected content div
    $(targetId).show();

    if (targetId === '#workContent') {
        $('#taskForm').attr('action', '/submitwork');
      } else {
        $('#taskForm').attr('action', '/submit');
      }
  });