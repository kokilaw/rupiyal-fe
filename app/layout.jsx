import '@styles/globals.css';

export const metadata = {
  title: 'lkr.exchange - Coming Soon!',
  description: 'Calculate currency and foreign exchange rates related to Sri Lankan Rupee (LKR) with the free lkr.exchange Currency Converter. Compare the rates between Sri Lankan banks and other financial institutes.',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">{children}</main>
    </body>
  </html>
);

export default RootLayout;
