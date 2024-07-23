document.addEventListener('DOMContentLoaded', function() {
    const languageIcons = document.querySelectorAll('.lang-icon');
    const translateElements = document.querySelectorAll('[data-translate]');
    const toggleResumeIcon = document.getElementById('toggleResumeIcon');
    const hiddenItems = document.querySelectorAll('.timeline-item.hidden, .timeline.hidden, .section-subtitle.hidden');
    const arrowIcon = document.getElementById('arrowIcon');
    const copyIcons = document.querySelectorAll('.copy-icon');
    const copyNotification = document.getElementById('copyNotification');
    const linkNotification = document.getElementById('linkNotification');
    const contactLinks = document.querySelectorAll('.contact-link');

    let currentLang = 'de';
    let isExpanded = false;

    const translations = {
        de: {
            "Über mich": "Über mich",
            "Fähigkeiten": "Fähigkeiten",
            "Projekte": "Projekte",
            "Lebenslauf": "Lebenslauf",
            "Willkommen auf meiner Portfolio-Seite": "Willkommen auf meiner Portfolio-Seite",
            "Hallo! Ich bin ein Quereinsteiger in der Webentwicklung.": "Hallo! Ich bin ein Quereinsteiger in der Webentwicklung.",
            "Meine Fähigkeiten": "Meine Fähigkeiten",
            "Meine Programmierkenntnisse": "Meine Programmierkenntnisse",
            "HTML": "HTML",
            "CSS": "CSS",
            "JavaScript": "JavaScript",
            "PHP (Grundlagen)": "PHP (Grundlagen)",
            "MySQL (Grundlagen)": "MySQL (Grundlagen)",
            "Linux": "Linux",
            "Persönliche Stärken": "Persönliche Stärken",
            "Genauigkeit": "Genauigkeit",
            "Teamfähigkeit": "Teamfähigkeit",
            "Bereitschaft, Neues zu lernen": "Bereitschaft, Neues zu lernen",
            "Kenntnisse in wirtschaftlichen Zusammenhängen": "Kenntnisse in wirtschaftlichen Zusammenhängen",
            "Organisationstalent": "Organisationstalent",
            "Meine Projekte": "Meine Projekte",
            "Projekt 1": "Projekt 1",
            "Projekt 2": "Projekt 2",
            "Projekt 3": "Projekt 3",
            "Fleischer bei Glück Auf": "Fleischer bei Glück Auf",
            "Fleischer bei der Glück Auf Fleisch und Wurstwaren GmbH": "Fleischer bei der Glück Auf Fleisch und Wurstwaren GmbH",
            "Aushilfe im Warehouse": "Aushilfe im Warehouse",
            "Aushilfe im Warehouse bei Logistikpark Stollberg": "Aushilfe im Warehouse bei Logistikpark Stollberg",
            "Ausbildung zum Fleischer": "Ausbildung zum Fleischer",
            "Ausbildung bei der Glück Auf Fleisch und Wurstwaren GmbH mit Abschluss zum Fleischer": "Ausbildung bei der Glück Auf Fleisch und Wurstwaren GmbH mit Abschluss zum Fleischer",
            "Ausbildung bei der Fleischerei Häußler": "Ausbildung bei der Fleischerei Häußler",
            "Freiwilliges Engagement": "Freiwilliges Engagement",
            "Einsatzabteilung der Feuerwehr Affalter": "Einsatzabteilung der Feuerwehr Affalter",
            "Aktives Mitglied in der Einsatzabteilung": "Aktives Mitglied in der Einsatzabteilung",
            "Jugendfeuerwehr Lößnitz": "Jugendfeuerwehr Lößnitz",
            "Mitglied der Jugendfeuerwehr": "Mitglied der Jugendfeuerwehr",
            "Schulischer Bildungsweg": "Schulischer Bildungsweg",
            "Oberschule Lößnitz": "Oberschule Lößnitz",
            "Oberschule Lößnitz mit Realschulabschluss": "Oberschule Lößnitz mit Realschulabschluss",
            "Grundschule Lößnitz Altstadt": "Grundschule Lößnitz Altstadt",
            "Grundschulbildung": "Grundschulbildung",
            "Kontakt": "Kontakt",
            "Philipp Meinel": "Philipp Meinel",
            "Hauptstraße 29": "Hauptstraße 29",
            "08056 Zwickau": "08056 Zwickau",
            "© 2024 Mein Portfolio. Alle Rechte vorbehalten.": "© 2024 Mein Portfolio. Alle Rechte vorbehalten.",
            "In Zwischenablage kopiert": "In Zwischenablage kopiert",
            "Mehr anzeigen": "Mehr anzeigen",
            "Weniger anzeigen": "Weniger anzeigen"
        },
        en: {
            "Über mich": "About Me",
            "Fähigkeiten": "Skills",
            "Projekte": "Projects",
            "Lebenslauf": "Resume",
            "Willkommen auf meiner Portfolio-Seite": "Welcome to my Portfolio Page",
            "Hallo! Ich bin ein Quereinsteiger in der Webentwicklung.": "Hello! I am a career changer in web development.",
            "Meine Fähigkeiten": "My Skills",
            "Meine Programmierkenntnisse": "My Programming Skills",
            "HTML": "HTML",
            "CSS": "CSS",
            "JavaScript": "JavaScript",
            "PHP (Basics)": "PHP (Basics)",
            "MySQL (Basics)": "MySQL (Basics)",
            "Linux": "Linux",
            "Persönliche Stärken": "Personal Strengths",
            "Genauigkeit": "Accuracy",
            "Teamfähigkeit": "Team Player",
            "Bereitschaft, Neues zu lernen": "Willingness to Learn",
            "Kenntnisse in wirtschaftlichen Zusammenhängen": "Knowledge of Economic Contexts",
            "Organisationstalent": "Organizational Skills",
            "Meine Projekte": "My Projects",
            "Projekt 1": "Project 1",
            "Projekt 2": "Project 2",
            "Projekt 3": "Project 3",
            "Fleischer bei Glück Auf": "Butcher at Glück Auf",
            "Fleischer bei der Glück Auf Fleisch und Wurstwaren GmbH": "Butcher at Glück Auf Meat and Sausage Products GmbH",
            "Aushilfe im Warehouse": "Warehouse Assistant",
            "Aushilfe im Warehouse bei Logistikpark Stollberg": "Warehouse Assistant at Logistikpark Stollberg",
            "Ausbildung zum Fleischer": "Butcher Apprenticeship",
            "Ausbildung bei der Glück Auf Fleisch und Wurstwaren GmbH mit Abschluss zum Fleischer": "Apprenticeship at Glück Auf Meat and Sausage Products GmbH with qualification as a butcher",
            "Ausbildung bei der Fleischerei Häußler": "Apprenticeship at Häußler Butchery",
            "Freiwilliges Engagement": "Voluntary Work",
            "Einsatzabteilung der Feuerwehr Affalter": "Operational Unit of Affalter Fire Department",
            "Aktives Mitglied in der Einsatzabteilung": "Active member in the operational unit",
            "Jugendfeuerwehr Lößnitz": "Lößnitz Youth Fire Department",
            "Mitglied der Jugendfeuerwehr": "Member of the youth fire department",
            "Schulischer Bildungsweg": "Educational Background",
            "Oberschule Lößnitz": "Lößnitz Secondary School",
            "Oberschule Lößnitz mit Realschulabschluss": "Lößnitz Secondary School with secondary school certificate",
            "Grundschule Lößnitz Altstadt": "Lößnitz Altstadt Primary School",
            "Grundschulbildung": "Primary Education",
            "Kontakt": "Contact",
            "Philipp Meinel": "Philipp Meinel",
            "Hauptstraße 29": "Hauptstraße 29",
            "08056 Zwickau": "08056 Zwickau, Germany",
            "© 2024 Mein Portfolio. Alle Rechte vorbehalten.": "© 2024 My Portfolio. All rights reserved.",
            "In Zwischenablage kopiert": "Copied to clipboard",
            "Mehr anzeigen": "Show more",
            "Weniger anzeigen": "Show less"
        }
    };

    function translatePage(lang) {
        translateElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key] || key;
        });
        currentLang = lang;
        updateLanguageIcons();
        updateCopyData();
    }

    function updateLanguageIcons() {
        languageIcons.forEach(icon => {
            if (icon.getAttribute('data-lang') === currentLang) {
                icon.style.display = 'none';
            } else {
                icon.style.display = 'inline-block';
            }
        });
    }

    function updateCopyData() {
        const addressCopyIcon = document.querySelector('.copy-icon[data-copy*="Zwickau"]');
        if (addressCopyIcon) {
            if (currentLang === 'en') {
                addressCopyIcon.setAttribute('data-copy', 'Philipp Meinel, Hauptstraße 29, 08056 Zwickau, Germany');
            } else {
                addressCopyIcon.setAttribute('data-copy', 'Philipp Meinel, Hauptstraße 29, 08056 Zwickau');
            }
        }
    }

    languageIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                translatePage(lang);
            }
        });
    });

    // Toggle resume visibility
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
        arrowIcon.classList.toggle('rotated');
    });

    // Initial hide hidden elements
    hiddenItems.forEach((item, index) => {
        if (index >= 2) {
            item.style.display = 'none';
        }
    });

    // Copy to clipboard function
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            showNotification(copyNotification);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }

    // Show notification function
    function showNotification(notificationElement, customText) {
        if (customText) {
            notificationElement.querySelector('p').textContent = customText;
        }
        notificationElement.classList.add('show');
        setTimeout(() => {
            notificationElement.classList.remove('show');
        }, 3000);
    }

    // Copy icon click event
    copyIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            copyToClipboard(textToCopy);
        });
    });

    // Contact link click event
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const notificationText = this.getAttribute('data-notification');
            showNotification(linkNotification, notificationText);
        });
    });
    

    // Initial translation
    translatePage(currentLang);
});