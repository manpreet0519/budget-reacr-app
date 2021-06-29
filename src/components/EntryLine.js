import React from 'react'
import {Segment, Grid,Icon} from 'semantic-ui-react'

function EntryLine({isExpense='false',title,value}){
    return(
        <Segment color={isExpense =='true'? 'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{title}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{value} </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}
export default EntryLine