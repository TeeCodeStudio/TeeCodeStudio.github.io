// --- Lista przepisów skróconych (link do strony dania, ścieżka do obrazka, nazwa, opis) ---
const przepisy = [
  ["danie.html?przepis=cezar", "IMG/Cezar.JPEG", "Sałatka Cezar", "Pyszna sałatka z kurczakiem, sałatą i sosem Cezar."],
  ["danie.html?przepis=kurczak", "IMG/kurczak.JPG", "Kurczak pieczony", "Soczysty kurczak pieczony w ziołach i czosnku."],
  ["danie.html?przepis=pomidorowa", "IMG/pomidorowa.JPG", "Zupa pomidorowa", "Klasyczna zupa pomidorowa z makaronem."],
  ["danie.html?przepis=salatka-tunczyk", "IMG/salatka-z-tunczykiem.JPEG", "Sałatka z tuńczykiem", "Sałatka z tuńczykiem, warzywami i jajkiem."],
  ["danie.html?przepis=spaghetti", "IMG/spaghetti.JPEG", "Spaghetti z sosem", "Spaghetti z aromatycznym sosem pomidorowym."],
  ["danie.html?przepis=rosol", "IMG/rosol.JPG", "Rosół domowy", "Tradycyjny rosół z kury, idealny na zimne dni."]
];

