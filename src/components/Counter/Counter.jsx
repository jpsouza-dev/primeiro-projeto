import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0, name: "", password: "" }; //´pode se ter mais de 1 estado, mas so o que  voce esta chamando na funcao muda
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1>{this.state.contador}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            Aumentar
          </button>
          <button
            onClick={() => {
              // ! this.state.contador = this.state.contador + 1;
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            Diminuir
          </button>
        </div>
        <form style={{ marginTop: "40px" }}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
