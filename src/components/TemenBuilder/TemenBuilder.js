import React, {Component} from 'react'
import Form from '../Testing form/Form'
class TemenBuilder extends Component {

    state = {
        vegetable: {
            vegName:'',
            marketPlace:'',
            upperPrice:0,
            lowerPrice:0
        },
        Fruit:{
            fruitName:'',
            marketPlace:'',
            upperPrice:0,
            lowerPrice:0
        },
        Meat:{
            upperPrice:0,
            lowerPrice:0
        },
        Spices:{
            spicesName:'',
            marketPlace:'',
            upperPrice:0,
            lowerPrice:0
        },
        Cereals:{
            cerealName:'',
            marketPlace:'',
            upperPrice:0,
            lowerPrice:0
        }
    }

    render() {
        return (
            <Form/>
        )
    }

}

export default TemenBuilder