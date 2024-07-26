document.addEventListener('DOMContentLoaded', function() {
    const copyIcons = document.querySelectorAll('.copy-icon');
    const copyNotification = document.getElementById('copyNotification');

    copyIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                showNotification(copyNotification);
            });
        });
    });

    function showNotification(notificationElement) {
        notificationElement.classList.add('show');
        setTimeout(() => {
            notificationElement.classList.remove('show');
        }, 3000);
    }
});
// Link-Benachrichtigungsfunktionalität
const contactLinks = document.querySelectorAll('.contact-link');
const linkNotification = document.getElementById('linkNotification');

contactLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const notificationMessage = this.getAttribute('data-notification');
        if (notificationMessage) {
            event.preventDefault();
            showLinkNotification(notificationMessage);
            setTimeout(() => {
                window.open(this.href, '_blank');
            }, 1000);
        }
    });
});

function showLinkNotification(message) {
    linkNotification.textContent = message;
    linkNotification.classList.add('show');
    setTimeout(() => {
        linkNotification.classList.remove('show');
    }, 5000);
}
