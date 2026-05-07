import { useState, useEffect, useRef } from "react";
import { FaRegCommentDots, FaHeart, FaEye } from "react-icons/fa";
import logo from "./assets/logo.png";
import lightDesktop from "./assets/light-desktop.png";
import "./App.css";
import lightMobile from "./assets/light-mobile.png";
import suzume from "./assets/suzume.png";
import soloLeveling from "./assets/solo-leveling.png";
import attackOnTitan from "./assets/attack-on-titan.png";
import jujutsuKaisen from "./assets/jujutsu-kaisen.png";
import streamImg from "./assets/stream.png";
import postImage1 from "./assets/post-image-1.png";
import postImage2 from "./assets/post-image-2.png";
import statBadge from "./assets/12M_.png";
import demonslayer from "./assets/demonslayer.jpg";
import HXH from "./assets/HXH.jpg";
import blakclover from "./assets/blackclover.jpg";
import naruto from "./assets/naruto.jpg";
import heroCollageMobile from "./assets/hero-collage-mobile.png";
import heroCollageDesktop from "./assets/hero-collage-desktop.png";
import discordIcon from "./assets/icons/discord.png";
import instagramIcon from "./assets/icons/instagram.png";
import xIcon from "./assets/icons/x.png";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
import avatar4 from "./assets/avatar4.png";
import luffyAvatar from "./assets/avatars/luffy.jfif";
import nagamatzoAvatar from "./assets/avatars/nagamatzo.jfif";
import mostWatchedImage from "./assets/most-watched.png";
import recommendedImage from "./assets/recommended.png";
import wishlistImage from "./assets/wishlist.png";
import shareSection from "./assets/share-section.png";
import community from "./assets/community.png";
import leftCharacter from "./assets/painLeft.png";
import rightCharacter from "./assets/leviRight.png";
import { postcss } from "autoprefixer";
import { BiBorderBottom } from "react-icons/bi";


export default function App() {
  const navItems = ["Home", "About", "Community", "Socials", "Watch"];

const navRef = useRef(null);
const [indicatorStyle, setIndicatorStyle] = useState({});
const handleMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const parentRect = navRef.current.getBoundingClientRect();

  setIndicatorStyle({
    width: rect.width + "px",
    height: rect.height + "px",
    transform: `translateX(${rect.left - parentRect.left}px)`,
  });
};
  const [menuOpen, setMenuOpen] = useState(false);
  // Inside your App function
const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  // Run once on mount to be sure
  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // ... useEffect for resize remains the same
const styles = {
  app: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "black", 
    backgroundImage: `url(${isDesktop ? lightDesktop:lightMobile})`,
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    // 3. Keep it at the top so it doesn't stretch to the bottom
    backgroundSize:"1600px", 
    position: "relative",
    overflowX: "hidden",
  },
  // Floating Characters (Desktop Only)
  floatingCharLeft: {
    position: "fixed",
    left: "-30px",
    bottom: "0",
    height: "85vh",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0.9,
    display: isDesktop ? "block" : "none",
  },
  floatingCharRight: {
    position: "fixed",
    right: "-30px",
    bottom: "0",
    height: "90vh",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0.9,
    display: isDesktop ? "block" : "none",
  },

  pageContainer: {
    maxWidth: "1200px",
    margin: "0 ",
    padding: isDesktop ? "0 40px" : "0 20px",
    position: "relative",
    zIndex: 2, // Keeps content above floating characters
  },

  // --- NAVIGATION ---
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    top:"0px",
    zIndex:10,
    
  },
  
  logo: { 
    height: isDesktop ? "34px" : "21px",
     marginTop:isDesktop ? "42px":"2px",
  },
navItem: {
  position: "relative",
  padding: "10px 20px",
  cursor: "pointer",
  zIndex: 1,
  color: "#fff",
  fontWeight: 500,
},
navIndicator: {
  position: "absolute",
  top: 21,
  left: 0,
  borderRadius: "999px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(8px)",
  transition: "all 0.3s ease",
  zIndex: 0,
},
  navMenu: {
    display: "flex",
    alignItems:"center",
    borderRadius:"999px",
    color:"#FFFFFF38",
    gap:"32px",
    width:"fit-content",
    border:"1px solid rgba(255,255,255,0.3)",
    backdropFilter:"blur(12px)",
    padding:"21px 40px",
    position:"absolute",
    top:"42px",
    left:"50%",
    transform:"translateX(-50%)",
    zIndex:10
  },
  navLink: { color: "#fff", fontSize: "20px", cursor: "pointer", fontWeight: "500", fontFamily:"Satoshi Variable"},
