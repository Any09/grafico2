import { getCSS, tickConfig } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ["Argélia","Sudão","Egito","Etiópia","Mauritânia"]
    const quantidadeUsuarios = ["44903225","46874204","110990103","123379924","4736139"]
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Linha temporal de africanos vindos para o Brasil ao longo dos anos.',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Período',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Quantidade de pessoas',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }
    const grafico = document.createElement('div')
    grafico.className - 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}

quantidadeUsuarios()