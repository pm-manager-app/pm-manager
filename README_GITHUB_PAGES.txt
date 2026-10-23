PM MANAGER – GITHUB PAGES STARTPAKET (Stand 23.10.2026)

Diese Dateien sind fuer einen ersten Test gedacht. Die lokale Anmeldung der HTML-App bietet keine sichere Benutzerisolation oder Zugriffssperre gegen Personen mit Zugriff auf den Browser. Keine vertraulichen Firmendaten im Repository ablegen.

1. Vor dem Wechsel aus dem bisherigen PM Manager ein Backup exportieren und ausserhalb von GitHub aufbewahren.
2. Auf https://github.com/new ein PUBLIC Repository namens pm-manager erstellen.
3. ZIP entpacken. Alle Dateien und den Unterordner icons in das Stammverzeichnis des Repositorys hochladen. Die ZIP-Datei selbst NICHT hochladen.
4. Settings > Pages > Deploy from a branch > main > /(root) > Save.
5. Die App oeffnet sich unter https://BENUTZERNAME.github.io/pm-manager/
6. App zuerst ohne echte Daten testen. Alte HTML-Datei weiterhin als Rueckfalloption behalten.
7. Falls ein Backup importiert wird, die Daten nach dem Import anhand eines Testprojekts und der Dokumente pruefen.

WICHTIG
- GitHub veroeffentlicht alle Repository-Dateien. Keine Backups, Kennwoerter, Protokolle oder Echtdaten hochladen.
- Die Daten in localStorage/IndexedDB bleiben im jeweiligen Browserprofil und synchronisieren NICHT zwischen PC, Handy und Tablet.
- Ein Repository-Update aendert nicht automatisch Daten im Browser; es kann aber App-Programmcode aendern.
- Lokaler Speicher ist keine verschluesselte Datenbank; Browserdaten koennen geloescht werden.
- Internet und HTTPS sind fuer das erste Laden notwendig; Offline-Support haengt vom Browser und Service Worker ab.
- Externe Bibliotheken und Wetterfunktionen koennen Netzwerkanfragen ausloesen.
- Die private Mitarbeiter-Anmeldung der App ist kein internetfaehiges Authentifizierungssystem.

Wenn die App spaeter mit vertraulichen Firmendaten produktiv genutzt werden soll, braucht es weitere Sicherheits- und Funktionstests.
