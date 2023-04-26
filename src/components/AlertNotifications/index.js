// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const returnSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="fill-icon" />
      <div className="notification-text">
        <h1 className="success-text">Success</h1>
        <p className="alert-content">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const returnErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="notification-text">
        <h1 className="error-text">Error</h1>
        <p className="alert-content">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const returnWarningNotification = () => (
    <Notification>
      <MdWarning className="warning-icon" />
      <div className="notification-text">
        <h1 className="warning-text">Warning</h1>
        <p className="alert-content">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const returnInfoNotification = () => (
    <Notification>
      <MdInfo className="info-icon" />
      <div className="notification-text">
        <h1 className="info-text">Info</h1>
        <p className="alert-content">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="alert-heading">Alert Notifications</h1>
        {returnSuccessNotification()}
        {returnErrorNotification()}
        {returnWarningNotification()}
        {returnInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
