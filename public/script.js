const btn = document.getElementById('btn')
const userInput = document.getElementById('userInput')
const outputText = document.getElementById('outputText')
const AI = document.getElementById('AI')

document.body.style.backgroundColor='black'
document.body.style.color='white'

async function getApiKey() {
    try {
        const response = await fetch("/api/key");
        const data = await response.json();
        return data.apiKey
    } catch (error) {
        console.error("Error fetching API key:", error);
    }
}

let API
( async ()=>{
   API = await getApiKey()  
})()

const fetchAPI = async (prompt) => {
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API
    try {
        const response = await fetch(url,{
            method:'POST',
            headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    const data = await response.json();
    outputText.innerText = data.candidates[0].content.parts[0].text
    } catch (error) {
        console.log(error);
    }
}
btn.addEventListener('click',()=>{
const userPrompt = userInput.value 
if (userPrompt) {
 fetchAPI(userPrompt)
 userInput.value = ""   
}
 else {
    console.log('invalid !');
 }
})  
