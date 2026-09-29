---
#icon: material/folder-open-outline
icon: material/bullseye-arrow
---
<script>
    // Look up and store the credentials that belong to an attendee ID.
    // MkDocs publishes pwd.md as /advanced/pwd/, so read the generated page
    // instead of attempting to access the source Markdown file directly.
    async function storeAttendeeCredentials(attendeeID) {
        const mkdocsConfig = document.getElementById('__config');
        const basePath = mkdocsConfig ? JSON.parse(mkdocsConfig.textContent).base : '../..';
        const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
        const passwordPageUrl = new URL(`${normalizedBasePath}advanced/pwd/`, window.location.href);
        const response = await fetch(passwordPageUrl);

        if (!response.ok) {
            throw new Error(`Unable to load the password list (${response.status}).`);
        }

        const passwordPage = new DOMParser().parseFromString(await response.text(), 'text/html');
        const passwordList = passwordPage.querySelector('.md-content__inner')?.textContent || '';
        const passwordMatch = Array.from(passwordList.matchAll(/^\s*(\d{3})\s+(\S+)\s+(\+\d+)\s*$/gm))
            .find(([, listedAttendeeID]) => listedAttendeeID === attendeeID);

        if (!passwordMatch) {
            localStorage.removeItem('attendeePassword');
            localStorage.removeItem('attendeeDialedNumber');
            throw new Error(`No credentials were found for attendee ID ${attendeeID}.`);
        }

        localStorage.setItem('attendeePassword', passwordMatch[2]);
        localStorage.setItem('attendeeDialedNumber', passwordMatch[3]);
    }

    // Function to initialize and handle form submission
    function setupAttendeeForm() {
        const form = document.getElementById('attendee-form');
        const displayAttendee = document.getElementById('display-attendee');
        const attendeeInput = document.getElementById('attendee');

        // Load stored Attendee ID on page load
        const storedAttendeeID = localStorage.getItem('attendeeID');
        if (storedAttendeeID) {
            attendeeInput.value = storedAttendeeID;
            displayAttendee.textContent = storedAttendeeID;
            storeAttendeeCredentials(storedAttendeeID).catch(console.error);
        }

        // Restrict input to only allow three digits
        attendeeInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').slice(0, 3);
        });

        // Handle form submission
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const attendeeIDInput = attendeeInput.value;

            if (attendeeIDInput && attendeeIDInput.length === 3) {
                // Store the Attendee ID in local storage
                localStorage.setItem('attendeeID', attendeeIDInput);

                // Update the displayed Attendee ID
                displayAttendee.textContent = attendeeIDInput;

                // Store the corresponding password and dialed number for Credentials.
                await storeAttendeeCredentials(attendeeIDInput).catch(function(error) {
                    alert(error.message);
                });
            } else {
                alert('Please enter exactly 3 digits.');
            }
        });
    }

    // Wait for the DOM content to be fully loaded
    document.addEventListener('DOMContentLoaded', setupAttendeeForm);
    
    document.addEventListener('DOMContentLoaded', function() {
        const attendeeID = localStorage.getItem('attendeeID') || 'Not Set';
        const attendeePlaceholder = document.getElementById('attendee-id-placeholder');

        if (attendeePlaceholder) {
            attendeePlaceholder.textContent = attendeeID;
        }
    });
</script>

<style>
    /* Style for the button */
    button {
        background-color: black;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }

    /* Style for the input element */
    input[type="text"] {
        border: 2px solid black;
        padding: 5px;
    }
</style>

<!-- Markdown content with embedded HTML -->
<div>
    <h2>Please submit the form below with your Attendee ID.</h2> 
    <h3>All configuration entries in the lab guide will be renamed to include your Attendee ID.</h3>
    <form id="attendee-form">
        <label for="attendee">Attendee ID:</label>
        <input type="text" id="attendee" name="attendee" placeholder="Enter 3 digits" required>
        <button type="submit">Save</button>
    </form>

    <br>

    <p>Your stored Attendee ID is: <b><span id="display-attendee">No ID stored</span></b></p>
</div>

**<details><summary><span style="color: blue;">How to set Attendee ID</span></summary>**

![profiles](../graphics/overview/Set_ID.gif)

</details> 

## Disclaimer
The lab design and configuration examples provided are for educational purposes. For production design queries, please consult your Cisco representative or an authorized Cisco partner.
Let’s get started and discover how **Webex Contact Center** takes customer experiences from good to great!

