import React from 'react';

class InfoComponent extends React.Component{
    render(){
        return(
            <div className="info-form">
                <form onSubmit="0">
                    <div>
                        <label>▶ 나이</label>
                        <input value="0" />
                    </div>
                    <div>
                        <label>▶ 신장</label>
                        <input value="0" />
                    </div>
                    <div>
                        <label>▶ 체중</label>
                        <input value="0" />
                    </div>
                    <div>
                        <button className='btn' type='submit'>결과보기</button>
                    </div>
                </form>
            </div>
        );
        
    }
}

export default InfoComponent;