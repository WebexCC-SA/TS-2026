document.addEventListener('DOMContentLoaded', function() {
    const attendeeID = localStorage.getItem('attendeeID') || 'Not Set';
    const placeholders = document.querySelectorAll('.attendee-id-placeholder');

    placeholders.forEach(function(placeholder) {
        placeholder.textContent = attendeeID;
    });

    function displayCopyableCredential(valueId, containerSelector, storageKey, label) {
        const valueElement = document.getElementById(valueId);
        const container = document.querySelector(containerSelector);
        const value = localStorage.getItem(storageKey);

        if (valueElement && value) {
            valueElement.textContent = value;
        }

        if (container && value) {
            container.addEventListener('click', function() {
                navigator.clipboard.writeText(value).then(() => {
                    console.log(`${label} copied to clipboard`);
                }).catch(err => {
                    console.error(`Could not copy ${label.toLowerCase()}: `, err);
                });
            });
        }
    }

    displayCopyableCredential('attendee-password', '.attendee-password-container', 'attendeePassword', 'Password');
    displayCopyableCredential('attendee-dn', '.attendee-dn-container', 'attendeeDialedNumber', 'Dialed number');
});
