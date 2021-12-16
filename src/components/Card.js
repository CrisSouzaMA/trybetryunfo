import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      showRemoveButton,
      removeButton,
      verifySuperTrunfo,
    } = this.props;

    return (
      <div className="card">
        <ul>
          <h1>Pŕe Visualização</h1>
          <h1 data-testid="name-card">{ cardName }</h1>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo ? <p data-testid="trunfo-card">`Super Trunfo`</p> : ''
          }
        </ul>
        {
          showRemoveButton && (
            <button
              id={ cardName }
              type="submit"
              onClick={ removeButton }
              onClik={ verifySuperTrunfo }
              data-testid="delete-button"
            >
              Excluir
            </button>)
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  showRemoveButton: PropTypes.bool.isRequired,
  removeButton: PropTypes.func.isRequired,
  verifySuperTrunfo: PropTypes.func.isRequired,
};

export default Card;