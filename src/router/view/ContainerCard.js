import React,{Component} from "react";
import {connect} from "react-redux"
import {Carousel,Card} from "antd";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import './ContainerCard.less';


class ContainerCard extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {

        const itemCard = this.props.card.map((item,index)=>{
            return (
                <Card  key={index} title={item["name"]}>
                    <img src={item["image"]} className="cardImage"/>
                </Card>
                )
        })

        return (
            <div className="cardAll">
            {itemCard}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}


export default connect(mapStateToProps)(ContainerCard)