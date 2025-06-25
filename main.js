// ==UserScript==
// @name    EvoWorld.io tyan
// @name:ru EvoWorld.io tyan
// @name:en EvoWorld.io tyan
// @name:es EvoWorld.io tyan
// @name:fr EvoWorld.io tyan
// @name:de EvoWorld.io tyan
// @name:it EvoWorld.io tyan
// @name:pt EvoWorld.io tyan
// @name:zh EvoWorld.io tyan
// @name:ja EvoWorld.io tyan
// @name:ko EvoWorld.io tyan
// @name:ar EvoWorld.io tyan
// @name:hi EvoWorld.io tyan
// @name:tr EvoWorld.io tyan
// @namespace    http://tampermonkey.net/
// @version      2.2.0.0 Premium
// @description    Cheat for evoworld/flyordie with 25+ hacks and emoji hack mod for evoworld! The largest cheat with good and understandable code. Please support this project, I did all this ALONE! It's still a beta version.
// @description:ru Чит для evoworld/flyordie в котором есть 25+ хаков и emoji hack мод для evoworld! Самый крупный чит с хорошим и понятным кодом. Пожалуйста, поддержите этот проект, я делал всё это В ОДИНОЧКУ! Пока это ещё beta версия.
// @description:en Cheat for evoworld/flyordie with 25+ hacks and emoji hack mod for evoworld! The largest cheat with good and understandable code. Please support this project, I did all this ALONE! It's still a beta version.
// @description:es Trampa para evoworld/flyordie con 25+ hacks y emoji hack mod para evoworld! La trampa más grande con código bueno y comprensible. Por favor, apoya este proyecto, ¡lo hice todo SOLO! Todavía es una versión beta.
// @description:fr Triche pour evoworld/flyordie avec plus de 25 hacks et un mod hack emoji pour evoworld ! Le plus grand cheat avec un code bon et compréhensible. S'il vous plaît, soutenez ce projet, j'ai fait tout cela SEUL ! C'est encore une version bêta.
// @description:de Cheat für evoworld/flyordie mit 25+ Hacks und Emoji-Hack-Mod für evoworld! Der größte Cheat mit gutem und verständlichem Code. Bitte unterstützen Sie dieses Projekt, ich habe das alles ALLEIN gemacht! Es ist immer noch eine Beta-Version.
// @description:it Cheat per evoworld/flyordie con oltre 25 hack e mod hack emoji per evoworld! Il cheat più grande con un codice buono e comprensibile. Per favore, supporta questo progetto, ho fatto tutto questo DA SOLO! È ancora una versione beta.
// @description:pt Cheat para evoworld/flyordie com mais de 25 hacks e mod hack de emoji para evoworld! O maior cheat com um código bom e compreensível. Por favor, apoie este projeto, eu fiz tudo isso SOZINHO! Ainda é uma versão beta.
// @description:zh 为evoworld/flyordie提供25+黑客和emoji黑客模块的作弊！这是最大的作弊，代码好且易懂。请支持这个项目，我是独自一人完成的！目前仍是测试版。
// @description:ja evoworld/flyordie用の25以上のハックとemojiハックモッドを含むチート！理解しやすい良いコードを持つ最大のチートです。このプロジェクトをサポートしてください、私はこれをすべて一人で行いました！まだベータ版です。
// @description:ko evoworld/flyordie를 위한 25개 이상의 핵과 evoworld를 위한 이모지 핵 모드가 포함된 치트! 좋은 이해하기 쉬운 코드로 된 가장 큰 치트입니다. 이 프로젝트를 지원해 주세요, 저는 이 모든 것을 혼자 했습니다! 아직 베타 버전입니다.
// @description:ar غش ل evoworld/flyordie مع أكثر من 25 اختراقات و mod اختراق emoji ل evoworld! أكبر غش مع كود جيد ومفهوم. يرجى دعم هذا المشروع، لقد فعلت كل هذا وحدي! لا يزال في النسخة التجريبية.
// @description:hi evoworld/flyordie के लिए 25+ हैक्स और evoworld के लिए इमोजी हैक मोड के साथ चीट! अच्छे और समझने योग्य कोड के साथ सबसे बड़ा चीट। कृपया इस परियोजना का समर्थन करें, मैंने यह सब अकेले किया है! यह अभी भी एक बीटा संस्करण है.
// @description:tr evoworld/flyordie için 25'ten fazla hack ve evoworld için emoji hack modu içeren hile! İyi ve anlaşılır kodla en büyük hile. Lütfen bu projeyi destekleyin, bunu TEK BAŞIMA yaptım! Hala bir beta sürümüdür.
// @author       ChyppitauCoder
// @contributionURL https://www.donationalerts.com/r/ChyppitauZ
// @match        https://evoworld.io/
// @icon         https://steamuserimages-a.akamaihd.net/ugc/2044108148224666217/6A44151F7534306FEC8259BDE5496463C9B55720/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true
// @grant        GM_xmlhttpRequest
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @license      BSD
// ==/UserScript==
let overlay = `
<div class="main-hack">
    <style>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


    .cheatMenu {
        font-family: 'Gill Sans', 'Montserrat', 'Trebuchet MS', sans-serif;
        font-size: 23px;
        color: #fff;
        position: absolute;
        z-index: 9999;
        transition: opacity 0.5s ease, width 0.5s ease, height 0.5s ease;
        opacity: 1;
        width: 98%;
        height: 100%;
        overflow-y: auto;
        margin-left: -10%;
    }

    input[type="text"],
    select {
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
    }

    .cheatMenu.show {
        opacity: 1;
        width: 90%;
        height: 85%;
    }

    .little-text-in-the-hack-chyppitau {
        font-size: 10px;
        opacity: 0.4;
        font-family: Calibri;
        color: white-smoke;
    }

    .main-hack {
        margin: 0;
        position: absolute;
        z-index: 9999;
    }

    .hack-main-section {
        margin: 20px;
        flex-direction: row-reverse;
        margin: 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        user-select: none;
    }

      .rand-hack,
      .another-softwere-hack,
      .cosmetic-hack,
      .how-to-hack,
      .visual-hack,
      .keybind-hack,
      .emoji-hack,
      .MegaHack-settings-hack,
      .Beta,
      .Cheat-Packs {
          padding: 10px;
          border: 3px solid green;
          background-color: #9370db;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          margin: 10px;
          opacity: 0.7;
      }

    .another-softwere-hack .title-2 h1 {
        font-size: 20px;
    }

    .another-softwere-hack {
        font-size: 10px;
    }

    hr {
        color: black;
    }

    .hack-main-section button {
        border: 1px solid #fff;
        border-radius: 4px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s linear;
        color: #fff;
        position: relative;
        overflow: hidden;
        background-color: #7B68EE;
        margin: 2.5px;
        width: 140px;
        height: 18px;
        opacity: 1;
    }

    button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 50%;
        width: 3px;
        background-color: #2E8B57;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0;
    }

    button.active::before {
        transform: scaleX(1);
        opacity: 1;
    }

    button:hover {
        background-color: #8a2be2;
    }
    button:active {
        font-size: 30px;
        color: white;
    }

    .hack-main-section > div {
        max-width: calc(10% - 40px);
        flex: none;
        padding: 10px;
        background-color: #9370db;
        border: 3px solid #8a2be2;
    }

    @media (max-width: 1920) {
        .cheatMenu {
            font-family: 'Gill Sans', 'Montserrat', 'Trebuchet MS', sans-serif;
            font-size: 23px;
            color: #fff;
            position: absolute;
            z-index: 9999;
            transition: opacity 0.5s ease, width 0.5s ease, height 0.5s ease;
            opacity: 1;
            width: 88%;
            height: 100%;
            overflow-y: auto;
            margin-left: -10%;
        }
    }

    @media (max-width: 1080) {
        .cheatMenu {
            font-family: 'Gill Sans', 'Montserrat', 'Trebuchet MS', sans-serif;
            font-size: 23px;
            color: #fff;
            position: absolute;
            z-index: 9999;
            transition: opacity 0.5s ease, width 0.5s ease, height 0.5s ease;
            opacity: 1;
            width: 88%;
            height: 100%;
            overflow-y: auto;
            margin-left: -10%;
        }
    }

    </style>
    <div id="box-hack">
        <div class="cheatMenu" id="cheatMenu">
            <section class="hack-main-section">
                <div class="how-to-hack" id="how-to-hack">
                    <div class="title">
                        <p>MegaHack Premium</p>
                        <hr>
                        <p id="chyppitau_license">License: </p>
                        <hr>
                    </div>

                    <button id="my-another-hacks" class="another-hacks" title="Open new window with me in GreasyFork">my other hacks</button>
                    <button id="load-options" class="another-hacks" title="Your hacks everytime save in local storage. This button need to load saved data of hacks.">Load Hacks</button>
                    <p>Cracking console</p> <input type='text' placeholder='type here JS Code...' id="cracking-console" onkeydown="this.style.width = '500%'; this.style.height = '500%'; this.style.zIndex = '999';">
                    <button id='run-cracking-console' title="To run your code press F12" onkeyup="
                        eval(document.getElementById('cracking-console').value);
                    ">Run code</button>
                    <p class="little-text-in-the-hack-chyppitau" id="little-text-in-the-hack-chyppitau">To use all functions witch don't click and has low opacity you need to have license: Most up. Full license get in my Discord server. Instruction in this discord server too.</p>
                    <p>
                    <input type="text" id="search-for-hacks-hack" placeholder="Search hacks..." onkeyup="
                        let input = this.value.toLowerCase();
                        let buttons = document.querySelectorAll('.hack-main-section button');

                        buttons.forEach(button => {
                            if (button.innerText.toLowerCase().includes(input)) {
                                button.style.opacity = 1;
                            } else {
                                button.style.opacity = 0.4;
                            }
                        });
                    ">
                </div>

                <div class="rand-hack" id="rand-hack">
                    <div class="title">
                        <h1>Core</h1>
                        <hr>
                    </div>
                    <form>
                        <select name="Leaderboard-nicknames" id="leaderboard-nicknames">
                        <option value="-">-- nicknames --</option>
                        <option value="1">top 1</option>
                        <option value="2">top 2</option>
                        <option value="3">top 3</option>
                        <option value="4">top 4</option>
                        <option value="5">top 5</option>
                        <option value="6">top 6</option>
                        <option value="7">top 7</option>
                        <option value="8">top 8</option>
                        <option value="9">top 9</option>
                        <option value="10">top 10</option>
                        </select>
                    </form>
                    <button id="copy-player-nick-hack" title="Select player nickname and press this button to copy in clipboard">Copy</button>
                    <p style="margin: 6px;"></p>

                    <p>Global</p>
                    <button id="reload-hack" title="This just reload window. Your progress don't will be saved">reload</button>
                    <button id="fps-bypass-hack" title="Press this button, type your framerate and enjoy!">Fps Bypass</button>
                    <button id="use-skill-hack" onclick="if (able_to_click){skillUse()}" title="This use your skill in-game">Use Your Skill</button>
                    <button id="night-k-hack" title="Your screen can goes black! This to be fixed.">Night Vision</button>
                    <button id="exit-game-hack" title="Change your window location to google chrome home page">exit game</button>
                    <button id="inject-hack" title="This will be open new window and show every available hacks">open hacks</button>
                    <button id="show-codes-hack" title="This show you codes and copy it in clipboard to easy using">show codes</button>
                    <button id="xp-hack" title="This works only in main menu">enable xp bonus</button>
                    <button id="scan-players-hack" title="Just use player scanning (game function)">Scan players</button>
                    <button id="auto-respawn-hack" title="Restart your game if you die">Play again</button>
                    <button id="play-again-hack" title="This will be auto-respawn you when you die">Auto-respawn</button>
                    <button id="adblock-detect-bypass-hack" title="Allow to bypass in-game adblock detect">Anti-adblock bypass</button>
                    <button id="auto-map" title="This will be auto show map when you in cosmic">Auto Map</button>
                    <button id="glow-players" title="This will be copy in your clipboard code, and your task: paste it in console.">Better Outlines</button>
                    <hr>
                    <p>AutoClicker</p>
                    <label for="clicksPerSecond">Clicks per second:</label>
                    <input type="number" id="clicksPerSecond" value="10" min="1" max="100">
                    <button id="startAutoClicker" title="This will be start auto-clicking">Start Auto Clicker</button>
                    <button id="stopAutoClicker" title="This will be stop auto-clicking">Stop Auto Clicker</button>
                </div>
                <div class="another-softwere-hack" id="another-softwere-hack">
                    <div class="title">
                        <h1>From Other Scripts</h1>
                        <hr>
                    </div>

                    <button id="unlock-zoom-hack" title="This will be allow you incredible zoom in and zoom out">unlock zoom</button>
                    <button id="dont-hide-players-hack" title="This will be shows players if you can't see him. Your screen can goes black.">No Hide player</button>

                </div>

                <div class="cosmetic-hack" id="cosmetic-hack">
                    <div class="title">
                        <h1>Cosmetic</h1>
                        <hr>
                    </div>

                    <button id="enter-title-hack" title="This will be ask you new title of chrome tab.">chose title</button>
                    <button id="no-ads" title="Disable every ad in-game.">No ads</button>
                    <button id="print-scr-hack" title="Make a screenshot (beta)">screenshot</button>
                    <button id="show-label-hack" title="Ask your label contents, font size, colour and show it.">Show Label</button>
                    <button id="del-label-hack" title="Ask your label number when counting and delete this label.">Delete Label</button>
                    <button id="height-hack-hack" title="Ask your height and make strange..">Any height</button>
                    <button id="dont-hide-me-hack" title="Will be always show your player.">No Hide</button>
                    <button id="dont-hide-me-hack" title="Fix many game bugs" onclick="alert('Dont work now')">Misc Bugfixes</button>
                </div>

                <div class="emoji-hack" id="emoji-hack">
                    <div class="title">
                        <h1>Emoji-hack</h1>
                        <hr>
                    </div>

                    <button id="chyppitauE1">Hi</button>
                    <button id="chyppitauE2">Hi (other)</button>
                    <button id="chyppitauE3">bye</button>
                    <button id="chyppitauE4">bye (other)</button>
                    <button id="chyppitauE5">I have to go</button>
                    <button id="chyppitauE6">Thanks!</button>
                    <button id="chyppitauE7">I'm sorry</button>
                    <button id="chyppitauE8">I like you</button>
                    <button id="chyppitauE9">Dislike</button>
                    <button id="chyppitauE10">clap</button>
                    <button id="chyppitauE11">Sad</button>
                    <button id="chyppitauE12">Cry</button>
                    <button id="chyppitauE13">Broken heart</button>
                    <button id="chyppitauE14">Heart</button>
                    <button id="chyppitauE15">laughter</button>
                    <button id="chyppitauE16">Skull</button>
                    <button id="chyppitauE17">Angry</button>
                    <button id="chyppitauE18">Like</button>
                </div>

                <div class="keybind-hack" id="keybind-hack">
                    <div class="title">
                        <h1>Keybind</h1>
                        <hr>
                    </div>

                    <button id="bind-hack">Add Keybind</button>
                    <div id="box-select-hacks">
                        <form>
                            <input type="text" placeholder="key..." id="key-to-bind-hack">
                            <select name="Bind-allowed" id="Bind-allowed-select">
                                <option value="-">-- Select Hack --</option>
                            </select>
                        </form>
                    </div>
                </div>

                <div class="MegaHack-settings-hack" id="MegaHack-settings-hack">
                    <div class="title">
                        <h1>Settings</h1>
                        <hr>
                    </div>

                    <button id="no-confirms-hack" title="Disable any alert, confirmations in-hack">No Confirms</button>
                    <button id="allow-move-cheat-menu-hack" title="Allow you drag cheat panels">Allow move menu</button>
                    <button id="enable-confirms-hack" title="Enable any alert, confirmations in-hack">Enable Confirms</button>
                </div>

                <!-- <div class="Chyppitau-theme-manager" id="Chyppitau-theme-manager">
                    <div class="title">
                        <h1>Theme Manager</h1>
                        <hr>
                    </div>

                    <form>
                        <select name="Theme-manager-chyppitau" id="Theme-manager-chyppitau">
                        <option value="-">-- Select Theme --</option>
                        <option value="1">Rainbow(colorful)</option>
                        <option value="2">Mobile Edit</option>
                        <option value="3">Old blue Theme</option>
                        <option value="4">Art Theme</option>
                        </select>
                    </form>

                    <button id="aply-hack-theme">Aply theme</button>
                </div> -->

                <div class="Beta" id="Beta-prem">
                    <div class="title">
                        <h1>Beta Premium</h1>
                        <hr>
                    </div>

                    <button id="trigger-bot" title="THIS IS FULL PASTA OF ALVARO BOY SCRIPT! SORRY :>. Allow you kill any player... This copy code in clipboard, and your task: paste it in console">Trigger Bot</button>
                    <button id="aimbot" title="Allow you kill any player without touching your devices... This copy code in clipboard, and your task: paste it in console" onclick='alert("Dont work now")'>Auto Bot</button>
                    <button id="hitboxes" title="THIS IS FULL PASTA OF ALVARO BOY SCRIPT! SORRY :>. Just show hitboxes (with atack hitboxes)">Show Hitboxes (AlvaroBoy pasta)</button>
                    <button id="anti-ban" title="Allow you bypass game ban" onclick="alert('Dont work now')">Anti-ban</button>
                    <button id="immortal-mode" title="Make you unbeatable" onclick="alert('Dont work now')">Immortal mode</button>
                    <button id="wall_hackl" title="Make walls invisible" onclick="alert('Dont work now')">Wall hack</button>
                    <div class="title">
                        <h1>Generator</h1>
                        <hr>
                    </div>
                    <button id="generate-100g" title="This generate promocode in 100 gems and copy it in clipboard" onclick="alert('Dont work now')">Generate 100gems</button>
                    <button id="generate-1000g" title="This generate promocode in 1000 gems and copy it in clipboard" onclick="alert('Dont work now')">Generate 1000gems</button>

                    <div class="title">
                        <h1>Macro-bot</h1>
                        <hr>
                    </div>
                    <button id="start-record" title="This start recording your moves" onclick="alert('Dont work now')">Start record</button>
                    <button id="stop-record" title="This stop recording your moves and sets training data" onclick="alert('Dont work now')">Set moves</button>
                    <button id="edit-data-recorded-y" title="This allow you replay your moves" onclick="alert('Dont work now')">Edit saved moves</button>
                    <button id="play-start-tt" title="This, when you recorded every move training data, and sure, that every was recorded, start playing" onclick="alert('Dont work now')">Play Auto-Bot</button>
                    <button id="stop-play-tt-hack" title="This stop auto-playing" onclick="alert('Dont work now')">Stop Auto-Bot</button>
                </div>

                <div class="Cheat-Packs" id="Cheat-packs">
                    <div class="title">
                        <h1>Cheat Packs</h1>
                        <hr>
                    </div>

                    <button id="cheat-pack-youtube" title="Hacks, wich will be turned on using this: zoom hack, trigger bot, label: subscribe, auto map, auto respawn, anti-ban, misc bugfixes, immortal mode, unlock level">YouTuber Pack</button>
                </div>

            </section>

        </div>
    </div>
</div>`;
let hide = false;

