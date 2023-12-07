document.addEventListener('DOMContentLoaded', function () {
    const viewPracticalsBtn = document.getElementById('viewPracticalsBtn');
    const practicalsContainer = document.getElementById('practicals-container');

    // List of practicals
    const practicals = [
        { name: 'Practical 5', file: 'pr5.pdf' },
        { name: 'Practical 5Q', file: 'Prac-5.pdf' },
        { name: 'Practical 6', file: 'pr6.pdf' },
        { name: 'Practical 6Q', file: 'Prac-7.pdf' },
        { name: 'Practical 7', file: 'pr7.pdf' },
        { name: 'Practical 7Q', file: 'prac-7.pdf' },
        { name: 'Practical 8', file: 'pr8.pdf' },
        { name: 'Practical 8Q', file: 'prac-8.pdf' },
        { name: 'Practical 9', file: 'pr9.pdf' },
        { name: 'Practical 9Q', file: 'Prac-9.pdf' },
        { name: 'Practical 10', file: 'pr10.pdf' },
        { name: 'Practical 10Q', file: 'Prac-10.pdf' },
        { name: 'All', file: 'DBMS_compressed.pdf' },
    ];

    // Generate buttons for each practical
    practicals.forEach(practical => {
        const buttonCard = document.createElement('button');
        buttonCard.className = 'button-card';

        const heading = document.createElement('h2');
        heading.textContent = practical.name;

        buttonCard.appendChild(heading);
        practicalsContainer.appendChild(buttonCard);

        // Add a click event listener to each button
        buttonCard.addEventListener('click', function () {
            // Redirect to the PDF when the button is clicked
            window.location.href = `pdfs/${practical.file}`;
        });
    });

    // Show practicals when the button is clicked
    viewPracticalsBtn.addEventListener('click', function () {
        viewPracticalsBtn.style.display = 'none';
        practicalsContainer.style.display = 'flex';
    });
});
