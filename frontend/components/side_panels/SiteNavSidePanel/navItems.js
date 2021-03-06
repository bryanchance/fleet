export default (admin) => {
  const adminNavItems = [
    {
      icon: 'admin',
      name: 'Admin',
      location: {
        regex: /^\/admin/,
        pathname: '/admin/users',
      },
      subItems: [
        {
          icon: 'admin',
          name: 'Manage Users',
          location: {
            regex: /\/admin\/users/,
            pathname: '/admin/users',
          },
        },
        {
          icon: 'user-settings',
          name: 'App Settings',
          location: {
            regex: /\/admin\/settings/,
            pathname: '/admin/settings',
          },
        },
      ],
    },
  ];

  const userNavItems = [
    {
      icon: 'hosts',
      name: 'Hosts',
      location: {
        regex: /^\/hosts/,
        pathname: '/hosts/manage',
      },
      subItems: [],
    },
    {
      icon: 'query',
      name: 'Query',
      location: {
        regex: /^\/queries/,
        pathname: '/queries/manage',
      },
      subItems: [
        {
          icon: 'query',
          name: 'Manage Queries',
          location: {
            regex: /\/queries\/manage/,
            pathname: '/queries/manage',
          },
        },
        {
          icon: 'pencil',
          name: 'New Query',
          location: {
            regex: /\/queries\/new/,
            pathname: '/queries/new',
          },
        },
      ],
    },
    {
      icon: 'packs',
      name: 'Packs',
      location: {
        regex: /^\/packs/,
        pathname: '/packs/manage',
      },
      subItems: [
        {
          icon: 'packs',
          name: 'Manage Packs',
          location: {
            regex: /\/packs\/manage/,
            pathname: '/packs/manage',
          },
        },
        {
          icon: 'pencil',
          name: 'New Pack',
          location: {
            regex: /\/packs\/new/,
            pathname: '/packs/new',
          },
        },
      ],
    },
    {
      icon: 'help',
      name: 'Help',
      location: {
        regex: /^\/help/,
        pathname: 'https://github.com/kolide/fleet/blob/master/docs/README.md',
      },
      subItems: [],
    },
  ];

  if (admin) {
    return [
      ...userNavItems,
      ...adminNavItems,
    ];
  }

  return userNavItems;
};
