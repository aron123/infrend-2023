# Felhasználókezelés, autentikáció (kiegészítő anyag)
Elkészült webshopunkat felhasználókezeléssel szeretnénk ellátni. 

Célunk a legalapvetőbb autentikációs folyamatok implementálása, melynek során olyan technológiákat ismerünk meg, amiket valós rendszerekben is alkalmaznak.

Nem törekszünk azonban a teljességre, a tutorial végére elkészülő alkalmazásunk csak további védelmi funkciók implementálása után állna készen arra, hogy élesben is üzemeljen. Ezek a „Továbbfejlesztési lehetőségek” fejezetben vannak felsorolva.

## Kezdő projekt

Kezdésképpen a webshop projektet [töltsük le innen](assets/webshop-auth.zip), hogy közös kódbázisból induljunk!

Tartalmát csomagoljuk ki valahova, majd a `webshop-auth` könyvtárból kiindulva futtassuk az `npm install` parancsot!

Ezt követően nyissuk meg a projektet VSCode-ban, majd a megszokott `npm run start:server` és `npm run start:client` parancsokkal indítsuk el!

Figyeljünk rá, hogy a `webshop-auth/server/src/data-source.ts` fájl a megfelelő adatokat tartalmazza az adatbázis eléréséhez!

## Cél

Célunk, hogy az olvasási műveletekhez (pl. termékek listázása) bárki hozzáférhessen, míg írási műveleteket (pl. új termék hozzáadása) kizárólag regisztrált felhasználók hajthassanak végre a rendszerben!

Nem célunk ugyanakkor ezen kívül más védelmi mechanizmusok alkalmazása (pl. annak megoldása, hogy a felhasználó csak a saját termékeit szerkeszthesse). Tekinthetjük ezt úgy is, hogy regisztrált felhasználók mindegyike Adminisztrátori jogkörrel rendelkezik.

## JWT

Autentikációnk alapjául ún. "JSON Web Token-eket" (JWT) fogunk használni. A tutorial további részének megértéséhez elengedhetetlen ezek alapvető ismerete.

