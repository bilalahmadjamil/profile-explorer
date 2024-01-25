import { Typography, Grid, Divider } from '@mui/material';
import NationalityFlag from './NationalityFlag';
import userCardStyles from '../../pages/styles/userCardStyles';

interface UserInfoProps {
    title: string;
    first: string;
    last: string;
    email: string;
    age: number;
    gender: string;
    location: {
        city: string;
        state: string;
        country: string;
    };
    nat: string;
    phone: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ title, first, last, email, age, gender, location, nat, phone }) => {
    const classes = userCardStyles();

    return (
        <>
            <Typography variant="h6" component="div" gutterBottom>
                {`${title} ${first} ${last}`}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {email}
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        Age: {age}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        Gender: {gender}
                    </Typography>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="body2" color="textSecondary">
                Location: {`${location.city}, ${location.state}, ${location.country} `}
                <NationalityFlag nationalityCode={nat} />
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Phone: {phone}
            </Typography>
        </>
    );
};

export default UserInfo;
