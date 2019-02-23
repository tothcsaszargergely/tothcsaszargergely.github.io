$('button').on('click', (event) => {
    let todo = $('input').val()
    console.log (todo);
    if (todo === "") {     
    }
    else {
        $('ul').append(
            `
            <li>${todo}</li>
            `
          );
          $('input').val("")   
    }
    });
    $('ul').on('click', (event) => {
        console.log (event);
        console.log (event.target);
        $(event.target).css('text-decoration','line-through')
    });