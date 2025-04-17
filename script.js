function closeAllAccordions() {
    accordions.forEach((accordion) => {
        if (accordion.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(accordion, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion-collapse');
    document.querySelectorAll('.top-link').forEach((topLink) => {
        topLink.addEventListener('click', closeAllAccordions);                
    });
    
    anyOpenAccordion(accordions);
});