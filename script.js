const insert = document.getElementById('insert')

// Adds eventlistener on keyboard keydown for any button pressed
window.addEventListener('keydown', (e) => {
    setTimeout(() => {
        insert.innerHTML = `
        <h1>Get Your keyCode On</h1>
            <div class="key">
                ${e.key === " " ? 'Space' : e.key}
                <small>event.key</small>
            </div>

            <div class="key">
                ${e.keyCode}
                <small>event.keyCode</small>
            </div>

            <div class="key">
                ${e.code}
                <small>event.code</small>
            </div>`
    }, 100)    
})