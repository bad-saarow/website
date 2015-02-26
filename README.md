# offene und unabhängige Seite für Bad Saarow

Dieses Repository beinhaltet den Quelltext für die Website: http://bad-saarow.github.io

## Webseite auf dem eigenen Computer anzeigen und anpassen

Bevor es losgeht, brauchst du einige Programme auf dem Computer

  * [Node.js & npm](http://nodejs.org)
  * [git](http://git-scm.com/)
  * Terminal/Konsole

## Los geht's
Im Terminal folgende Befehle nacheinander ausführen

```bash
git clone https://github.com/bad-saarow/bad-saarow.github.io.git
cd bad-saarow.github.io
npm install
npm run bower-install
npm run gulp
```

Nun kann im Browser die Website unter der folgenden URL aufgerufen werden:  
[http://localhost:9776](http://localhost:9776)

## Verzeichnis Struktur

  * `bower_components`: frontend assets for foundation and its dependencies, you should don't touch them, because if you update them, your changes will be overwritten
  * `gulp`: actually this folder contains small task, which control the build step
  * `public`: all files for your website will be bundled or copied into this directory
  * `src`: this directory contains your app files
    * `js`: your javascript files, they will be concatenated with foundations file into app.js
    * `scss`: your custom app styles
    * `pages`: your html pages
    * `templates: 'contains you jade templates'