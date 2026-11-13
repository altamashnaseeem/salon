import type { Metadata } from 'next';
import './globals.css';
import { salon } from '@/lib/salon';
export const metadata: Metadata = {
 metadataBase: new URL(salon.url), title: {default:'Hair Court Salon | Hair & Styling in Sector 62, Noida',template:'%s | Hair Court Salon, Noida'},
 description:'Discover Hair Court Salon at Galaxy Business Park, Sector 62, Noida. Explore hair styling inspiration, request a consultation and find directions.',
 alternates:{canonical:'/'}, robots:{index:salon.live,follow:salon.live},
 openGraph:{type:'website',locale:'en_IN',siteName:'Hair Court Salon',title:'Hair Court — A little change. A whole new feeling.',description:'Hair, colour and a moment for yourself. Sector 62, Noida.',images:[{url:'/images/hero.jpg',width:1400,height:1800,alt:'Editorial hair styling inspiration'}]},
 twitter:{card:'summary_large_image'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en-IN"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>}
