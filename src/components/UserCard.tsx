import { Card, CardContent, Grid } from '@mui/material';
import UserAvatar from './userCardConmponents/UserAvatar';
import UserInfo from './userCardConmponents/UserInfo';
import GoogleMap from './userCardConmponents/GoogleMap';
import userCardStyles from '../pages/styles/userCardStyles';

interface UserCardProps {
    user: {
        picture: {
            large: string;
        };
        name: {
            title: string;
            first: string;
            last: string;
        };
        email: string;
        dob: {
            age: number;
        };
        gender: string;
        location: {
            city: string;
            state: string;
            country: string;
            coordinates: {
                latitude: string;
                longitude: string;
            };
        };
        nat: string;
        phone: string;
    };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const classes = userCardStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <UserAvatar imageUrl={user.picture.large} avatarClass={classes.avatar} />
                <UserInfo
                    title={user.name.title}
                    first={user.name.first}
                    last={user.name.last}
                    email={user.email}
                    age={user.dob.age}
                    gender={user.gender}
                    location={user.location}
                    nat={user.nat}
                    phone={user.phone}
                />
                <Grid container justifyContent="center">
                </Grid>
                <GoogleMap latitude={user.location.coordinates.latitude} longitude={user.location.coordinates.longitude} />
            </CardContent>
        </Card>
    );
};

export default UserCard;
