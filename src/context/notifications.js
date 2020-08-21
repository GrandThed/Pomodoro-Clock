export const notifications = (notificationState, text) => {
    if (notificationState) {
        const notification = new Notification(text)
        setTimeout(notification.close(), 1000)
    }
}