function login_to_premium(){
    if (!hide){
        // Переменная для хранения данных пользователей из JSON
        let users = {};

        // Функция для загрузки JSON-файла с данными пользователей
        async function loadUsers() {
            try {
                const response = await fetch('users.json'); // Замените на путь к JSON-файлу
                if (!response.ok) throw new Error("Error with users loading");
                users = await response.json();
            } catch (error) {
                console.error("Error with loading JSON:", error);
            }
        }

        // Функция для отображения формы авторизации
        function login() {

            let overlay_2 = `
            <style>
            #LoYHwji-Inswe_Hakk {
                background-color: #2c2f33;
                color: #fff;
                padding: 20px;
                border-radius: 8px;
                width: 320px;
                font-family: Arial, sans-serif;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                margin: 20px auto;
                z-index: 9999;
            }
            #text_up p {
                text-align: center;
                margin: 0;
                z-index: 9999;
            }
            #text_up p:first-child {
                font-size: 18px;
                font-weight: bold;
                z-index: 9999;
            }
            #text_up p:last-child {
                font-size: 12px;
                color: #ccc;
                margin: 5px 0;
                z-index: 9999;
            }
            #login-page {
                display: flex;
                flex-direction: column;
                gap: 10px;
                z-index: 9999;
            }
            #login-page input {
                padding: 10px;
                border: 1px solid #444;
                border-radius: 4px;
                background-color: #23272a;
                color: #ddd;
                z-index: 9999;
            }
            #LoYHwji-Inswe_Hakk button {
                padding: 10px;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                z-index: 9999;
            }
            #send-code-in-hack {
                background-color: #7289da;
                z-index: 9999;
            }
            #logininhack {
                background-color: #43b581;
                z-index: 9999;
            }

            #themes-manager{
                padding: 10px;
                color: black;
                border: none;
                border-radius: 4px;
                width: 100%;
                margin-top: 30px;
                z-index: 9999;
            }

            #apply-theme {
                background-color: #ADE8F4;
                color: #2c2f33;
                width: 100%;
                margin-top: 30px;
                z-index: 9999;
            }

            #opacity-el{
                opacity: 0.4;
                z-index: 9999;
            }
            </style>
                <div id="LoYHwji-Inswe_Hakk">
                    <div id="text_up">
                        <p>Welcome to best hack in EvoWorld.io!</p>
                        <p id="opacity-el">This is a private hack. You need to have a license (for 0.1 TONCOIN). Buy in Discord server</p>
                    </div>
                    <div id="login-page">
                        <input type="text" id="hacklogin" placeholder="Your login">
                        <input type="text" id="hackpassword" placeholder="Your password">
                        <input type="text" id="hackemail" placeholder="Your email">
                        <button id="logininhack">Login!</button>
                    </div>

              <div id="theme-manager">
                <form>
                  <select name="themes" id="themes-manager">
                  <option value="0">Dark</option>
                  <option value="1">Water</option>
                  <option value="3">light</option>
                  <option value="4">Vantablack</option>
                  </select>
                        </form>
                <button id="apply-theme">Apply</button>
              </div>
                </div>
            `;

          let cheatMenu = document.createElement("div");
          cheatMenu.style.opacity = "1";
          cheatMenu.style.width = "320px"; // Начальное значение
          cheatMenu.style.height = "auto"; // Начальное значение


          let able_to_click_hack = false;

            cheatMenu.innerHTML = overlay_2;
            document.body.appendChild(cheatMenu);

            function toggleCheatMenu() {
              if (cheatMenu.style.opacity === "1") {
                  cheatMenu.style.transition = "opacity 0.5s ease, width 0.5s ease, height 0.5s ease";
                  cheatMenu.style.opacity = "0";
                  setTimeout(() => {
                      able_to_click_hack = false;
                  }, 500);
              } else {
                  cheatMenu.style.transition = "opacity 0.5s ease, width 0.5s ease, height 0.5s ease";
                  cheatMenu.style.opacity = "1";
                  setTimeout(() => {
                      able_to_click_hack = true;
                  }, 500);
              }
          }


            document.addEventListener('keydown', (event) => {
              if (event.key === 'Tab' || event.key === "F9") {
                  toggleCheatMenu();
                  event.stopPropagation(); // Предотвращает конфликт с другими обработчиками на странице
              }
            });


          let login_btn = document.getElementById("logininhack");

          let login_in_hack = document.getElementById("LoYHwji-Inswe_Hakk");

          let apply_theme = document.getElementById("apply-theme");
          let themes_select = document.getElementById("themes-manager");

          let login_input = document.getElementById("hacklogin");
          let password_input = document.getElementById("hackpassword");
          let email_input = document.getElementById("hackemail");
          let opacity_el = document.getElementById("opacity-el");

          apply_theme.addEventListener("click", () => {
            let value = themes_select.value;

            if (value == '0'){
              login_in_hack.style.backgroundColor = "#2c2f33";
              login_in_hack.style.color = "#fff";
              opacity_el.style.opacity = '0.4';
              login_in_hack.style.backgroundImage = "none"
              login_input.style.backgroundColor = '#23272a';
              email_input.style.backgroundColor = '#23272a';
              password_input.style.backgroundColor = '#23272a';
            }

            if (value == '1'){
              login_in_hack.style.color = '#2c2f33'
              opacity_el.style.opacity = '0.7';
              login_in_hack.style.backgroundImage = "none"
              login_in_hack.style.backgroundColor = '#a8daf9';
              login_input.style.backgroundColor = 'rgb(255, 255, 240)';
              email_input.style.backgroundColor = 'rgb(255, 255, 240)';
              password_input.style.backgroundColor = 'rgb(255, 255, 240)';
            }

            if (value == '3'){
              login_in_hack.style.backgroundImage = 'none';
              login_in_hack.style.color = '#2c2f33'
              opacity_el.style.opacity = '0.7';
              login_in_hack.style.backgroundColor = 'rgb(237, 234, 222)';
              login_input.style.backgroundColor = 'rgb(255, 255, 240)';
              email_input.style.backgroundColor = 'rgb(255, 255, 240)';
              password_input.style.backgroundColor = 'rgb(255, 255, 240)';
            }

            if (value == '4'){
              login_in_hack.style.backgroundImage = 'none';
              login_in_hack.style.color = '#fff'
              opacity_el.style.opacity = '0.7';
              login_in_hack.style.backgroundColor = 'black';
              login_input.style.backgroundColor = '#141414';
              email_input.style.backgroundColor = '#141414';
              password_input.style.backgroundColor = '#141414';
            }
          });

            login_btn.addEventListener('click', () => {
                let login = document.getElementById("hacklogin").value;
                let password = document.getElementById("hackpassword").value;
                let email = document.getElementById("hackemail").value;

                fetch("http://127.0.0.1:5000/check_login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ login, password, email })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "success") {
                        alert(data.message);
                        hide = true;
                    } else {
                        alert(data.message);
                    }
                })
                .catch(error => {
                    console.error("Error with sending data:", error);
                    alert("Error with connecting to server.");
                });
            });
        }

        login();
    }
}

