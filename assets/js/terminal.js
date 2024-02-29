const input = document.getElementById('input');
const fakeScreen = document.querySelector('.fakeScreen');
const output = document.querySelector('.output');

document.addEventListener("DOMContentLoaded", function () {

    Swal.fire({
        title: "<strong>URL-SHORTENER</strong>",
        html: `
            <b>Check out! Latest project</b>
            <a href="https://url-shortener-zq7h.onrender.com/login">https://url-shortener-zq7h.onrender.com/</a>
        `,
        backdrop: `
            rgba(0,0,123,0.4)
            left top
            no-repeat
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        timer: 3000
    });
});

document.getElementById("input").setAttribute("autocomplete", "off");

let commandIndex = 0;
const commandHistory = [];

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        const command = input.value.trim();
        commandHistory.push(command);
        executeCommand(command);
        input.value = '';
        commandIndex = 0;
    } else if (event.keyCode === 38) { // Up arrow
        if (commandIndex < commandHistory.length) {
            input.value = commandHistory[commandHistory.length - 1 - commandIndex];
            commandIndex++;
        }
    } else if (event.keyCode === 40) { // Down arrow
        if (commandIndex > 0) {
            input.value = commandHistory[commandHistory.length - 1 - commandIndex];
            commandIndex--;
        } else {
            input.value = '';
        }
    }
});

function executeCommand(command) {
    if (commands.hasOwnProperty(command)) {
        commands[command]();
    } else {
        commands["default"]();
    }
}

const commands = {
    "home": () => {
        output.innerHTML += '<div class="show-commands"></div>';
        simulateTyping('Loading Home page');
        scrollToSection('#home');
    },
    "about": () => {
        output.innerHTML += '<div class="show-commands"></div>';
        simulateTyping('Loading About page ');
        scrollToSection('#about');
    },
    "projects": () => {
        output.innerHTML += '<div class="show-commands"></div>';
        simulateTyping('Loading Project page');
        scrollToSection('#portfolio');
    },
    "contact": () => {
        output.innerHTML += '<div class="show-commands"></div>';
        simulateTyping('Loading Contact page ');
        scrollToSection('#contact');
    },
    "skills": () => {
        output.innerHTML += '<div class="show-commands"></div>';
        simulateTyping('Loading Skills page');
        scrollToSection('#skills');
    },
    "clear": () => {
        output.innerHTML = '';
    },
    "help": () => {
        output.innerHTML += `
            <div class="show-commands">Available Commands:
                <ul class="commands">
                    <li>'about': Navigates to the about page</li>
                    <li>'projects': Navigates to the projects page</li>
                    <li>'skills': Navigates to the skills page</li>
                    <li>'contact': Navigates to the contact page</li>
                    <li>'home': Navigates to the home page</li>
                    <li>'clear': Clears the screen</li>
                    <li>'help': Displays available commands</li>
                    
                </ul>
            </div>`;

    },

    "default": () => {
        output.innerHTML += '<div class="show-commands">Invalid command. Type "help" for available commands.</div>';
    }
};

function scrollToSection(sectionId) {
    setTimeout(function () {
        var scrollPos = $(sectionId).offset().top;
        $(window).scrollTop(scrollPos);
    }, 1000);
}

function simulateTyping(message) {
    const chars = message.split('');
    let i = 0;
    const interval = setInterval(function () {
        if (i < chars.length) {
            output.innerHTML += chars[i];
            i++;
        } else {
            clearInterval(interval);
        }
    }, 50);
}
const clearOutput = () => {
    output.innerHTML = ''; 
};

const intervalID = setInterval(clearOutput, 50000);
