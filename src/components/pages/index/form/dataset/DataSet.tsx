import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, TextField, Typography } from '@material-ui/core';

import { connector } from './Redux';
import { TFormProps } from './Types';
import { styles } from './Styles';
import Special from './inputs/specialDataset';
import Random from './inputs/randomDataset';

class DataSet extends React.Component<TFormProps> {
    constructor(props: TFormProps) {
        super(props);
        this.searchedOnChange = this.searchedOnChange.bind(this);
    }

    componentWillUnmount = async () => {
        if (this.props.searched == '')
            this.props.actions.changeSearched(null);
    }

    searchedOnChange = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const re = /^-?\d{1,7}(\.\d{1,10})?$/;

        if (event.target.value.length < 1)
            this.props.actions.changeSearched(null);
        else if (!re.exec(event.target.value))
            this.props.actions.changeSearched('');
        else
            this.props.actions.changeSearched(event.target.value);
    }

    render() {

        const { classes, specialDataset, randomDataset, selectedAlgorithm, searched, lang } = this.props;

        const { forms } = require(`@constants/lang/${lang}.tsx`);

        const specialInput = (
            <Box className={classes.root}>
                <Special />
            </Box>
        );

        const randomInput = (
            <Box className={classes.root}>
                <Random />
            </Box>
        );
        
        const searchInput = selectedAlgorithm.endPoint.split('/')[0] == 'search' ?
            (
                <TextField
                    label={forms.datasetFormInputForSearchPlaceHolder}
                    variant="outlined"
                    placeholder="16"
                    name="searched"
                    onChange={this.searchedOnChange}
                    defaultValue={searched}
                    error={searched == ''}
                    className={classes.searchedInput}
                    helperText={forms.datasetFormInputForSearchHelperText}
                />
            ) : undefined

        const { switchDataset } = this.props;

        return (
            <React.Fragment>
                {
                    switchDataset ?
                        <Grid xs={12} md={8} item>
                            {specialInput}
                            {searchInput}
                        </Grid>
                        :
                        <Grid>
                            {randomInput}
                            {searchInput}
                        </Grid>
                }
            </React.Fragment>
        )
    }
}

export default connector(withStyles(styles)(DataSet));

