import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
const Profilesection = (props) => {
    console.log('propss', props);
    return (
        <div className="bg-color">
            <Container>
                <Row>
                    <Col xs="4">
                        <i className="fa fa-user-o circle profile"></i>
                    </Col>
                    <Col xs="8">
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        <strong>{props.user.username}</strong>
                                    </li>
                                    <li className="edit-btn">
                                        <Link to ="/"><strong>Edit Profile</strong></Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-cog fa-spin font-40"></i>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        <strong>"n"</strong>posts
                                    </li>
                                    <li>
                                        <strong>"n"</strong>followers
                                    </li>
                                    <li>
                                        <strong>"n"</strong>following
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <ul>
                                    <li>
                                        <strong>{props.user.username}</strong>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Profilesection;