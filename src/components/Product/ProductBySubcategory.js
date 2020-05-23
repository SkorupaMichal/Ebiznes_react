import React, {Component} from "react";
import {getProductsBySubCategoryId} from "../../Api/Products";
import ActiveLastBreadcrumb from "../ActiveLastBreadcrumb";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import '../Category/Categories.css'
import Button from "@material-ui/core/Button";
import {inject, observer} from "mobx-react";
import history from "../../history";

class ProductsBySubcategory extends Component {
    constructor() {
        super();
        this.state = {
            prodsubcat: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getProductsBySubCategoryId(params.id).then(dane => {
            console.log(dane)
            this.setState({prodsubcat: dane})
        })

    }

    render() {
        return (
            <div>
                <div className="breadcumb">
                    <ActiveLastBreadcrumb alldata={[{name: "Home"}, {name: "Kategorie"}]}/>
                </div>
                <h1>Produkty: </h1>
                <div className="categories">
                    {this.state.prodsubcat.map(prod => {
                        return (
                            <div className='product'>
                                <Card key={prod.id}  className="root">
                                    <CardActionArea onClick={()=>history.push(`/product/${prod.id}`)}>
                                        <CardContent key={prod.id}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {prod.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {prod.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Button onClick={()=>{this.props.basket.addProductToBasket(prod)}}>Add to cart</Button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default inject(stores => ({
    basket: stores.basketStore
}))(observer(ProductsBySubcategory))