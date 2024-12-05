document.getElementById("transfer-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const velikostSouboruMB = parseFloat(document.getElementById("velikost").value); 
    const rychlost = parseFloat(document.getElementById("rychlost").value); 

    const velikostVbitech = velikostSouboruMB * 8000000;
    const rychlostvBitech = rychlost * 1000000;

    const casVSekundach = velikostVbitech / rychlostvBitech;
    const hodiny = Math.floor(casVSekundach / 3600);
    const minuty = Math.floor((casVSekundach % 3600) / 60);
    const sekundy = Math.floor(casVSekundach % 60);
    
    const cas = `${hodiny} hodin, ${minuty} minut a ${sekundy} sekund`;

    document.getElementById("vysledek").innerHTML = `Čas přenosu souboru: ${cas}`;
            });
