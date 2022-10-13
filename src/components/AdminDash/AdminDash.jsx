import React from 'react';
import './AdminDash.css';
import '@fontsource/roboto';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function AdminDash() {

    const history = useHistory();

    return (
        <div className="dash">
            <h1>Admin Dashboard</h1>
            <h1>Review</h1>

            <Button className="link" variant="contained" onClick={() => history.push('/eventReview')}>
                Review Events
            </Button>

            <Button className="link" variant="contained" onClick={() => history.push('/userStoriesReview')}>
                Review Stories
            </Button>

            <h2>Create</h2>

            <Button className="link" variant="contained" color="success" onClick={() => history.push('/resourceForm')}>
                Add Resource
            </Button>

            <Button className="link" variant="contained" color="success" onClick={() => history.push('/sponsorForm')}>
                Add Sponsor
            </Button>

            <Button className="link" variant="contained" onClick={() => history.push('/resourceReview')}>
                Review Resources
            </Button>

            <Button className="link" variant="contained" onClick={() => history.push('/sponsorReview')}>
                Review Sponsors
            </Button>

        </div>
    );
}

export default AdminDash;