hamburger: {
  fontSize: "24px",
  color: "#fff",
  cursor: "pointer",
  height:"21px",
},
  // --- HERO SECTION ---
heroWrapper: {
  display: "flex",
  // If isDesktop is true, it MUST be "row". If false, "column".
  flexDirection: isDesktop ? "row" : "column", 
  alignItems: "center",
  justifyContent: "space-between",
  gap: isDesktop ? "60px" : "30px",
  marginTop: isDesktop ? "-110px" : "40px",
},
 heroLeftDesktop: {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "20px",
  transform:"scale(1.4)",
  transformOrigin:"top left",
  marginbottom:"100px"
},
  heroLeftMobile: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",   // center everything
  textAlign: "center",
  padding: "0 16px",      // side spacing
  gap: "16px",            // consistent spacing
},

  h1: {
    fontSize: "56px",
    lineHeight: 1.7,
    fontWeight: 500,
    marginBottom: "16px",
    fontFamily:"Poppins",
    letterSpacing: -3,
    colour:"#FFFFFF",
  },
  heroP: {
    fontSize: isDesktop ? "18px":"12px",
    fontWeight:700,
    color: "#FFFFFFCC",
    lineHeight: "100%",
    fontFamily:"Plus Jakarta Sans",
    letterSpacing:"3%",
    marginBottom: "30px",
    maxWidth: isDesktop ? "500px" : "300px",
    margin: "0 auto 28px", 
  },
heroRight: {
  position: "relative",
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: "100px", // 👈 THIS pushes it below navbar
},
collageFade: {
  position: "absolute",
  inset:0,

  pointerEvents: "none",
  background: `
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.9) 0%,
      rgba(0,0,0,0.4) 10%,
      rgba(0,0,0,0) 25%,
      rgba(0,0,0,0.4) 75%
      rgba(0,0,0,0.9) 100%
    )
  `,
  zIndex: 2,
},
collageFadeMobile: {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background: `linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0) 25%,
    rgba(0,0,0,0) 75%,
    rgba(0,0,0,1) 100%
  )`,
},

heroCollageImg: {
  width: "120%",
  height: "auto",
  maxWidth: isDesktop ? "800px" : "450px", // Larger limit for the desktop collage
  objectFit: "cover",
  // Optional: Add a subtle entrance animation
  animation: "fadeUp 1s ease-out",
  position:"relative",
  zIndex:1,
  transform:"translateX(120px)"

},
  // --- MARQUEE ---

streamImg:{
  width:"525px",
  height:"80px",
  
},

  // --- FEATURES ---
  section: { padding: isDesktop ? "100px 0px" : "60px 0",
    justifyContent:"center"
   },
  sectionTitle: { fontWeight: 700, marginBottom: "15px", textAlign: "center" },
  sectionSub: {
    color: "#FFFFFFCC",
    textAlign: "center",
    maxWidth: "700px",
    margin: "25px auto 50px",
    lineHeight: 1.6,
    fontSize:"18px"
  },
  features:{
    color:"#FFFFFF",
    fontSize:"40px",
    fontWeight:600,
    fontFamily:"Plus Jakarta Sans",
    textAlign:"center",
    letterSpacing:"-3%",
    marginTop: "120px",
  },

  featuresRow:{
    display:"flex",
    flexDirection: isDesktop ? "row" : "column",
    justifyContent:"center",
    alignItems:"center",
    gap: isDesktop ? "40px": "20px",
  },


  featureGrid: {
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    gap: "25px",
    justifyContent: "center",
  },
  featureCardImg: { width: "100%", maxWidth: isDesktop ? "360px" : "300px", borderRadius: "15px" },

  // --- COMMUNITY FEED ---
 feedPost: {
  backgroundColor: "#111",
  padding: "16px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
},

feedGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
  padding: "0 40px",
},

feedMobile: {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
},

feedColumn: {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
},
postHeader: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
},

postUser: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
},

postAvatar: {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
},

postUsername: {
  fontWeight: "bold",
  color: "#fff",
},

