document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
     
var totalCodes = 10; // Total number of code snippets
        for (var i = 1; i <= totalCodes; i++) {
            var textareaId = "code" + i;
            var editor = CodeMirror.fromTextArea(document.getElementById(textareaId), {
                mode: "jsx",
                theme: "dracula",  // Optional theme
                lineNumbers: true,
                keyMap: "sublime" // Optional keymap
            });
        }