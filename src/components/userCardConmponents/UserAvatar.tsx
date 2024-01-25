import { Avatar } from '@mui/material';

interface UserAvatarProps {
  imageUrl: string;
  avatarClass?: string; 
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, avatarClass }) => (
  <Avatar alt="User Avatar" src={imageUrl} className={avatarClass} />
);

export default UserAvatar;
