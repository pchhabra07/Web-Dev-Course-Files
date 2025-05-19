$('body')
    .append(
        $('<input>')
        .attr('placeholder','Enter your input')
        .addClass('input-box')
    )
    .append(
        $('<button>Add Movie</button>')
        .click(()=>{
            const li=$('<li></li>')
            const span=$('<span></span>').text($('.input-box').val())
            li.append(span)

            .append(
                $('<button>edit</button>')
                .click(()=>{
                    const editInputBox=$('<input>').val(span.text())
                })
            )
        })
    )