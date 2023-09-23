const mapping: Record<string, string> = {
  bookings: 'booking',
  events: 'event',
  'event-locations': 'event_location',
  'personal-trainers': 'personal_trainer',
  teams: 'team',
  'trainer-specializations': 'trainer_specialization',
  users: 'user',
  'user-preferences': 'user_preferences',
  'virtual-buddies': 'virtual_buddy',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