postHandle: {
  fontSize: "12px",
  color: "#888",
},

followBtn: {
  background: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "999px",
  padding: "6px 14px",
  cursor: "pointer",
},

postText: {
  color: "#aaa",
  fontSize: "14px",
  lineHeight: "1.5",
},

postImageWrapper: {
  width: "100%",
},
postImg: {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "16px",
},

videoThumb: {
  position: "relative",
},

videoThumbImg: {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "16px",
},


playOverlay: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "40px",
  color: "white",
},
shareImageWrap:{
  display:"flex",
  justifyContent:"center",
  marginBottom:"20px",
},
  // --- FOOTER ---
  footer:{
  justifyContent:"center",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  textAlign:"center",
  marginTop:"60px",
  padding:"40px 20px",
  },
  footerCta: { padding: "120px 0 60px", textAlign: "center" },
  footerH2: { 
    fontWeight: 600,
     marginTop: "20px",
     color:"#ffffff",
     fontSize:"56px",
     fontFamily:"Plus Jakarta Sans"
     },
     footerP:{
      color:"rgba(255,255,255,0.7",
      fontSize:"18px",
      maxWidth:"600px",
      marginTop:"-20px"
     },
  footerLogoImg: { width: "100%", maxWidth: isDesktop ? "900px" : "300px", opacity:0.23, marginTop: "10px" },
  logoWrap:{
    marginTop:"50px",
    display:"flex",
    justifyContent:"center",
    marginBottom:"-80px"
  },


  // --- REUSABLE COMPONENTS ---

  badge: {marginBottom:"20px",
    display:"flex",
 },
 badgeimg:{
  height:isDesktop ? "51px": "67px",
  width:"auto",
  display:"block",
  marginBottom:"10px",
 },
 h2:{
  fontFamily:"poppins",
  fontWeight:500,
  fontSize:"30px",
  color:"#FFFFFF",
  letterSpacing: "-3%",
  marginBottom:"0px",
 },
 
  ctaGroup: { display: "flex", flexDirection: isDesktop ? "row" : "row", gap: "10px" },
  btnPrimary: {
    background: "#f0ede8", color: "#0a0a0c", padding: "15px 30px",
    borderRadius: "30px", fontWeight: 700, border: "none", cursor: "pointer",  boxShadow:"inset 0 0 8px rgba(247, 247, 247, 0.2)",
  },
  btnPrimaryHover:{
    transform:"translateY(-2px)",
    boxShadow:"0 10px 25px rgba"
  },
  btnGhost: {
    backgroundColor:"#0A0A0A", 
    color: "#fff", 
    padding: "10px 20px",
    borderRadius: "999px", 
    display:"inline-flex",
    gap:"4px",
    border: "1px solid rgba(255, 255, 255, 0.08)", 
    boxShadow:"inset 0 4px 16px rgba(255, 255, 255, 0.15)",
    fontSize:"14px",
    cursor: "pointer",
    alignItems:"center"
  },
  btnGhostHover:{
    boxShadow: "inset 0 4px 20px rgba(255,255,255,0.25)"
  },
  shareImage:{
    width:"570px",
    height:"115px",
    textAlignt:"center"
  },
  statBanner: { order:isDesktop ? "unset": 3,
     marginTop: "20px",display:"flex",justifyContent:"flex-start",
   },
  statImg: { width: "180px",
   },
  socialRow: {
     display: "flex",
     justifyContent: "center",
    gap: "20px",
   marginTop: "25px" },
  socialIcon: { 
    width: "68px",
    height: "68px", 
    opacity: 0.8 },
    cursor:"pointer",
    transition:"transform 0.2s ease",

footerWrapper: {
  position: "relative",
  padding:"0",
  margin:"0",
},

leftCharacter: {
  position: "absolute",
  left: "0",
  bottom: "0",
  width: "200px",
  height:"500px",

},

