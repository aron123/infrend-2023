# Informatikai rendszerek építése (2022/23. II. félév)

- [Tanszéki weboldal](https://oktatas.iit.uni-miskolc.hu/doku.php?id=tanszek:oktatas:informatikai_rendszerek_epitese:informatikai_rendszerek_epitese)
- [BProf gyakorlat](bprof.md)
- [Szoftverkövetelmények](sw_requirements.md)

## 1. hét
Követelmények ismertetése, szoftverek telepítése, ismerkedés az Angular keretrendszerrel.

- [Getting started with Angular](https://angular.io/start)
- [StackBlitz sample project](https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html)

## 2. hét
Elmaradt.

## 3. hét
Angular alkalmazások felépítése, sztring interpoláció és strukturális direktívák (`*ngIf`, `*ngFor`). Bootstrap, grid rendszer.

- [Adatok](https://github.com/aron123/infrend-2023/blob/master/_data/applicants.ts)
- [HR nyilvántartó rendszer](https://github.com/aron123/infrend-2023/tree/master/hr-application) - [[DEMO](demos/hr-application)]

Dokumentációk, egyéb anyagok:
- [Bootstrap](https://getbootstrap.com/docs)
- [Emmet abbreviations](https://docs.emmet.io/abbreviations/syntax/) (+[Emmet in VSCode](https://code.visualstudio.com/docs/editor/emmet))

## 4. hét
Angular alkalmazás komponensekre bontása, komponensek közötti kommunikáció. Kódgenerálás (`ng generate`), adatkötés eszközei (`@Input`, `@Output` dekorátorok, `EventEmitter` osztály).

- [Feladatok több komponens használatára](component-interaction.md)
    - [Szemantikus verziószámozás](https://github.com/aron123/infrend-2023/tree/master/semver) - [[DEMO](demos/semver)]

Dokumentációk, egyéb anyagok:
- [Angular Components Overview](https://angular.io/guide/component-overview)
- [Sharing data between child and parent components](https://angular.io/guide/inputs-outputs)
- [Semantic Versioning 2.0.0](https://semver.org/)

## 5. hét
Az Angular router használata, guard-ok.

- [Adatmodell](https://github.com/aron123/infrend-2023/blob/master/_data/chat-gpt.models.ts)

Projekt:
- [ChatGPT alkalmazás](https://github.com/aron123/infrend-2023/tree/master/chat-gpt)

Egyéb anyagok:
- [Routing in SPAs](https://dev.to/marcomonsanto/routing-in-spas-173i)
- [Common routing tasks in Angular](https://angular.io/guide/router)

## 6. hét
HTTP kérések kezelése Angular-ban, service-k.

- [HTTP protokoll](http.md)
- [Görgetés script](scrolling.md)

Projekt:
- [ChatGPT alkalmazás](https://github.com/aron123/infrend-2023/tree/master/chat-gpt)

Egyéb anyagok:
- [OpenAI API](https://platform.openai.com/docs/introduction)

## 7. hét
Szerveroldal fejlesztése. HTTP szerver készítése Express.js segítségével. Adatbázis kezelés TypeORM-el.

- [Express.js alapok](express.md) (HTTP szerver)
    - [Greeting API projekt](https://github.com/aron123/infrend-2023/tree/master/greeting-api)
- [TypeORM alapok](typeorm.md) (Adatbáziskezelés)
    - [Tutorial projekt](https://github.com/aron123/infrend-2023/tree/master/typeorm-tutorial)

## 8. hét
Kliens- és szerveroldal összekapcsolása. Példa projekt alapjainak elkészítése.

- [Termékadatbázis](product-database.json)

Egyéb anyagok:
- [Express Docs](https://expressjs.com/)
- [TypeORM Docs](https://typeorm.io/)

## Elérhetőség
Kiss Áron, tanszéki mérnök<br>
ME-GÉIK Informatikai Intézet

E-mail: kiss.aron@uni-miskolc.hu
