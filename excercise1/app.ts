/**
 * Created by sigriet on 17/08/2017.
 */
    function greet(elementId: string) {
    let element = document.getElementById(elementId);
        element.innerText = "Hello, stranger";
    }

    greet("welcome-text");


