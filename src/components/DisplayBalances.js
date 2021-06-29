import React from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance';
function DisplayBalances(){
    return(
        <Segment text-Align='center'>
        <Grid  columns={2} divided>
          <Grid.Row>
           <Grid.Column>
            <DisplayBalance size='tiny' color='green' textAlign='left'
            label='Income :' value='1,045.50'></DisplayBalance>
             
             </Grid.Column> 
           <Grid.Column>
           <DisplayBalance size='tiny' color='red' textAlign='left'
            label='Expenses:' value='623.50'></DisplayBalance>
           
             </Grid.Column> 
          </Grid.Row>
        </Grid>
        </Segment>
    );
}
export default DisplayBalances