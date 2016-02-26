# React Native 0.2 and Babel 6 Boilerplate (Android)

***********************

Installation
---------------
- download boilerplate
- remove .git folder
- init your repo
- install boilerplate
```sh
git clone https://github.com/guillaumearm/react-native-android-boilerplate myApp
cd myApp
rm -rf .git
# git init
npm install
```

- Change your app name in `package.json` (name field), then :
```sh
npm run native-init
```

**************************
Run app
---------
Start the packager
```sh
npm start
```

Launch app on your android device
--------
If app is not running yet on your device:
```sh
npm run android
```

***************

Rename your app
---------------
- Change your app name in `package.json` (name field)
- Change your AppRegistry in `index.android.js`

then

```sh
npm run native-rename
```
