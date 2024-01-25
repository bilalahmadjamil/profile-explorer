import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    textFieldRoot: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#f0f0f0',
        },
    },
    textFieldInput: {
        padding: '8px',
        fontSize: '14px',
    },
    textFieldLabel: {
        color: '#333',
        fontSize: '14px',
        '&.Mui-focused': {
            color: '#007bff',
        },
    },
    filterControlsContainer: {
        marginBottom: '16px', // Add margin bottom in pixels
    },
    textFieldLabelFocused: {
        color: '#2196f3', // Change to your preferred color
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // You can adjust this to fit your layout
    },
}));

export default useStyles;
