console.log('hello there')

window.onload = function() {

    let but = document.createElement("button")
    but.innerText = "Retrigger"
    but.style.background="green"
    but.setAttribute("id", "trigger")
    document.getElementsByClassName("gh-header-actions")[0].appendChild(but)

    console.log('done ----');

    document.getElementById("trigger").addEventListener("click", function() {
        console.log("triggered ---, wuhooo");
        document.getElementById("new_comment_field").innerText="retest this please"
        document.getElementsByClassName("color-bg-secondary ml-1")[0].disabled = null;
        document.getElementsByClassName("color-bg-secondary ml-1")[0].click();

    })
}
