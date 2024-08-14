const commonTextStyles = {
  color: '#0019A7',
  fontFamily: 'Comfortaa',
  fontStyle: 'normal',
  fontWeight: '700',
};

const settingsStyles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  title: {
    top: 10,
    ...commonTextStyles,
    textAlign: 'center',
    fontSize: 24,
  },
  separator: {
    backgroundColor: '#0019A7',
    width: 351,
    height: 1,
    alignSelf: 'center',
    top: 40,
  },
  viewScroll: {
    top: 80,
    width: '100%',
    height: 420,
  },
  scrollView: {
    height: 'auto',
    width: 351,
    alignSelf: 'center',
  },
  notificationItem: {
    height: 20,
    width: 351,
    alignSelf: 'center',
    top: 10,
    flexDirection: 'row',
    marginBottom: 40,
  },
  notificationText: {
    ...commonTextStyles,
    width: 340,
    fontSize: 16,
  },
  arrowIcon: {
    width: 7,
    height: 15,
    flexShrink: 0,
  },
  locationItem: {
    height: 20,
    width: 351,
    alignSelf: 'center',
    top: 10,
    flexDirection: 'row',
    marginBottom: 40,
  },
  locationText: {
    ...commonTextStyles,
    width: 200,
    fontSize: 16,
  },
  locationValue: {
    color: '#383A39',
    width: 140,
    ...commonTextStyles,
    fontSize: 14,
  },
  modeItem: {
    height: 20,
    width: 351,
    alignSelf: 'center',
    top: 10,
    flexDirection: 'row',
    marginBottom: 40,
  },
  modeText: {
    ...commonTextStyles,
    fontSize: 16,
  },
  modeDescription: {
    color: '#383A39',
    ...commonTextStyles,
    fontSize: 14,
  },
  modeContainer: {
    height: 40,
    width: 340,
    alignSelf: 'center',
    top: 10,
    flexDirection: 'column',
    marginBottom: 20,
  },
  viewBottom: {
    flex: 4,
    top: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    height: 200,
  },
  logoutButton: {
    width: 331,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
  },
  deleteAccountText: {
    ...commonTextStyles,
    color: '#383A39',
    fontSize: 16,
    textAlign: 'center',
  },
  textLogoutButton: {
    top: -40,
    ...commonTextStyles,
    textAlign: 'center',
    fontSize: 18,
  },
  logoImage: {
    width: 300,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  versionText: {
    ...commonTextStyles,
    color: '#383A39',
    fontSize: 16,
    textAlign: 'center',
  },
};

export default settingsStyles;
