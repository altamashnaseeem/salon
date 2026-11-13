export const salon = {
 name: 'Hair Court', phone: '+91 97119 70880', tel: '+919711970880', whatsapp: '919711970880',
 address: 'Galaxy Business Park, Sector 62, Noida', maps: 'https://www.google.com/maps?cid=12218895591521484952',
 url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hair-court-noida-concept.rubymackerel1.chatgpt.site',
 live: process.env.NEXT_PUBLIC_LIVE_SITE === 'true',
};
export const services = [
 {slug:'cut-and-style',name:'Cut & style',category:'Hair',image:'cut',description:'A fresh perspective. A shape that feels like you.',detail:'Explore a fresh cut, a soft restyle or a polished finish. Discuss your hair texture, routine and inspiration with the salon before deciding on your look.',items:['Haircut & finish','Blow-dry & styling','Restyling consultation']},
 {slug:'colour-and-dimension',name:'Colour & dimension',category:'Colour',image:'colour',description:'Subtle shifts. Beautiful dimension. Your signature shade.',detail:'From a subtle refresh to a bigger colour change, start with a consultation. The salon can advise on colour options, suitability, patch testing and a personalised quote.',items:['Colour consultation','Highlights & balayage enquiry','Root touch-up enquiry']},
 {slug:'care-and-repair',name:'Care & repair',category:'Care',image:'care',description:'A little time for your hair. A little time for yourself.',detail:'Talk through your scalp and hair concerns with the salon. Ask about available conditioning and hair-spa services and choose a treatment suited to your hair.',items:['Hair-spa enquiry','Conditioning consultation','Scalp-care consultation']},
 {slug:'occasion-styling',name:'Occasion styling',category:'Style',image:'occasion',description:'For the moments you want to remember.',detail:'Planning a celebration or special occasion? Share your reference images, outfit and event time with the salon to discuss styling availability and preparation.',items:['Event styling enquiry','Updo consultation','Bridal styling enquiry']},
];
export const faqs = [
 ['How do I request an appointment?', 'Choose a service and your preferred date in the enquiry form. Review your message, then send it to the salon on WhatsApp. Your appointment is confirmed only after the salon replies. You can also call directly.'],
 ['Where is the salon?', 'Hair Court Salon is listed at Galaxy Business Park, Sector 62, Noida. Use the directions link for the Google Maps listing and confirm the exact entrance with the salon.'],
 ['How much will my appointment cost?', 'Ask the salon for a personalised quote. Prices depend on the service, hair length, products and stylist. This concept does not publish unverified prices.'],
 ['Can I book a colour consultation?', 'You can request a colour consultation. Check treatment availability, patch-test requirements and suitability directly with the salon before your visit.'],
 ['Can I change my appointment?', 'Contact the salon directly to change or cancel a confirmed appointment. Ask about its current cancellation policy when booking.'],
 ['What are the opening hours?', 'Please call the salon or check its Google Maps listing for current hours before travelling.']
];
