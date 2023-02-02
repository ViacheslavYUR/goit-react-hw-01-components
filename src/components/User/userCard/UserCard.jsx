import css from './userCard.module.css';
import user from '../../../data/user.json';
import PropTypes from 'prop-types';

import { UserInfo } from "../userInfo/UserInfo";
import { UserProfile } from 'components/User/userProfile/UserProfile';

export const UserCard = () => {
//   console.log(user);
  return (
    <div className={css.profile}>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <UserInfo stats={user.stats} />
    </div>
  );
};
UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};