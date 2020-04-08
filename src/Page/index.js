import React from 'react';
import InputTxt from '../components/InputTxt';
import logoImg from '../assets/Logo Black.png';
import './styles.scss';

export default function Ficha(){
  return(
    <div className="container">
      <div className="topo">
        <div className="boxLeft">
          <div className="container-box">
            <div className="row">
              <InputTxt placeholder="NOME DO PERSONAGEM"/>
              <InputTxt placeholder="JOGADOR"/>
            </div>
            <div className="row">
              <InputTxt placeholder="RAÇA"/>
              <InputTxt placeholder="CLASSE E NÍVEL"/>
              <InputTxt placeholder="TENDÊNCIA"/>
            </div>
            <div className="row">
              <InputTxt placeholder="SEXO"/>
              <InputTxt placeholder="IDADE"/>
              <InputTxt placeholder="DIVINDADE"/>
              <InputTxt placeholder="TAMANHO"/>
              <InputTxt placeholder="DESLOCAMENTO"/>
            </div>
          </div>
        </div>
        <div className="boxRight logo">
          <img src={logoImg} alt="Logo"/>
        </div>
      </div>
      <div className="box-atributos">
        <div className="row">
          <div className="desc">
            <div>
              <p>HABILIDADES</p>
            </div>
            <div>
              <p>VALOR</p>
            </div>
            <div>
              <p>MOD. DE HABILIDADE</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="forca">
            <div>
              <p>
                FOR <br/>
                <span>Força</span>
              </p>
            </div>
            <div classNema="valor">
              <InputTxt />
            </div>
            <div classNema="modHabilidade">
              <InputTxt />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="forca">
            <div>
              <p>
                FOR <br/>
                <span>Força</span>
              </p>
            </div>
            <div classNema="valor">
              <InputTxt />
            </div>
            <div classNema="modHabilidade">
              <InputTxt />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="forca">
            <div>
              <p>
                FOR <br/>
                <span>Força</span>
              </p>
            </div>
            <div classNema="valor">
              <InputTxt />
            </div>
            <div classNema="modHabilidade">
              <InputTxt />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="forca">
            <div>
              <p>
                FOR <br/>
                <span>Força</span>
              </p>
            </div>
            <div classNema="valor">
              <InputTxt />
            </div>
            <div classNema="modHabilidade">
              <InputTxt />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="forca">
            <div>
              <p>
                FOR <br/>
                <span>Força</span>
              </p>
            </div>
            <div classNema="valor">
              <InputTxt />
            </div>
            <div classNema="modHabilidade">
              <InputTxt />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="forca">
            <div>
              <p>
                FOR <br/>
                <span>Força</span>
              </p>
            </div>
            <div classNema="valor">
              <InputTxt />
            </div>
            <div classNema="modHabilidade">
              <InputTxt />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}