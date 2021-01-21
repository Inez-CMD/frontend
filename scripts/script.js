// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

console.log("hallo..javascript?")
// met console log check ik of mijn javascript werkt.

function myFunction() {
    var x = document.getElementById("myLinks"); //hiermee selecteer je het element, in dit geval myLinks
    console.log("ik werk");

        if (x.style.display === "block") //als var x wordt weergeven zoals block..
        {
            x.style.display = "none"; // is de display van myLinks none en laat niks zien
        } else {
            x.style.display = "block"; console.log("werk jij else?"); //anders laat je myLinks weergeven als block en de navigatie balk zien, of laat hem weer verdwijnen.
        }
    console.log("ik werk ook");
}

document.getElementById("hamburger").addEventListener("click", myFunction)
// dit zorgt ervoor dat wanneer ik op het element in de html met hamburger als id klik, wordt de javascript geactiveerd.