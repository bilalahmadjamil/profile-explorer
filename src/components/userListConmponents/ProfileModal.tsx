// ProfileModal.tsx
import React from 'react';
import { Modal, Backdrop } from '@mui/material';
import UserCard from '../UserCard'; // Adjust the import path as needed


interface UserData {
    login: {
        uuid: string;
    };
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
    };
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
}
interface ProfileModalProps {
    open: boolean;
    onClose: () => void;
    selectedUser: UserData | null;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, selectedUser }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Backdrop open={open} onClick={onClose}>
                <div>
                    {selectedUser && <UserCard user={selectedUser} />}
                </div>
            </Backdrop>
        </Modal>
    );
};

export default ProfileModal;
