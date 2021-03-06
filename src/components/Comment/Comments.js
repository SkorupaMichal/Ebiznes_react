import React from "react";
import {getComments,deleteComment} from "../../Api/CommentApi";
import Button from "@material-ui/core/Button";
import history from "../../history";

class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
        this.updateHandle = this.updateHandle.bind(this)
        this.deleteHandle = this.deleteHandle.bind(this)
    }
    async deleteHandle(id){
        await deleteComment(id)
        history.go(0)
    }

    updateHandle(id) {
        console.log(id)
        history.push(`/commentupdate/${id}`)
    }

    async componentDidMount() {
        await getComments()
            .then(response => {
                let prod = response.map(p => {
                    return (
                        <div key={p.id}>
                            <div>
                                {p.title}
                            </div>
                            <div>
                                {p.content}
                            </div>
                            <Button onClick={this.updateHandle.bind(this, p.id)}>
                                Update comment
                            </Button>
                            <Button onClick={this.deleteHandle.bind(this,p.id)}>
                                Delete
                            </Button>
                        </div>
                    )
                })
                this.setState({comments: prod})
            })

    }

    render() {

        return (
            <div className="categories">
                {this.state.comments}
            </div>
        )
    }

}

export default Comments