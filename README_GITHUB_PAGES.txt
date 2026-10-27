PM MANAGER – GITHUB PAGES UPLOAD (27.10.2026)

INHALT
- index.html: PM Manager mit korrigierter Datumsauswahl und Tagesrapport-PDF
- manifest.webmanifest: App-Installation
- sw.js: Offline-Zwischenspeicher, Cache-Version fuer dieses Update erhoeht
- icons/: App-Symbole

ERSTMALIGE EINRICHTUNG
1. ZIP auf dem Computer entpacken.
2. GitHub-Repository erstellen (z.B. pm-manager, Public).
3. Alle entpackten Dateien und den Ordner icons/ ins Hauptverzeichnis hochladen, nicht die ZIP-Datei selbst.
4. Settings > Pages > Deploy from a branch > main > /(root) > Save.
5. PM Manager unter https://BENUTZERNAME.github.io/pm-manager/ aufrufen.

AKTUALISIERUNG EINER BESTEHENDEN INSTALLATION
1. ZUERST im bisherigen PM Manager eine Datensicherung exportieren und lokal behalten.
2. index.html und sw.js ins Repository-Hauptverzeichnis hochladen und bestehende Dateien ersetzen.
3. Commit changes. Bei Bedarf Seite neu laden oder den Offline-Cache aktualisieren.

DATENSCHUTZ
GitHub Pages stellt den App-Code oeffentlich bereit; lokale Browserdaten werden nicht durch den Upload synchronisiert.
NIEMALS Daten-Backups, Projekt-/Mitarbeiterdaten oder Passwoerter in ein oeffentliches Repository hochladen.
Die lokale App-Anmeldung ersetzt keine serverseitige Zugriffskontrolle.
