document.addEventListener('DOMContentLoaded', function () {
  var clickToEnter = document.querySelector('.click-to-enter');
  var belowVideoText = document.getElementById('belowVideoText');
  var content = document.querySelector('.content');
  var foregroundVideo = document.getElementById('foregroundVideo');

  clickToEnter.addEventListener('click', function () {
    // Hide the "CLICK TO ENTER" text
    clickToEnter.style.display = 'none';

    // Show the white text below the main video if it exists
    if (belowVideoText) {
      belowVideoText.style.display = 'block';
    }

    // Move the "CLICK TO ENTER" link below the main video
    content.appendChild(clickToEnter);

    // Play the background video
    var backgroundVideo = document.getElementById('backgroundVideo');
    backgroundVideo.play().catch(function (error) {
      console.error('Background video autoplay was prevented:', error);
    });

    // Play the foreground video with sound
    foregroundVideo.muted = false;
    foregroundVideo.play().catch(function (error) {
      console.error('Autoplay with sound was prevented:', error);
    });
  });
});
