import showSection from './showsection.js';

const links = document.querySelectorAll('.link');
const containerSections = document.querySelectorAll('.containerSection');
let indexBtnActive = 0;


showSection(indexBtnActive, containerSections);

links.forEach((link, index) => {
    link.addEventListener('click', () => {

        const btnActive = index;
        containerSections[indexBtnActive].style.display = 'none';

        switch (link.id) {
            case "linkSolicitudes":
                
                indexBtnActive = btnActive;
                showSection(indexBtnActive, containerSections);
            
            case "linkSAsignadas":
                
                indexBtnActive = btnActive;
                showSection(indexBtnActive, containerSections);
            
            case "linkSAprobadas":
                
                indexBtnActive = btnActive;
                showSection(indexBtnActive, containerSections);
                    
            case "linkSNoAprobadas":
                
                indexBtnActive = btnActive;
                showSection(indexBtnActive, containerSections);

            case "linkReportes":
                
                indexBtnActive = btnActive;
                showSection(indexBtnActive, containerSections);
        }
        
    });
})