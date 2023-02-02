import css from "./userProfile.module.css";
import PropTypes from "prop-types";


export const UserProfile = ({ username, tag, location, avatar}) => {
	return <div className={css.description}>
    <img
      src={avatar}
      alt= "user avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
		<p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div> 
}

 UserProfile.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }

// username, tag, location, avatar