// Baza dań
const dania = [
  {
    id: "cezar",
    title: "Sałatka Cezar",
    subtitle: "Klasyczna sałatka z grillowanym kurczakiem i chrupiącymi grzankami",
    headerText: "Odkrywaj smaczne i inspirujące przepisy kulinarne",
    image: "IMG/Cezar.JPEG",
    ingredients: [
      "300 g filetu z kurczaka",
      "1 łyżka oliwy + do skropienia",
      "1/2 większej główki sałaty rzymskiej",
      "6 łyżek tartego parmezanu lub grana padano",
      "10 cm kawałek bagietki"
    ],
    sauce: [
      "4 łyżki majonezu",
      "1 mały ząbek czosnku",
      "1 łyżeczka musztardy",
      "1 1/2 łyżeczki soku z cytryny (lub 1 łyżeczka octu winnego)",
      "1 łyżeczka sosu worcestershire"
    ],
    preparation: [
      "Filet z kurczaka: oczyścić, pokroić, doprawić i usmażyć po 4 min z każdej strony, skrapiając oliwą. Odłożyć.",
      "Bagietka: pokroić w kostkę, podsmażyć przez 5 minut do chrupkości. Odłożyć.",
      "Sos Cezar: wymieszać przeciśnięty czosnek z majonezem, musztardą, cytryną (lub octem) i sosem worcestershire. Doprawić solą i pieprzem.",
      "Sałata: opłukać, osuszyć, posiekać. Wymieszać z połową sosu i wyłożyć na talerze.",
      "Dodać kurczaka, skropić resztą sosu, posypać parmezanem i grzankami."
    ]
  },
  {
    id: "kurczak",
    title: "Pieczony kurczak z warzywami",
    subtitle: "Aromatyczny kurczak z ziołami, papryką i ziemniakami",
    headerText: "Odkrywaj smaczne i inspirujące przepisy kulinarne",
    image: "IMG/kurczak.JPG",
    ingredients: [
      "1 kurczak o wadze 2 kg",
      "sól i świeżo zmielony pieprz",
      "1 łyżeczka suszonego estragonu",
      "1 łyżeczka czerwonej papryki (wędzonej lub słodkiej)",
      "30 g roztopionego masła",
      "1/2 cytryny",
      "1/2 cebuli",
      "gałązka natki pietruszki",
      "gałązka rozmarynu",
      "kilka gałązek tymianku",
      "2 czerwone papryki",
      "6 małych ziemniaków",
      "1 łyżeczka suszonego oregano",
      "2 łyżki oliwy extra vergine"
    ],
    sauce: [
      "Winegret: 2 fileciki anchois, 2 ząbki czosnku, skórka i sok z 1/3 cytryny, 3 łyżki różowego pieprzu, 1/4 szklanki oliwy, świeże zioła (np. natka pietruszki), czarny pieprz"
    ],
    preparation: [
      "Kurczaka wyjąć wcześniej z lodówki. Przygotować formę z kratką lub z marchewkami.",
      "Natrzeć kurczaka solą, pieprzem, estragonem i papryką. Do środka włożyć cytrynę, cebulę i zioła. Związać nogi, polać masłem.",
      "Piec w 190°C: 25 min na jednym boku, 25 min na drugim, potem 55 min piersiami do góry.",
      "Na 30 min przed końcem dodać paprykę i ziemniaki wymieszane z oliwą i przyprawami.",
      "Po pieczeniu odczekać 15 minut przed krojeniem."
    ]
  },
  {
    id: "spaghetti",
    title: "Spaghetti po bolońsku",
    subtitle: "Makaron z aromatycznym sosem mięsnym, ziołami i mozzarellą",
    headerText: "Odkrywaj smaczne i inspirujące przepisy kulinarne",
    image: "IMG/spaghetti.JPEG",
    ingredients: [
      "0,4 kg mięsa mielonego wieprzowo-wołowego",
      "1 słoiczek koncentratu pomidorowego",
      "1 główka czosnku",
      "1 cebula",
      "0,2 szklanki oleju",
      "400 g makaronu spaghetti",
      "100 g sera mozzarella",
      "1 łyżeczka cukru",
      "0,5 łyżeczki pieprzu czarnego",
      "8 listków bazylii",
      "2 łyżki przyprawy do mięsa mielonego Prymat",
      "2 łyżki oregano"
    ],
    sauce: [],
    preparation: [
      "Mięso mielone posypać przyprawą i smażyć na oleju. Dodać pokrojoną cebulę i 2 ząbki czosnku.",
      "Gdy mięso zbrązowieje, zalać szklanką wody i dusić przez 15 minut.",
      "Dodać koncentrat pomidorowy, wymieszać i gotować jeszcze 5 minut.",
      "W międzyczasie ugotować makaron zgodnie z instrukcją na opakowaniu.",
      "Dodać pozostały czosnek, oregano, cukier i pieprz. Wymieszać i dusić kolejne 5 minut.",
      "Podawać z bazylią i startą mozzarellą, w miseczkach lub na talerzu."
    ]
  },
  {
    id: "rosol",
    title: "Rosół",
    subtitle: "Tradycyjny, aromatyczny rosół na kurczaku i wołowinie",
    headerText: "Klasyczny domowy rosół - baza wielu polskich zup",
    image: "IMG/rosol.JPG",
    ingredients: [
      "1 kurczak o wadze około 2 kg lub 2 duże uda i 1 korpus z kurczaka",
      "300 g wołowiny (antrykot, szponder, oczko wołowe)",
      "10 serduszek i 5 żołądków kurzych lub 1 szyja indycza",
      "3 litry wody",
      "2 marchewki",
      "1 pietruszka",
      "1 cebula",
      "2 gałązki natki pietruszki",
      "kawałek selera",
      "por",
      "opcjonalnie liść kapusty",
      "1 łyżka soli morskiej",
      "3 ziarenka ziela angielskiego",
      "1 liść laurowy",
      "4 całe ziarenka pieprzu"
    ],
    preparation: [
      "Pokroić kurczaka na części (szyja, skrzydełka, uda, korpus z piersiami).",
      "Opłukać mięso i podroby, włożyć do dużego garnka, zalać zimną wodą i posolić.",
      "Zagotować na średnim ogniu, zmniejszyć ogień i zszumować wywar.",
      "Gotować na małym ogniu pod lekko uchyloną pokrywą przez około 1,5 godziny.",
      "Przygotować warzywa: marchew, pietruszkę, seler obrać, cebulę, por i natkę opłukać.",
      "Dodać warzywa do garnka, zagotować, dodać przyprawy (ziele angielskie, liść laurowy, pieprz).",
      "Gotować na małym ogniu kolejną godzinę do półtorej.",
      "Podawać gorący rosół z makaronem, natką, marchewką i mięsem z kurczaka."
    ],
    tips: [
      "Można gotować tylko na kurczaku bez wołowiny i podrobów.",
      "Pozostały rosół przecedzić i przechowywać w lodówce.",
      "Mięso i warzywa można użyć do farszu na krokiety, pierogi lub paszteciki.",
      "Następnego dnia z resztek rosołu można przygotować zupę pomidorową."
    ]
  },
  {
    id: "pomidorowa",
    title: "Zupa pomidorowa", 
    subtitle: "Klasyczna zupa pomidorowa z makaronem", 
    headerText: "Rozgrzewająca i smaczna zupa na każdy dzień", 
    image: "IMG/pomidorowa.JPG", 
    ingredients: [ 
      "ćwiartka kurczaka",
      "2 litry wody",
      "1/2 łyżeczki soli",
      "włoszczyzna (marchewka, pietruszka, kawałeczek pora, plasterek selera)",
      "200 g koncentratu pomidorowego w słoiczku*",
      "250 ml śmietany 18% z kartonika (do zup i sosów)",
      "szczypta zmielonego pieprzu"
    ],
    sauce: [], 
    preparation: [ 
      "Mięso opłukać pod bieżącą chłodną wodą, włożyć do garnka, dodać szczyptę soli, zalać zimną wodą i moczyć przez około 15 minut. Następnie wylać wodę z moczenia kurczaka, dodać czystą zimną wodę (2 litry), posolić i zagotować na większym ogniu.",
      "W międzyczasie zdejmować łyżką cedzakową wytrącone na powierzchni 'szumowiny'. Zmniejszyć ogień do minimum i gotować na małym ogniu przez około 1/2 godziny. Dodać obraną i opłukaną włoszczyznę i gotować przez następne 20 minut.",
      "Wyjąć mięso z wywaru, dodać pomidory, dokładnie wymieszać i zagotować. Najlepiej dodać na początek mniej przecieru, zawsze można go później dodać po spróbowaniu zupy, chodzi o to aby zupa nie była za kwaśna.",
      "Zmniejszyć ogień i stopniowo dodawać śmietanę, aby uniknąć zwarzenia najlepiej wcześniej wymieszać ją w oddzielnym naczyniu (np. kubku) z kilkoma łyżkami zimnej wody, a następnie ze stopniowo dodawanym gorącym wywarem (około 1/3 szklanki). Całość delikatnie podgrzać. Doprawić do smaku pieprzem."
    ],
    tips: [ 
      "* lub 500 ml domowego przecieru pomidorowego lub 250 ml gotowego przecieru pomidorowego – passaty pomidorowej z kartonika lub butelki",
      "Propozycja podania: ugotowany biały ryż lub makaron / posiekana zielona pietruszka lub koperek" 
    ]
  },
  {
    id: "salatka-tunczyk",
    title: "Sałatka z tuńczykiem",
    subtitle: "Prosta, pożywna sałatka z tuńczykiem, jajkami i kukurydzą",
    headerText: "Świetna propozycja na kolację, lunch czy imprezę",
    image: "IMG/salatka-z-tunczykiem.JPEG",
    ingredients: [
      "2 puszki tuńczyka w sosie własnym (ok. 340 g)",
      "3 do 4 jajka",
      "3 do 4 ogórki konserwowe (lub kiszone)",
      "1 puszka kukurydzy (ok. 170 g)",
      "2 łyżki majonezu",
      "2 łyżki jogurtu naturalnego",
      "2 łyżki posiekanego szczypiorku",
      "sól do smaku",
      "pieprz czarny mielony do smaku"
    ],
    sauce: [
      "Jogurt naturalny i majonez w proporcji 1:1"
    ],
    preparation: [
      "Jajka gotujemy na twardo (ok. 10 minut od zagotowania się wody), studzimy i obieramy.",
      "Tuńczyka i kukurydzę odsączamy z zalewy.",
      "Ogórki oraz jajka kroimy w kostkę i przekładamy do miski.",
      "Dodajemy kukurydzę, majonez, jogurt, posiekany szczypiorek i tuńczyka (najlepiej na koniec, aby zachować kawałki).",
      "Doprawiamy do smaku solą i pieprzem, delikatnie mieszamy.",
      "Sałatkę można schłodzić lub podawać od razu."
    ],
    tips: [
      "Ogórki konserwowe można zastąpić kiszonymi, wtedy pomiń sól.",
      "Zamiast kukurydzy można dodać marchewkę lub czerwoną paprykę.",
      "Brak szczypiorku? Użyj drobno posiekanej czerwonej cebuli lub sparzonej zwykłej.",
      "Dla cięższego smaku użyj tylko majonezu zamiast sosu mieszającego.",
      "Sałatkę najlepiej przygotować kilka godzin wcześniej i schłodzić.",
      "Świeżo zmielony czarny pieprz poprawia trawienie i podkreśla smak."
    ]
  }
];


