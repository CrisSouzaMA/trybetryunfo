import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="newcard">
        <h1>Adiciona uma carta</h1>
        <form>
          <div>
          <label htmlFor="name-input">
            Nome da carta:
            <input
              type="text"
              name="cardName"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          </div>
          <div>
          <label htmlFor="description-input">
            Descrição da carta:
            <input
              type="textarea"
              name="cardDescription"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          </div>
          <div>
          <label htmlFor="attr1-input">
            Attributo 1:
            <input
              type="number"
              name="cardAttr1"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              min="0"
              max="90"
            />
          </label>
          </div>
          <div>
          <label htmlFor="attr2-input">
            Attributo 2:
            <input
              type="number"
              name="cardAttr2"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              min="0"
              max="90"
            />
          </label>
          </div>
          <div>
          <label htmlFor="attr3-input">
            Attributo 3:
            <input
              type="number"
              name="cardAttr3"
              id="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              min="0"
              max="90"
            />
          </label>
          </div>
          <div>
          <label htmlFor="image-input">
            Imagem da carta:
            <input
              type="textarea"
              name="cardImage"
              id="image-input"
              alt="carta"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          </div>
          <div>
          <label htmlFor="rare-input">
            Raridade
            <select
              id="rare-input"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          </div>
          <div>
          <label htmlFor="trunfo-input">
            É o Super Trunfo?
            { hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span> : <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            /> }
          </label>
          </div>
          <button
            id="butt"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
