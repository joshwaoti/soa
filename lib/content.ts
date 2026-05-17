export const SOURCES = [
  { label: "PRD: outputs/sound-of-abundance-website-prd.html", url: "/outputs/sound-of-abundance-website-prd.html" },
  { label: "Implementation guide: outputs/sound-of-abundance-enhancement-guide.html", url: "/outputs/sound-of-abundance-enhancement-guide.html" },
  { label: "WorldPlaces public listing", url: "https://kenya.worldplaces.me/christian-churches-in-nairobi/55946888-rev-b-akama-and-sound-of-abundance-church.html" },
  { label: "Instagram: @revbakama", url: "https://instagram.com/revbakama/" },
  { label: "Facebook: Rev B Akama and Sound of Abundance Church", url: "https://facebook.com/RevBAkamaandSoundofAbundanceChurch/" }
];

export const ORG = {
  name: "Sound of Abundance Church International",
  shortName: "Sound of Abundance",
  abbreviation: "SOA",
  tagline: "The Lord City",
  vision: "The home where everything is available. Miracles happen. Deliverance. Prophetic. People are getting help.",
  location: "Kangundo Road, Opposite Saika Estate, Nairobi, Kenya",
  publicListingAddress: "Saika Naivas Stage Along Kangundo Road, Nairobi",
  email: "soachurch@gmail.com",
  phones: ["0727 438 728", "0728 864 344", "0705 899 608"],
  coordinates: "-1.29658,36.87955",
  facebook: "https://facebook.com/RevBAkamaandSoundofAbundanceChurch/",
  facebookId: "499567596867159",
  instagram: "https://instagram.com/revbakama/",
  twitter: "https://twitter.com/revbakama"
};

export const socialImages = {
  heroWorship: "/images/social/hero-worship.jpg",
  leadership: "/images/social/leadership.jpg",
  propheticMinistry: "/images/social/prophetic-ministry.jpg",
  sundayService: "/images/social/sunday-service.jpg",
  congregation: "/images/social/congregation.jpg",
  worshipMusic: "/images/social/worship-music.jpg",
  prayerAltar: "/images/social/prayer-altar.jpg",
  teachingCard: "/images/social/teaching-card.jpg",
  resourceCard: "/images/social/resource-card.jpg",
  mediaCard: "/images/social/media-card.jpg",
  familyMinistry: "/images/social/family-ministry.jpg",
  youthChild: "/images/social/youth-child.jpg",
  prayerFamily: "/images/social/prayer-family.jpg",
  propheticPortrait: "/images/social/prophetic-portrait.jpg",
  worshipStage: "/images/social/worship-stage.jpg",
  serviceInvitation: "/images/social/service-invitation.jpg",
  resourceStudy: "/images/social/ig-resource-study.jpg",
  communionCard: "/images/social/ig-communion.jpg",
  propheticAppointmentCard: "/images/social/ig-prophetic-appointment.jpg",
  welcomeCard: "/images/social/ig-welcome.jpg",
  serviceCard: "/images/social/ig-service-card.jpg",
  pastorWide: "/images/social/ig-pastor-wide.jpg",
  worshipClose: "/images/social/ig-worship-close.jpg",
  saxStage: "/images/social/ig-sax-stage.jpg",
  altarWide: "/images/social/ig-altar-wide.jpg",
  tambourineWide: "/images/social/ig-tambourine-wide.jpg",
  worshipWide: "/images/social/ig-worship-wide.jpg",
  fbWorshipBand: "/images/social/fb-worship-band.jpg",
  fbPrayerCrowd: "/images/social/fb-prayer-crowd.jpg",
  fbCongregation: "/images/social/fb-congregation.jpg",
  fbSaxophone: "/images/social/fb-saxophone.jpg"
};

export const heroImages = {
  worship: socialImages.heroWorship,
  freedom: socialImages.mediaCard,
  prophecy: socialImages.propheticPortrait,
  leadership: socialImages.leadership,
  appointment: socialImages.propheticMinistry,
  communion: socialImages.sundayService,
  family: socialImages.familyMinistry,
  children: socialImages.youthChild,
  resources: socialImages.resourceStudy,
  congregation: socialImages.fbCongregation,
  worshipBand: socialImages.fbWorshipBand,
  prayerCrowd: socialImages.fbPrayerCrowd,
  saxophone: socialImages.fbSaxophone,
  welcome: socialImages.welcomeCard,
  pastor: socialImages.pastorWide,
  serviceCard: socialImages.serviceCard,
  worshipClose: socialImages.worshipClose
};

export const services = [
  { day: "Sunday", title: "First Service", time: "8:30-10:30 AM EAT", image: socialImages.fbCongregation, position: "center 18%" },
  { day: "Sunday", title: "Second Service", time: "11:00 AM-1:00 PM EAT", image: socialImages.serviceCard, position: "center 16%" },
  { day: "Tuesday", title: "One-on-One Prophetic Appointments", time: "9:00 AM-12:00 PM EAT", image: socialImages.propheticAppointmentCard, position: "center 12%" },
  { day: "Wednesday", title: "Divine Encounter / Communion", time: "5:30-8:00 PM EAT", image: socialImages.communionCard, position: "center 14%" },
  { day: "Thursday", title: "Evening Service", time: "5:30-8:00 PM EAT", image: socialImages.worshipStage, position: "center 18%" },
  { day: "Friday", title: "Arrows of Fire Prayer", time: "5:30-8:00 PM EAT", image: socialImages.propheticPortrait, position: "center 8%" }
];

