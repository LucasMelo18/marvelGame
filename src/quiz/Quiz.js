import React,  { Component } from 'react';
import logoMarvel from '../assets/images/marvelLogo.jpg';
import thorImage from '../assets/images/thorImage.png';

import './Quiz.css';


class Quiz extends Component {

  render() {
    return (
      <div className="mainQuiz">
          <header>
            <img className="logoQuiz" src={logoMarvel} alt="Logo quiz Marvel"/>
            <h1>Quiz</h1>
            <p>Sua pontuação é:</p>
            <p>0</p>

            {/* ÁREA DE GERAÇÃO DAS IMAGENS DO QUIZ */}
            <section>
              <img src={thorImage} alt="Foto THOR"/>
            </section>

            {/* INPUT DE INSERÇÃO DA RESPOSTA */}
            <form>
              <div>
                <input type="text" placeholder="Digite sua resposta"/>
              </div>

              {/* BOTOES DE RESPOSTA AJUDA E DESISTENCIA */}
              <div>
                <input id="answerButton" type="submit" value="Responder" />
              </div>
              
              <div id="helpButtons">
                <input type="submit" value="Mostrar resposta" />
                <input type="submit" value="Dica" />
              </div>
            </form>
          </header>
      </div>
    )
  }
}

export default Quiz;
