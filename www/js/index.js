/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {

//     // Cordova is now initialized. Have fun!
//     // console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     // document.getElementById('deviceready').classList.add('ready');

//     if (navigator.connection.type == Connection.NONE) {
//         navigator.notification.alert('အင်တာနက် ဖွင့်ထားဖို့ လိုပါတယ်ရှင်');
//     } else {
//         // window.open('https://gunn-dev.github.io/football-web/');
//     }
// }

var intro = document.querySelector('.app');

function start() {
    window.open('https://gunn-dev.github.io/football-web/');
}

function show() {
    intro.innerHTML = `
        <div class="intro">
            <img src="img/icon.png" alt="Football Live Logo" style="border-radius: 20px;">
            <p style="color: white">အင်တာနက် ဖွင့်ပေးပါရှင့်</p>
            <img src="img/dot-loading.gif" style="width: 50px;" alt="loading...">
        </div>
    `;
}

function hide() {
    intro.innerHTML = '';
}

window.onload = function(event) {
    
    if (!window.navigator.onLine) {
        show();
        alert('အင်တာနက် ဖွင့်ထားဖို့ လိုပါတယ်ရှင်');
        var intervalID = setInterval(() => {
            if (window.navigator.onLine) {
                start();
                hide();
                clearInterval(intervalID);
            }
        }, 1000)
    } else {
        start();
    }
}