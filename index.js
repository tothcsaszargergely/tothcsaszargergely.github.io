console.log('Mukodik')

fb.ref("postok").once('value').then(data => {
data.forEach(element => {
    $('.doboznagy').append(`
    <div class="doboz">
        <h1>${element.child('title').val()}</h1>
        <h2>${element.child('time').val()}</h2>
        <p>${element.child('content').val()}</p>
    </div>
    `);
});
});

$('button').on('click', (event) => {
    event.preventDefault();
    let title = $('#title').val()
    console.log (title);
    let time = $('#time').val()
    console.log (time);
    let content = $('#content').val()
    console.log (content);


    if (title === ""|| time === ""|| content === "") {     
        }
    else {
            $('.doboznagy').append(
                `
                <div class="doboz">
                <h2>${title}</h2>
                <h3>${time}</h3>
                <p>${content}</p>
                </div>
                `
            );
            let dataToSave = { title: title, time: time, content: content};
            fb.ref("postok").push(dataToSave);
            $('input').val("");  
            }    
    });