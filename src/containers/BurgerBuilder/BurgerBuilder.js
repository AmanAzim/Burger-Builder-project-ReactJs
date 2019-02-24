import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'



const INGREDIENT_PRICES={
    salat:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salat:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:2,
    };
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const UpdateCounted=oldCount+1;
        const UpdatedIngredients={...this.state.ingredients};
        UpdatedIngredients[type]=UpdateCounted;

        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;

        this.setState({totalPrice:newPrice, ingredients:UpdatedIngredients});
    };
    removeIngredientHandler=(type)=>{

    };
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdder={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
