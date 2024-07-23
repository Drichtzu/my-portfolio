document.addEventListener('DOMContentLoaded', function() {
    const languageIcons = document.querySelectorAll('.lang-icon');
    let currentLang = 'de';

    const translations = {
        'de': {
            'Über mich': 'Über mich',
            'Fähigkeiten': 'Fähigkeiten',
            'Projekte': 'Projekte',
            'Lebenslauf': 'Lebenslauf',
            'Willkommen auf meiner Portfolio-Seite': 'Willkommen auf meiner Portfolio-Seite',
            'Hallo! Ich bin ein Quereinsteiger in der Webentwicklung.': 'Hallo! Ich bin ein Quereinsteiger in der Webentwicklung.',
            'Meine Fähigkeiten': 'Meine Fähigkeiten',
            'Meine Projekte': 'Meine Projekte',
            'Projekt 1': 'Projekt 1',
            'Projekt 2': 'Projekt 2',
            'Projekt 3': 'Projekt 3',
            'Fleischer bei Glück Auf': 'Fleischer bei Glück Auf',
            'Fleischer bei der Glück Auf Fleisch und Wurstwaren GmbH': 'Fleischer bei der Glück Auf Fleisch und Wurstwaren GmbH',
            'Aushilfe im Warehouse': 'Aushilfe im Warehouse',
            'Aushilfe im Warehouse bei Logistikpark Stollberg': 'Aushilfe im Warehouse bei Logistikpark Stollberg',
            'Ausbildung zum Fleischer': 'Ausbildung zum Fleischer',
            'Ausbildung bei der Glück Auf Fleisch und Wurstwaren GmbH mit Abschluss zum Fleischer': 'Ausbildung bei der Glück Auf Fleisch und Wurstwaren GmbH mit Abschluss zum Fleischer',
            'Ausbildung bei der Fleischerei Häußler': 'Ausbildung bei der Fleischerei Häußler',
            'Oberschule Lößnitz': 'Oberschule Lößnitz',
            'Oberschule Lößnitz mit Realschulabschluss': 'Oberschule Lößnitz mit Realschulabschluss',
            'Grundschule Lößnitz Altstadt': 'Grundschule Lößnitz Altstadt',
            'Grundschulbildung': 'Grundschulbildung',
            'Freiwilliges Engagement': 'Freiwilliges Engagement',
            'Einsatzabteilung der Feuerwehr Affalter': 'Einsatzabteilung der Feuerwehr Affalter',
            'Aktives Mitglied in der Einsatzabteilung': 'Aktives Mitglied in der Einsatzabteilung',
            'Jugendfeuerwehr Lößnitz': 'Jugendfeuerwehr Lößnitz',
            'Mitglied der Jugendfeuerwehr': 'Mitglied der Jugendfeuerwehr',
            'Schulischer Bildungsweg': 'Schulischer Bildungsweg',
            '© 2024 Mein Portfolio. Alle Rechte vorbehalten.': '© 2024 Mein Portfolio. Alle Rechte vorbehalten.',
            'Kontakt': 'Kontakt',
            'Philipp Meinel': 'Philipp Meinel',
            'Hauptstraße 29': 'Hauptstraße 29',
            '08056 Zwickau': '08056 Zwickau',
            'In Zwischenablage kopiert': 'In Zwischenablage kopiert',
            'Meine Programmierkenntnisse': 'Meine Programmierkenntnisse',
            'Persönliche Stärken': 'Persönliche Stärken',
            'Portfolio Repository': 'Portfolio Quellcode',
        },
        'en': {
            'Über mich': 'About Me',
            'Fähigkeiten': 'Skills',
            'Projekte': 'Projects',
            'Lebenslauf': 'Resume',
            'Willkommen auf meiner Portfolio-Seite': 'Welcome to my Portfolio Page',
            'Hallo! Ich bin ein Quereinsteiger in der Webentwicklung.': 'Hello! I am a career changer in web development.',
            'Meine Fähigkeiten': 'My Skills',
            'Meine Projekte': 'My Projects',
            'Projekt 1': 'Project 1',
            'Projekt 2': 'Project 2',
            'Projekt 3': 'Project 3',
            'Fleischer bei Glück Auf': 'Butcher at Glück Auf',
            'Fleischer bei der Glück Auf Fleisch und Wurstwaren GmbH': 'Butcher at Glück Auf Meat and Sausage Products GmbH',
            'Aushilfe im Warehouse': 'Warehouse Assistant',
            'Aushilfe im Warehouse bei Logistikpark Stollberg': 'Warehouse Assistant at Logistikpark Stollberg',
            'Ausbildung zum Fleischer': 'Butcher Apprenticeship',
            'Ausbildung bei der Glück Auf Fleisch und Wurstwaren GmbH mit Abschluss zum Fleischer': 'Apprenticeship at Glück Auf Meat and Sausage Products GmbH with qualification as a butcher',
            'Ausbildung bei der Fleischerei Häußler': 'Apprenticeship at Häußler Butchery',
            'Oberschule Lößnitz': 'Lößnitz Secondary School',
            'Oberschule Lößnitz mit Realschulabschluss': 'Lößnitz Secondary School with secondary school certificate',
            'Grundschule Lößnitz Altstadt': 'Lößnitz Altstadt Primary School',
            'Grundschulbildung': 'Primary Education',
            'Freiwilliges Engagement': 'Voluntary Work',
            'Einsatzabteilung der Feuerwehr Affalter': 'Operational Unit of Affalter Fire Department',
            'Aktives Mitglied in der Einsatzabteilung': 'Active member in the operational unit',
            'Jugendfeuerwehr Lößnitz': 'Lößnitz Youth Fire Department',
            'Mitglied der Jugendfeuerwehr': 'Member of the youth fire department',
            'Schulischer Bildungsweg': 'Educational Background',
            '© 2024 Mein Portfolio. Alle Rechte vorbehalten.': '© 2024 My Portfolio. All rights reserved.',
            'Kontakt': 'Contact',
            'Philipp Meinel': 'Philipp Meinel',
            'Hauptstraße 29': 'Hauptstraße 29',
            '08056 Zwickau': '08056 Zwickau, Germany',
            'In Zwischenablage kopiert': 'Copied to clipboard',
            'Meine Programmierkenntnisse': 'My Programming Skills',
            'Persönliche Stärken': 'Personal Strengths',
            'Portfolio Repository': 'Portfolio Repository',
        }
    };

    function translatePage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
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

    // Initialisiere die Sprachauswahl
    updateLanguageIcons();
    updateCopyData();
});