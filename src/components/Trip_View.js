import React, { Component } from 'react';
import {  Label } from 'semantic-ui-react'
import {DropdownButton,Dropdown,Form} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';


const regionDisplay = {
    'Mickey Family'         : ['India', 'pp1'],
    'Fuat Family'           : ['Turkey', 'pp2'],
    'Jackie with her Gang'  : ['Miami', 'pp3'],
    'Patrycja with friends' : ['Poznan', 'pp4'],
    'Anna with friends'     : ['Poznan', 'pp5'],
    'Chanchal family'   	: ['India', 'pp6'],
    'Pierre Payet family '  : ['France', 'pp7'],
}

const AwsRegion = ({region, onSelect}) => (
    <Form inline>
        <DropdownButton bsStyle="default" id="aws-region" onSelect={onSelect} title={region}>
            {Object.keys(regionDisplay).map(region => <Dropdown.Item key={region} eventKey={region}> {region} - {regionDisplay[region][0]}  </Dropdown.Item>)}
        </DropdownButton>
    </Form>

);

const ValueRow = ({Series_Num, value, To, Status, onChange}) => (
    <Container>
        <div className="">
            <Label bsClass="col-sm-3 text-left">{Series_Num}</Label>
            <div className="col-sm-3">
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" readonly class="form-control-plaintext" className="form-control text-center" onChange={onChange} value={value} disabled/>
                        </div>
                    </div>
                </form>
            </div>
            <Label bsClass="col-sm-3 text-center">{To}</Label>
            <Label bsClass="col-sm-3 text-center">{Status}</Label>
        </div>
    </Container>
);


const transparentBg = { background: 'transparent'}

class TV extends Component {

    constructor() {
        super()
        this.state = { region: Object.keys(regionDisplay)[0],  postPutRequests: 10, getRequests:100}
    }

    handleDataSize(e) {
        e.preventDefault();
        this.setState({dataSize: e.target.value});
    }

    handlePostRequest(e) {
        e.preventDefault();
        this.setState({postPutRequests: e.target.value});
    }

    handleGetRequest(e) {
        e.preventDefault();
        this.setState({getRequests: e.target.value});
    }

    handleRegion(region, e) {
        this.setState({region: region});
    }



render() {
    return (
            <div className="SHIT">
                <div className="page-header">
                    <h3> Trip Tree's </h3>
                    <h4> <small> TRIP - Mickey </small> </h4>
                </div>

                <AwsRegion region={this.state.region} onSelect={(key, e) => this.handleRegion(key, e)} />

                <div className="jumbotron col-sm-10 col-sm-offset-1" style={transparentBg} >
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <Row>
                                <Col > <Label bsClass="col-sm-3 text-left" >Number </Label> </Col>
                                <Col > <Label bsClass="col-sm-3 text-center" > From </Label> </Col>
                                <Col > <Label bsClass="col-sm-3 text-center"> To  </Label> </Col>
                                <Col > <Label bsClass="col-sm-3 text-center"> Status </Label> </Col>
                            </Row>
                        </div>

                        <div className="panel-body">
                            <ValueRow Series_Num="1" 
                                value={"Wroclaw"} 
                                To={"warsaw"} 
                                Status={"Completed" }
                            />

                            <ValueRow Series_Num="2"  
                                value={"Hell"}
                                To={"Poznan" } 
                                Status={"Completed"}
                            />

                            <ValueRow Series_Num="3" 
                                value={"Gadsank"}
                                To={"Krakow"} 
                                Status={"In Process" }
                            />

                            <ValueRow Series_Num="4" 
                                value={"Wroclaw"}
                                To= "Lublin" 
                                Status={"Planning" }
							/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TV;
