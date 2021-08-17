console.log('hello there')

function insertTriggerButton() {
    let triggerButton = document.createElement("button")
    triggerButton.innerText = "Run the pipeline"
    triggerButton.style.background="green"
    triggerButton.style.position="fixed"
    triggerButton.style.borderRadius="50px"
    triggerButton.style.borderColor="#23272C"
    triggerButton.style.zIndex="#23272C"
    triggerButton.style.marginTop="50px"
    triggerButton.setAttribute("id", "trigger")
    document.getElementsByClassName("gh-header-actions")[0]?.appendChild(triggerButton)
}

function addEventListenerToTriggerButton() {
    let commentButton = document.evaluate('//*[@id="partial-new-comment-form-actions"]/div/div[2]/button', 
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    document.getElementById("trigger").addEventListener("click", function() {
        document.getElementById("new_comment_field").value="retest this please"; // type retest this please in the comment box
        commentButton.disabled=null; // enable the comment button
        commentButton.click(); // click the comment button
    })

    console.log('added evetn listener')
}

function insertButtonAndTriggerPipeline() {
    insertTriggerButton()
    addEventListenerToTriggerButton()
}

insertButtonAndTriggerPipeline()

// relevent errors
// Autofocus processing was blocked because a document already has a focused element.
