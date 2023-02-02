import PropTypes from 'prop-types';

import css from './friendList.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ avatar, name, isOnline, id }) => {
    const fullStatus = isOnline ? `${css.status} ${css.active}` : css.status;
    return (
      <li key={id} className={css.item}>
        <span className={fullStatus}></span>
        <img
          className={css.avatar}
          src={avatar}
          alt={`${name} avatar`}
          width="48"
        />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
  return <ul className={css.list}>{elements}</ul>;
};

export default FriendList;

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
