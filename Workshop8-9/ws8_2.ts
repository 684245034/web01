interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Email Notification: ${message}`);
    }
}

class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`SMS Notification: ${message}`);
    }
}

class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Push Notification: ${message}`);
    }
}

const notifications: Notification[] = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()
];

const message = "Hello Everyone";

notifications.forEach(notification => {
    notification.send(message);
});