const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('img').style.filter = 'blur(4px)';
    item.querySelector('.portfolio-item-meta').style.opacity = '1';
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('img').style.filter = 'none';
    item.querySelector('.portfolio-item-meta').style.opacity = '0';
  });

  item.addEventListener('click', () => {
    const link = item.querySelector('a');
    const url = link.getAttribute('href');
    window.location.href = url;
  });
});
function prepareEmail(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  
  // Construct mailto URL with filled details
  var mailtoUrl = 'mailto:pradeepgoogly2002@gmail.com' +
                  '?subject=' + encodeURIComponent(subject) +
                  '&body=' + encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);
  
  // Create a temporary <a> element to open the email client
  var mailtoLink = document.createElement('a');
  mailtoLink.href = mailtoUrl;
  mailtoLink.target = '_blank';
  
  // Trigger the click event on the temporary link
  mailtoLink.click();
}