import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./images/Eu.png' className="App-logo" alt="Eu" />
        <Container>
          <Card>
            <Card.Body>
              <div>
                <label className="Titulo">Dados Pessoais:</label>
                <span className="Dados">Leticia Moreno Oshiro</span>
                <span className="Dados">19</span>
              </div>
              <div>
                <label className="Titulo">
                  Formação:
                </label>
                <span className="Dados">Ensino Médio Completo</span>
              </div>
              <div>
                <label className="Titulo">
                  Experiência:
                </label>
                <span className="Dados">Atendimento</span>
                <span className="Dados">Manutenção</span>
                <span className="Dados">Montagem de peças</span>
                <span className="Dados">Camps</span>
              </div>
              <div>
                <label className="Titulo">
                  Projetos:
                </label>
                <a href="http://lalalalalalalalalalalalalalalalalala.com" target="_blank" className="Dados">Github</a>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </header>
    </div>
  );
}

export default App;
