import React,  { Component } from 'react';
import logoMarvel from '../assets/images/marvelLogo.jpg';
import thorImage from '../assets/images/thorImage.png';
import Overlay from 'react-bootstrap/Overlay'

import './Quiz.css';


class Quiz extends Component {
  constructor(...args){
    super(...args)

    this.attachRef = target => this.setState({ target });
    this.state={
      contador: 0,
      show: false
    }
  }

  toIncreaseContador =() =>{
    this.setState({
      contador: this.state.contador +1,
    });
  }


  toDecrementContador = () =>{
    this.setState({
      contador: this.state.contador -1,
    })
  }

  toClearContador = () => {
    this.setState({
      contador: 0,
    })
  }

  render() {
    return (
      <div className="mainQuiz">
          <header>
            <img className="logoQuiz" src={logoMarvel} alt="Logo quiz Marvel"/>
            <h1>Quiz</h1>
            <p>Sua pontuação é:</p>
            <p>{this.state.contador}</p>

            {/* ÁREA DE GERAÇÃO DAS IMAGENS DO QUIZ */}
            <section>
              <img src={thorImage} alt="Foto THOR"/>
            </section>

            {/* INPUT DE INSERÇÃO DA RESPOSTA */}
            <section>
              <div>
                <input type="text" placeholder="Digite sua resposta"/>
              </div>

              {/* BOTOES DE RESPOSTA AJUDA E DESISTENCIA */}
              <div>
                <button id="answerButton" onClick={this.toIncreaseContador}>Responder</button>
              </div>
              
              <div id="helpButtons">
                <input type="submit" value="Mostrar resposta" onClick={this.toClearContador}/>
                <input type="submit" value="Dica" onClick={this.toDecrementContador}/>
              </div>
            </section>
          </header>
      </div>
    )
  }
}

export default Quiz;
