import * as React from 'react'

interface State {
    contador: number
}

export default class BotaoContador extends React.Component<any, State> {
    constructor(p: any) {
        super(p)
        this.state = {
            contador: 0
        }
    }

    // aumentar = () => {
    //     this.setState(prevState => ({
    //         contador: prevState.contador + 1,
    //     }))
    // }

    aumentar = () => {
        this.setState(prevState => ({
            contador: prevState.contador + 1,
        }))
    }

    render() {
        return (
            <div>
                <label>Meu contador atual é {this.state.contador}</label>
                <button onClick={this.aumentar}>Aumentar</button>
            </div>
        )
    }
}