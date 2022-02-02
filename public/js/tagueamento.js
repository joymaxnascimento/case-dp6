onload = function () {

    //Visualizações da página    
    ga('send', 'pageview')

    const defineEvento = function (eventCategory, eventAction, eventLabel) {
        return {
            hitType: 'event',
            eventCategory,
            eventAction,
            eventLabel
        }
    }

    //Eventos - Todas as páginas 
    let menuEntreContato = document.getElementsByClassName('menu-lista-link menu-lista-contato')
    let menuDownload = document.getElementsByClassName('menu-lista-link menu-lista-download')

    menuEntreContato[0].addEventListener('click', function () {

        let evento = defineEvento('menu', 'entre_em_contato', 'link_externo')

        ga('send', evento)
    })

    menuDownload[0].addEventListener('click', function () {

        let evento = defineEvento('menu', 'download_pdf', 'download_pdf')

        ga('send', evento)
    })

    //Eventos - Página - Análise
    let analise = document.querySelectorAll('.card.card-montadoras')

    for (let i = 0; i < analise.length; i++) {

        analise[i].addEventListener('click', function () {

            let evento = defineEvento('analise', 'ver_mais', analise[i].dataset.name)

            ga('send', evento)
        })
    }

    //Eventos - Página - Sobre
    let formContato = document.querySelector('form')

    if (formContato != null) {

        for (let i = 0; i < formContato.querySelectorAll('input').length; i++) {

            let input = formContato.querySelectorAll('input')
            input[i].addEventListener('change', function () {
                let evento = defineEvento('contato', 'preencheu', input[i].id)
                ga('send', evento)

            })
        }

        formContato.onsubmit = function (e) {

            let evento = defineEvento('contato', 'enviado', 'enviado')

            ga('send', evento)
        }

    }

}