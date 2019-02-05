import React,{Component} from 'react';
import Header from '../../components/Header/header.js';
import {connect} from 'react-redux';
import {loadProfile} from '../../Actions/login.js'
import Profilesection from '../../components/profile-section/profile-section.js';
class Profile extends Component {
    componentDidMount(){
       var localstorageId =  localStorage.getItem('id')
       if(localstorageId && !this.props.user._id){
            this.props.loadProfile(localstorageId)
       }
    }
    render(){
        console.log('props',this.props.user)
        return(
            <div>
                <Header />
                <Profilesection user = {this.props.user}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return (
        {
            user: state.user,
            // LoadProfile: state.reloadProfile
        }
    )
}
const mapDispatchToProps = {
    loadProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);