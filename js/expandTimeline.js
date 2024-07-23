document.addEventListener('DOMContentLoaded', function() {
    const toggleResumeIcon = document.getElementById('toggleResumeIcon');
    const hiddenItems = document.querySelectorAll('.timeline-item.hidden, .timeline.hidden, .section-subtitle.hidden');
    let isExpanded = false;

    toggleResumeIcon.addEventListener('click', function() {
        isExpanded = !isExpanded;
        if (isExpanded) {
            hiddenItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('fade-in');
                    }, 50);
                }, index * 200);
            });
        } else {
            hiddenItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('fade-in');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }, (hiddenItems.length - index - 1) * 200);
            });
        }
        this.classList.toggle('rotated');
    });

    // Initial versteckte Elemente ausblenden
    hiddenItems.forEach((item, index) => {
        if (index >= 2) {
            item.style.display = 'none';
        }
    });
});