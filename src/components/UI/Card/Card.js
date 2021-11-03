import './Card.css'

const Card = props =>{
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    
                        <div className="card">
                            <h4 className="card-title mt-3">
                                Todo List
                            </h4>
                            <div className="card-body">
                                {props.children}
                            </div>
                        </div>
                    
            
                </div>
            </div>
        </div>
    );
}
export default Card;