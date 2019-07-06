import React, { Component } from 'react';
import About from '../components/Section/About/About';
import Title from '../components/Section/Title/Title';
import Skills from '../components/Section/Skills/Skills';
import Degrees from '../components/Section/Degrees/Degrees';
import ToolBar from '../components/NavBar/ToolBar/ToolBar';
import SideDrawer from '../components/NavBar/SideDrawer/SideDrawer';
import data from '../Data/Data.json';

import './Layout.css';
class Layout extends Component {
    state = {
        color: '#000',
        showSD: false

    }
    sdCloseHandler = () => {
        this.setState({ showSD: false });
    }
    sdToggleHandler = () => {
        this.setState((prevState) => {
            return { showSD: !prevState.showSD };
        }
        );
    }
    ChangeColorHandler = () => {

        let i = Math.floor(Math.random() * 8)
        this.setState({ color: data.theme.color[i] })
    }

    render() {
        return (
            <div className='Layout'>
                <ToolBar
                    chsngeColor={this.ChangeColorHandler}
                    color={this.state.color}
                    drawerToggleclicked={this.sdToggleHandler} />
                <SideDrawer
                    open={this.state.showSD}
                    closed={this.sdCloseHandler} />
                <Title color={this.state.color} />
                <About color={this.state.color} />
                <Degrees color={this.state.color} />
                <Skills color={this.state.color} />
            </div>
        )
    }
}

export default Layout;