function main() {
    function c_alert(text, btn_text){
        let div_alert_a = document.createElement('div');
        let html_alert_a = `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            /* Основные стили для текста */
            #user_text-inputed{
                font-family: 'Montserrat', 'Trebuchet MS', sans-serif;
                font-size: 18px;
                color: white;
                text-align: center;
                margin-bottom: 20px;
            }

            /* Стиль для модального окна */
            .alert-2-better{
                background-color: #000001;
                border-radius: 8px;
                border: none;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.15);
                padding: 20px;
                z-index: 99990;
                width: 400px;
                max-width: 90%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            /* Кнопка закрытия */
            .close-el{
                border-radius: 5px;
                background-color: #f44336;
                color: white;
                padding: 10px 20px;
                font-size: 16px;
                border: none;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .close-el:hover {
                background-color: #d32f2f;
            }

            /* Анимация появления окна */
            .alert-2-better {
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
            </style>
            <div class='alert-2-better'>
                <div class='text-text-inputed-user'>
                    <p id='user_text-inputed'>Null</p>
                </div>
                <button class='close-el' id='close_el'>Null</button>
            </div>
        `;
        div_alert_a.innerHTML = html_alert_a;

        document.body.appendChild(div_alert_a);

        let txt10 = div_alert_a.querySelector('#user_text-inputed');
        txt10.innerHTML = `${text}`;

        let close_btn = div_alert_a.querySelector('#close_el');
        close_btn.innerHTML = `${btn_text}`;

        close_btn.addEventListener('click', () => {
            div_alert_a.style.opacity = 0;
            setTimeout(() => div_alert_a.remove(), 500); // Убираем элемент после исчезновения
        });

        div_alert_a.style.transition = "opacity 0.5s ease";
        div_alert_a.style.opacity = "1";
    }

    function c_alert_a(text, btn_1_text, btn_2_text, btn_2_func){
        let div_alert_a = document.createElement('div');
        let html_alert_a = `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            /* Основные стили для текста */
            #user_text-inputed{
                font-family: 'Montserrat', 'Trebuchet MS', sans-serif;
                font-size: 18px;
                color: white;
                text-align: center;
                margin-bottom: 20px;
            }

            /* Стиль для модального окна */
            .alert-2-better{
                background-color: #000001;
                border-radius: 8px;
                border: none;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.15);
                padding: 20px;
                z-index: 99990;
                width: 400px;
                max-width: 90%;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-left: 40%;
            }

            /* Кнопки */
            .close-el{
                border-radius: 5px;
                background-color: #f44336;
                color: white;
                padding: 10px 20px;
                font-size: 16px;
                border: none;
                cursor: pointer;
                margin-top: 10px;
                transition: background-color 0.3s ease;
            }

            .close-el:hover {
                background-color: #d32f2f;
            }

            /* Анимация появления окна */
            .alert-2-better {
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
            </style>
            <div class='alert-2-better'>
                <div class='text-text-inputed-user'>
                    <p id='user_text-inputed'>Null</p>
                </div>
                <button class='close-el' id='close_el1'>Null</button>
                <button class='close-el' id='close_el2'>Null</button>
            </div>
        `;
        div_alert_a.innerHTML = html_alert_a;

        document.body.appendChild(div_alert_a);

        let txt10 = div_alert_a.querySelector('#user_text-inputed');
        txt10.innerHTML = `${text}`;

        let close_btn = div_alert_a.querySelector('#close_el1'); // Используем id вместо класса
        close_btn.innerHTML = `${btn_1_text}`;

        let close_btn2 = div_alert_a.querySelector('#close_el2'); // Используем id вместо класса
        close_btn2.innerHTML = `${btn_2_text}`;

        close_btn.addEventListener('click', () => {
            div_alert_a.style.opacity = 0;
            setTimeout(() => div_alert_a.remove(), 500); // Убираем элемент после исчезновения
        });

        close_btn2.addEventListener('click', btn_2_func);

        div_alert_a.style.transition = "opacity 0.5s ease";
        div_alert_a.style.opacity = "1";
    }

    let cheatMenu = document.createElement("div");
    c_alert_a(
        "Warning, you might get banned!",
        "Ok",
        "Open Menu (Tab/F9)",
        () => {
            cheatMenu.style.opacity = "1";
        }
    );

    let able_to_click_hack = false;
    let no_confirms_in_hack = false;

    cheatMenu.innerHTML = overlay;
    cheatMenu.style.opacity = "0";
    document.body.appendChild(cheatMenu);

    let main_hack = cheatMenu.querySelector(".main-hack");

    if (!main_hack) {
        alert("Element with class 'main-hack' not found! Cheat doesn't work!");
        return;
    }

    main_hack.style.width = "0%";
    main_hack.style.height = "0%";

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab' || event.key === "F9") {
            if (cheatMenu.style.opacity === "1") {
                cheatMenu.style.transition = "opacity 0.5s ease, width 0.5s ease, height 0.5s ease";
                cheatMenu.style.opacity = "0";
                main_hack.style.transition = "width 0.5s ease, height 0.5s ease";
                main_hack.style.width = "0%";
                main_hack.style.height = "0%";
                setTimeout(() => {
                    able_to_click_hack = false;
                }, 500);
                if (event.key === 'Tab'){
                    hideEmotesMenu();
                }
            } else {
                cheatMenu.style.transition = "opacity 0.5s ease, width 0.5s ease, height 0.5s ease";
                cheatMenu.style.opacity = "1";
                main_hack.style.transition = "width 0.5s ease, height 0.5s ease";
                main_hack.style.width = "110%";
                main_hack.style.height = "85%";
                setTimeout(() => {
                    able_to_click_hack = true;
                }, 500);
                if (event.key === 'Tab'){
                  hideEmotesMenu();
                }
            }
        }
    });

    document.querySelectorAll('.hack-main-section button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.hack-main-section button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            button.style.backgroundColor = "black";
        });
    });

    let option1 = document.getElementById("reload-hack");
    let option5 = document.getElementById("show-codes-hack");
    let option7 = document.getElementById("unlock-zoom-hack");
    let option9 = document.getElementById("exit-game-hack");
    let option16 = document.getElementById("print-scr-hack");
    let option17 = document.getElementById("inject-hack");
    let option20 = document.getElementById("enter-title-hack");
    let option21 = document.getElementById("scan-players-hack");
    let option24 = document.getElementById("show-label-hack");
    let option26 = document.getElementById("bind-hack");
    let option28 = document.getElementById("auto-respawn-hack");
    let option30 = document.getElementById("play-again-hack");
    let option31 = document.getElementById("del-label-hack");
    let option33 = document.getElementById("night-k-hack");
    let option34 = document.getElementById("fps-bypass-hack");
    let option35 = document.getElementById("dont-hide-me-hack");
    let option36 = document.getElementById("dont-hide-players-hack");
    let option37 = document.getElementById("adblock-detect-bypass-hack");
    let option38 = document.getElementById("no-ads");
    let option39 = document.getElementById("trigger-bot");
    let option40 = document.getElementById("hitboxes");
    let option41 = document.getElementById("auto-map");
    let option42 = document.getElementById("glow-players");
    let option43 = document.getElementById("cheat-pack-youtube");
    let option44 = document.getElementById("wall_hackl");

    const handleOptionClick = (option) => {
        if (option && able_to_click_hack) {
            option.click();
            able_to_click_hack = false;
        } else if (option && !able_to_click_hack) {
            able_to_click_hack = true;
            option.click();
            able_to_click_hack = false;
        }
    };

    // Функция для сохранения состояния кнопки и её переменных
    const saveOptionState = (option, optionName) => {
        if (option) {
            // Сохраняем, была ли кнопка нажата
            option.addEventListener('click', () => {
                let isClicked = localStorage.getItem(optionName) === 'true';
                localStorage.setItem(optionName, !isClicked);

                // Проходим по всем свойствам option
                for (let key in option) {
                    if (option.hasOwnProperty(key) && typeof option[key] !== 'function') {
                        // Сохраняем значение переменной в localStorage
                        localStorage.setItem(`${optionName}_${key}`, option[key]);
                    }
                }
            });
        }
    };

    // Функция для загрузки состояния кнопки и её переменных
    const loadOptionState = (option, optionName) => {
        if (option) {
            // Восстанавливаем состояние нажатия кнопки
            let savedState = localStorage.getItem(optionName) === 'true';
            if (savedState) {
                handleOptionClick(option);  // Восстанавливаем состояние
            }

            // Восстанавливаем все переменные, если они есть
            for (let key in option) {
                if (option.hasOwnProperty(key) && typeof option[key] !== 'function') {
                    let savedValue = localStorage.getItem(`${optionName}_${key}`);
                    if (savedValue !== null) {
                        // Если переменная сохранена, восстанавливаем её значение
                        option[key] = savedValue;
                    }
                }
            }
        }
    };

    // Применение к каждой кнопке
    saveOptionState(option1, 'option1');
    saveOptionState(option5, 'option5');
    saveOptionState(option7, 'option7');
    saveOptionState(option9, 'option9');
    saveOptionState(option16, 'option16');
    saveOptionState(option17, 'option17');
    saveOptionState(option20, 'option20');
    saveOptionState(option21, 'option21');
    saveOptionState(option24, 'option24');
    saveOptionState(option26, 'option26');
    saveOptionState(option28, 'option28');
    saveOptionState(option30, 'option30');
    saveOptionState(option31, 'option31');
    saveOptionState(option33, 'option33');
    saveOptionState(option34, 'option34');
    saveOptionState(option35, 'option35');
    saveOptionState(option36, 'option36');
    saveOptionState(option37, 'option37');
    saveOptionState(option38, 'option38');
    saveOptionState(option39, 'option39');
    saveOptionState(option40, 'option40');
    saveOptionState(option41, 'option41');
    saveOptionState(option42, 'option42');
    saveOptionState(option43, 'option43');

    // Функция для загрузки всех сохранённых опций
    const loadAllOptions = () => {
        loadOptionState(option1, 'option1');
        loadOptionState(option7, 'option7');
        loadOptionState(option9, 'option9');
        loadOptionState(option16, 'option16');
        loadOptionState(option17, 'option17');
        loadOptionState(option20, 'option20');
        loadOptionState(option21, 'option21');
        loadOptionState(option24, 'option24');
        loadOptionState(option26, 'option26');
        loadOptionState(option28, 'option28');
        loadOptionState(option30, 'option30');
        loadOptionState(option31, 'option31');
        loadOptionState(option33, 'option33');
        loadOptionState(option34, 'option34');
        loadOptionState(option35, 'option35');
        loadOptionState(option36, 'option36');
        loadOptionState(option37, 'option37');
        loadOptionState(option38, 'option38');
        loadOptionState(option39, 'option39');
        loadOptionState(option40, 'option40');
        loadOptionState(option41, 'option41');
        loadOptionState(option42, 'option42');
        loadOptionState(option43, 'option43');
    };

    // Пример кнопки для загрузки всех опций
    document.getElementById('load-options').addEventListener('click', loadAllOptions);

    // let res1 = document.getElementById("resize-handle-top-left");
    // let res2 = document.getElementById("resize-handle-top-right");
    // let res3 = document.getElementById("resize-handle-bottom-left");
    // let res4 = document.getElementById("resize-handle-bottom-right");

    // res1.style.opacity = 0;
    // res2.style.opacity = 0;
    // res3.style.opacity = 0;
    // res4.style.opacity = 0;

    var intervalId;
    var isClicking = false;
    intervalId = null;

    function clickMouse(x, y) {
        const element = document.elementFromPoint(x, y);
        if (element) {
            let clickEvent;
            try {
                // Современные браузеры поддерживают MouseEvent
                clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    clientX: x,
                    clientY: y
                });
            } catch (e) {
                // Для старых браузеров используем initMouseEvent
                clickEvent = document.createEvent('MouseEvents');
                clickEvent.initMouseEvent('click', true, true, window, 1, 0, 0, x, y, false, false, false, false, 0, null);
            }
            element.dispatchEvent(clickEvent);
            console.log(`Clicked at (${x}, ${y})`);
        } else {
            console.log(`No element at (${x}, ${y})`);
        }
    }


    function startAutoClicker() {
        const startButton = document.getElementById('startAutoClicker');
        if (startButton) {
            startButton.style.backgroundColor = "black";
        }
        if (isClicking) return;

        const clicksPerSecondInput = document.getElementById('clicksPerSecond');
        const clicksPerSecond = clicksPerSecondInput ? parseInt(clicksPerSecondInput.value) : 1;
        const interval = 1000 / clicksPerSecond;
        isClicking = true;

        intervalId = setInterval(() => {
            const { clientX: x, clientY: y } = getMousePosition();
            clickMouse(x, y);
        }, interval);
    }

    function stopAutoClicker() {
        const stopButton = document.getElementById('stopAutoClicker');
        if (stopButton) {
            stopButton.style.backgroundColor = "black";
        }
        clearInterval(intervalId);
        isClicking = false;
        console.log('Auto clicker stopped');
    }

    let mousePosition = { x: 0, y: 0 };
    document.addEventListener('mousemove', (event) => {
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;
        // console.log(`Mouse moved to (${mousePosition.x}, ${mousePosition.y})`); // debug log (will be deleted)
    });

    function getMousePosition() {
        return { clientX: mousePosition.x, clientY: mousePosition.y };
    }

    const startButton = document.getElementById('startAutoClicker');
    if (startButton) {
        startButton.addEventListener('click', startAutoClicker);
    }

    const stopButton = document.getElementById('stopAutoClicker'); // Исправление здесь
    if (stopButton) {
        stopButton.addEventListener('click', stopAutoClicker);
    }

    let set1 = document.getElementById("no-confirms-hack");
    let set2 = document.getElementById("allow-move-cheat-menu-hack");
    let set3 = document.getElementById("enable-confirms-hack");

    let chyppitau_license = document.getElementById("chyppitau_license");
    let license_chyppitau_hack = "Most up";
    chyppitau_license.innerHTML = `License: ${license_chyppitau_hack}`;

    if (license_chyppitau_hack === "Default"){
        option35.style.opacity = "0.3";
        option35.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option35.setAttribute('disabled', '');


        option10.style.opacity = "0.3";
        option10.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option10.setAttribute('disabled', '');

        option30.style.opacity = "0.3";
        option30.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option30.setAttribute('disabled', '');

        option24.style.opacity = "0.3";
        option24.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option24.setAttribute('disabled', '');

        option31.style.opacity = "0.3";
        option31.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option31.setAttribute('disabled', '');

        option28.style.opacity = "0.3";
        option31.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option31.setAttribute('disabled', '');

        option37.style.opacity = "0.3";
        option37.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option37.setAttribute('disabled', '');

        option38.style.opacity = "0.3";
        option38.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option38.setAttribute('disabled', '');

        option36.style.opacity = "0.3";
        option36.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option36.setAttribute('disabled', '');

        option35.style.opacity = "0.3";
        option35.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option35.setAttribute('disabled', '');

        option34.style.opacity = "0.3";
        option34.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        option34.setAttribute('disabled', '');

        set1.style.opacity = "0.3";
        set1.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        set1.setAttribute('disabled', '');

        set2.style.opacity = "0.3";
        set2.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        set2.setAttribute('disabled', '');

        set3.style.opacity = "0.3";
        set3.addEventListener("click", () => {
            alert("to use this func you need to be a license: Most up.");
        });
        set3.setAttribute('disabled', '');
    }

    if (license_chyppitau_hack === "Most up"){
        let text_hack_vhy = document.getElementById("little-text-in-the-hack-chyppitau");
        text_hack_vhy.remove();
    }
    document.getElementById('chyppitauE1').addEventListener("click", () => {if(able_to_click_hack) sendChat(1)});
    document.getElementById('chyppitauE2').addEventListener("click", () => {if(able_to_click_hack) sendChat(2)});
    document.getElementById('chyppitauE3').addEventListener("click", () => {if(able_to_click_hack) sendChat(3)});
    document.getElementById('chyppitauE4').addEventListener("click", () => {if(able_to_click_hack) sendChat(4)});
    document.getElementById('chyppitauE5').addEventListener("click", () => {if(able_to_click_hack) sendChat(5)});
    document.getElementById('chyppitauE6').addEventListener("click", () => {if(able_to_click_hack) sendChat(6)});
    document.getElementById('chyppitauE7').addEventListener("click", () => {if(able_to_click_hack) sendChat(7)});
    document.getElementById('chyppitauE8').addEventListener("click", () => {if(able_to_click_hack) sendChat(8)});
    document.getElementById('chyppitauE9').addEventListener("click", () => {if(able_to_click_hack) sendEmote(1)});
    document.getElementById('chyppitauE10').addEventListener("click", () => {if(able_to_click_hack) sendEmote(12)});
    document.getElementById('chyppitauE11').addEventListener("click", () => {if(able_to_click_hack) sendEmote(2)});
    document.getElementById('chyppitauE12').addEventListener("click", () => {if(able_to_click_hack) sendEmote(6)});
    document.getElementById('chyppitauE13').addEventListener("click", () => {if(able_to_click_hack) sendEmote(4)});
    document.getElementById('chyppitauE14').addEventListener("click", () => {if(able_to_click_hack) sendEmote(11)});
    document.getElementById('chyppitauE15').addEventListener("click", () => {if(able_to_click_hack) sendEmote(10)});
    document.getElementById('chyppitauE16').addEventListener("click", () => {if(able_to_click_hack) sendEmote(3)});
    document.getElementById('chyppitauE17').addEventListener("click", () => {if(able_to_click_hack) sendEmote(7)});
    document.getElementById('chyppitauE18').addEventListener("click", () => {if(able_to_click_hack) sendEmote(8)});

    let author_anothers_hacks = document.getElementById("my-another-hacks");

    let leaderboard_nicknames_select = document.getElementById("leaderboard-nicknames");
    let copy_players_nicks_button = document.getElementById("copy-player-nick-hack");
    copy_players_nicks_button.addEventListener("click", () => {
        if (able_to_click_hack){
            copy_players_nicks_button.style.backgroundColor = "black";

            let value;
            if (value === undefined){
                value = leaderboard_nicknames_select.value;
            }

            if (value === "-"){
                c_alert("Select nick!", 'Ok');
            }

            if (value === "1"){
                let copy_nick_name_hack = leaderboard[0].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "2"){
                let copy_nick_name_hack = leaderboard[1].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "3"){
                let copy_nick_name_hack = leaderboard[2].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "4"){
                let copy_nick_name_hack = leaderboard[3].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "5"){
                let copy_nick_name_hack = leaderboard[4].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "6"){
                let copy_nick_name_hack = leaderboard[5].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "7"){
                let copy_nick_name_hack = leaderboard[6].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "8"){
                let copy_nick_name_hack = leaderboard[7].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "9"){
                let copy_nick_name_hack = leaderboard[8].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }

            if (value === "10"){
                let copy_nick_name_hack = leaderboard[9].nick;
                navigator.clipboard.writeText(copy_nick_name_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }
        }
    });

    set1.addEventListener("click", () => {
        if (able_to_click_hack){
            no_confirms_in_hack = true;
        }
    });

    set2.addEventListener("click", () => {
        if (able_to_click_hack) {
            document.querySelectorAll('.cheatMenu .hack-main-section > div').forEach(section => {
                section.style.position = 'absolute';

                let isDragging = false;
                let startX, startY, initialLeft, initialTop;

                function moveSection(e) {
                    if (isDragging) {
                        let posX = initialLeft + (e.clientX - startX);
                        let posY = initialTop + (e.clientY - startY);

                        // Обновляем положение секции
                        section.style.left = posX + 'px';
                        section.style.top = posY + 'px';
                    }
                }

                function startDragging(e) {
                    // Отключаем перенос текста или других элементов при клике
                    e.preventDefault();

                    // Получаем текущие координаты секции (позицию)
                    const rect = section.getBoundingClientRect();

                    // Сохраняем начальные позиции мыши и секции
                    startX = e.clientX;
                    startY = e.clientY;
                    initialLeft = rect.left;
                    initialTop = rect.top;

                    isDragging = true;

                    // Добавляем обработчики движения и остановки
                    document.addEventListener('mousemove', moveSection);
                    document.addEventListener('mouseup', stopDragging);
                }

                function stopDragging() {
                    isDragging = false;
                    document.removeEventListener('mousemove', moveSection);
                    document.removeEventListener('mouseup', stopDragging);
                }

                // Добавляем обработчик на каждую секцию
                section.addEventListener('mousedown', startDragging);
            });

        }
    });

    set3.addEventListener("click", ()=>{
        if (able_to_click_hack){
            no_confirms_in_hack = false;
        }
    });

    option1.addEventListener("click", () => {
        if (able_to_click_hack){
            window.location.reload();
        }
    });

    option5.addEventListener("click", () => {
        if (able_to_click_hack) {
            let copy_val_hack = "nortos, skybs, plaxer1, JeromeAS, PixelVoices, xxostepolse";
            c_alert(copy_val_hack, 'Hehe..');
            if (!no_confirms_in_hack){
                if (confirm("Copy to clipboard?")) {
                    navigator.clipboard.writeText(copy_val_hack).then(() => {
                        c_alert(copy_val_hack + " copied to clipboard!", 'Ok!');
                    }).catch(err => {
                        c_alert(`Failed to copy text: ${err}`, 'Ok');
                    });
                }
            } else {
                navigator.clipboard.writeText(copy_val_hack).then(() => {
                    c_alert(copy_nick_name_hack + " copied to clipboard!", 'All Right :)');
                }).catch(err => {
                    c_alert(`Failed to copy text: ${err}`, 'Ok');
                });
            }
        }
    });

    option7.addEventListener("click", () => {
        if (able_to_click_hack){
            if (no_confirms_in_hack){
                $.get("https://raw.githubusercontent.com/jmatg1/evoword-scripts/main/zoom-hack.js", (d) => eval(d));
            } else {
                if(confirm("visit authour's script page on greasy fork?")){
                    window.open("https://greasyfork.org/ru/scripts/501404-evoworld-io-zoom-hack");
                }
                $.get("https://raw.githubusercontent.com/jmatg1/evoword-scripts/main/zoom-hack.js", (d) => eval(d));
            }
        }
    });

    option9.addEventListener("click", () => {
        if (able_to_click_hack){
            window.location.href = "https://google.com";
        }
    });

    option16.addEventListener("click", () =>{
        if (able_to_click_hack){
            print();
        }
    });

    option17.addEventListener("click", () =>{
        if (able_to_click_hack){
            window.open("https://www.userscript.zone/search?q=https%3A%2F%2Fevoworld.io%2F&utm_campaign=dhdg&utm_medium=api&utm_source=usz");
        }
    });

    option20.addEventListener("click", () => {
        if (able_to_click_hack){
            let title;
            if (title === undefined) { // Проверяем, была ли уже инициализирована переменная
                title = prompt('Enter your title:');
            }
            if (title !== null) { // Проверяем, что пользователь не нажал "Отмена"
                document.title = title;
            }
        }
    });

    option21.addEventListener("click", () => {
        if (able_to_click_hack){
            scanPlayers();
        }
    });

    let clicked_hack_on_option_24;
    if (clicked_hack_on_option_24 === undefined){
        clicked_hack_on_option_24 = 0;
    }

    option24.addEventListener("click", () => {
        if (able_to_click_hack) {
            clicked_hack_on_option_24 += 1;
            if (clicked_hack_on_option_24 === 1){
                let text = prompt("Enter Your Text: ");
                let size = prompt("Enter text size: ");
                let color = prompt("Enter text color: ");

                if (text !== null && size !== null && color !== null){
                    let label = document.createElement("div");
                    label.id = 'hack_text_1'
                    label.textContent = text;
                    label.style.position = "fixed";
                    label.style.top = "10%";
                    label.style.left = "18%";
                    label.style.fontSize = `${size}px`;
                    label.style.fontFamily = "Arial";
                    label.style.color = `${color}`;
                    label.style.zIndex = 9998;
                    document.body.appendChild(label);
                }
            } else {
              let text = prompt("Enter Your Text: ");
              let size = prompt("Enter text size: ");
              let color = prompt("Enter text color: ");

                if (text !== null && size !== null && color !== null){
                    let label = document.createElement("div");
                    label.id = 'hack_text_1'
                    label.textContent = text;
                    label.style.position = "fixed";
                    label.style.top = "10%";
                    label.style.left = "18%";
                    label.style.fontSize = `${size}px`;
                    label.style.fontFamily = "Arial";
                    label.style.color = `${color}`;
                    label.style.zIndex = 9998;
                    document.body.appendChild(label);
                }
            }
        }
    });

    option26.addEventListener('click', () => {
        if (able_to_click_hack){
            let hackButtons = document.querySelectorAll('.hack-main-section button');
            let bindAllowedSelect = document.getElementById('Bind-allowed-select');

            hackButtons.forEach((button) => {
                let option = document.createElement('option');
                option.value = button.id;
                option.text = button.textContent;
                bindAllowedSelect.add(option);
            });
            let key  = document.getElementById("key-to-bind-hack").value.trim();
            let hack = document.getElementById("Bind-allowed-select").value;

            if (!key) {
                c_alert("Please enter a key to bind.", 'Ok');
                return;
            }

            if (hack === "-") {
                c_alert("Please select a hack.", 'Ok');
                return;
            }

            if (!no_confirms_in_hack && !confirm("Are you sure you want to add this keybind?")) {
                console.log("Keybind addition cancelled.");
                return;
            }

            document.addEventListener("keydown", (event) => {
                if (event.key === key) {
                    let option = document.getElementById(hack);
                    if (option && able_to_click_hack) {
                        option.click();
                        able_to_click_hack = false;
                    } else if (option && !able_to_click_hack){
                        able_to_click_hack = true;
                        option.click();
                        able_to_click_hack = false;
                    }
                }
            });

            c_alert(`Keybind added: Press "${key}" to trigger "${hack}"`, 'Yay!');
        }
    });

    option28.addEventListener("click", () => {
      if (able_to_click_hack) {
          setInterval(() => {
              playAgain();
          }, 205);
      }

    });

    option30.addEventListener('click', () => {
        if (able_to_click_hack){
            setInterval(()=>{
                playAgain();
            }, 250);
        }
    });

    option31.addEventListener('click', () => {
        if (able_to_click_hack){
            let label_num_hack = prompt('Enter the label number to delete: ');
            let need_label = document.getElementById(`hack_text_${label_num_hack}`);
            if (need_label) {
                need_label.remove();
                clicked_hack_on_option_24 -= 1;
            } else {
                c_alert('Label not found!', ':(');
            }
        }
    });

    option33.addEventListener("click", () => {
        if (able_to_click_hack){
            if (!no_confirms_in_hack){
                if (confirm('Are you sure want to run this hack? You can will get ban and your screen can will be black!')){
                    setInterval(() => {
                        drawDarkness = () => {};
                    }, 1);
                    setInterval(() => {
                        drawDarkness = () => {
                            var _0x6cea1e = _0x1bfa81
                              , _0x563cb = 0x1900 - 0x1036;
                            if (typeof game['me'] == _0x6cea1e(0x28a))
                                return;
                            var _0x3b26e5 = (_0x563cb - game['me'][_0x6cea1e(0x33f)]()[_0x6cea1e(0x176)]['y']) / _0x563cb * 0x64;
                            _0x3b26e5 *= 0x2;
                            if (_0x3b26e5 < 0x0)
                                _0x3b26e5 = 0x0;
                            if (_0x3b26e5 > 0x5f)
                                _0x3b26e5 = 0x5f;
                            var _0x5341ee = 0x64 - _0x3b26e5;
                            if (_0x3b26e5 > 0x0) {
                                if (visionType == 0x1)
                                    _0x3b26e5 = 0x0;
                                else {
                                    if (visionType == 0x2) {
                                        if (_0x5341ee < 0x4b)
                                            _0x5341ee = 0x4b;
                                    } else {
                                        if (visionType == 0x3 && game['me']['inWater']) {
                                            if (_0x5341ee < 0x41)
                                                _0x5341ee = 0x41;
                                        }
                                    }
                                }
                            }
                            if (_0x3b26e5 <= 0x0)
                                return;
                            var _0x5ab95e = game[_0x6cea1e(0x230)]
                              , _0x2fb164 = game[_0x6cea1e(0x3e1)];
                            lastDarknessPercent = _0x3b26e5,
                            lastGradient = _0x5341ee;
                            if (_0x5341ee < 0xf)
                                _0x5341ee = 0xf;
                            var _0x460bdd = 0x2;
                            if (isMobile)
                                _0x460bdd = 0x4;
                            darknessCanvas[_0x6cea1e(0x2f2)] = _0x5ab95e[_0x6cea1e(0x2f2)] / _0x460bdd,
                            darknessCanvas[_0x6cea1e(0x164)] = _0x5ab95e[_0x6cea1e(0x164)] / _0x460bdd;
                            var _0x33e506 = (_0x3b26e5 / 0x19)[_0x6cea1e(0x1b3)](0x3);
                            if (_0x33e506 > 0x1)
                                _0x33e506 = 0x1;
                            var _0x4ebbcd = (_0x5341ee / 0x64)['toFixed'](0x3) * game[_0x6cea1e(0x242)];
                            if (_0x4ebbcd > 0x1)
                                _0x4ebbcd = 0x1;
                            if (typeof game['me'] !== _0x6cea1e(0x28a)) {
                                var _0x550a46 = Math[_0x6cea1e(0x24f)](game['me'][_0x6cea1e(0x2f2)], game['me'][_0x6cea1e(0x164)]) / Math['min'](game[_0x6cea1e(0x212)], game[_0x6cea1e(0x337)]) * game['zoom'];
                                if (_0x4ebbcd < _0x550a46)
                                    _0x4ebbcd = _0x550a46;
                            }
                            darknessCtx[_0x6cea1e(0x342)](),
                            darknessCtx[_0x6cea1e(0x3c2)] = _0x33e506,
                            darknessCtx['fillStyle'] = _0x6cea1e(0x39c),
                            darknessCtx[_0x6cea1e(0x32e)] = ![],
                            darknessCtx['fillRect'](0x0, 0x0, _0x5ab95e[_0x6cea1e(0x2f2)], _0x5ab95e[_0x6cea1e(0x164)]),
                            darknessCtx['clearRect'](floor(darknessCanvas[_0x6cea1e(0x2f2)] / 0x2 - darknessCanvas[_0x6cea1e(0x2f2)] * _0x4ebbcd / 0x2), floor(darknessCanvas['height'] / 0x2 - darknessCanvas[_0x6cea1e(0x164)] * _0x4ebbcd / 0x2), floor(darknessCanvas[_0x6cea1e(0x2f2)] * _0x4ebbcd), floor(darknessCanvas['height'] * _0x4ebbcd)),
                            darknessCtx['drawImage'](generateGradient(0x3e8 / _0x460bdd, 0x3e8 / _0x460bdd, _0x6cea1e(0x1f2), _0x6cea1e(0x39c), 0x1f4 / _0x460bdd), 0x0, 0x0, 0x3e8 / _0x460bdd, 0x3e8 / _0x460bdd, floor(darknessCanvas['width'] / 0x2 - darknessCanvas['width'] * _0x4ebbcd / 0x2), floor(darknessCanvas[_0x6cea1e(0x164)] / 0x2 - darknessCanvas[_0x6cea1e(0x164)] * _0x4ebbcd / 0x2), floor(darknessCanvas[_0x6cea1e(0x2f2)] * _0x4ebbcd), floor(darknessCanvas[_0x6cea1e(0x164)] * _0x4ebbcd)),
                            darknessCtx[_0x6cea1e(0x282)](),
                            darknessCtx[_0x6cea1e(0x342)](),
                            darknessCtx[_0x6cea1e(0x359)] = _0x6cea1e(0x363),
                            darknessCtx[_0x6cea1e(0x32e)] = ![];
                            for (var _0x5f56d5 = 0x0; _0x5f56d5 < game['lightPoints'][_0x6cea1e(0x395)]; _0x5f56d5++) {
                                var _0x320182 = game[_0x6cea1e(0x1b1)][_0x5f56d5]
                                  , _0x395df4 = _0x320182[_0x6cea1e(0x16e)];
                                if (_0x320182['light_random_radius'])
                                    _0x395df4 += randomInteger(0x0, _0x320182[_0x6cea1e(0x33e)]);
                                if (!game[_0x6cea1e(0x2ee)](game[_0x6cea1e(0x198)], _0x320182, game[_0x6cea1e(0x212)] / 0x2 + _0x395df4, game[_0x6cea1e(0x337)] / 0x2 + _0x395df4))
                                    continue;
                                var _0x3ee47a = game[_0x6cea1e(0x1af)](_0x320182['position']['x'] + _0x320182[_0x6cea1e(0x2f2)] / 0x2, _0x320182['position']['y'] + _0x320182[_0x6cea1e(0x164)] / 0x2);
                                _0x395df4 *= 0x2,
                                darknessCtx[_0x6cea1e(0x21b)](generateGradient(_0x320182['light_radius'] * 0x2 / _0x460bdd, _0x320182[_0x6cea1e(0x16e)] * 0x2 / _0x460bdd, 'black', _0x6cea1e(0x1f2), _0x320182[_0x6cea1e(0x16e)] / _0x460bdd), 0x0, 0x0, _0x320182[_0x6cea1e(0x16e)] * 0x2 / _0x460bdd, _0x320182[_0x6cea1e(0x16e)] * 0x2 / _0x460bdd, (_0x3ee47a['x'] - _0x395df4 / 0x2 * game[_0x6cea1e(0x242)] * game[_0x6cea1e(0x189)]) / _0x460bdd, (_0x3ee47a['y'] - _0x395df4 / 0x2 * game[_0x6cea1e(0x242)] * game[_0x6cea1e(0x18b)]) / _0x460bdd, _0x395df4 * game[_0x6cea1e(0x242)] * game['scaleX'] / _0x460bdd, _0x395df4 * game[_0x6cea1e(0x242)] * game[_0x6cea1e(0x18b)] / _0x460bdd);
                            }
                            darknessCtx[_0x6cea1e(0x282)](),
                            _0x2fb164[_0x6cea1e(0x342)](),
                            _0x2fb164['imageSmoothingEnabled'] = ![],
                            _0x2fb164[_0x6cea1e(0x359)] = 'source-over',
                            _0x2fb164[_0x6cea1e(0x21b)](darknessCanvas, 0x0, 0x0, _0x5ab95e['width'], _0x5ab95e[_0x6cea1e(0x164)]),
                            _0x2fb164[_0x6cea1e(0x282)]();
                        }
                    }, 15);


                } else {
                    drawDarkness = () => {};
                }
            }
        }
    });

    option34.addEventListener('click', () => {
        if (able_to_click_hack){
            let fps_hack;
            if (fps_hack === undefined){
                fps_hack = prompt("enter your fps(maybe not work. On old pc or old browsers this is a visual): ");
            }
            if (fps_hack !== null){
                // setInterval(() => {
                //     game.fps = fps_hack;
                // }, 15);

                setInterval(()=>{
                    game.fpsTimes.length = fps_hack
                }, 15);
            }
        }
    });

    option35.addEventListener('click', () => {
        if (able_to_click_hack){
            game.me.zIndex = 9999;
            setInterval(()=>{game.me.inHide = false}, 15);
        }
    });

    option36.addEventListener('click', () => {
        if (able_to_click_hack){
            if (no_confirms_in_hack){
                const zIndexInfinite = (value) => {
                    petFunc(value);
                    if (value?.type === 1 || value?.type === 3) {
                        value.zIndex = 9999;
                    }
                }

                if (window?.objectHandlerFunc_PLAYER) {
                    objectHandlerFunc_PLAYER = zIndexInfinite;
                }
            }else{
                if(confirm("visit authour's script page on greasy fork?")){
                    window.open("https://greasyfork.org/ru/scripts/457502-evoworld-io-cheats");
                }
                if(confirm("Your screen can will be black! Are you sure want to run it?")){
                    const zIndexInfinite = (value) => {
                        petFunc(value);
                        if (value?.type === 1 || value?.type === 3) {
                            value.zIndex = 9999;
                        }
                    }

                    if (window?.objectHandlerFunc_PLAYER) {
                        objectHandlerFunc_PLAYER = zIndexInfinite;
                    }
                }
            }
        }
    });

    option37.addEventListener('click', () => {
        if (able_to_click_hack){
            if (no_confirms_in_hack){
                setInterval(() => {
                    adblockDisabled = true;
                }, 1);
            }else{
                c_alert("This on some functions not work but you can test it.", 'Ok, I want!');
                setInterval(() => {
                    adblockDisabled = true;
                }, 1);
            }
        }
    });

    option38.addEventListener('click', () => {
        if (able_to_click_hack){
            endGameText = (_0x581160, _0x3181aa) => {
                var _0x582223 = _0x5ab7e6;
                $(_0x582223(0x3be))[_0x582223(0x248)](),
                $(_0x582223(0x217))['css']({
                    'display': 'none'
                }),
                killerText = _0x581160;
                if (typeof lang[killerText[_0x582223(0x16a)](/ /g, '_')['toLowerCase']()] == _0x582223(0x29b))
                    killerText = lang[killerText[_0x582223(0x16a)](/ /g, '_')['toLowerCase']()][_0x582223(0x1c9)]();
                $('.endGameText')[_0x582223(0x380)](getTranslation(_0x582223(0x1fe), [killerText]) + _0x582223(0x21d) + getTranslation('you_will_spawn_with', [_0x3181aa]) + _0x582223(0x2b3)),
                $(_0x582223(0x179))[_0x582223(0x31b)](_0x582223(0x35b), 0x1),
                $(_0x582223(0x179))[_0x582223(0x1cf)]()[_0x582223(0x31b)]({
                    'top': -0x64,
                    'position': _0x582223(0x26e),
                    'opacity': 0x1
                })[_0x582223(0x35f)]({
                    'top': _0x582223(0x260)
                }, 0x708),
                $('.btnPlayAgain')['css']({
                    'display': _0x582223(0x354),
                    'opacity': 0x0
                })
            }

            setInterval(() => {
                let videos = document.querySelectorAll('video');
                videos.forEach((cur) => {
                    if (cur.id.match(/poki/)) {
                        cur.currentTime = 1000;
                        cur.play();
                    }
                });

                function check (){
                    videos.forEach((cur) => {
                        if (cur.id.match(/poki/)) {
                            if (cur.currentTime === 1000) return true
                            else return false
                        }
                    });
                }

                // if (document.getElementById('pokiSdkStartAdButton') && check()) document.getElementById('pokiSdkStartAdButton').remove();
                // if (document.getElementById('pokiSdkPauseButtonContainer') && check()) document.getElementById('pokiSdkPauseButtonContainer').remove();
                // if (document.getElementById('pokiSdkSpinnerContainer') && check()) document.getElementById('pokiSdkSpinnerContainer').remove();
                // if (document.querySelector('.pokiSdkContainer.pokiSdkFixed') && check()) document.querySelector('.pokiSdkContainer.pokiSdkFixed').remove();
                // if (document.getElementById('pokiSdkInsideContainer') && check() ) document.getElementById('pokiSdkInsideContainer').remove();
                // if (document.getElementById('pokiSDKHouseAdContainer')&& check()) document.getElementById('pokiSDKHouseAdContainer').remove();
                // if (document.getElementById('pokiSDKAdContainer')&& check()) document.getElementById('pokiSDKAdContainer').remove();
                // if (document.getElementById('pokiSDKVideoContainer')&& check()) document.getElementById('pokiSDKVideoContainer').remove();
                // if (document.getElementById('pokiSdkProgressContainer')&& check()) document.getElementById('pokiSdkProgressContainer').remove();
                // if (document.getElementById('pokiSDKHouseAdContainerpokiSDKVideoContainer')&& check()) document.getElementById('pokiSDKHouseAdContainerpokiSDKVideoContainer').remove();
            }, 15);
        }
    });

    option41.addEventListener("click", () =>{
        if (able_to_click_hack){
            let isRotated = false;

            setInterval(() => {
                if (game.me.position.y >= 4080.5819905255726 && !isRotated){
                    hideShowMap();
                    isRotated = true;
                } else if (game.me.position.y < 4080.5819905255726 && isRotated) {
                    hideShowMap();
                    isRotated = false;
                }
            }, 15);
        }
    });

    option42.addEventListener('click', () => {
        if (able_to_click_hack){
            let copy_code = `const better_outlines = (value) => {
                setAnimations(value);
                if (value?.type === 1 || value?.type === 3) {
                    let checkFood2 = checkFoodChain(game.me, value);
                    if (checkFood2.check == 1) {
                        value.outline = "#00cc44";
                        if (document.getElementById('alert_of_enemy_near')){
                            document.getElementById('alert_of_enemy_near').remove();
                        }
                        if (checkFoodChain(value, game.me).check == 1) {
                            value.outline = "orange";
                            value.outlineWeight = 5;
                            let alert_t = document.createElement('p');
                            alert_t.id = 'alert_of_enemy_near';
                            alert_t.textContent = 'grim reaper near!!';
                            alert_t.style.position = "fixed";
                            alert_t.style.top = "10%";
                            alert_t.style.left = "18%";
                            alert_t.style.fontSize = '30px';
                            alert_t.style.fontFamily = "Arial";
                            alert_t.style.color = 'red';
                            alert_t.style.zIndex = 9999;
                            document.body.appendChild(alert_t);
                        }
                    } else {
                        if (checkFood2.check == -1) {
                            value.outline = "red";
                            value.outlineWeight = 8;
                            if (document.getElementById('alert_of_enemy_near')){
                                document.getElementById('alert_of_enemy_near').remove();
                            }
                        } else {
                            value.outline = '#bbdcf0';
                            value.outlineWeight = 5;
                            value.outline
                        }
                    }
                }
            }

            if (window?.animateObject) {
                animateObject = better_outlines;
            }`;

            navigator.clipboard.writeText(copy_code).then(() => {
                c_alert(copy_code + " copied to clipboard!", 'All Right :)');
            }).catch(err => {
                c_alert(copy_code + `Failed to copy text: ${err}`, 'Ok');
            });
        }
    });

    option43.addEventListener('click', () => {
        if (able_to_click_hack){
            handleOptionClick(option41);
            handleOptionClick(option39);
            handleOptionClick(option38);
            handleOptionClick(option37);
            handleOptionClick(option34);
            handleOptionClick(option28);
            handleOptionClick(option24);
            handleOptionClick(option15);
            handleOptionClick(option10);
            handleOptionClick(option7);
            handleOptionClick(option4);
            handleOptionClick(option42);
            handleOptionClick(option38);
        }
    });

    option43.addEventListener('click', () => {
      if (able_to_click_hack){

      }
  });

    option39.addEventListener('click', () => {
        if (able_to_click_hack){

            let copy_text_code = `// E - Auto Fly
            // H - Toggle Script

            let isGrimReaperDetect = true;

            // это секция оптимизации, мы просто из-за последующих действий будем убивать fps, а нам надо его держать стабильным
            setInterval(()=>{
              game.fpsTimes.length = 360;
            }, 15);

            // А это шляпа с нажатием клавишь (не на всех браузерах работает)
            function pressEnter() {
              const event = new KeyboardEvent('keydown', {
                key: 'e',
                code: 'e',
                keyCode: 69,
                which: 69,
                bubbles: true
              });
              document.dispatchEvent(event);
              console.log('Space pressed');
            }

            // А это с отжатием
            function releaseEnter() {
              const event = new KeyboardEvent('keyup', {
                key: 'e',
                code: 'e',
                keyCode: 69,
                which: 69,
                bubbles: true
              });
              document.dispatchEvent(event);
              console.log('Space released');
            }

            // function pressEnter() { // эта хуйня не работает
            //   const event = new KeyboardEvent('keydown', {
            //       key: 'Space',
            //       code: 'Space',
            //       keyCode: 32,
            //       which: 32,
            //       bubbles: true
            //   });
            //   document.dispatchEvent(event);
            //   console.log('Space pressed');
            // }

            "use strict";
            window.imReaper = false;
            window.attackHitboxesOLD = {
              ghostlyReaperScythe: {
                topLeftX: -75,
                topLeftY: -16.5,
                bottomRightX: -32,
                bottomRightY: 82,
              },
              pumpkinGhostScythe: {
                topLeftX: -105,
                topLeftY: -68,
                bottomRightX: -43,
                bottomRightY: 82,
              },
              grimReaperScythe: {
                topLeftX: -94,
                topLeftY: -63,
                bottomRightX: -42,
                bottomRightY: 78,
              },
            };
            window.attackHitboxesFIX = {
              ghostlyReaperScythe: {
                left: 32,
                top: 16.5,
                width: 43,
                height: 98.5,
              },
              pumpkinGhostScythe: {
                left: 43,
                top: 68,
                width: 62,
                height: 150,
              },
              grimReaperScythe: {
                left: 42,
                top: 63,
                width: 52,
                height: 141,
              },
            };
            window.myAttackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
            var toggleHack = true;
            // Variable to hold the state of 'e' key
            var isEKeyPressed = false;
            // Add an event listener for keydown
            document.addEventListener("keydown", function (event) {
              if (event.key === "e" || event.key === "E") {
                isEKeyPressed = true;
              }
            });
            // Add an event listener for keyup
            document.addEventListener("keyup", function (event) {
              if (event.key === "e" || event.key === "E") {
                isEKeyPressed = false;
              }
              if (event.key === "h" || event.key === "H") {
                toggleHack = !toggleHack;
              }
            });

            document.addEventListener('keydown', (key) => {
              if (key.key == 'l' || key.key == 'д'){
                if (isGrimReaperDetect == false){
                  isGrimReaperDetect = true
                } else {
                  isGrimReaperDetect = false;
                }
              }
            });

            // Create a new canvas with the variable name "canvas3"
            var canvas3 = document.createElement("canvas");
            document.body.appendChild(canvas3);
            // Set canvas size
            canvas3.width = window.innerWidth;
            canvas3.height = window.innerHeight;
            // Get the 2D rendering context
            var ctx3 = canvas3.getContext("2d");
            // Position the new canvas on top of the game's canvas
            canvas3.style.position = "absolute";
            canvas3.style.top = "0";
            canvas3.style.left = "0";
            canvas3.style.zIndex = "100"; // Adjust the z-index to make sure it's on top
            canvas3.style.pointerEvents = "none"; // This line allows mouse events to pass through the new canvas
            var alreadySet = false;
            var leftReward = 0;
            var rightReward = 0;
            function isPlayerInRadius(player, boxSize) {
              if (
                typeof game === "undefined" ||
                typeof player === "undefined" ||
                !game.me ||
                imDead ||
                !player.position ||
                !game.me.position
              ) {
                return false;
              }
              // Calculate the box boundaries
              var leftBoundary = game.me.position.x - boxSize / 2;
              var rightBoundary = game.me.position.x + boxSize / 2;
              var topBoundary = game.me.position.y - boxSize / 2;
              var bottomBoundary = game.me.position.y + boxSize / 2;
              // Check if the player's position is within the box
              if (
                player.position.x >= leftBoundary &&
                player.position.x <= rightBoundary &&
                player.position.y >= topBoundary &&
                player.position.y <= bottomBoundary
              ) {
                return true;
              } else {
                return false;
              }
            }
            function checkAttacks(entity, attackHitbox) {
              if (
                typeof game === "undefined" ||
                typeof entity === "undefined" ||
                !game.me ||
                imDead ||
                !entity.position ||
                !game.me.position
              ) {
                return false;
              }
              // decide which direction the entity is
              var isInRight = game.me.position.x > entity.position.x;
              // calculate the position accordingly
              var left = isInRight
                ? game.me.position.x + attackHitbox.left
                : game.me.position.x - (attackHitbox.left + attackHitbox.width);
              var myScytheHitbox = {
                left: left,
                top: game.me.position.y + attackHitbox.top,
                width: attackHitbox.width,
                height: attackHitbox.height,
              };
              // let playerCollisionHitbox: RectAllSides = {
              //   left: centerPos.x - entity.colliderRectangleOffset.left * entity.width,
              //   right: centerPos.x + entity.colliderRectangleOffset.right * entity.width,
              //   top: centerPos.y + entity.colliderRectangleOffset.top * entity.height,
              //   bottom:
              //     centerPos.y - entity.colliderRectangleOffset.bottom * entity.height,
              // };
              return {
                // collides: doesRectsOverlap(
                //   rectToAllSides(myScytheHitbox),
                //   playerCollisionHitbox
                // ),
                collides: isInBox(entity.position, myScytheHitbox),
                direction: isInRight ? 1 : -1,
              };
            }
            function drawBoxAroundMe(firstBoxSize) {
              if (typeof game === "undefined" || !game.me) {
                // If game or game.me is undefined, do not proceed
                return;
              }
              // Calculate the center of the canvas
              var centerX = canvas3.width / 2;
              var centerY = canvas3.height / 2;
              var boxSize = firstBoxSize * game.zoom;
              // Calculate the box boundaries
              var leftBoundary = centerX - boxSize / 2;
              var topBoundary = centerY - boxSize / 2;
              // Draw the box
              if (ctx3) {
                ctx3.beginPath();
                ctx3.rect(leftBoundary, topBoundary, boxSize, boxSize);
                document.body.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Space'}));
                ctx3.lineWidth = 1;
                ctx3.strokeStyle = "green"; // Change the color as needed
                ctx3.stroke();
              }
            }
            function drawAttackHitbox(attackHitbox, canKillLeft, canKillRight) {
              if (!toggleHack) {
                return;
              }
              // function pressSpaceKey() {
              //   // Создание события keydown
              //   let keyDownEvent = new KeyboardEvent('keydown', {
              //       key: ' ',
              //       code: 'Enter',
              //       keyCode: 13,
              //       charCode: 13,
              //       which: 13,
              //       bubbles: true,
              //       cancelable: true,
              //   });

              //   // Создание события keyup
              //   let keyUpEvent = new KeyboardEvent('keyup', {
              //       key: ' ',
              //       code: 'Enter',
              //       keyCode: 13,
              //       charCode: 13,
              //       which: 13,
              //       bubbles: true,
              //       cancelable: true,
              //   });

              //   // Фокус на элементе body (или на другом элементе, если нужно)
              //   document.getElementById('canvasGame').focus();

              //   // Отправка события keydown
              //   document.getElementById('canvasGame').dispatchEvent(keyDownEvent);

              //   // Задержка между нажатиями
              //   setTimeout(() => {
              //       document.body.dispatchEvent(keyUpEvent);
              //   }, 100);
              // }
              var hitboxWidth = attackHitbox.width * game.zoom;
              var hitboxHeight = attackHitbox.height * game.zoom;
              var screenCenterPos = {
                x: canvas3.width / 2,
                y: canvas3.height / 2,
              };
              var left = screenCenterPos.x + attackHitbox.left;
              var leftOppositeDirection =
                screenCenterPos.x - (attackHitbox.left + attackHitbox.width);
              // when drawing y=0 - is top so flipped from + to - change
              var top = screenCenterPos.y - attackHitbox.top;
              console.log(screenCenterPos, attackHitbox);
              // const condition = canKillLeft || canKillRight;

              // setInterval(() => {
              //   if (condition) {
              //     pressEnter();
              //   }
              // }, 10);
            }

            // const drawScytheHitboxOLD = function (
            //   x,
            //   y,
            //   height,
            //   width,
            //   attackHitbox,
            //   direction
            // ) {
            //   const pos = game.getRenderPosition(x, y);
            //   // Calculate the width and height of the hitbox based on the top left and bottom right positions
            //   let hitboxWidth =
            //     (attackHitbox.bottomRightX - attackHitbox.topLeftX) *
            //     direction *
            //     game.zoom;
            //   let hitboxHeight =
            //     (attackHitbox.bottomRightY - attackHitbox.topLeftY) * game.zoom;
            //   // Calculate the top left position of the hitbox relative to the player's center
            //   let hitboxTopLeftX =
            //     pos.x +
            //     (width * game.scaleX * game.zoom) / 2 +
            //     attackHitbox.topLeftX * direction * game.zoom;
            //   let hitboxTopLeftY =
            //     pos.y -
            //     (height * game.scaleY * game.zoom) / 2 +
            //     attackHitbox.topLeftY * game.zoom;
            //   // Set the hitbox color
            //   game.dynamicContext.lineWidth = 2;
            //   game.dynamicContext.strokeStyle = "red";
            //   // Draw the hitbox rectangle outline
            //   game.dynamicContext.strokeRect(
            //     hitboxTopLeftX,
            //     hitboxTopLeftY,
            //     hitboxWidth,
            //     hitboxHeight
            //   );
            // };
            var drawHitboxrfff = function (entity, attackHitbox) {
              if (
                typeof game === "undefined" ||
                typeof entity === "undefined" ||
                imDead ||
                !entity.position
              ) {
                return false;
              }
              var colliderRectangleOffset = entity.colliderRectangleOffset;
              var pos = game.getRenderPosition(entity.position.x, entity.position.y);
              var left =
                (entity.direction > 0
                  ? pos.x + attackHitbox.left
                  : pos.x - (attackHitbox.left + attackHitbox.width)) *
                game.zoom *
                game.scaleX;
              // Calculate the hitbox dimensions
              var hitboxLeft =
                pos.x -
                (entity.width * game.scaleX * game.zoom) / 2 +
                (entity.width / 2) * game.zoom * game.scaleX;
              var hitboxTop =
                pos.y -
                entity.height * game.scaleY * game.zoom -
                (entity.height * game.scaleY * game.zoom) / 2 +
                colliderRectangleOffset.top * entity.height * game.scaleY * game.zoom +
                (entity.height / 2) * game.zoom * game.scaleY;
              var hitboxWidth =
                entity.width *
                game.scaleX *
                game.zoom *
                (1 - colliderRectangleOffset.right - colliderRectangleOffset.left);
              var hitboxHeight =
                entity.height *
                game.scaleY *
                game.zoom *
                (1 - colliderRectangleOffset.top - colliderRectangleOffset.bottom);
              // Draw the hitbox
              game.dynamicContext.lineWidth = 2;
              game.dynamicContext.strokeStyle = "red"; // black outline for hitbox
              game.dynamicContext.strokeRect(
                hitboxLeft,
                hitboxTop,
                hitboxWidth,
                hitboxHeight
              );
            };
            var drawScytheHitbox = function (entity, attackHitbox, isMe) {
              if (isMe === void 0) {
                isMe = false;
              }
              if (
                typeof game === "undefined" ||
                typeof entity === "undefined" ||
                !game.me ||
                !entity.position ||
                !game.me.position
              ) {
                return;
              }
              var pos = game.getRenderPosition(entity.position.x, entity.position.y);
              // invert Y
              var hitboxWidth = attackHitbox.width * game.zoom * game.scaleX;
              var hitboxHeight = attackHitbox.height * game.zoom * game.scaleY;
              var entityWidth = entity.width * game.zoom * game.scaleX;
              var entityHeight = entity.height * game.zoom * game.scaleY;
              var centerPos = {
                y: pos.y - entityHeight / 2,
                x: pos.x + entityWidth / 2,
              };
              var leftRight = centerPos.x + attackHitbox.left * game.zoom * game.scaleX;
              var leftLeft =
                centerPos.x - (attackHitbox.left * game.zoom * game.scaleX + hitboxWidth);
              var left = entity.direction > 0 ? leftRight : leftLeft;
              // again for rendering flipped y
              var top = centerPos.y - attackHitbox.top * game.zoom * game.scaleY;
              game.dynamicContext.lineWidth = 2;
              game.dynamicContext.strokeStyle = "red";
              if (isMe) {
                // both sides
                game.dynamicContext.strokeRect(leftLeft, top, hitboxWidth, hitboxHeight);
                game.dynamicContext.strokeRect(leftRight, top, hitboxWidth, hitboxHeight);
              } else {
                // Draw the hitbox rectangle outline
                game.dynamicContext.strokeRect(left, top, hitboxWidth, hitboxHeight);
              }
              // // Define the width and height of the rectangles
              // let rectWidth = 80; // Change this to your desired width
              // let rectHeight = 80; // Change this to your desired height
              // Draw the rectangle at the center position
              // game.dynamicContext.strokeRect(
              //   centerPos.x - rectWidth / 2,
              //   centerPos.y - rectHeight / 2,
              //   rectWidth,
              //   rectHeight
              // );
            };
            var checkScytheAttacks = function (playerCollider, attackHitbox) {
              if (typeof game === "undefined" || !game.me || !game.me.position) {
                return;
              }
              var pos = game.getRenderPosition(game.me.position.x, game.me.position.y);
              // invert Y
              var hitboxWidth = attackHitbox.width * game.zoom * game.scaleX;
              var hitboxHeight = attackHitbox.height * game.zoom * game.scaleY;
              var myWidth = game.me.width * game.zoom * game.scaleX;
              var myHeight = game.me.height * game.zoom * game.scaleY;
              var centerPos = {
                y: pos.y - myHeight / 2,
                x: pos.x + myWidth / 2,
              };
              var leftRight = centerPos.x + attackHitbox.left * game.zoom * game.scaleX;
              var leftLeft =
                centerPos.x - (attackHitbox.left * game.zoom * game.scaleX + hitboxWidth);
              // again for rendering flipped y
              var top = centerPos.y - attackHitbox.top * game.zoom * game.scaleY;
              // calculate if in radius
              // do full recalculation - check if i can hit it
              // during checking take into account other entities from the set
              // if those entities dead or far away or just not needed - remove
              var leftAttackHT = {
                top: top,
                left: leftLeft,
                right: leftLeft + hitboxWidth,
                bottom: top + hitboxHeight, // because rendered coords using flipped
              };
              var rightAttackHT = {
                top: top,
                left: leftRight,
                right: leftRight + hitboxWidth,
                bottom: top + hitboxHeight, // because rendered coords using flipped
              };
              // console.log("converted: ", rightAttackHT, leftAttackHT);
              var canHitLeft = doesRectsOverlap(leftAttackHT, playerCollider);
              var canHitRight = doesRectsOverlap(rightAttackHT, playerCollider);
              // if (canHitLeft || canHitRight) {
              //   console.log("collides attack");
              // }
              if (canHitLeft){ // если ты атакуешь влево, то мы зажимаем пробел
                // pressEnter();
                skillUse();
                game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
                game.dynamicContext.fillRect(leftLeft, top, hitboxWidth, hitboxHeight);
                if (document.getElementById('hack_text_1')){
                  document.getElementById('hack_text_1').remove();
                }
                console.log("collides attack");
              }
              else if (canHitRight){ // тоже самое, только вправа
                // pressEnter();
                skillUse();
                game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
                game.dynamicContext.fillRect(leftRight, top, hitboxWidth, hitboxHeight);
                if (document.getElementById('hack_text_1')){
                  document.getElementById('hack_text_1').remove();
                }
                console.log("collides attack");
              }
              else{ // если мы никого не атакуем, но фиксируем смерть с косой, то будем выдавать текст, что смерть с косой рядом, (да, будет лагать, но всем насрать, так-как лаги незначительные + в хаке есть fps bypass)
                if (isGrimReaperDetect){
                  let label = document.createElement("div");
                  label.id = 'hack_text_1'
                  label.textContent = 'GRIM REAPER NEAR!';
                  label.style.position = "fixed";
                  label.style.top = "10%";
                  label.style.left = "18%";
                  label.style.fontSize = '40px';
                  label.style.fontFamily = "Sans Serif";
                  label.style.color = 'red';
                  label.style.zIndex = 9999;
                  document.body.appendChild(label);
                }
              }

              setInterval(() => {
                if (document.getElementById('hack_text_1')){
                  document.getElementById('hack_text_1').remove();
                }
              }, 250);
              game.dynamicContext.lineWidth = 2;
              game.dynamicContext.strokeStyle = "red";
              // Fill the rectangles if they can be hit
              // if (canHitLeft) { // это твои вторые условия. Я их оптимизировал
              //   game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
              //   game.dynamicContext.fillRect(leftLeft, top, hitboxWidth, hitboxHeight);
              // }
              // if (canHitRight) {
              //   game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
              //   game.dynamicContext.fillRect(leftRight, top, hitboxWidth, hitboxHeight);
              // }
              return { canHitLeft: canHitLeft, canHitRight: canHitRight };
            };
            var processEntity = function (entity) {
              if (
                typeof game === "undefined" ||
                typeof entity === "undefined" ||
                !entity.position
              ) {
                return false;
              }
              var isMe = entity == game.me;
              var pos = game.getRenderPosition(entity.position.x, entity.position.y);
              var scaler = {
                x: game.zoom * game.scaleX,
                y: game.zoom * game.scaleY,
              };
              // Calculate the hitbox dimensions
              var hitboxLeft =
                pos.x -
                (entity.width * scaler.x) / 2 +
                entity.colliderRectangleOffset.left * entity.width * scaler.x +
                (entity.width / 2) * scaler.x;
              var hitboxTop =
                pos.y -
                entity.height * scaler.y -
                (entity.height * scaler.y) / 2 +
                entity.colliderRectangleOffset.top * entity.height * scaler.y +
                (entity.height / 2) * scaler.y;
              var hitboxWidth =
                entity.width *
                scaler.x *
                (1 -
                  entity.colliderRectangleOffset.right -
                  entity.colliderRectangleOffset.left);
              var hitboxHeight =
                entity.height *
                scaler.y *
                (1 -
                  entity.colliderRectangleOffset.top -
                  entity.colliderRectangleOffset.bottom);
              var playerCollider = {
                top: hitboxTop,
                left: hitboxLeft,
                right: hitboxLeft + hitboxWidth,
                bottom: hitboxTop + hitboxHeight, // because rendered coords using flipped
              };
              var attackHitbox;
              switch (entity.name) {
                case "ghostlyReaper":
                  attackHitbox = window.attackHitboxesFIX.ghostlyReaperScythe;
                  break;
                case "pumpkinGhost":
                  attackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
                  break;
                case "grimReaper":
                  attackHitbox = window.attackHitboxesFIX.grimReaperScythe;
                  break;
              }
              if (attackHitbox && isMe) {
                window.imReaper = true;
              }
              // if (!attackHitbox && isMe) {
              //   // this draws the kill hitbox even if not reaper
              //   attackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
              // }
              if (attackHitbox) {
                if (isMe) {
                  window.myAttackHitbox = attackHitbox;
                }
                if (attackHitbox) {
                  drawScytheHitbox(entity, attackHitbox, isMe);
                }
                // if (isPlayerInRadius(entity, 500)) {
                // calculate if in radius
                // do full recalculation - check if i can hit it
                // during checking take into account other entities from the set
                // if those entities dead or far away or just not needed - remove
                // console.log("checking: ", playerCollider, window.myAttackHitbox);
                if (!isMe) {
                  var _a = checkScytheAttacks(playerCollider, window.myAttackHitbox),
                    canHitLeft = _a.canHitLeft,
                    canHitRight = _a.canHitRight;
                  var reward = 0;
                  if (entity.type == objectType.FOOD && game.me.hp < 100) {
                    // if im not full hp - food 1 point
                    reward = 1;
                  } else if (
                    entity.name == "ghostlyReaper" ||
                    entity.name == "pumpkinGhost" ||
                    entity.name == "grimReaper"
                  ) {
                    // scythe - 50 point
                    reward = 50;
                    if (entity.hp < 25) {
                      // 100 if lower than 25 hp
                      // because can one hit
                      reward = 100;
                    }
                  } else if (entity.type == objectType.PLAYER) {
                    // player - 2 point
                    reward = 2;
                    if (entity.hp < 25) {
                      // 4 if lower than 25 hp
                      // because can one hit
                      reward = 4;
                    }
                  }
                  if (canHitLeft) {
                    leftReward += reward;
                  }
                  if (canHitRight) {
                    rightReward += reward;
                  }
                }
              }
              // }
              // Draw the hitbox
              game.dynamicContext.lineWidth = 2;
              game.dynamicContext.strokeStyle = "red"; // red outline for hitbox better, @AlvaroBoy!!
              game.dynamicContext.strokeRect(
                hitboxLeft,
                hitboxTop,
                hitboxWidth,
                hitboxHeight
              );
            };
            var drawCollisionwithCTX = function (entity) {
              if (
                typeof game === "undefined" ||
                typeof entity === "undefined" ||
                !entity.position
              ) {
                return false;
              }
              var isMe = entity == game.me;
              var attackHitbox;
              if (!isMe) {
                switch (entity.name) {
                  case "ghostlyReaper":
                    attackHitbox = window.attackHitboxesFIX.ghostlyReaperScythe;
                    break;
                  case "pumpkinGhost":
                    attackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
                    break;
                  case "grimReaper":
                    attackHitbox = window.attackHitboxesFIX.grimReaperScythe;
                    break;
                }
              }
              var pos = game.getRenderPosition(entity.position.x, entity.position.y);
              var scaler = {
                x: game.zoom * game.scaleX,
                y: game.zoom * game.scaleY,
              };
              // Calculate the hitbox dimensions
              var hitboxLeft =
                pos.x -
                (entity.width * scaler.x) / 2 +
                entity.colliderRectangleOffset.left * entity.width * scaler.x +
                (entity.width / 2) * scaler.x;
              var hitboxTop =
                pos.y -
                entity.height * scaler.y -
                (entity.height * scaler.y) / 2 +
                entity.colliderRectangleOffset.top * entity.height * scaler.y +
                (entity.height / 2) * scaler.y;
              var hitboxWidth =
                entity.width *
                scaler.x *
                (1 -
                  entity.colliderRectangleOffset.right -
                  entity.colliderRectangleOffset.left);
              var hitboxHeight =
                entity.height *
                scaler.y *
                (1 -
                  entity.colliderRectangleOffset.top -
                  entity.colliderRectangleOffset.bottom);
              // Draw the hitbox
              ctx3.lineWidth = 2;
              ctx3.strokeStyle = "red"; // red outline for hitbox
              ctx3.strokeRect(hitboxLeft, hitboxTop, hitboxWidth, hitboxHeight);
            };
            function isInBox(pos, box) {
              if (
                pos.x >= box.left &&
                pos.x <= box.left + box.width &&
                pos.y >= box.top &&
                pos.y <= box.top - box.height
              ) {
                return true;
              } else {
                return false;
              }
            }
            function rectToAllSides(rect) {
              return {
                left: rect.left,
                top: rect.top,
                bottom: rect.top - rect.height,
                right: rect.left + rect.width,
              };
            }
            window.attackScythe = function () {
              // if i have no delay:
              //! fix the delay part - game.me.skillCooldown < 40
              //! ABSOLUTELY BROKEN
              // if (!window.imReaper) return;
              // if (leftReward > 0 || rightReward > 0) {
              //   let oldDirection = game.me.flySide;
              //   let direction: -1 | 1;
              //   if (leftReward > rightReward) {
              //     direction = -1;
              //   } else {
              //     direction = 1;
              //   }
              //   // change directions
              //   let wasntSame = game.me.flySide != direction;
              //   if (wasntSame) {
              //     game.me.flySide = direction;
              //     gameServer.emit(socketMsgType.FLY, direction);
              //   }
              //   // simulate the hit
              //   window.skillUse();
              //   if (wasntSame) {
              //     game.me.flySide = oldDirection;
              //     gameServer.emit(socketMsgType.FLY, oldDirection);
              //   }
              // } else {
              //   //window.skillStop();
              // }
            };
            function doesRectsOverlap(rect1, rect2) {
              //! bottom and top are flipped because these rects are in Canvas website mode
              //! where y increases downward
              // if rectangle has area 0, no overlap
              if (
                rect1.left == rect1.right ||
                rect1.top == rect1.bottom ||
                rect1.left == rect1.right ||
                rect2.top == rect2.bottom
              )
                return false;
              // If one rectangle is on left side of other
              if (rect1.left >= rect2.right || rect2.left >= rect1.right) {
                return false;
              }
              // If one rectangle is above other
              if (rect1.top >= rect2.bottom || rect2.top >= rect1.bottom) {
                return false;
              }
              return true;
            }
            setInterval(function () {
              if (typeof game === "undefined" || typeof gameServer === "undefined") {
                return;
              }
              if (
                !wasSocketInit ||
                !joinedGame ||
                !game.me ||
                !gameZoom ||
                !game.me.width
              ) {
                return;
              }
              if (!alreadySet && !imDead) {
                var originaldrawFunc_1 = window.draw;
                window.draw = function () {
                  // this is the draw func
                  // do the checking here
                  window.attackScythe();
                  // reset rewards
                  leftReward = 0;
                  rightReward = 0;
                  originaldrawFunc_1.apply(this);
                };
                var originaldrawObject_1 = game.drawObject;
                game.drawObject = function (entity, boolSomething) {
                  if (toggleHack && entity.position) {
                    if (
                      (entity.type == objectType.PLAYER ||
                        (entity.type == objectType.FOOD && entity.hasSoul) ||
                        entity.type == objectType.BOSS) &&
                      // not in hide
                      !entity.inHide
                    ) {
                      // console.log(entity.name, entity);
                      processEntity(entity);
                    }
                  }
                  originaldrawObject_1.apply(this, [entity, boolSomething]);
                };
                alreadySet = true;
              }
              // Clear the canvas
              ctx3 === null || ctx3 === void 0
                ? void 0
                : ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
              if (!toggleHack) {
                return;
              }
              // update canvas size
              canvas3.width = window.innerWidth;
              canvas3.height = window.innerHeight;
              // Calculate the center of the canvas
              // drawBoxAroundMe(500);
              var name = game.me.name;
              name = "pumpkinGhost";
              // To iterate over the Map only if im reaper
              if (
                name == "ghostlyReaper" ||
                name == "pumpkinGhost" ||
                name == "grimReaper"
              ) {
                var myAttackHitbox = void 0;
                switch (name) {
                  case "ghostlyReaper":
                    myAttackHitbox = window.attackHitboxesFIX.ghostlyReaperScythe;
                    break;
                  case "pumpkinGhost":
                    myAttackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
                    break;
                  case "grimReaper":
                    myAttackHitbox = window.attackHitboxesFIX.grimReaperScythe;
                    break;
                }
                var canKillLeft = false;
                var maxRewardLeft = 0;
                var canKillRight = false;
                var maxRewardRight = 0;
                // killMap.forEach(function (entity, id) {
                //   if (!isPlayerInRadius(entity, 400)) {
                //     killMap.delete(id);
                //   } else {
                //     console.log(entity.name);
                //     drawCollisionwithCTX(entity);
                //     // check for stuff
                //     let result = checkAttacks(entity, myAttackHitbox);
                //     console.log(result);
                //     if (result && result.collides)
                //       result.direction > 1 ? (canKillRight = true) : (canKillLeft = true);
                //   }
                // });
                // draw my hitbox now
                // drawAttackHitbox(myAttackHitbox, canKillLeft, canKillRight);
              }
            }, 12);`
            navigator.clipboard.writeText(copy_text_code).then(() => {
                c_alert("copied to clipboard!", 'All Right :)');
            }).catch(err => {
                c_alert(`Failed to copy text: ${err}`, 'Ok');
            });
        }
    });

    option40.addEventListener('click', () => {
        let copy_t = `
let isGrimReaperDetect = true;

// это секция оптимизации, мы просто из-за последующих действий будем убивать fps, а нам надо его держать стабильным
setInterval(()=>{
  game.fpsTimes.length = 360;
}, 15);

// А это шляпа с нажатием клавишь (не на всех браузерах работает)
function pressEnter() {
  const event = new KeyboardEvent('keydown', {
    key: 'e',
    code: 'e',
    keyCode: 69,
    which: 69,
    bubbles: true
  });
  document.dispatchEvent(event);
  console.log('Space pressed');
}

// А это с отжатием
function releaseEnter() {
  const event = new KeyboardEvent('keyup', {
    key: 'e',
    code: 'e',
    keyCode: 69,
    which: 69,
    bubbles: true
  });
  document.dispatchEvent(event);
  console.log('Space released');
}

// function pressEnter() { // эта хуйня не работает
//   const event = new KeyboardEvent('keydown', {
//       key: 'Space',
//       code: 'Space',
//       keyCode: 32,
//       which: 32,
//       bubbles: true
//   });
//   document.dispatchEvent(event);
//   console.log('Space pressed');
// }

"use strict";
window.imReaper = false;
window.attackHitboxesOLD = {
  ghostlyReaperScythe: {
    topLeftX: -75,
    topLeftY: -16.5,
    bottomRightX: -32,
    bottomRightY: 82,
  },
  pumpkinGhostScythe: {
    topLeftX: -105,
    topLeftY: -68,
    bottomRightX: -43,
    bottomRightY: 82,
  },
  grimReaperScythe: {
    topLeftX: -94,
    topLeftY: -63,
    bottomRightX: -42,
    bottomRightY: 78,
  },
};
window.attackHitboxesFIX = {
  ghostlyReaperScythe: {
    left: 32,
    top: 16.5,
    width: 43,
    height: 98.5,
  },
  pumpkinGhostScythe: {
    left: 43,
    top: 68,
    width: 62,
    height: 150,
  },
  grimReaperScythe: {
    left: 42,
    top: 63,
    width: 52,
    height: 141,
  },
};
window.myAttackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
var toggleHack = true;
// Variable to hold the state of 'e' key
var isEKeyPressed = false;
// Add an event listener for keydown
document.addEventListener("keydown", function (event) {
  if (event.key === "e" || event.key === "E") {
    isEKeyPressed = true;
  }
});
// Add an event listener for keyup
document.addEventListener("keyup", function (event) {
  if (event.key === "e" || event.key === "E") {
    isEKeyPressed = false;
  }
  if (event.key === "h" || event.key === "H") {
    toggleHack = !toggleHack;
  }
});

document.addEventListener('keydown', (key) => {
  if (key.key == 'l' || key.key == 'д'){
    if (isGrimReaperDetect == false){
      isGrimReaperDetect = true
    } else {
      isGrimReaperDetect = false;
    }
  }
});

// Create a new canvas with the variable name "canvas3"
var canvas3 = document.createElement("canvas");
document.body.appendChild(canvas3);
// Set canvas size
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;
// Get the 2D rendering context
var ctx3 = canvas3.getContext("2d");
// Position the new canvas on top of the game's canvas
canvas3.style.position = "absolute";
canvas3.style.top = "0";
canvas3.style.left = "0";
canvas3.style.zIndex = "100"; // Adjust the z-index to make sure it's on top
canvas3.style.pointerEvents = "none"; // This line allows mouse events to pass through the new canvas
var alreadySet = false;
var leftReward = 0;
var rightReward = 0;
function isPlayerInRadius(player, boxSize) {
  if (
    typeof game === "undefined" ||
    typeof player === "undefined" ||
    !game.me ||
    imDead ||
    !player.position ||
    !game.me.position
  ) {
    return false;
  }
  // Calculate the box boundaries
  var leftBoundary = game.me.position.x - boxSize / 2;
  var rightBoundary = game.me.position.x + boxSize / 2;
  var topBoundary = game.me.position.y - boxSize / 2;
  var bottomBoundary = game.me.position.y + boxSize / 2;
  // Check if the player's position is within the box
  if (
    player.position.x >= leftBoundary &&
    player.position.x <= rightBoundary &&
    player.position.y >= topBoundary &&
    player.position.y <= bottomBoundary
  ) {
    return true;
  } else {
    return false;
  }
}
function checkAttacks(entity, attackHitbox) {
  if (
    typeof game === "undefined" ||
    typeof entity === "undefined" ||
    !game.me ||
    imDead ||
    !entity.position ||
    !game.me.position
  ) {
    return false;
  }
  // decide which direction the entity is
  var isInRight = game.me.position.x > entity.position.x;
  // calculate the position accordingly
  var left = isInRight
    ? game.me.position.x + attackHitbox.left
    : game.me.position.x - (attackHitbox.left + attackHitbox.width);
  var myScytheHitbox = {
    left: left,
    top: game.me.position.y + attackHitbox.top,
    width: attackHitbox.width,
    height: attackHitbox.height,
  };
  // let playerCollisionHitbox: RectAllSides = {
  //   left: centerPos.x - entity.colliderRectangleOffset.left * entity.width,
  //   right: centerPos.x + entity.colliderRectangleOffset.right * entity.width,
  //   top: centerPos.y + entity.colliderRectangleOffset.top * entity.height,
  //   bottom:
  //     centerPos.y - entity.colliderRectangleOffset.bottom * entity.height,
  // };
  return {
    // collides: doesRectsOverlap(
    //   rectToAllSides(myScytheHitbox),
    //   playerCollisionHitbox
    // ),
    collides: isInBox(entity.position, myScytheHitbox),
    direction: isInRight ? 1 : -1,
  };
}
function drawBoxAroundMe(firstBoxSize) {
  if (typeof game === "undefined" || !game.me) {
    // If game or game.me is undefined, do not proceed
    return;
  }
  // Calculate the center of the canvas
  var centerX = canvas3.width / 2;
  var centerY = canvas3.height / 2;
  var boxSize = firstBoxSize * game.zoom;
  // Calculate the box boundaries
  var leftBoundary = centerX - boxSize / 2;
  var topBoundary = centerY - boxSize / 2;
  // Draw the box
  if (ctx3) {
    ctx3.beginPath();
    ctx3.rect(leftBoundary, topBoundary, boxSize, boxSize);
    document.body.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Space'}));
    ctx3.lineWidth = 1;
    ctx3.strokeStyle = "green"; // Change the color as needed
    ctx3.stroke();
  }
}
function drawAttackHitbox(attackHitbox, canKillLeft, canKillRight) {
  if (!toggleHack) {
    return;
  }
  // function pressSpaceKey() {
  //   // Создание события keydown
  //   let keyDownEvent = new KeyboardEvent('keydown', {
  //       key: ' ',
  //       code: 'Enter',
  //       keyCode: 13,
  //       charCode: 13,
  //       which: 13,
  //       bubbles: true,
  //       cancelable: true,
  //   });

  //   // Создание события keyup
  //   let keyUpEvent = new KeyboardEvent('keyup', {
  //       key: ' ',
  //       code: 'Enter',
  //       keyCode: 13,
  //       charCode: 13,
  //       which: 13,
  //       bubbles: true,
  //       cancelable: true,
  //   });

  //   // Фокус на элементе body (или на другом элементе, если нужно)
  //   document.getElementById('canvasGame').focus();

  //   // Отправка события keydown
  //   document.getElementById('canvasGame').dispatchEvent(keyDownEvent);

  //   // Задержка между нажатиями
  //   setTimeout(() => {
  //       document.body.dispatchEvent(keyUpEvent);
  //   }, 100);
  // }
  var hitboxWidth = attackHitbox.width * game.zoom;
  var hitboxHeight = attackHitbox.height * game.zoom;
  var screenCenterPos = {
    x: canvas3.width / 2,
    y: canvas3.height / 2,
  };
  var left = screenCenterPos.x + attackHitbox.left;
  var leftOppositeDirection =
    screenCenterPos.x - (attackHitbox.left + attackHitbox.width);
  // when drawing y=0 - is top so flipped from + to - change
  var top = screenCenterPos.y - attackHitbox.top;
  console.log(screenCenterPos, attackHitbox);
  // const condition = canKillLeft || canKillRight;

  // setInterval(() => {
  //   if (condition) {
  //     pressEnter();
  //   }
  // }, 10);
}

// const drawScytheHitboxOLD = function (
//   x,
//   y,
//   height,
//   width,
//   attackHitbox,
//   direction
// ) {
//   const pos = game.getRenderPosition(x, y);
//   // Calculate the width and height of the hitbox based on the top left and bottom right positions
//   let hitboxWidth =
//     (attackHitbox.bottomRightX - attackHitbox.topLeftX) *
//     direction *
//     game.zoom;
//   let hitboxHeight =
//     (attackHitbox.bottomRightY - attackHitbox.topLeftY) * game.zoom;
//   // Calculate the top left position of the hitbox relative to the player's center
//   let hitboxTopLeftX =
//     pos.x +
//     (width * game.scaleX * game.zoom) / 2 +
//     attackHitbox.topLeftX * direction * game.zoom;
//   let hitboxTopLeftY =
//     pos.y -
//     (height * game.scaleY * game.zoom) / 2 +
//     attackHitbox.topLeftY * game.zoom;
//   // Set the hitbox color
//   game.dynamicContext.lineWidth = 2;
//   game.dynamicContext.strokeStyle = "red";
//   // Draw the hitbox rectangle outline
//   game.dynamicContext.strokeRect(
//     hitboxTopLeftX,
//     hitboxTopLeftY,
//     hitboxWidth,
//     hitboxHeight
//   );
// };
var drawHitboxrfff = function (entity, attackHitbox) {
  if (
    typeof game === "undefined" ||
    typeof entity === "undefined" ||
    imDead ||
    !entity.position
  ) {
    return false;
  }
  var colliderRectangleOffset = entity.colliderRectangleOffset;
  var pos = game.getRenderPosition(entity.position.x, entity.position.y);
  var left =
    (entity.direction > 0
      ? pos.x + attackHitbox.left
      : pos.x - (attackHitbox.left + attackHitbox.width)) *
    game.zoom *
    game.scaleX;
  // Calculate the hitbox dimensions
  var hitboxLeft =
    pos.x -
    (entity.width * game.scaleX * game.zoom) / 2 +
    (entity.width / 2) * game.zoom * game.scaleX;
  var hitboxTop =
    pos.y -
    entity.height * game.scaleY * game.zoom -
    (entity.height * game.scaleY * game.zoom) / 2 +
    colliderRectangleOffset.top * entity.height * game.scaleY * game.zoom +
    (entity.height / 2) * game.zoom * game.scaleY;
  var hitboxWidth =
    entity.width *
    game.scaleX *
    game.zoom *
    (1 - colliderRectangleOffset.right - colliderRectangleOffset.left);
  var hitboxHeight =
    entity.height *
    game.scaleY *
    game.zoom *
    (1 - colliderRectangleOffset.top - colliderRectangleOffset.bottom);
  // Draw the hitbox
  game.dynamicContext.lineWidth = 2;
  game.dynamicContext.strokeStyle = "red"; // black outline for hitbox
  game.dynamicContext.strokeRect(
    hitboxLeft,
    hitboxTop,
    hitboxWidth,
    hitboxHeight
  );
};
var drawScytheHitbox = function (entity, attackHitbox, isMe) {
  if (isMe === void 0) {
    isMe = false;
  }
  if (
    typeof game === "undefined" ||
    typeof entity === "undefined" ||
    !game.me ||
    !entity.position ||
    !game.me.position
  ) {
    return;
  }
  var pos = game.getRenderPosition(entity.position.x, entity.position.y);
  // invert Y
  var hitboxWidth = attackHitbox.width * game.zoom * game.scaleX;
  var hitboxHeight = attackHitbox.height * game.zoom * game.scaleY;
  var entityWidth = entity.width * game.zoom * game.scaleX;
  var entityHeight = entity.height * game.zoom * game.scaleY;
  var centerPos = {
    y: pos.y - entityHeight / 2,
    x: pos.x + entityWidth / 2,
  };
  var leftRight = centerPos.x + attackHitbox.left * game.zoom * game.scaleX;
  var leftLeft =
    centerPos.x - (attackHitbox.left * game.zoom * game.scaleX + hitboxWidth);
  var left = entity.direction > 0 ? leftRight : leftLeft;
  // again for rendering flipped y
  var top = centerPos.y - attackHitbox.top * game.zoom * game.scaleY;
  game.dynamicContext.lineWidth = 2;
  game.dynamicContext.strokeStyle = "red";
  if (isMe) {
    // both sides
    game.dynamicContext.strokeRect(leftLeft, top, hitboxWidth, hitboxHeight);
    game.dynamicContext.strokeRect(leftRight, top, hitboxWidth, hitboxHeight);
  } else {
    // Draw the hitbox rectangle outline
    game.dynamicContext.strokeRect(left, top, hitboxWidth, hitboxHeight);
  }
  // // Define the width and height of the rectangles
  // let rectWidth = 80; // Change this to your desired width
  // let rectHeight = 80; // Change this to your desired height
  // Draw the rectangle at the center position
  // game.dynamicContext.strokeRect(
  //   centerPos.x - rectWidth / 2,
  //   centerPos.y - rectHeight / 2,
  //   rectWidth,
  //   rectHeight
  // );
};
var checkScytheAttacks = function (playerCollider, attackHitbox) {
  if (typeof game === "undefined" || !game.me || !game.me.position) {
    return;
  }
  var pos = game.getRenderPosition(game.me.position.x, game.me.position.y);
  // invert Y
  var hitboxWidth = attackHitbox.width * game.zoom * game.scaleX;
  var hitboxHeight = attackHitbox.height * game.zoom * game.scaleY;
  var myWidth = game.me.width * game.zoom * game.scaleX;
  var myHeight = game.me.height * game.zoom * game.scaleY;
  var centerPos = {
    y: pos.y - myHeight / 2,
    x: pos.x + myWidth / 2,
  };
  var leftRight = centerPos.x + attackHitbox.left * game.zoom * game.scaleX;
  var leftLeft =
    centerPos.x - (attackHitbox.left * game.zoom * game.scaleX + hitboxWidth);
  // again for rendering flipped y
  var top = centerPos.y - attackHitbox.top * game.zoom * game.scaleY;
  // calculate if in radius
  // do full recalculation - check if i can hit it
  // during checking take into account other entities from the set
  // if those entities dead or far away or just not needed - remove
  var leftAttackHT = {
    top: top,
    left: leftLeft,
    right: leftLeft + hitboxWidth,
    bottom: top + hitboxHeight, // because rendered coords using flipped
  };
  var rightAttackHT = {
    top: top,
    left: leftRight,
    right: leftRight + hitboxWidth,
    bottom: top + hitboxHeight, // because rendered coords using flipped
  };
  // console.log("converted: ", rightAttackHT, leftAttackHT);
  var canHitLeft = doesRectsOverlap(leftAttackHT, playerCollider);
  var canHitRight = doesRectsOverlap(rightAttackHT, playerCollider);
  // if (canHitLeft || canHitRight) {
  //   console.log("collides attack");
  // }
  if (canHitLeft){ // если ты атакуешь влево, то мы зажимаем пробел
    // pressEnter();
    game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
    game.dynamicContext.fillRect(leftLeft, top, hitboxWidth, hitboxHeight);
    if (document.getElementById('hack_text_1')){
      document.getElementById('hack_text_1').remove();
    }
    console.log("collides attack");
  }
  else if (canHitRight){ // тоже самое, только вправа
    // pressEnter();
    game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
    game.dynamicContext.fillRect(leftRight, top, hitboxWidth, hitboxHeight);
    if (document.getElementById('hack_text_1')){
      document.getElementById('hack_text_1').remove();
    }
    console.log("collides attack");
  }
  else{ // если мы никого не атакуем, но фиксируем смерть с косой, то будем выдавать текст, что смерть с косой рядом, (да, будет лагать, но всем насрать, так-как лаги незначительные + в хаке есть fps bypass)
  }
  game.dynamicContext.lineWidth = 2;
  game.dynamicContext.strokeStyle = "red";
  // Fill the rectangles if they can be hit
  // if (canHitLeft) { // это твои вторые условия. Я их оптимизировал
  //   game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
  //   game.dynamicContext.fillRect(leftLeft, top, hitboxWidth, hitboxHeight);
  // }
  // if (canHitRight) {
  //   game.dynamicContext.fillStyle = "rgba(255, 0, 0, 0.5)";
  //   game.dynamicContext.fillRect(leftRight, top, hitboxWidth, hitboxHeight);
  // }
  return { canHitLeft: canHitLeft, canHitRight: canHitRight };
};
var processEntity = function (entity) {
  if (
    typeof game === "undefined" ||
    typeof entity === "undefined" ||
    !entity.position
  ) {
    return false;
  }
  var isMe = entity == game.me;
  var pos = game.getRenderPosition(entity.position.x, entity.position.y);
  var scaler = {
    x: game.zoom * game.scaleX,
    y: game.zoom * game.scaleY,
  };
  // Calculate the hitbox dimensions
  var hitboxLeft =
    pos.x -
    (entity.width * scaler.x) / 2 +
    entity.colliderRectangleOffset.left * entity.width * scaler.x +
    (entity.width / 2) * scaler.x;
  var hitboxTop =
    pos.y -
    entity.height * scaler.y -
    (entity.height * scaler.y) / 2 +
    entity.colliderRectangleOffset.top * entity.height * scaler.y +
    (entity.height / 2) * scaler.y;
  var hitboxWidth =
    entity.width *
    scaler.x *
    (1 -
      entity.colliderRectangleOffset.right -
      entity.colliderRectangleOffset.left);
  var hitboxHeight =
    entity.height *
    scaler.y *
    (1 -
      entity.colliderRectangleOffset.top -
      entity.colliderRectangleOffset.bottom);
  var playerCollider = {
    top: hitboxTop,
    left: hitboxLeft,
    right: hitboxLeft + hitboxWidth,
    bottom: hitboxTop + hitboxHeight, // because rendered coords using flipped
  };
  var attackHitbox;
  switch (entity.name) {
    case "ghostlyReaper":
      attackHitbox = window.attackHitboxesFIX.ghostlyReaperScythe;
      break;
    case "pumpkinGhost":
      attackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
      break;
    case "grimReaper":
      attackHitbox = window.attackHitboxesFIX.grimReaperScythe;
      break;
  }
  if (attackHitbox && isMe) {
    window.imReaper = true;
  }
  // if (!attackHitbox && isMe) {
  //   // this draws the kill hitbox even if not reaper
  //   attackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
  // }
  if (attackHitbox) {
    if (isMe) {
      window.myAttackHitbox = attackHitbox;
    }
    if (attackHitbox) {
      drawScytheHitbox(entity, attackHitbox, isMe);
    }
    // if (isPlayerInRadius(entity, 500)) {
    // calculate if in radius
    // do full recalculation - check if i can hit it
    // during checking take into account other entities from the set
    // if those entities dead or far away or just not needed - remove
    // console.log("checking: ", playerCollider, window.myAttackHitbox);
    if (!isMe) {
      var _a = checkScytheAttacks(playerCollider, window.myAttackHitbox),
        canHitLeft = _a.canHitLeft,
        canHitRight = _a.canHitRight;
      var reward = 0;
      if (entity.type == objectType.FOOD && game.me.hp < 100) {
        // if im not full hp - food 1 point
        reward = 1;
      } else if (
        entity.name == "ghostlyReaper" ||
        entity.name == "pumpkinGhost" ||
        entity.name == "grimReaper"
      ) {
        // scythe - 50 point
        reward = 50;
        if (entity.hp < 25) {
          // 100 if lower than 25 hp
          // because can one hit
          reward = 100;
        }
      } else if (entity.type == objectType.PLAYER) {
        // player - 2 point
        reward = 2;
        if (entity.hp < 25) {
          // 4 if lower than 25 hp
          // because can one hit
          reward = 4;
        }
      }
      if (canHitLeft) {
        leftReward += reward;
      }
      if (canHitRight) {
        rightReward += reward;
      }
    }
  }
  // }
  // Draw the hitbox
  game.dynamicContext.lineWidth = 2;
  game.dynamicContext.strokeStyle = "red"; // red outline for hitbox better, @AlvaroBoy!!
  game.dynamicContext.strokeRect(
    hitboxLeft,
    hitboxTop,
    hitboxWidth,
    hitboxHeight
  );
};
var drawCollisionwithCTX = function (entity) {
  if (
    typeof game === "undefined" ||
    typeof entity === "undefined" ||
    !entity.position
  ) {
    return false;
  }
  var isMe = entity == game.me;
  var attackHitbox;
  if (!isMe) {
    switch (entity.name) {
      case "ghostlyReaper":
        attackHitbox = window.attackHitboxesFIX.ghostlyReaperScythe;
        break;
      case "pumpkinGhost":
        attackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
        break;
      case "grimReaper":
        attackHitbox = window.attackHitboxesFIX.grimReaperScythe;
        break;
    }
  }
  var pos = game.getRenderPosition(entity.position.x, entity.position.y);
  var scaler = {
    x: game.zoom * game.scaleX,
    y: game.zoom * game.scaleY,
  };
  // Calculate the hitbox dimensions
  var hitboxLeft =
    pos.x -
    (entity.width * scaler.x) / 2 +
    entity.colliderRectangleOffset.left * entity.width * scaler.x +
    (entity.width / 2) * scaler.x;
  var hitboxTop =
    pos.y -
    entity.height * scaler.y -
    (entity.height * scaler.y) / 2 +
    entity.colliderRectangleOffset.top * entity.height * scaler.y +
    (entity.height / 2) * scaler.y;
  var hitboxWidth =
    entity.width *
    scaler.x *
    (1 -
      entity.colliderRectangleOffset.right -
      entity.colliderRectangleOffset.left);
  var hitboxHeight =
    entity.height *
    scaler.y *
    (1 -
      entity.colliderRectangleOffset.top -
      entity.colliderRectangleOffset.bottom);
  // Draw the hitbox
  ctx3.lineWidth = 2;
  ctx3.strokeStyle = "red"; // red outline for hitbox
  ctx3.strokeRect(hitboxLeft, hitboxTop, hitboxWidth, hitboxHeight);
};
function isInBox(pos, box) {
  if (
    pos.x >= box.left &&
    pos.x <= box.left + box.width &&
    pos.y >= box.top &&
    pos.y <= box.top - box.height
  ) {
    return true;
  } else {
    return false;
  }
}
function rectToAllSides(rect) {
  return {
    left: rect.left,
    top: rect.top,
    bottom: rect.top - rect.height,
    right: rect.left + rect.width,
  };
}
window.attackScythe = function () {
  // if i have no delay:
  //! fix the delay part - game.me.skillCooldown < 40
  //! ABSOLUTELY BROKEN
  // if (!window.imReaper) return;
  // if (leftReward > 0 || rightReward > 0) {
  //   let oldDirection = game.me.flySide;
  //   let direction: -1 | 1;
  //   if (leftReward > rightReward) {
  //     direction = -1;
  //   } else {
  //     direction = 1;
  //   }
  //   // change directions
  //   let wasntSame = game.me.flySide != direction;
  //   if (wasntSame) {
  //     game.me.flySide = direction;
  //     gameServer.emit(socketMsgType.FLY, direction);
  //   }
  //   // simulate the hit
  //   window.skillUse();
  //   if (wasntSame) {
  //     game.me.flySide = oldDirection;
  //     gameServer.emit(socketMsgType.FLY, oldDirection);
  //   }
  // } else {
  //   //window.skillStop();
  // }
};
function doesRectsOverlap(rect1, rect2) {
  //! bottom and top are flipped because these rects are in Canvas website mode
  //! where y increases downward
  // if rectangle has area 0, no overlap
  if (
    rect1.left == rect1.right ||
    rect1.top == rect1.bottom ||
    rect1.left == rect1.right ||
    rect2.top == rect2.bottom
  )
    return false;
  // If one rectangle is on left side of other
  if (rect1.left >= rect2.right || rect2.left >= rect1.right) {
    return false;
  }
  // If one rectangle is above other
  if (rect1.top >= rect2.bottom || rect2.top >= rect1.bottom) {
    return false;
  }
  return true;
}
setInterval(function () {
  if (typeof game === "undefined" || typeof gameServer === "undefined") {
    return;
  }
  if (
    !wasSocketInit ||
    !joinedGame ||
    !game.me ||
    !gameZoom ||
    !game.me.width
  ) {
    return;
  }
  if (!alreadySet && !imDead) {
    var originaldrawFunc_1 = window.draw;
    window.draw = function () {
      // this is the draw func
      // do the checking here
      window.attackScythe();
      // reset rewards
      leftReward = 0;
      rightReward = 0;
      originaldrawFunc_1.apply(this);
    };
    var originaldrawObject_1 = game.drawObject;
    game.drawObject = function (entity, boolSomething) {
      if (toggleHack && entity.position) {
        if (
          (entity.type == objectType.PLAYER ||
            (entity.type == objectType.FOOD && entity.hasSoul) ||
            entity.type == objectType.BOSS) &&
          // not in hide
          !entity.inHide
        ) {
          // console.log(entity.name, entity);
          processEntity(entity);
        }
      }
      originaldrawObject_1.apply(this, [entity, boolSomething]);
    };
    alreadySet = true;
  }
  // Clear the canvas
  ctx3 === null || ctx3 === void 0
    ? void 0
    : ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  if (!toggleHack) {
    return;
  }
  // update canvas size
  canvas3.width = window.innerWidth;
  canvas3.height = window.innerHeight;
  // Calculate the center of the canvas
  // drawBoxAroundMe(500);
  var name = game.me.name;
  name = "pumpkinGhost";
  // To iterate over the Map only if im reaper
  if (
    name == "ghostlyReaper" ||
    name == "pumpkinGhost" ||
    name == "grimReaper"
  ) {
    var myAttackHitbox = void 0;
    switch (name) {
      case "ghostlyReaper":
        myAttackHitbox = window.attackHitboxesFIX.ghostlyReaperScythe;
        break;
      case "pumpkinGhost":
        myAttackHitbox = window.attackHitboxesFIX.pumpkinGhostScythe;
        break;
      case "grimReaper":
        myAttackHitbox = window.attackHitboxesFIX.grimReaperScythe;
        break;
    }
    var canKillLeft = false;
    var maxRewardLeft = 0;
    var canKillRight = false;
    var maxRewardRight = 0;
    // killMap.forEach(function (entity, id) {
    //   if (!isPlayerInRadius(entity, 400)) {
    //     killMap.delete(id);
    //   } else {
    //     console.log(entity.name);
    //     drawCollisionwithCTX(entity);
    //     // check for stuff
    //     let result = checkAttacks(entity, myAttackHitbox);
    //     console.log(result);
    //     if (result && result.collides)
    //       result.direction > 1 ? (canKillRight = true) : (canKillLeft = true);
    //   }
    // });
    // draw my hitbox now
    // drawAttackHitbox(myAttackHitbox, canKillLeft, canKillRight);
  }
}, 12);
        `;
        navigator.clipboard.writeText(copy_t).then(() => {
          c_alert("copied to clipboard!", 'All Right :)');
      }).catch(err => {
          c_alert(`Failed to copy text: ${err}`, 'Ok');
      });
    });

    option44.addEventListener("click", () => {
        if (able_to_click_hack){

        }
    });

    author_anothers_hacks.addEventListener("click", () => {
        if (able_to_click_hack){
            window.open("https://greasyfork.org/ru/users/1087245-chyppitaucoder");
        }
    });
}

main(); // Вызов main() только один раз после удаления

