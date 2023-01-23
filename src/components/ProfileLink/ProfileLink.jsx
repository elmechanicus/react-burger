import { Link, useMatch } from "react-router-dom";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import profileLinkStyles from './profileLinkStyles.module.css';

function ProfileLink({children, to}) {

  const match = useMatch(to)

    return (
      <>
        <Link to={to} style={{color: match ? 'var(--text-inactive-color)' : 'var(--text-primary-color)'}}
            className={profileLinkStyles.none__line}>
          <div className={`${profileLinkStyles.nav__link} pl-5 pr-5 pt-4 pb-4`}>
            <ProfileIcon type={match ? 'secondary' : 'primary'} />
            <p className='text text_type_main-default ml-2'>{children}</p>
          </div>
        </Link>
      </>
    )
  }
export {ProfileLink};