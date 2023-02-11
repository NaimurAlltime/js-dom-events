// onclick function 
function onClickFunction(){
    const changeText = document.getElementById('subTile');
    changeText.innerText = "On click function working successfully!";
    changeText.style.color = 'dodgerBlue';
}


document.getElementById('AddEventListener').addEventListener('click', function(){
    const changeTextEvent = document.getElementById('subTile');
    changeTextEvent.innerText = "Add Event Listener working fine!";
    changeTextEvent.style.color = 'seaGreen';
    changeTextEvent.style.fontSize = '2rem';
})

// advance 
document.getElementById('update-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const textDisplay = document.getElementById('text-display');
    textDisplay.innerText = inputText;

    inputField.value = '';
})