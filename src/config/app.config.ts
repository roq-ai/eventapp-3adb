interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Event Organizer'],
  customerRoles: ['Customer'],
  tenantRoles: ['Event Organizer', 'Operations Staff', 'Virtual Buddy', 'Personal Trainer'],
  tenantName: 'Team',
  applicationName: 'EventApp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View events', 'Book events', 'Manage personal bookings', 'Update personal information'],
  ownerAbilities: ['Manage event', 'Create team', 'Manage booking', 'Update event location'],
  getQuoteUrl: 'https://app.roq.ai/proposal/95ee5e8e-4ab7-4c45-9c96-cc7bb0c488dc',
};