rightCharacter: {
  position: "absolute",
  right: "-90px",
  bottom: "0",
  width: "200px",
  height:"500px",
},
   
}
  return (
    <div style={styles.app}>
      <div style={styles.pageContainer}>

      {/* 1. HEADER / NAV */}
      <header style={styles.navbar}>
        <img src={logo} alt="Animeverse" style={styles.logo} />
        {isDesktop ? (
         <nav style={styles.navMenu} ref={navRef}>
  
  {/* MOVING BACKGROUND */}
  <div style={{ ...styles.navIndicator, ...indicatorStyle }} />

  {/* MENU ITEMS */}
  {["Home", "About", "Community", "Socials", "Watch"].map((item) => (
    <div
      key={item}
      style={styles.navItem}
      onMouseEnter={handleMove}
    >
      {item}
    </div>
  ))}

</nav>
        ) : (
          <div style={styles.hamburger}>☰</div>
        )}
      </header>

      {/* 2. MAIN CONTENT */}
      <main style={styles.mainContainer}>
        
        {/* HERO SECTION */}
        <section style={styles.heroWrapper}>

  {/* LEFT SIDE */}
  <div style={isDesktop ? styles.heroLeftDesktop : styles.heroLeftMobile}>
    
    <div style={styles.badge}>
      <img src={community} alt="Community" style={styles.badgeimg}/>
    </div>

    <h2 style={styles.h2}>Don't Just Watch. Belong</h2>

    <p style={styles.heroP}>
      Experience your favorite series alongside a global community. Stream the latest hits, join live watch parties, and find your nakama in the ultimate anime social hub.
    </p>

    <div style={styles.ctaGroup}>
      <button style={styles.btnPrimary}>Sign Up →</button>
      <button style={styles.btnGhost}>Visit Community</button>
    </div>

    <div style={styles.statBanner}>
      <img src={statBadge} alt="12M+ Users" style={styles.statImg}/>
    </div>

  </div>

  {/* RIGHT SIDE (MOVE THIS OUT) */}
  <div style={styles.heroRight}>
    <div style={isDesktop ? styles.collageFade : styles.collageFadeMobile} />
    
    <img
      src={isDesktop ? heroCollageDesktop : heroCollageMobile}
      alt="Anime collage"
      style={styles.heroCollageImg}
    />
  </div>

</section>

        {/* MARQUEE */}
<div className="scroller">
  <div className="scroller-inner">
    {Array(10).fill("ANIME").map((item, i) => (
      <span key={i}>{item}</span>
    ))}
    {Array(10).fill("ANIME").map((item, i) => (
      <span key={"dup-" + i}>{item}</span>
    ))}
  </div>
</div>

        {/* FEATURES */}
        <section style={styles.features}>
           <h2>Everything You Need in One Multiverse</h2>
                  <p style={styles.sectionSub}>
          Animeverse isn't just a player; it's a living, breathing community. Build your profile,
          showcase your "All-Time Top 10," and follow creators who share your taste.
        </p>
</section>

           {/* Your cards can now be wrapped in a flex container */}
  <div style={isDesktop ? styles.featuresRow : styles.featuresColumn}>

  {/* CARD 1 */}
  <div style={styles.featureCardImage}>
     <img src={recommendedImage} style={styles.featureCardImg} />
  </div>

  {/* CARD 2 */}
  <div style={styles.featureCardImage}>
   <img src={mostWatchedImage} style={styles.featureCardImg} />
  </div>

  {/* CARD 3 */}
  <div style={styles.featureCardImage}>
    <img src={wishlistImage} style={styles.featureCardImg} />
  </div>

</div>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
  <img
    src={streamImg}
    alt="Stream your favourite series"
    style={{
      width: 370,
      height: "69px",
    }}
  />
</div>

        {/* FEED */}
     <section style={styles.feed}>

  <div style={isDesktop ? styles.feedGrid : styles.feedMobile}>

    {/* LEFT SIDE */}
    <div style={styles.feedColumn}>

      {/* Post 1 */}
      <div style={styles.feedPost}>
        <div style={styles.postHeader}>
          <div style={styles.postUser}>
            <img src={luffyAvatar} alt="Luffyfan_88" style={styles.postAvatar} />
            <div>
              <div style={styles.postUsername}>Luffy</div>
              <div style={styles.postHandle}>@Luffyfan_88</div>
            </div>
          </div>
          <button style={styles.followBtn}>Follow</button>
        </div>

        <p style={styles.postText}>
          These guys really said "watch this" and dropped the hardest 2 minutes of animation i've seen all year. i've rewatched this fight five times already. Animeverse we need a "Replay frame" btton for this specific scene because WOW🤯.    </p>

        <div style={styles.postImageWrapper}>
          <img src={postImage1} alt="Post" style={styles.postImg} />
        </div>

        <div className="postStats">
          <div className="statItem">
            <FaRegCommentDots />
            <span>600k</span>
          </div>
          <div className="statItem">
            <FaHeart />
            <span>1.5M</span>
          </div>
          <div className="statItem">
            <FaEye />
            <span>2.3M</span>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div style={styles.feedColumn}>

      {/* Post 2 */}
      <div style={styles.feedPost}>
        <div style={styles.postHeader}>
          <div style={styles.postUser}>
            <img src={nagamatzoAvatar} alt="nagamato" style={styles.postAvatar} />
            <div>
              <div style={styles.postUsername}>Nagato</div>
              <div style={styles.postHandle}>@nagamato</div>
          </div>
          </div>
          <button style={styles.followBtn}>Follow</button>
        </div>

        <p style={styles.postText}>
          Just finished Episode 10 and I'm staring at a blank screen. How am i supposed to go to work tommorow acting like my soul wasn't just ripped out?😢 The animatio during that final sequence was literally peak.If you haven't started this yet bring tissues. Lots of them.
        </p>

        <div style={styles.videoThumb}>
          <img src={postImage2} alt="Video" style={styles.videoThumbImg} />
          <div style={styles.playOverlay}>▶</div>
        </div>

        <div className="postStats">
          <div className="statItem">
            <FaRegCommentDots />
            <span>1.3k</span>
          </div>
          <div className="statItem">
            <FaHeart />
            <span>12.5k</span>
          </div>
          <div className="statItem">
            <FaEye />
            <span>1.1M</span>
          </div>
        </div>

      </div>
    </div>

  </div>

</section>
      </main>

      {/* 3. FOOTER */}
      <div style={styles.footerWrapper}>
     <img src={leftCharacter} style={styles.leftCharacter} />
     <img src={rightCharacter} style={styles.rightCharacter} />
      <footer style={styles.footer}>
         <div style={styles.shareImageWrap}> 
          <img src={shareSection} alt="Share section" style={styles.shareImage}/>
        </div>
           <h2 style={styles.footerH2}>What are you waiting for?<br />Join now, it's free!</h2>
        <p style={styles.footerP}>
          Animeverse is the ultimate destination for the modern fan. Watch, react, and connect
          in a world built by otakus, for otakus.
        </p>
        <button style={styles.btnPrimary}>Sign Up Free →</button>
    <div style={styles.socialRow}>
  <img src={discordIcon} alt="Discord" style={styles.socialIcon} />
  
  <img src={instagramIcon} alt="Instagram" style={styles.socialIcon} />
  <img src={xIcon} alt="X" style={styles.socialIcon} />
</div>
<div style={styles.logoWrap}>
  <img src={logo} alt="Animeverse" style={styles.footerLogoImg} />
</div>
      </footer>
      </div>
    </div>
     </div>
     
  );
}

  <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Sora:wght@300;400;600;700&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0a0a0c; color: #fff; font-family: 'Sora', sans-serif; overflow-x: hidden; }

  /* ANIMATIONS */
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes floatChar {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  /* Apply float to the anime characters */
  img[style*="position: fixed"] {
    animation: floatChar 5s ease-in-out infinite;
  }

  /* RESPONSIVE TYPOGRAPHY & HOVERS */
  
  /* Mobile Defaults */
  .responsive-h1 { font-size: 38px !important; }
  .responsive-h2 { font-size: 32px !important; }
  .responsive-footer-h2 { font-size: 34px !important; }

  /* Desktop Overrides (1024px +) */
  @media (min-width: 1024px) {
    .responsive-h1 { font-size: 72px !important; }
    .responsive-h2 { font-size: 56px !important; }
    .responsive-footer-h2 { font-size: 64px !important; }
    
    .card-hover:hover {
      transform: translateY(-15px);
      transition: transform 0.3s ease;
    }

    .feed-post-card:hover {
      background: #1c1c21 !important;
      border-color: rgba(255,255,255,0.2) !important;
      transition: all 0.3s ease;
    }
  }

  /* Custom scrollbar for horizontal feed on mobile */
  div[style*="overflow-x: auto"]::-webkit-scrollbar {
    display: none;
  }
    
`}
<style>{`
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
`}</style>
</style>
