console.log('hello there')

function insertTriggerButton() {
    let but = document.createElement("button")
    but.innerText = "Run the pipeline"
    but.style.background="green"
    but.style.position="fixed"
    but.style.borderRadius="50px"
    but.style.borderColor="#23272C"
    but.style.zIndex="#23272C"
    but.style.marginTop="50px"
    but.setAttribute("id", "trigger")
    document.getElementsByClassName("gh-header-actions")[0].appendChild(but)
    console.log('added button ----');
}

function addEventListenerToTriggerButton() {
    let commentButton = document.evaluate('//*[@id="partial-new-comment-form-actions"]/div/div[2]/button', 
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    document.getElementById("trigger").addEventListener("click", function() {
        console.log("triggered ---, wuhooo");
        document.getElementById("new_comment_field").value="retest this please"; // type retest this please in the comment box
        commentButton.disabled=null; // enable the comment button
        commentButton.click(); // click the comment button
        console.log('submitted--');
    })

    console.log('added evetn listener')
}

function insertButtonAndTriggerPipeline() {
    insertTriggerButton()
    addEventListenerToTriggerButton()
}

insertButtonAndTriggerPipeline()

// Autofocus processing was blocked because a document already has a focused element.
