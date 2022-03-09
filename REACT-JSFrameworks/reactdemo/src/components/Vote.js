import React, { Component, createContext } from "react";
import styles from './Vote.module.css';

export default class Vote extends Component{
    render(){
        return(
            <div className={styles.card}>
                <h1>{this.props.candidate}</h1>
                <h4>{this.props.address}</h4>
                <h2>4</h2>
            </div>
        )
    }
}