// --- Funkcje wspólne ---
// --- Funkcja pomocnicza: pobiera wartość parametru z adresu URL ---
// np. z URL "danie.html?przepis=cezar" -> getParam("przepis") zwróci "cezar"
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
// --- Funkcja główna: wypełnia dane dania na stronie na podstawie przekazanego obiektu `danie` ---
function wypelnijDanie(danie) {
  document.title = danie.title;
  document.getElementById("naglowek").textContent = danie.title;
  document.getElementById("podtytul").textContent = danie.headerText;

  const img = document.getElementById("zdjecie");
  img.src = danie.image;
  img.alt = danie.title;

  document.getElementById("tytul").textContent = danie.title;
  document.getElementById("podtytuly").textContent = danie.subtitle;

  const ulSkladniki = document.getElementById("lista-skladnikow");
  ulSkladniki.innerHTML = ""; // Wyczyść zawartość przed dodaniem
  danie.ingredients.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    ulSkladniki.appendChild(li);
  });

  const ulSos = document.getElementById("lista-sosu");// Wypełnij listę składników sosu (jeśli istnieją)
  const sauceHeading = document.getElementById("sauce-heading"); //Pobranie elementu nagłówka sosu

  ulSos.innerHTML = "";
  if (danie.sauce && danie.sauce.length > 0) {
    sauceHeading.style.display = "block"; //Pokazanie nagłówka jeśli są dane o sosie
    danie.sauce.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ulSos.appendChild(li);
    });
  } else {
    sauceHeading.style.display = "none"; //Ukrycie nagłówka jeśli brak danych o sosie
  }
