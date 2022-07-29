import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddTask extends Component {
    state = {
        desc: '',
    }
    render(){
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: "2rem"
            }}>
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    width: '50%'}}
                >
                <input 
                    type='text'
                    style={{
                        flexGrow: '1',
                    }}
                    onChange ={(e) => this.setState({desc: e.target.value})}
                />
                <img
                    style={{
                        width: '30px',
                    }}
                    src={'/assets/iconfinder_add_134224.png'}
                    alt = 'add'
                    onClick = {() => {this.props.handleAdd({
                        id: Date.now(),
                        description: this.state.desc,
                        done: false,
                    })
                    }}
                />
                </div>
            </div>
        )
    }
}

AddTask.propTypes = {
    handleAdd: PropTypes.func,
}

export default AddTask