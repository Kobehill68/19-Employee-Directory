/* eslint-disable react/style-prop-object */
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbotronheader = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className='display-3'>Employee Directory</h1>
                    <p className='lead'>
                        Welcome to the Employee Directory for AIRSHOTS.LLC. Please
                        feel free to look at are employee's.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbotronheader;