import React,{Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import {uploadProfilePic} from '../../Actions/login.js';

class Profilesection extends Component {
    render() {
        return (
            <div className="bg-color">
            <Container>
                <Row>
                    <Col xs="4">
                        <label>
                            <input type="file" name="profilePic" onChange={(event)=>{this.props.uploadProfilePic(event, this.props.user._id)}}/>
                            {
                                this.props.user.profilePic ? (
                                    <img src={`http://localhost:9090/${this.props.user.profilePic}`} alt="Profile-Pic" />
                                ): (
                                    <i className="fa fa-user-o circle profile"></i>
                                )
                            }
                        </label>
                    </Col>
                    <Col xs="8">
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        <strong>{this.props.user.username}</strong>
                                    </li>
                                    <li className="edit-btn">
                                        <Link to ="/"><strong>Edit Profile</strong></Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-cog font-40"></i>
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
                                        <strong>{this.props.user.username}</strong>
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
}

// const mapStateToProps = (state) => {
//     user: state.user
// }

const mapDispatchToProps = {
    uploadProfilePic
}

export default connect(null, mapDispatchToProps)(Profilesection);