import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';


const INGREDIENTS_PRICE = {
    salad : 0.6,
    cheese: 0.4,
    meat: 1.4,
    bacon: 0.8
}

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
<<<<<<< HEAD
=======
        },
        totalPrice : 4
    }

    addIngredientHandler = (type) =>  {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
>>>>>>> dev
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
    }
    
    removeIngredientHandler = (type) => {
    
    }

    render () {
        return (
            <Wrapper>
                <Burger ingredients = {this.state.ingredients }/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler} />
            </Wrapper>
        );
    }
}

export default BurgerBuilder;