let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];


let sendButton = document.getElementById("sendMsgBtn")
sendButton.onclick = function() {
    let chatContainer = document.getElementById("chatContainer")
    let chatInput = document.getElementById("userInput")
    let msgdiv = document.createElement("div")
    let message = document.createElement("p")
    let chatDiv = document.createElement("div")
    let chatbotMsg = document.createElement("p")
    msgdiv.classList.add("msg-to-chatbot-container")
    message.classList.add("msg-to-chatbot")
    chatDiv.classList.add("msg-from-chatbot-container")
    chatbotMsg.classList.add("msg-from-chatbot")
    chatContainer.appendChild(msgdiv)
    chatContainer.appendChild(chatDiv)
    msgdiv.appendChild(message)
    chatDiv.appendChild(chatbotMsg)
    let inputText = chatInput.value
    message.textContent = inputText
    chatInput.value = ""
    let length = chatbotMsgList.length
    chatbotMsg.textContent = chatbotMsgList[Math.ceil(Math.random() * length)]


}