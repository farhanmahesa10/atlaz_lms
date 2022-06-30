import React from 'react'
import * as Icons from '@material-ui/icons'

function GradeCard(props) {
    const { tableOption } = props
    const borderStyle = {
        border: '2px solid #E1E9F3'
    }

    return (
        <>
            {
                tableOption && tableOption?.map((item, index) => {
                    return (
                    <div key={index} className={`col-md-${12/tableOption.length}`}>
                        <div className="d-flex radius-8 bg-neutral-50 py-16 px-24" style={borderStyle}>
                            <div className='d-flex align-items-center justify-content-center w-48 h-48 mr-16 radius-8' style={{ backgroundColor: item.backgroundIcon, color: item.colorIcon }}>
                                {React.createElement(Icons[item.icon])}
                            </div>                   
                            <div className="detail">
                                <div className="name font-sm text-neutral-300">{item.title}</div>
                                <div className="desc font-normal">{item.detail}</div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
}

export default GradeCard