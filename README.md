## Instructions

Potrebno implementirati spletno aplikacijo SPA (single-page app) s katero lahko pridobimo trenutno vremensko stanje poljubnega mesta. Aplikacija naj ponuja naslednje zmogljivosti:
- iskalnik kamor lahko vpišemo ime mesta, za katerega nas zanima vreme
- prikaz vremena za trenutno izbrano veljavno mesto
- zadnjih 5 uspešnih iskalnih nizov, za katere je API vrnil rezultat
- s klikom na prejšnji iskalni niz se naj v iskalnik prepiše vrednost iskanega mesta in hkrati prikaže vreme za to mesto

Za pridobivanje podatkov o vremenu se lahko uporabi OpenWeather API, kjer je potrebno le kreirati "free" account, s katerim se pridobi veljavni APP ID, ki ga potrebujemo za uporabo naslednjega APIja:
https://openweathermap.org/current#name

Podatki o vremenu naj bodo v metričnih enotah (Celzij). Prikažejo se naj vsaj naslednji podatki:
- temp
- feels_like
- temp_min
- temp_max
- humidity

Oblikovanje (css) aplikacije ni pomemben oziroma je prepuščen tebi, pomembno je predvsem to, da ponuja zgoraj opisane zmogljivosti.

Za implementacijo se lahko uporabi enega od naslednjih frameworkov, izbira je prepuščena tebi:
- VueJS
- React

Ocenjuje se:
- arhitektura aplikacije
- primerna uporaba UI komponent
- berljivost kode

## Built with

- React Vite
- SCSS

## Getting started

### Prerequisites

- Node.js (18 LTS+)

### Installation

1. Clone the repository or download it to your device.
2. Navigate to the root of the folder in your terminal / shell.
3. Install all the required packages:

```sh
npm install
```

4. Create .env file in the project root and paste the below line
   into the file:

```sh
VITE_API_KEY=YOUR API KEY HERE
```

Replace the above placeholder text with your API key.

5. Run the project:

```sh
npm run dev
```

6. Open your browser and go to url:

```sh
http://localhost:5173/
```

## Contact

Nika Volk - nika.volkee@gmail.com

[LinkedIn](https://www.linkedin.com/in/nika-volk/)
