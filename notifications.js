const showNotificationsButton = document.getElementById('ndNotification');
const notificationSidebar = document.querySelector('.notification-sidebar');

let isSidebarVisible = false;

showNotificationsButton.addEventListener('click', () => {
    if (isSidebarVisible) {
        notificationSidebar.style.transform = 'translateX(0)';
    } else {
        notificationSidebar.style.transform = 'translateX(-300px)';
    }

    isSidebarVisible = !isSidebarVisible;
});
