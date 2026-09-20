import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.meekamoodz.zoomcam30x',
  appName: 'ZoomCam 30X',
  webDir: 'www',
  server: {
    url: 'https://zoomcam-30x-xrldta.v2.appdeploy.ai/',
    cleartext: false
  }
};

export default config;