export const sermons = [
  { title: "Your Time for Freedom Has Come", speaker: "Rev B Akama", date: "Apr 2025", videoId: "x1DA8ias0kk", category: "Sunday Service", featured: true, image: socialImages.mediaCard, position: "center 12%" },
  { title: "How to Make Your Prophecy Come to Pass", speaker: "Rev B Akama", date: "Jan 2025", videoId: "lXh6PaKEkbk", category: "Sunday Service", featured: true, image: socialImages.propheticPortrait, position: "center 6%" },
  { title: "High Praise Atmosphere", speaker: "Rev B Akama", date: "SOA Worship", videoId: "HVYM0NHFm9w", category: "Worship", featured: true, image: socialImages.fbWorshipBand, position: "center 18%" },
  { title: "Prophetic Authority", speaker: "Rev B Akama", date: "SOA Teaching", videoId: "x4QwnW9Fzss", category: "Leadership", featured: false, image: socialImages.leadership, position: "center 8%" },
  { title: "One on One Prophetic Appointments", speaker: "Rev B Akama", date: "Tuesday Ministry", videoId: "CCHmHG0MUdQ", category: "Prophetic", featured: false, image: socialImages.propheticAppointmentCard, position: "center 12%" },
  { title: "Holy Communion Broadcast", speaker: "Rev B Akama", date: "Midweek Encounter", videoId: "yzjF7fu0eL8", category: "Communion", featured: false, image: socialImages.communionCard, position: "center 14%" },
  { title: "SOA TV Broadcast", speaker: "SOA TV KE", date: "Media Ministry", videoId: "13rzj-K2Kbk", category: "Broadcast", featured: false, image: socialImages.serviceInvitation, position: "center 10%" },
  { title: "High Praise and Impartation", speaker: "Rev B Akama", date: "Deliverance Service", videoId: "KQH5JfD0UOM", category: "Deliverance", featured: false, image: socialImages.fbSaxophone, position: "center 12%" }
];

export const ministries = [
  { numeral: "I", name: "Sunday Main Service", description: "High Praise worship, prophetic preaching, and in-person fellowship on Kangundo Road.", image: socialImages.fbPrayerCrowd, position: "center 16%" },
  { numeral: "II", name: "Tuesday Prophetic", description: "One-on-one prophetic appointments for counsel, prayer, and breakthrough.", image: socialImages.propheticAppointmentCard, position: "center 12%" },
  { numeral: "III", name: "Divine Encounter", description: "Midweek Holy Communion, teaching, and sustained prayer.", image: socialImages.communionCard, position: "center 14%" },
  { numeral: "IV", name: "Festival of Miracles", description: "Special miracle, healing, and deliverance gatherings.", image: socialImages.familyMinistry, position: "center 12%" },
  { numeral: "V", name: "SOA TV Broadcast", description: "Broadcast ministry carrying services beyond Nairobi through SOA TV and online streams.", image: socialImages.altarWide, position: "center 14%" },
  { numeral: "VI", name: "Arrows of Fire Prayer", description: "Evening prayer altar with urgent, focused intercession for families and destinies.", image: socialImages.pastorWide, position: "center 8%" }
];

export const resources = [
  { title: "Winning Invisible Battles", type: "Teaching Series", image: socialImages.sundayService, position: "center 10%", description: "Sunday teaching emphasis from SOA social media, calling believers into victory through faith and prayer." },
  { title: "Prophetic Declarations", type: "Digital Resource", image: socialImages.propheticAppointmentCard, position: "center 12%", description: "Shareable declarations and short teachings from Rev B Akama's social media ministry." },
  { title: "Books and Study Resources", type: "Resource Shelf", image: socialImages.resourceStudy, position: "center 16%", description: "Study notes, teaching resources, and faith-building material gathered from the church's public media stream." },
  { title: "The Lord City Updates", type: "Church Resource", image: socialImages.welcomeCard, position: "center 14%", description: "Service invitations and ministry updates for people attending or following from Nairobi and beyond." }
];

export const socials = [
  { name: "Facebook", handle: "Rev B Akama and Sound of Abundance Church", url: ORG.facebook, color: "#1877F2" },
  { name: "YouTube", handle: "Rev B Akama", url: "https://www.youtube.com/results?search_query=Rev+B+Akama+Sound+of+Abundance", color: "#FF0000" },
  { name: "Instagram", handle: "@revbakama", url: ORG.instagram, color: "#E1306C" },
  { name: "TikTok / Short-form", handle: "SOA clips", url: "https://www.tiktok.com/search?q=rev%20b%20akama", color: "#F5EEE4" },
  { name: "SOA TV", handle: "Available on DTV", url: "/sermons", color: "#D4AF37" }
];

export const giving = [
  { title: "General Offering & Ministry Support", paybill: "246656", account: "SOA" },
  { title: "SOA TV Broadcast Ministry", paybill: "4040519", account: "SOATV" }
];

export const testimonials = [
  { quote: "One day of favor is better than 100 years of labor.", by: "Rev B Akama" },
  { quote: ORG.vision, by: "Sound of Abundance Church" },
  { quote: "Victory begins where faith refuses to quit.", by: "Winning Invisible Battles" }
];

export const routeMeta = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/connect", label: "Connect" }
];

