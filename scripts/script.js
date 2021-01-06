// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

console.log("hallo..javascript?")

function myFunction() {
    var x = document.getElementById("myLinks");
    console.log("ik werk");

        if (x.style.display === "block")
        {
            x.style.display = "none";
        } else {
            x.style.display = "block"; console.log("werk jij else?");
        }
    console.log("ik werk ook");
}

