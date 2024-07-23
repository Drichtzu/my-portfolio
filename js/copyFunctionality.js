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