A JWT működésének utána lehet nézni például [itt](https://supertokens.com/blog/what-is-jwt) és [itt](https://dev.to/kcdchennai/how-jwt-json-web-token-authentication-works-21e7).

Összefoglalásképpen elmondható, hogy a JSON Web Token egy nyílt szabványban definiált JSON adatszerkezet, amely egy biztonságos és standardizált módszert biztosít az azonosításra és az adatátvitelre az interneten. A JWT tokenek lehetővé teszik az alkalmazások számára, hogy a felhasználók azonosítását és jogosultságkezelést végezzenek.

A JWT tokenek az alábbi három részből állnak:

- **Fejléc (Header)**: Tartalmazza a tokentípust és az algoritmust, amelyet használnak a token aláírásához és ellenőrzéséhez.
- **Adattartalom (Payload)**: Ebben a részben találhatók a felhasználóra vagy az alkalmazásra vonatkozó információk, például a felhasználói azonosító, a jogosultságok, az időkorlátok és egyéb metaadatok.
- **Aláírás (Signature)**: Ez a rész a fejléc és a payload érvényességét biztosítja az aláírás segítségével, amely az előző két részből számítódik ki a titkos kulcs segítségével.

A szolgáltató a JWT token érvényességét az alábbi módon ellenőrzi:

1. Ellenőrzi a token aláírását, hogy megbizonyosodjon arról, hogy a token valóban általa lett-e kiállítva.
2. Ellenőrzi a tokent tartalmazó payloadban szereplő `"exp"` (lejárati idő) adatot, hogy megállapítsa, a token még érvényes-e. Ha a token lejárt, akkor a szolgáltató nem fogja elfogadni.
3. Ha a token hitelesnek és érvényesnek bizonyul, akkor a felhasználó azonosítása sikeres, és a szolgáltató használhatja a payload-ban található információkat.

## Szerveroldal védelme

Először a szerveroldal védelmét fogjuk kialakítani. Ehhez regisztrációs és bejelentkezési lehetőséget kell biztosítani a felhasználók számára, majd implementálni kell a rendszer írási műveleteinek védelmét.

### Felhasználói regisztráció

Elsőként módosítsuk az adatbázist, a `User` entitáshoz adjuk hozzá a következő mezőket, ezeket fogjuk használni a beléptetéshez:

```ts
@Column({ unique: true })
email: string;

@Column({ select: false })
password: string;
```

A password mezőhöz tartozó `select` tulajdonságot `false`-ra állítottuk, így alapértelmezetten a felhasználó jelszava nem fog lekérdezésre kerülni, csak akkor, ha arra a szerveroldalon ténylegesen szükségünk van.

A regisztráció során megadott jelszóból [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algoritmus segítségével [hash kódot fogunk képezni](https://nordpass.com/blog/password-hash/). Így a felhasználó jelszavát nem tároljuk, azonban a bejelentkezéskor ellenőrizni tudjuk, hogy helyes jelszót adott-e meg. Telepítsük ehhez a `bcrypt` csomagot, és az automatikus kódkiegészítéshez szükséges típusokat:

```
npm install bcrypt
npm install @types/bcrypt --save-dev
```

Ezt követően a `UserController`-ben definiáljuk felül a `Controller` osztályból érkező `create` metódust, hiszen most már nem csak a beérkezett adatok mentését kell elvégeznünk, hanem hash-eljük is a felhasználó által megadott jelszót annak eltárolása előtt:

```ts
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Controller } from "./base.controller";

import bcrypt from 'bcrypt';

export class UserController extends Controller {
    repository = AppDataSource.getRepository(User);

    create = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);
            entity.id = null;

            entity.password = await bcrypt.hash(entity.password, 12);

            const result = await this.repository.save(entity);
            delete result.password;
            
            res.json(result);
        } catch (err) {
            this.handleError(res, err);
        }
    };
}
```

Teszteljük a regisztráció működését Postman segítségével, pl. az alábbi adatokkal:

```json
{
    "firstName": "Példa",
    "lastName": "Béla",
    "email": "user@example.com",
    "password": "admin123"
}
```

Az adatbázisban a jelszóhoz tartozó hash-nek kell megjelennie.

### Bejelentkezés

Ezt követően tegyük lehetővé a bejelentkezést! Ennek során ellenőriznünk kell, hogy a felhasználó által megadott e-mail cím és jelszó egyezik-e az adatbázisban szereplő adatokkal. Amennyiben igen, JWT tokent kell kiállítani a kliens számára.

Adjunk hozzá egy `login` metódust a `UserController`-hez:

```ts
login = async (req, res) => {
    try {
        const user = await this.repository.findOne({
            where: { email: req.body.email },
            select: [ 'id', 'password' ]
        });

        if (!user) {
            return this.handleError(res, null, 401, 'Incorrect email or password.');
        }

        const passwordMatches = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatches) {
            return this.handleError(res, null, 401, 'Incorrect email or password.');
        }

        // TODO: generate JWT token

        res.json({ success: true });
    } catch (err) {
        this.handleError(res, err);
    }
};
```

Majd a `routes.ts`-ben kössük hozzá a bejelentkezési műveletet a `/users/login` útvonalhoz:

```ts
router.post('/users/login', userController.login);
```

Teszteljük Postman-ben, hogy mi történik megfelelő, illetve hibás adatok beküldése esetén! Kérésünkben az `email` és `password` mezőket kell szerepeltetni, pl.:

```json
{
    "email": "user@example.com",
    "password": "admin123"
}
```

Ezt követően implementáljuk a JWT token generálását! Először telepítsük a `jsonwebtoken` csomagot és a hozzá tartozó típusdefiníciókat:

```
npm install jsonwebtoken
npm install @types/jsonwebtoken --save-dev
```

A `UserController`-ben importáljuk a csomagot:

```ts
import jwt from 'jsonwebtoken';
```

Majd a login metódus végét cseréljük ki a következőre:

```ts
const token = jwt.sign({ id: user.id }, 'mySecretKey', { expiresIn: '2w' });
res.json({ accessToken: token });
```

A fenti 2 sorban egy JWT tokent hozunk létre, melynek payload részében a felhasználó azonosítója szerepel. A token aláírását a `mySecretKey` titkos kulccsal végezzük el (később, a token ellenőrzésekor ezt még használnunk kell!). A token lejáratát 2 hétre állítottuk, ezt követően a felhasználónak újra be kell majd lépnie.

Teszteljük a belépést Postman-ben újra! A visszakapott JWT token tartalmát ellenőrizhetjük is, a https://jwt.io/ webhelyen. Mentsük is el a kapott tokent, a fejlesztés során ezt még használni fogjuk!

### HTTP végpontok védelme

A regisztrációt és a belépést már megvalósítottuk, következő feladatunk a szerver által biztosított írási műveletek védelme.

Ehhez először telepítsük az `express-jwt` csomagot, ami a beérkező kérésben megkeresi a JWT tokent, majd ellenőrzi, hogy az érvényes-e (a saját titkos kulcsunkkal lett-e aláírva), és nem járt még le:

```
npm install express-jwt
```

A `server/src/` könyvtáron belül hozzunk létre egy fájlt `protect-routes.ts` néven, ebbe fognak kerülni a JWT token ellenőrzéséhez szükséges middleware-k:

```ts
import { expressjwt } from "express-jwt";

export const checkUser = expressjwt({
    secret: "mySecretKey",
    algorithms: ["HS256"]
});

export const handleAuthorizationError = (err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).send({ error: 'Authentication is required for this operation.' });
    } else {
        next(err);
    }
};
```

A `checkUser` függvény ellenőrzi a JWT tokent, melyet alapértelmezetten a kérés `Authorization` nevű fejlécéből olvas ki.

A `handleAuthorizationError` függvény pedig kezeli azt az esetet, amikor a token valamilyen okból nem érvényes (vagy nem is szerepel a kérésben).

A `routes.ts` fájlban szereplő routerben alkalmazzuk a checkUser függvényt minden írási műveletre (kivéve a regisztrációra, amit el kell érnie a vendégeknek is):

```ts
export function getRoutes() {
    const router = express.Router();

    const productController = new ProductController();

    router.get('/products', productController.getAll);
    router.get('/products/:id', productController.getOne);
    router.post('/products', checkUser, productController.create);
    router.put('/products', checkUser, productController.update);
    router.delete('/products/:id', checkUser, productController.delete);

    const userController = new UserController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', checkUser, userController.update);
    router.delete('/users/:id', checkUser, userController.delete);

    router.post('/users/login', userController.login);

    const categoryController = new CategoryController();

    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', checkUser, categoryController.create);
    router.put('/categories', checkUser, categoryController.update);
    router.delete('/categories/:id', checkUser, categoryController.delete);

    return router;
}
```

A megfelelő útvonalak esetében az adott műveletet végrehajtó kontroller metódus elé így beékelődik plusz lépésként a JWT token ellenőrzése.

Kezeljük azt az esetet, amikor a `checkUser` middleware hibát dob! Ehhez az `index.ts` fájlban módosítsuk a router regisztrációját a következőképpen:

```ts
app.use('/api', getRoutes(), handleAuthorizationError);
```

Hiba esetén így a `handleAuthorizationError` middleware fut le, mely megfelelő státuszkódot és üzenetet küld vissza a kliensnek. Ha ezt a middleware-t nem használnánk, az Express alapértelmezett, HTML alapú hibaoldala jelenne meg helyette.

Most küldjünk egy kérést Postman-ben: `GET http://localhost:3000/api/products/1`

Mivel ez egy olvasási művelet, a megfelelő termék adatait kell visszakapnunk.

Most próbáljuk meg törölni a terméket: `DELETE http://localhost:3000/api/products/1`

Ebben az esetben az autentikációra vonatkozó hibaüzenetet, és a `401 Unauthorized` státuszkódot kell visszakapnunk.

Váltsunk át a Postman-ben az "Authorization" fülre, a "Type" legördülő menüből válasszuk ki a "Bearer token" lehetőséget, majd a jobb oldalon szereplő "Token" mezőbe másoljuk be a korábban elmentett JWT tokenünket! Ha átváltunk a "Headers" fülre, látható, hogy a Postman létrehozta az `Authorization` fejlécet, melyben a megadott token szerepel.

Most küldjük be újra a törlésre vonatkozó kérést! Ha rendszerünk megfelelően működik, 200-as státuszkódot kell válaszként visszakapnunk. Ez azt jelenti, hogy az 1-es termék törlésre került.

## Kliensoldal védelme

### Felhasználói regisztráció

### Token kezelés (tárolás, használat, kilépés)

### Útvonalak / UI védelme

## Továbbfejlesztési lehetőségek

- ne lehessen más user nevében terméket létrehozni
- csak saját terméket lehessen módosítani
- role-ok
- 401 esetén kiléptetés
- belépett user ne érje el a regisztrációs oldalt