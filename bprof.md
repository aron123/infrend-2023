# BProf gyakorlat feladatok

## 1-3. hét
Szoftverkövetelmények telepítése, ismerkedés az Angular keretrendszer alapjaival.

## 4. hét
Tetszőleges nyilvántartó rendszer fejlesztése Angular keretrendszerben, Bootstrap helyett Tailwind CSS felhasználásával. A kezelt objektumoknak legyen legalább 4 mezője. Legyen lehetőség a tárolt rekordok listázására, törlésére, új rekord hozzáadására. Legyen felhasználva minél több Tailwind CSS által biztosított osztály.

Segédanyagok:
- [Install Tailwind CSS with Angular](https://tailwindcss.com/docs/guides/angular)
- [Using Tailwind CSS in Angular](https://www.youtube.com/watch?v=zSXdJqEPy9w)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

## 5-6. hét
A következő alkalmazás elkészítése: [[Screenshot]](assets/component-interaction-jokes-list.png)

- legalább 3 komponensből álljon az alkalmazás,
- lehessen új vicceket felvinni (felhasználónév, vicc szövege),
- legyen szavazási lehetőség (lehet többször is szavazni),
- az eredmény viccenként és összesítve is jelenjen meg,
- a legalább +50-es eredményt elért vicceknél jelenjen meg a "Community Approved" jelvény.

A fenti feladat helyett választható az [itt látható 2. feladat is](component-interaction.md) (legalább 3 komponensre bontva, _a)_ és _b)_ résszel együtt!).

## 7-9. hét
A következő hetek feladata egy alkalmazás készítése a GitHub API felhasználásával:
- A felület stílusának kialakításához valamelyik tanult CSS-könyvtárat (Bootstrap vagy Tailwind) használni kell.
- A lapok közötti navigáció a beépített Angular Router-rel történjen.
- A listák megjelenítésekor nem kell lapozási lehetőséget biztosítani, az API által alapértelmezetten visszaküldött számú találat megjelenítése elegendő.

Elkészítendő lapok:
1) **Felhasználó keresés lap**: Be lehet írni a keresett felhasználó nevét, egy "Keresés" gombra kattintva megjelennek a GitHub API-tól kapott találatok.
2) **Felhasználói adatlap**: A keresés során megtalált felhasználóknak meg lehet nyitni az adatlapját, ahol megjelenik róluk néhány alapinformáció, valamint a rendszerben szereplő repository-jaik. A repository-k kattinthatók, a linkek az adott repo adatlapjára visznek.
3) **Repository keresés lap**: Be lehet írni a keresett repository nevét, egy "Keresés" gombra kattintva megjelennek a GitHub API-tól kapott találatok.
4) **Repository adatlap**: A keresés során megtalált repository-knak meg lehet nyitni az adatlapját, ahol megjelenik néhány alapadatuk.

A 7. héten a GitHub API megismerése a cél: össze kell gyűjteni és ki kell próbálni azokat az API hívásokat, amik szükségesek az ismertetett alkalmazás megvalósításához. Egy olyan dokumentum összeállítása a cél, ami tartalmazza a szükséges adatlekérdező műveletek elérését, rövid leírását, és egy-egy screenshotot a Postman-ből, amiben sikeres API hívás látható.

A 8. héten a 2 kereső felület megvalósítása a cél. A felhasználó kereső kerüljön a főoldalra, a repository kereső a `/search-repos` útvonalon legyen elérhető!

A 9. héten a felhasználói- és repository adatlapot is el kell készíteni, valamint menüt kell létrehozni, amivel a felhasználó navigálhat a két kereső között.

Referencia dokumentáció:
- [Általános API-leírás](https://docs.github.com/en/rest/overview/resources-in-the-rest-api)
- [Search repositories](https://docs.github.com/en/rest/reference/search#search-repositories)
- [Get a repository](https://docs.github.com/en/rest/reference/repos#get-a-repository)
- [Search users](https://docs.github.com/en/rest/reference/search#search-users)
- [Get a user](https://docs.github.com/en/rest/reference/users#get-a-user)
- [List repositories for a user](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)

# 10. hét
Rektori szünet.

# 11-12. hét
TODO alkalmazás készítése, TypeORM helyett [Sequelize](https://sequelize.org/docs/v6/) segítségével.

- minden TODO rendelkezik címmel, leírással, határidővel, teljesítettségi állapottal (boolean),
- el kell készíteni az alapvető CRUD műveleteket (létrehozás, összes rekord olvasása, egy rekord olvasása, módosítás, törlés),
- továbbá le lehet kérdezni azokat a TODO-kat, amik határideje lejárt, de még nem lettek teljesítve,

A 11. hét feladata a szerveroldal elkészítése (Express és Sequelize segítségével), valamint tesztelése Postman-nel.

A 12. hét feladata a kliensoldal elkészítése Angular-ban.

Segédanyagok:
- [Egy egyszerűbb TODO alkalmazás](https://microsoftedge.github.io/Demos/demo-to-do/)
- [Build Type Safe API with Sequelize TypeScript and Express.js](https://dev.to/franciscomendes10866/how-to-use-sequelize-orm-with-typescript-3no)
- [Developing REST Api using sequelize typescript, node, express and mysql](https://crew-code.com/node-express-typescript-sequelize-mysql-rest-api/)
- [Build a bullet proof REST API with Typescript, Express.js and Sequelize with Sqlite3](https://www.youtube.com/watch?v=yFgrSJGNj0E)