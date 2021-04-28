---
title: Locale
description: Get locale information.
---
<!--
# license: Licensed to the Apache Software Foundation (ASF) under one
#         or more contributor license agreements.  See the NOTICE file
#         distributed with this work for additional information
#         regarding copyright ownership.  The ASF licenses this file
#         to you under the Apache License, Version 2.0 (the
#         "License"); you may not use this file except in compliance
#         with the License.  You may obtain a copy of the License at
#
#           http://www.apache.org/licenses/LICENSE-2.0
#
#         Unless required by applicable law or agreed to in writing,
#         software distributed under the License is distributed on an
#         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#         KIND, either express or implied.  See the License for the
#         specific language governing permissions and limitations
#         under the License.
-->

# cordova-plugin-locale

This plugin defines a global `Locale` object, which describes the device's locale info like current language, preferred languages and region.
Although the object is in the global scope, it is not available until after the `deviceready` event.

## Installation

    cordova plugin add cordova-plugin-locale

## Properties

- Locale.language
- Locale.preferredLanguages
- Locale.region

## Locale.language

Get the current language on the device.

### Supported Platforms

- Android
- iOS

### Quick Example

```js
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(Locale.language);
}
```

## Locale.preferredLanguages

Get the preferred languages on the device. These are the list of languages the user has picked for the devices.

### Supported Platforms

- Android
- iOS

### Quick Example

```js
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    for(let language of Locale.preferredLanguages){
        console.log(language);
    }
}
```

## Locale.region

Get the device region.

### Supported Platforms

- Android
- iOS

### Quick Example

```js
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(Locale.region);
}
```
