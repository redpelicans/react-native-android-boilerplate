# react-native-android-boilerplate

***********************
Introduction
------------------
This boilerplate starter kit is made for android development.
react-native-ios-boilerplate and react-native-hybrid-boilerplate coming soon.

It has a Makefile for simplify gradle use.
run ```make help``` for more informations

For a better experience, we embedded [react-native-google-signin](https://github.com/apptailor/react-native-google-signin) component.

### Android SDK Requirements
Need install 2 extra packages.
Go in the Android SDK Manager running : ``` android ```

Install this packages:
- Local Maven repository for Support Libraries
- Google repository


***********************
Installation
------------------
```
git clone https://github.com/redpelicans/react-native-android-boilerplate myApp
cd myApp && rm -rf .git
npm install
```

***********************
Setup your application id and application name
------------------
### Application name :
- edit ```android/app/src/main/res/values/strings.xml``` and replace ExampleApp by your app name.

### Application id :
choose an application id (example : com.redpelicans.timetrack),
and replace all 'com.example.yourapp' in this files:
- edit ```android/app/build.gradle```
- edit ```android/app/src/main/AndroidManifest.xml```
- edit ```android/app/src/main/java/MainActivity.java```

***********************
Build and run app in debug mode
---------------------
- check your device is connected running ```adb devices```
- run ```make dev``` for starting the hot reload packager.
- run ```make run-android``` for build and install debug apk.


***********************
OAuth2 and apk certificates
---------------------
### Generate release keystore
- ```make gen-apk-key KEY_ALIAS=<appAliasName>```
- Edit the file ```~/.gradle/gradle.properties``` and add the following
```
DEFAULT_RELEASE_STORE_FILE=release.keystore
DEFAULT_RELEASE_KEY_ALIAS=<appAliasName>
DEFAULT_RELEASE_STORE_PASSWORD=<storePassword>
DEFAULT_RELEASE_KEY_PASSWORD=<keyPassword>
```

replace ```<appAliasName>```, ```<storePassword>``` and ```<keyPassword>``` by right values

### Get SHA1 keys
- debug: ```make show-debug-key```
- release: ```make show-release-key```

### Google Console Developper
go here : https://console.developers.google.com/apis/credentials
- Create credentials > Android Key > Add your 2 apk SHA1 keys (debug and release)

- Create credentials > OAuth client ID > Android > write your **debug** SHA1 key + package name (Application Id like ```com.redpelicans.timetrack```)

- Create credentials > OAuth client ID > Android > write your **release** SHA1 key + package name (Application Id like ```com.redpelicans.timetrack```)

### Use with react-native-google-signin
Add a credentials of type **'Web'**.
Use it with clientId props with [GoogleSignin component](https://github.com/apptailor/react-native-google-signin).
- Create credentials > Web Application

***********************
Build release App (signed APK)
---------------------
```
make build-release-apk
```

Install release App (signed APK)
---------------------
```
make install-release-apk
```


***********************
Flow type checker
------------------
[Flow](http://flowtype.org/) is a **static type checker** for JavaScript. It can be used to catch common bugs in JavaScript programs before they run.

Check the [official documentation](http://flowtype.org/docs/).

### In practice
For say to flow what file you want to check
- Add this comment at the top of the file :
```javascript
/* @flow */
```


More info [on this page](http://flowtype.org/docs/existing.html).

***********************
Troubleshooting
---------------------
see here : https://github.com/apptailor/react-native-google-signin/pull/41
