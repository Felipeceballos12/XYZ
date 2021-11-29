const btnGenerarPdf = document.querySelector('.btnGenerarPDF');

btnGenerarPdf.addEventListener('click', () => {

    const containerPdf = document.querySelector('.containerPDF');
    
    if (containerPdf.style.display === "block") {
        containerPdf.style.display = "none";
    } else {
        containerPdf.style.display = "block";
    }
});