document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    /** Handle Form Submit Buttton */
    function submitFormData(data) {
        const scriptId = 'AKfycbzng7pLMs7E2aIcD5L5_ewJ3UCdANNr8kj16oysdSfTMQeidnf9F7i2JfoKqOQFBRdW';
        const scriptURL = `https://script.google.com/macros/s/${scriptId}/exec`;
        fetch(scriptURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            mode: 'no-cors'
        })
            .then(() => {
                alert("Form submitted successfully!");
            })
            .catch(error => console.error('Error:', error));
    }



    /* ---------------------------
       Application Form Handling
    --------------------------- */
    const appForm = document.getElementById('appForm');
    if (appForm) {
        appForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = {
                name: appForm.name.value.trim(),
                email: appForm.email.value.trim(),
                mobile: appForm.phone.value.trim(),
                message: appForm.message.value.trim(),
            };

            // Simple validation (can be expanded)
            if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
                alert('Please fill in all fields.');
                return;
            }

            submitFormData(formData);
            // For demonstration, we'll just log the data
            console.log('Application Form Submitted:', formData);

            // Reset the form
            appForm.reset();

            // Provide feedback to the user
            alert('Thank you for your application! We will get back to you soon.');
        });
    }
    /* ---------------------------
       Application Form Handling
    --------------------------- */
    const modalAppForm = document.getElementById('modalAppForm');
    if (modalAppForm) {
        modalAppForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = {
                name: modalAppForm.name.value.trim(),
                email: modalAppForm.email.value.trim(),
                mobile: modalAppForm.phone.value.trim(),
                message: modalAppForm.message.value.trim(),
            };

            // Simple validation (can be expanded)
            if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
                alert('Please fill in all fields.');
                return;
            }

            submitFormData(formData);
            // For demonstration, we'll just log the data
            console.log('Application Modal Form Submitted:', formData);

            // Reset the form
            modalAppForm.reset();

            // Provide feedback to the user
            alert('Thank you for your application! We will get back to you soon.');
        });
    }




    /* ---------------------------
       Download Brochure Form Handling
    --------------------------- */
    const downloadBrochureForm = document.getElementById('downloadBrochureForm');
    if (downloadBrochureForm) {
        downloadBrochureForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = {
                name: downloadBrochureForm.name.value.trim(),
                mobile: downloadBrochureForm.phone.value.trim(),
                email: downloadBrochureForm.email.value.trim(),
                message: downloadBrochureForm.message.value.trim(),
            };

            // Simple validation (can be expanded)
            if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
                alert('Please fill in all fields.');
                return;
            }
            submitFormData(formData);

            // For demonstration, we'll just log the data
            console.log('Download Brochure Form Submitted:', formData);

            // Reset the form
            downloadBrochureForm.reset();

            // Provide feedback to the user
            alert('Thank you! Your brochure will download shortly.');

            // Trigger the download
            downloadBrochure();

            // Close the modal after submission
            closeModal('downloadBrochureModal');
        });
    }

    /* ---------------------------
       Take The Next Step Now Form Handling
    --------------------------- */
    const nextStepForm = document.getElementById('next-step-form');
    if (nextStepForm) {
        nextStepForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = {
                name: nextStepForm.name.value.trim(),
                email: nextStepForm.email.value.trim(),
                phone: nextStepForm.phone.value.trim(),
            };

            // Simple validation (can be expanded)
            if (!formData.name || !formData.email || !formData.phone) {
                alert('Please fill in all fields.');
                return;
            }

            // For demonstration, we'll just log the data
            console.log('Next Step Form Submitted:', formData);

            // Reset the form
            nextStepForm.reset();

            // Provide feedback to the user
            alert('Thank you for your submission! We will get back to you soon.');
        });
    }

    /* ---------------------------
       Modal Functionality
    --------------------------- */
    // Function to open a modal by ID
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling

            // Play popup sound
            playPopupSound();
        }
    }

    // Function to close a modal by ID
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }

    // Handle Application Form Modal
    const applicationModal = document.getElementById('applicationModal');
    const applyBtns = document.querySelectorAll('.apply-btn');
    const requestInfoBtns = document.querySelectorAll('.request-info-btn');
    const closeAppModalBtn = applicationModal.querySelector('.close-button');

    // Event listeners for Apply Now buttons
    applyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            openModal('applicationModal');
        });
    });

    // Event listeners for Request Info buttons
    requestInfoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            openModal('applicationModal');
        });
    });

    // Handle Close Button for Application Modal
    if (closeAppModalBtn) {
        closeAppModalBtn.addEventListener('click', () => {
            closeModal('applicationModal');
        });
    }

    // Handle Download Brochure Modal
    const downloadBrochureModal = document.getElementById('downloadBrochureModal');
    const downloadBrochureBtns = document.querySelectorAll('.download-brochure-btn');
    const closeDownloadModalBtn = downloadBrochureModal.querySelector('.close-button');

    downloadBrochureBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            openModal('downloadBrochureModal');
        });
    });

    if (closeDownloadModalBtn) {
        closeDownloadModalBtn.addEventListener('click', () => {
            closeModal('downloadBrochureModal');
        });
    }

    // Event listener for clicks outside the modal content to close it
    window.addEventListener('click', (event) => {
        if (event.target == applicationModal) {
            closeModal('applicationModal');
        }
        if (event.target == downloadBrochureModal) {
            closeModal('downloadBrochureModal');
        }
    });

    /* ---------------------------
       Automatic Modal Display
    --------------------------- */
    // Automatically open the application modal after 10 seconds
    setTimeout(() => {
        openModal('applicationModal');

        // Open the modal again every 700 seconds after initial display
        setInterval(() => {
            openModal('applicationModal');
        }, 700000); // 700000 milliseconds = 700 seconds (≈11.67 minutes)

    }, 10000); // 10000 milliseconds = 10 seconds

    /* ---------------------------
       Download Brochure Function
    --------------------------- */
    function downloadBrochure() {
        const link = document.createElement('a');
        link.href = 'assets/brochure.pdf';
        link.download = 'BBA_in_Management_Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    /* ---------------------------
       Enquire Now Handling
    --------------------------- */
    // Function to handle Enquire Now buttons
    const enquireNowBtns = document.querySelectorAll('.enquire-now-btn');

    enquireNowBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const courseName = btn.getAttribute('data-course') || '';
            openModal('applicationModal');

            // Pre-fill the message field with the course name
            const messageField = document.getElementById('modal-message');
            if (messageField && courseName) {
                messageField.value = `I am interested in the ${courseName} program. Please provide more information.`;
            }
        });
    });

    /* ---------------------------
       Floating Buttons Functionality
    --------------------------- */
    const registerNowBtn = document.querySelector('.register-now-btn');
    const floatingApplyNowBtn = document.querySelector('.apply-now-btn');

    if (registerNowBtn) {
        registerNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('applicationModal');
        });
    }

    if (floatingApplyNowBtn) {
        floatingApplyNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('applicationModal');
        });
    }

    /* ---------------------------
       Clear Message Fields on Modal Close
    --------------------------- */
    const allCloseButtons = document.querySelectorAll('.close-button');

    allCloseButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Clear the message field in both forms
            const modalMessageField = document.getElementById('modal-message');
            if (modalMessageField) {
                modalMessageField.value = '';
            }

            const brochureMessageField = document.getElementById('brochure-message');
            if (brochureMessageField) {
                brochureMessageField.value = '';
            }
        });
    });

    /* ---------------------------
       Keyboard Accessibility for Modals
    --------------------------- */
    // Close modals with the 'Esc' key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal('applicationModal');
            closeModal('downloadBrochureModal');
        }
    });

    /* ---------------------------
       Our Leading Recruiters Slider
    --------------------------- */
    const sliderTrack = document.querySelector('.slider-track');
    const sliderImages = document.querySelectorAll('.slider-track img');
    const sliderContainer = document.querySelector('.recruiters-slider');

    let sliderIndex = 0;
    const sliderInterval = 3000; // 3 seconds
    const totalImages = sliderImages.length;
    let imageWidth;

    // Ensure images are loaded to get accurate width
    window.addEventListener('load', () => {
        imageWidth = sliderImages[0].clientWidth + 20; // Image width + margin (adjust if needed)

        // Duplicate the images to create a seamless loop
        sliderImages.forEach(img => {
            const clone = img.cloneNode(true);
            sliderTrack.appendChild(clone);
        });

        // Start the slider after images are cloned
        setInterval(moveSlider, sliderInterval);
    });

    function moveSlider() {
        sliderIndex++;
        sliderTrack.style.transition = 'transform 0.5s ease-in-out';
        sliderTrack.style.transform = `translateX(-${sliderIndex * imageWidth}px)`;

        if (sliderIndex >= totalImages) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                sliderTrack.style.transform = 'translateX(0)';
                sliderIndex = 0;
            }, 500); // Wait for the transition to complete
        }
    }

    /* ---------------------------
       Popup Sound on Modal Open
    --------------------------- */
    function playPopupSound() {
        const audio = new Audio('assets/popup.mp3'); // Ensure this path is correct
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }


});
