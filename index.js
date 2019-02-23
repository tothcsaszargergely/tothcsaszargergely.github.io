console.log('Mukodik')

$('button').on('click', (event) => {
    event.preventDefault();
    let title = $('#title').val()
    console.log (title);
    let time = $('#time').val()
    console.log (time);
    let content = $('#content').val()
    console.log (content);
    let dataToSave = { title: title, time: time, content: content};
    fb.ref("postok").push(dataToSave);

    if (title === ""|| time === ""|| content === "") {     
    }
    else {
        $('.doboznagy').append(
            `
            <div class="doboz">
            <h1>${title}</h1>
            <h2>${time}</h2>
            <p>${content}</p>
            </div>
            `
        );
        $('input').val("");  
        }    
    });