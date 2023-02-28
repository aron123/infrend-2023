# Szoftverkövetelmények

## Szükséges szoftverek telepítése
0. Laborgép használata esetén jelentkezzünk be a `Coder` nevű felhasználóval!
1. [Visual Studio Code](https://code.visualstudio.com/) telepítése.
2. [Node.js v18.x](https://nodejs.org/dist/latest-v18.x/node-v18.14.2-x64.msi) telepítése.
3. Node.js telepítésének ellenőrzése, parancssorban: `node -v`
4. `Path` rendszerváltozó beállítása a következő értékre: `C:\Users\Coder\AppData\Roaming\npm`
5. Angular telepítése, parancssorban: `npm install -g @angular/cli@latest`
6. Angular telepítésének ellenőrzése, parancssorban: `ng version`
7. [WAMPServer](https://sourceforge.net/projects/wampserver/files/WampServer%203/WampServer%203.0.0/wampserver3.3.0_x64.exe/download) telepítése.
8. WAMPServer indítása, majd adatbázis kapcsolat ellenőrzése: http://localhost/phpmyadmin/ (belépési adatok: `root` / `<üres>`)
9. [Postman](https://dl.pstmn.io/download/latest/win64) telepítése.

<details>
<summary>Laborgépeken szükséges további beállítások</summary>

Amennyiben a parancssorban a `node -v` és `ng --version` parancsokra hibaüzenetet kapunk, végezzük el a következő beállításokat. Ezek hatására a VSCode-ba integrált terminálban elérhetőek lesznek a szükséges parancsok.

1. A VSCode megnyitása után nyomjuk le a `Ctrl+Shift+P` billentyűkombinációt, az ablak tetején megjelenik az ún. „Command Palette”.
2. Gépeljük be az `open settings` keresőszót, majd válasszuk a „Preferences: Open Settings (JSON)” lehetőséget.
3. Az így megnyitott JSON dokumentum egy tetszőleges pontjára másoljuk be az alábbiakat, majd mentsük el a fájlt:
    ```json
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe",
    "terminal.integrated.env.windows": {
        "PATH": "${env:APPDATA}\\npm;C:\\Program Files\\nodejs;${env:PATH}"
    },
    ```
4. Az ablak tetején látható „Terminal” menüben válasszuk a „New Terminal” lehetőséget, majd futtassuk az alábbi parancsot, ellenőrizve a beállítás sikerességét:
    ```
    ng --version
    ```
</details>

## Új Angular projekt létrehozása és elindítása
1. Parancssorban be kell lépni egy tetszőleges mappába, majd: `ng new infrend`
    ```
    Would you like to add Angular routing? Yes
    Which stylesheet format would you like to use? CSS
    ```
    Ennek hatására egy `infrend` nevű mappa keletkezik, benne egy üres Angular-projekttel.

2. Visual Studio Code-ban meg kell nyitni a létrehozott projektet.
3. Terminal menü > New terminal

    ![kép](https://user-images.githubusercontent.com/14952854/220696206-66b76fe4-1b76-40fd-878f-5f7aa84379d8.png)

5. A megnyitott terminálablakban az ``npm run start`` parancs futtatása.
6. Ha minden működik, a http://localhost:4200/ címen elérhető a webalkalmazás.
