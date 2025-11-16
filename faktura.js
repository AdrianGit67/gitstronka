window.addEventListener('DOMContentLoaded', () => {
            pobierzDaneXML();
        });

        async function pobierzDaneXML() {
            try {
                const response = await fetch('dane.xml');
                const xmlText = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, "application/xml");

                const miejscowosc = xmlDoc.querySelector('miejscowosc').textContent;
                const klient = xmlDoc.querySelector('klient').textContent;

                document.getElementById('miejscowosc').value = miejscowosc;
                document.getElementById('imienazwisko').value = klient;
                
                const pozycje = xmlDoc.querySelectorAll('pozycja');
                let suma = 0;

                pozycje.forEach((pozycja, index) => {
                    const nazwa = pozycja.querySelector('nazwa').textContent;
                    const cenaText = pozycja.querySelector('cena').textContent;
                    const cena = parseFloat(cenaText) || 0;

                    suma += cena;

                    const nrPozycji = index + 1;
                    const inputTowar = document.getElementById('towar' + nrPozycji);
                    const inputCena = document.getElementById('cena' + nrPozycji);

                    if (inputTowar) {
                        inputTowar.value = nazwa;
                    }
                    if (inputCena) {
                        inputCena.value = cena.toFixed(2);
                    }
                });

                const cenaKoncowaInput = document.getElementById('cenakoncowa');
                cenaKoncowaInput.value = suma.toFixed(2);

            } catch (error) {
                console.error("Błąd wczytywania lub przetwarzania XML:", error);
                alert("Nie udało się wczytać danych z pliku XML.");
            }
        }