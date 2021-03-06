import React from "react";
import {getOrderById} from "../../Api/OrderApi";

class Order extends React.Component{
    constructor() {
        super();
        this.state = {
            order: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getOrderById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.date}
                        </div>
                        <div>
                            {d.cost}
                        </div>
                    </div>

                )
            })
            this.setState({order: com})

        }).catch(e => this.setState({order: []}))
    }

    render() {
        return (
            <div>
                {this.state.order}
            </div>
        )
    }
}
export default Order