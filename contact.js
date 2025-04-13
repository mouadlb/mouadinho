document.addEventListener('DOMContentLoaded', () => {
    const contactTrigger = document.getElementById('contact-trigger');
    const contactModal = document.getElementById('contact-modal');
    const closeModal = document.getElementById('close-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    
    // Open contact modal
    if (contactTrigger && contactModal) {
        contactTrigger.addEventListener('click', () => {
            contactModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    // Close modal functions
    const closeContactModal = () => {
        contactModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    };
    
    // Close on button click
    if (closeModal) {
        closeModal.addEventListener('click', closeContactModal);
    }
    
    // Close on backdrop click
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeContactModal);
    }
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
            closeContactModal();
        }
    });
    
    // Prevent propagation from modal content
    const modalContent = contactModal.querySelector('.bg-white, .bg-gray-800');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});
