import { makeStyles } from '@mui/styles';

const userCardStyles = makeStyles(() => ({
  card: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: 16,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 'auto',
  },
  content: {
    textAlign: 'center',
  },
  divider: {
    margin: 16,
  },
  mapContainer: {
    height: 200,
    width: '100%',
  },
}));

export default userCardStyles;
