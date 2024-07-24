    document.addEventListener("DOMContentLoaded", function() {
        const inactiveLinks = document.querySelectorAll('.nav-link.inactive');
        inactiveLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
            });
        });
    });

