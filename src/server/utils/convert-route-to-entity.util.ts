const mapping: Record<string, string> = {
  admins: 'admin',
  companies: 'company',
  guests: 'guest',
  rentals: 'rental',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
