# Informatikai rendszerek építése (2022/23. II. félév)

- [**Beadandó információk**](assignment.md)
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

Egyéb anyagok:
- [Express Docs](https://expressjs.com/)
- [TypeORM Docs](https://typeorm.io/)

## 8. hét
Monorepo létrehozása, szerveroldal fejlesztése.

- [Monorepo létrehozása](monorepo.md)
    - [Webshop projekt (kedd 16:00)](https://github.com/aron123/infrend-2023/tree/master/webshop-k16)
    - [Webshop projekt (csütörtök 10:00)](https://github.com/aron123/infrend-2023/tree/master/webshop-cs10)

Egyéb anyagok:
- [NPM Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true)
- [Data Transfer Object tervezési minta](https://en.wikipedia.org/wiki/Data_transfer_object)

## 9. hét
Kliens- és szerveroldal összekapcsolása. Adatkezelés reaktív form-okkal.

- [Termékadatbázis](product-database.md)
- [Kódrészletek](webshop-code-snippets.md)
- [Webshop projekt (kedd 16:00)](https://github.com/aron123/infrend-2023/tree/master/webshop-k16)
- [Webshop projekt (csütörtök 10:00)](https://github.com/aron123/infrend-2023/tree/master/webshop-cs10)

Egyéb anyagok:
- [Angular - Proxying to a backend server](https://angular.io/guide/build#proxying-to-a-backend-server)
- [Reactive forms in Angular](https://angular.io/guide/reactive-forms)
    - [Intro to Angular Reactive Forms](https://betterprogramming.pub/intro-to-angular-reactive-forms-fc5cd636ce1f)

## Elérhetőség
Kiss Áron, tanszéki mérnök<br>
ME-GÉIK Informatikai Intézet

E-mail: kiss.aron@uni-miskolc.hu
