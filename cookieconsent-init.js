// obtain plugin
var cc = initCookieConsent();
let lastGIF = '';
let lasterGIF = '';
let lastererGIF = '';
let lasterererGIF = '';
let lastererererGIF = '';

//list cookies
function listCookies() {
    let chocolateChips = document.cookie.split(';');
    let s = '';
    for (let i = 1; i <= chocolateChips.length; i++) {
        s += i + ': ' + chocolateChips[i-1] + "\n\n";
    }
    document.getElementById("cookieHeader").innerHTML = "Here is information about your cookies:"
    document.getElementById("cookieList").innerHTML = s;
    document.getElementById("cookieInfo").style.visibility = "visible";
}

function hideCookies() {
    document.getElementById("cookieInfo").style.visibility = "hidden";
}

function setCookieBackground() {
    let bg = getCookie("backgroundCookie");
    document.body.style.backgroundImage = "'" + bg + "'";
}

function randomGIF() {
    let gifs = ['https://static.designboom.com/wp-content/uploads/2016/09/gif-designboom-500.gif',
                'https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif',
                'https://www.gifcen.com/wp-content/uploads/2021/06/meme-gif-1.gif',
                'https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2020/11/16001935/TFM-WIN20-TMenzel-Spider-Man-Reaction.gif',
                'https://media.wired.com/photos/593253f052d99d6b984ddb9d/master/w_1600%2Cc_limit/mexican-soccer-coach-super-saiyan.gif',
                'https://www.essence.com/wp-content/uploads/2016/12/1481579907/IMG_7700.GIF',
                'https://i.kym-cdn.com/photos/images/newsfeed/000/813/217/c1b.gif',
                'https://i.kym-cdn.com/photos/images/original/001/268/278/b8c.gif',
                'https://media.tenor.com/7HUogy7rXs4AAAAC/feel-me-think-about-it.gif',
                'https://media.tenor.com/ranWHb9fQvQAAAAM/meme-let-me-in.gif',
                'https://hookagency.com/wp-content/uploads/2016/03/when-boss-clients-setting-unrealistic-goals-expectations.gif',
                'https://media.tenor.com/gTcTYGzF9T4AAAAC/wee-woo-patrick-star.gif'];           
    let randomNumber = Math.floor(Math.random() * gifs.length);
    if(lastGIF == randomNumber || lasterGIF == randomNumber || lastererGIF == randomNumber || 
        lasterererGIF == randomNumber || lastererererGIF == randomNumber)
    {
        randomGIF();
    }
    else {
        lastererererGIF = lasterererGIF;
        lasterererGIF = lastererGIF;
        lastererGIF = lasterGIF;
        lasterGIF = lastGIF;
        lastGIF = randomNumber;
        let bgImg = 'url(' + gifs[randomNumber] + ')';           
        document.body.style.backgroundImage = bgImg;
        setCookie("backgroundCookie", document.body.style.backgroundImage = gifs[randomNumber], 180);
    }

}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: false,                   // default: false
    page_scripts: false,                        // default: false

    mode: 'opt-in',                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    delay: 0,                               // default: 0
    auto_language: null,                     // default: null; could also be 'browser' or 'document'
    autorun: true,                          // default: true
    force_consent: true,                   // default: false
    hide_from_bots: false,                  // default: false
    remove_cookie_tables: false,             // default: false
    cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    cookie_expiration: 182,                 // default: 182 (days)
    cookie_necessary_only_expiration: 182,   // default: disabled
    cookie_domain: location.hostname,       // default: current domain
    cookie_path: '/',                       // default: root
    cookie_same_site: 'Lax',                // default: 'Lax'
    use_rfc_cookie: true,                  // default: false
    revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                    }
                ]
            }
        }
    }
});