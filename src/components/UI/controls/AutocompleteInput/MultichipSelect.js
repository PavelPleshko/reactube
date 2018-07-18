import React,{Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import  MenuItem  from "@material-ui/core/MenuItem";
import Downshift from "downshift";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";
import keycode from 'keycode';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 350,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 4,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit/2}px ${theme.spacing.unit / 3}px .2rem 0`,
  },
  inputRoot: {
    flexWrap: 'wrap',
    fontSize:'.9rem',
    padding:'.3rem 0 .4rem 0',
    marginTop:'.4rem'
  },
});
function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
    multiline
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}
function getSuggestions(inputValue,suggestions) {
  let count = 0;

  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.title.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.title) > -1;
  return (
    <MenuItem
      {...itemProps}
      key={suggestion._id}
      selected={isHighlighted}
      
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.title}
    </MenuItem>
  );
}

class MultiChipSelect extends Component{

 state = {
    inputValue: '',
    selectedItem: [],
    initialized:false
   };

  handleKeyDown = event => {
    const { inputValue, selectedItem } = this.state;
    if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1),
      });
    }
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleChange = (item) => {
    let { selectedItem } = this.state;

    if (selectedItem.findIndex(itemIteration=>itemIteration._id == item._id) === -1) {
      selectedItem = [...selectedItem, item];
      this.props.input.onChange(selectedItem.map(item=>item._id));
    }

    this.setState({
      inputValue: '',
      selectedItem
    });
  };

  handleDelete = (item) => () => {
    this.setState(state => {
      const selectedItem = [...state.selectedItem];
      selectedItem.splice(selectedItem.indexOf(item), 1);
      this.props.input.onChange(selectedItem.map(item=>item._id));
      return { selectedItem };
    });
  };

  static getDerivedStateFromProps = (nextProps,prevState) =>{
    let {input: { value}} = nextProps;
    if(value || value === ''){
      value = value === ''  ? [] : value;
      if(typeof value[0] == 'string'){ //if its coming from form init
        value = nextProps.suggestions.filter(suggestion=>value.includes(suggestion._id));
      }
      return {selectedItem:value}
    }else{
      return null;
    }
  }


  render() {
    const { classes,suggestions } = this.props;
    const { inputValue, selectedItem } = this.state;
    return (
      <Downshift itemToString={item => (item ? item.title: "")} inputValue={inputValue} onChange={this.handleChange} selectedItem={selectedItem}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex,
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item._id}
                    tabIndex={-1}
                    label={item.title}
                    className={classes.chip}
                    onDelete={this.handleDelete(item._id)}
                  />
                )),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Add tags',
                id: 'integration-downshift-multiple',
              }),
            })}
            {isOpen ? (
              <Paper className={classes.paper} square>
          
                {getSuggestions(inputValue2,suggestions).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion }),
                    highlightedIndex,
                    selectedItem: selectedItem2,
                  })
                )}
              </Paper>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

export default withStyles(styles)(MultiChipSelect);