// Wypełnij listę kroków przygotowania. Podobnie jak u sosu
  const ulPrzygotowanie = document.getElementById("lista-przygotowania");
  ulPrzygotowanie.innerHTML = "";
  danie.preparation.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    ulPrzygotowanie.appendChild(li);
  });
}

// --- Danie dnia + galeria ---
let danieDniaIndex = 0; // indeks wylosowanego dania dnia
let galeriaStart = 0;   // indeks początkowy do wyświetlania miniatur w galerii

// Przekierowuje do strony z przepisem (np. danie.html?przepis=spaghetti)
function wybierzPrzepis(index) {
  localStorage.setItem("wybranyPrzepis", index); // zapisz wybrany przepis w pamięci przeglądarki
  window.location.href = przepisy[index][0]; // przejdź do strony przepisu
}

// Wybiera i wyświetla danie dnia, zapamiętując wybór na dany dzień
function ustawDanieDnia() {
  const dzisiaj = new Date().toISOString().split("T")[0]; // dzisiejsza data w formacie YYYY-MM-DD
  const zapamietane = JSON.parse(localStorage.getItem("danieDnia")); // odczytaj poprzedni wybór z localStorage

  let danieDniaIndex;

  if (zapamietane && zapamietane.data === dzisiaj) {
    danieDniaIndex = zapamietane.index; // jeśli już wybrano danie na dziś, użyj go
  } else {
    danieDniaIndex = Math.floor(Math.random() * przepisy.length); // losowe danie dnia
    localStorage.setItem("danieDnia", JSON.stringify({ data: dzisiaj, index: danieDniaIndex }));
  }

  // Pobierz dane wybranego dania
  const [link, src, alt, opisDania] = przepisy[danieDniaIndex];

  // Elementy do aktualizacji na stronie
  const obrazek = document.getElementById("przepisdnia");
  const przycisk = document.getElementById("przepis");
  const opis = document.getElementById("opis-dnia");
  const opisText = document.getElementById("opis-text");

  // Ustaw dane dania dnia
  obrazek.src = src;
  obrazek.alt = alt;
  opis.textContent = alt;
  opisText.textContent = opisDania;

  // Dodaj funkcję kliknięcia do przycisku i obrazka
  przycisk.onclick = () => wybierzPrzepis(danieDniaIndex);
  obrazek.onclick = () => wybierzPrzepis(danieDniaIndex);
}

// Wyświetla mini-galerię 3 innych dań (nie zawiera dania dnia)
function aktualizujGalerie() {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = ""; // wyczyść poprzednie elementy

  let pokazane = 0;
  let i = galeriaStart;

  while (pokazane < 3) {
    const index = i % przepisy.length;
    if (index !== danieDniaIndex) {
      const [link, src, alt] = przepisy[index];

      const a = document.createElement("a");
      a.href = "#";
      a.onclick = (e) => {
        e.preventDefault(); // zapobiegaj domyślnemu zachowaniu
        wybierzPrzepis(index);
      };

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;

      a.appendChild(img);
      galeria.appendChild(a);
      pokazane++;
    }
    i++;
  }
}

