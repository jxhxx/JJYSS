import React, { useState } from 'react';
import '../App.js'
import '../App.css';
import CalResultComponent from './CalResultComponent';

class InfoComponent extends React.Component{

    render(){
        return(
            <div className="info-form">
                    <form onSubmit="0">
                    <br />
                    <p />
                        <label>▶ 성별 &nbsp;</label>
                        <input type="radio" id="gender" name="gender"
                            value="female" checked="true" onChange="">
                            </input>
                        여성     
                        &nbsp;
                        <input type="radio" id="gender" name="gender"
                            value="male" onChange="">
                             </input>
                        남성
                    <img src="images/turtle.png" alt="" align="right"
                        width="200px" height="200px" />

                    <p />
                        <label>▶ 나이 &nbsp;</label>
                        <input value="0" />
                    <p />
                        <label>▶ 신장 &nbsp;</label>
                        <input value="0" />
                    <p />
                        <label>▶ 체중 &nbsp;</label>
                        <input value="0" />
                    <p />
                        
                </form>
            </div>
        );
        
    }
}

export default InfoComponent;