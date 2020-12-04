import * as React from 'react';
import './SearchBox.css';

let buttonRef = null;
let inputRef = null;

 class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            buttonDisabled: true
        };
        this.onClickButton = this.onClickButton.bind(this);
        
    }
   
    onInputChange(value) {
        this.setState({ text: value });

        if (value.toUpperCase() === 'ANIMAL'||value.toUpperCase() === 'FRUIT') {
            // buttonReft.style.disabled
            if (buttonRef.disabled) {
                this.setState({ buttonDisabled: false });
            }
        } 
    }

    onClickButton() {
        if (this.state.text.toUpperCase() === 'ANIMAL'||this.state.text.toUpperCase() === 'FRUIT') {
            this.props.showImgSlide(this.state.text.toUpperCase());
            this.setState({ buttonDisabled: true });
            this.setState({ text: '' });
            inputRef.value = '';
        }
    }
    
     
    render() {

        return (
            <div className='search-box'>
            <form
                style={{ marginBottom: '1%' }}
            >
            <label className='search-label' htmlFor='search-input'>
                Enter the words
            </label>
            <input
                className='search-input'
                style={{fontSize: '30px'}}
                ref={ref => {
                    inputRef = ref
                }}
                onChange={e => this.onInputChange(
                    e.target.value
                )}
            />
            <button
                style={{fontSize: '30px'}}
                ref={ref => {
                    buttonRef = ref;
                }}
                disabled={this.state.buttonDisabled}
                onClick={this.onClickButton}
            >
                Search
            </button>
            </form>
            {
                this.state.text !== '' 
                ?
                    <span>
                        You must write 'IMAGE' if you want to search
                    </span>
                : null
            }
        </div>
        );
    }
}

export default SearchBox;
