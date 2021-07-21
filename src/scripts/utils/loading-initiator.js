const LoadingInitiator = {
  init({ window }) {
    window.addEventListener('beforeunload', () => {
      this.document.body.className = 'loading-page';
    }, false);

    window.addEventListener('load', () => {
      const status = document.getElementById('networkStatus');

      const updateOnlineStatus = () => {
        const state = navigator.onLine ? 'online' : 'offline';

        status.className = state;
        status.innerHTML = `Your status is: ${state}`;
      };

      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    });
  },
};

export default LoadingInitiator;