// --- Inicjalizacja skryptów na różnych stronach ---
window.addEventListener("DOMContentLoaded", () => {
    // Sprawdź, czy jesteśmy na stronie z listą przepisów (przepisy.html)
    if (window.location.pathname.includes("przepisy.html")) {
        generujListePrzepisow(); // Wywołaj funkcję generującą listę przepisów
    }
    // Sprawdź, czy jesteśmy na stronie dania (danie.html)
    else if (window.location.pathname.includes("danie.html")) {
        const przepisId = getParam("przepis");
        if (!przepisId) {
            return;
        }

        const danie = dania.find(d => d.id === przepisId.toLowerCase());
        if (!danie) {
            return;
        }
        wypelnijDanie(danie);

        // Wypełnij prawy panel z innymi daniami
        const container = document.getElementById("inne-dania");
        if (container) {
            container.innerHTML = "";
            const dostepnePrzepisy = przepisy.filter(p => !p[0].includes(przepisId.toLowerCase()));
            const shuffled = [...dostepnePrzepisy].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);

            selected.forEach(([link, img, title, desc]) => {
                const div = document.createElement("div");
                div.className = "dish";
                div.innerHTML = `
                    <a href="${link}">
                        <img src="${img}" alt="${title}">
                    </a>
                    <h3>${title}</h3>
                    <p>${desc}</p>
                `;
                container.appendChild(div);
            });
        }
    }
    // Sprawdź, czy jesteśmy na stronie głównej (index.html)
    else if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        ustawDanieDnia();
        galeriaStart = (danieDniaIndex === 0) ? 1 : 0;
        aktualizujGalerie();

        document.getElementById("prev").onclick = () => {
            galeriaStart = (galeriaStart - 1 + przepisy.length) % przepisy.length;
            aktualizujGalerie();
        };

        document.getElementById("next").onclick = () => {
            galeriaStart = (galeriaStart + 1) % przepisy.length;
            aktualizujGalerie();
        };
    }
});


// --- Walidacja formularza opinii użytkownika ---

const form = document.querySelector("form");
const walidacjaBledy = document.getElementById("walidacjabledy");

if (form && walidacjaBledy) { // Dodaj warunek, żeby skrypt nie wysypał się na stronach bez formularza
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // zapobiegaj wysłaniu formularza
        walidacjaBledy.textContent = ""; // wyczyść wcześniejsze błędy

        // Pobierz wartości pól
        const imie = document.getElementById("imie").value.trim();
        const nazwisko = document.getElementById("nazwisko").value.trim();
        const mail = document.getElementById("mail").value.trim();
        const opinia = document.querySelector("textarea").value.trim();

        // Wyrażenie regularne sprawdzające poprawność e-maila
        const wyrazenie = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let bledy = [];

        // Sprawdź wymagane pola
        if (!imie) bledy.push("Pole 'Imię' jest wymagane.");
        if (!nazwisko) bledy.push("Pole 'Nazwisko' jest wymagane.");
        if (!mail) bledy.push("Pole 'Email' jest wymagane.");
        if (mail && !wyrazenie.test(mail)) bledy.push("Adres email jest nieprawidłowy.");
        if (!opinia) bledy.push("Pole 'Opinia' jest wymagane.");

        // Wyświetl błędy lub sukces
        if (bledy.length > 0) {
            walidacjaBledy.innerHTML = bledy.map(b => `• ${b}`).join("<br>");
        } else {
            walidacjaBledy.textContent = "Formularz przesłany poprawnie.";
            form.reset(); // zresetuj formularz po udanym przesłaniu
        }
    });

    // Wyczyść komunikat o błędach po resecie formularza
    form.addEventListener("reset", () => {
        walidacjaBledy.textContent = "";
    });
}


// --- Funkcja do generowania listy przepisów (przeniesiona na górę) ---
function generujListePrzepisow() {
  const container = document.querySelector(".lista-przepisow");
  if (!container) return; // nie rób nic, jeśli nie ma sekcji

  przepisy.forEach(([link, imgSrc, title, desc]) => {
    const article = document.createElement("article");
    article.className = "przepis";

    article.innerHTML = `
      <a href="${link}">
        <img src="${imgSrc}" alt="${title}" />
      </a>
      <div class="opis">
        <h2>${title}</h2>
        <p>${desc}</p>
      </div>
    `;

    container.appendChild(article);
  });
}
